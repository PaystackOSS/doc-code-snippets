const fs = require('fs');
const path = require('path')
const yaml = require('js-yaml');

function createBaseFolder() {
  const folderName = 'dist';

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
}

function getAllFiles(parentDir, directoryContent) {
  const children = fs.readdirSync(parentDir);
  directoryContent = directoryContent || []

  children.forEach((child) => {
    if (fs.statSync(parentDir + "/" + child).isDirectory()) {
      directoryContent = getAllFiles(parentDir + "/" + child, directoryContent)
    } else {
      if (path.extname(child) === ".yml" || path.extname(child) === ".yaml") {
        directoryContent.push({
          config: child,
          directory: parentDir
        })
      }
    }
  })

  return directoryContent
}

function readFiles(config, directory) {
  let languages = []
  let content = ""
  
  try {
    languages = yaml.load(fs.readFileSync(path.join(directory, config), 'utf8')).languages
  } catch (e) {
    console.log(e);
  }

  languages.forEach((language) => {
    try {
      const data = fs.readFileSync(path.join(directory, `index.${language}`), 'utf8');
      content = content + "\n\n" + `const ${language} = \`${data}\``
    } catch (err) {
      console.error(err);
    }
  })

  content = content + "\n\n" + `export {${languages.join(", ")}}`
  return content
}

function writeToFile(config, directory) {
  const ancestor = directory.split("/")
  const filename = ancestor[ancestor.length - 1] + ".js"
  const parent = "dist/" + ancestor.slice(0, ancestor.length - 1).join("/")

  // create parent folder
  try {
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }

  const content = readFiles(config, directory)

  // create and write to file 
  try {
    fs.writeFileSync(path.join(parent, filename), content);
  } catch (err) {
    console.error(err);
  }
}

function buildSnippets() {
  createBaseFolder()
  const docFiles = getAllFiles("doc/transfers", [])

  docFiles.forEach(({ config, directory }) => {
    writeToFile(config, directory)
  })
}

buildSnippets()