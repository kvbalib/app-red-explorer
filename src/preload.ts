import { contextBridge } from 'electron'
import { readdir } from 'fs/promises'

const directoryContents = async (path: string) => {
  const results = await readdir(path, { withFileTypes: true })

  return results.map((entry) => ({
    name: entry.name,
    type: entry.isDirectory() ? 'directory' : 'file'
  })).sort((n1, n2) => {
    if (n1.type > n2.type) return 1
    if (n1.type < n2.type) return -1
    return 0
  })
}

const currentDirectory = () => {
  return process.cwd()
}

contextBridge.exposeInMainWorld(
  'api', { directoryContents, currentDirectory }
)