const fs = require('fs');
const path = require('path')
const yaml = require('js-yaml');
const { get } = require('http');

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

function getEventFileContent(directory) {
  const files = fs.readdirSync(directory);
  let exportVariables = []
  let content = ""

  files.forEach((file) => {
    if(path.extname(file) === ".json") {
      try {
        const filename = file.split(".")[0].replace(/-/g, "_")
        const data = fs.readFileSync(path.join(directory, file), 'utf8');
        content = content + `const ${filename} = \`${data}\`` + "\n\n"
        exportVariables.push(filename)
      } catch (err) {
        console.error(err);
      }
    }
  })

  content = content + `export {${exportVariables.join(", ")}}`

  return content
}

function readFiles(config, directory) {
  let content = ""
  let allConfig = []
  
  try {
    allConfig = yaml.load(fs.readFileSync(path.join(directory, config), 'utf8'))
  } catch (e) {
    console.log(e);
  }

  if(allConfig.type && allConfig.type === "event") {
    return getEventFileContent(directory)
  }
  
  allConfig.languages.forEach((language) => {
    try {
      const data = fs.readFileSync(path.join(directory, `index.${language}`), 'utf8');
      content = content + `const ${language} = \`${data}\`` + "\n\n"
    } catch (err) {
      console.error(err);
    }
  })

  content = content + `export {${allConfig.languages.join(", ")}}`
  return content
}

function writeToFile(config, directory) {
  const ancestor = directory.split("/")
  const filename = ancestor[ancestor.length - 1] + ".js"
  const parent = "dist/" + ancestor.slice(0, ancestor.length - 1).join("/")

  try {
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }

  const content = readFiles(config, directory)
  
  try {
    fs.writeFileSync(path.join(parent, filename), content);
  } catch (err) {
    console.error(err);
  }
}

function buildSnippets() {
  createBaseFolder()
  const docFiles = getAllFiles("doc", [])

  docFiles.forEach(({ config, directory }) => {
    writeToFile(config, directory)
  })
}

buildSnippets()