import { contextBridge, ipcRenderer } from 'electron'
import { openSync } from 'fs'
import { open, readdir } from 'fs/promises'

import { IFilesystemItem } from './models/Filesystem'

const directoryContents = async (path: string) => {
  const results = await readdir(path, { withFileTypes: true })

  return results.map<IFilesystemItem>((entry) => {
    return {
      name: entry.name,
      type: entry.isDirectory() ? 'directory' : 'file',
      path: `${path}/${entry.name}`
    }
  }).sort((n1, n2) => {
    if (n1.type > n2.type) return 1
    if (n1.type < n2.type) return -1
    return 0
  })
}

const currentDirectory = () => {
  return process.cwd()
}

const openFile = (path: string) => ipcRenderer.invoke('openFile', path)

const selectFile = async () => {

}

contextBridge.exposeInMainWorld(
  'api', { directoryContents, currentDirectory, openFile, selectFile }
)

// Import types in src/models/Preload.d.ts
export type DirectoryContentsType = typeof directoryContents
export type CurrentDirectoryType = typeof currentDirectory
export type OpenFileType = typeof openFile
export type SelectFileType = typeof selectFile