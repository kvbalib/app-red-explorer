import { contextBridge } from 'electron'
import { readdir } from 'fs/promises'

const directoryContents = async (path: string) => {
  const results = await readdir(path, { withFileTypes: true })
  return results.map(entry => ({
    name: entry.name,
    type: entry.isDirectory() ? 'directory' : 'file'
  }))
}

const currentDirectory = () => {
  return process.cwd()
}

contextBridge.exposeInMainWorld(
  'api', { directoryContents, currentDirectory }
)