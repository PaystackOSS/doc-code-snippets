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

function getAllFiles(directory, directoryContent) {
  const children = fs.readdirSync(directory);
  directoryContent = directoryContent || []

  children.forEach((child) => {
    if (fs.statSync(directory + "/" + child).isDirectory()) {
      directoryContent = getAllFiles(directory + "/" + child, directoryContent)
    } else {
      if (path.extname(child) === ".yml" || path.extname(child) === ".yaml") {
        directoryContent.push({
          config: child,
          directory: directory
        })
      }
    }
  })

  return directoryContent
}

function getSingleLanguageFileContent(language, directory) {
  const files = fs.readdirSync(directory);
  let exportVariables = []
  let content = ""

  files.forEach((file) => {
    if (path.extname(file) === `.${language}`) {
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

function readFiles(languages, directory) {
  let content = ""

  languages.forEach((language) => {
    try {
      const data = fs.readFileSync(path.join(directory, `index.${language}`), 'utf8');
      content = content + `const ${language} = \`${data}\`` + "\n\n"
    } catch (err) {
      console.error(err);
    }
  })

  content = content + `export {${languages.join(", ")}}`
  return content
}

function parseConfig(config, directory) {
  let allConfig = []

  try {
    allConfig = yaml.load(fs.readFileSync(path.join(directory, config), 'utf8'))
  } catch (e) {
    console.log(e);
  }

  return allConfig
}

function writeApiResponse(source, destination) {
  const responseFilename = "response.json"
  let content = ""
  try {
    content = fs.readFileSync(path.join(source, responseFilename), 'utf8');
  } catch (err) {
    console.error(err);
  }

  try {
    fs.writeFileSync(path.join(destination, responseFilename), content);
  } catch (err) {
    console.error(err);
  }
}

function makeDirectory(path) {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }
}

function writeToFile(config, directory, tag) {
  const ancestor = directory.split("/")
  const allConfig = parseConfig(config, directory)
  let content = ""
  let filename = ""
  let parent = ""

  if (tag === "doc") {
    filename = ancestor[ancestor.length - 1] + ".js"
    parent = "dist/" + ancestor.slice(2, ancestor.length - 1).join("/")

    makeDirectory(parent)

    content = allConfig.type && allConfig.type === "event" || allConfig.type === "single-lang"
      ? getSingleLanguageFileContent(allConfig.languages[0], directory)
      : readFiles(allConfig.languages, directory)

  } else if (tag === "api") {
    filename = allConfig.type === "standalone" ? ancestor[ancestor.length - 1] + ".js" : "requests.js"
    parent = allConfig.type === "standalone" ?
      "dist/" + ancestor.slice(2, ancestor.length - 1).join("/") :
      "dist/" + ancestor.slice(2, ancestor.length).join("/")

    makeDirectory(parent)

    if (!allConfig.type) {
      writeApiResponse(directory, parent)
    }

    content = readFiles(allConfig.languages, directory)

  } else {
    return
  }

  try {
    fs.writeFileSync(path.join(parent, filename), content);
  } catch (err) {
    console.error(err);
  }
}

function buildSnippets() {
  createBaseFolder()
  const docFiles = getAllFiles("./src/doc", [])
  const apiFiles = getAllFiles("./src/api", [])

  docFiles.forEach(({ config, directory }) => {
    writeToFile(config, directory, "doc")
  })

  apiFiles.forEach(({ config, directory }) => {
    writeToFile(config, directory, "api")
  })
}

buildSnippets()