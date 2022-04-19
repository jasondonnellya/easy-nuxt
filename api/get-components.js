import bodyParser from 'body-parser'
import express from 'express'
const app = express()

import fs from 'fs'

async function ls(path) {
  const dir = await fs.promises.opendir(path)
  const array = []
  for await (const dirent of dir) {
    if(!dirent.name.includes('.js')) array.push(dirent.name)
  }
  return array
}

let componentsList = []
let preparedComponents = []

function prepareComponent(name, url) {
  if(componentsList.includes(name)) return
  componentsList.push(name)
  preparedComponents.push({ name, url })
}

async function declareDirectory(directory, folder, url) {
  const components = await ls(directory).catch(console.error)
  for await (const component of components) {
      if(component.includes('.vue')) {
          let parsedComponent = component.replace('.vue', '')
          parsedComponent = parsedComponent.replace('_', folder)
          let parsedURL = (directory + component).replace('.' + url, '')
          prepareComponent(parsedComponent, parsedURL)
      } else {
          await declareDirectory(directory + component + '/', component, url)
      }
  }
}

async function overrideComponents(url) {
  const __componentPath = '.' + url
  await declareDirectory(__componentPath, null, url)
}

async function getComponents(url) {
  const __componentPath = '.' + url
  await declareDirectory(__componentPath, null, url)
}
app.use(bodyParser.json())

app.post('/get-components', async (req, res) => {
  const { url, override } = req.body.data
  preparedComponents = []
  componentsList = []
  await overrideComponents('/components/' + override)
  await getComponents(url)
  res.json({ components: preparedComponents })
})

export default app