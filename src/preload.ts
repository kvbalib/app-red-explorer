import { contextBridge, ipcRenderer } from 'electron'
import { readdir } from 'fs/promises'
import path from 'path'

import { ElectronEvents } from './constants/electronEvents'
import { regExp } from './constants/regExp'
import { IFilesystemItem } from './models/Filesystem'
import { IBookmark } from './models/Preload'

const directoryContents = async (path: string, hideSystemFiles: boolean) => {
  const results = await readdir(path, { withFileTypes: true })
  const list = results.filter((item) => !regExp.systemFile.test(item.name))

  return (hideSystemFiles ? list : results)
    .map<IFilesystemItem>((entry) => {
      return {
        name: entry.name,
        type: entry.isDirectory() ? 'directory' : 'file',
        path: `${path}/${entry.name}`,
      }
    })
    .sort((n1, n2) => {
      if (n1.type > n2.type) return 1
      if (n1.type < n2.type) return -1
      return 0
    })
}

const currentDirectory = () => {
  return process.cwd()
}

const openFile = (path: string): Promise<string> => ipcRenderer.invoke(ElectronEvents.OpenFile, path)

const getBookmarks = async (): Promise<IBookmark[]> => await ipcRenderer.invoke(ElectronEvents.GetBookmarks)

const selectFolder = async (): Promise<IBookmark | null> => {
  const filePath: string | undefined = (await ipcRenderer.invoke(ElectronEvents.SelectFolder))[0]

  if (!filePath) return null

  return {
    name: path.basename(filePath),
    path: filePath,
  }
}

contextBridge.exposeInMainWorld('api', { directoryContents, currentDirectory, openFile, getBookmarks, selectFolder })

// Import types in src/models/Preload.d.ts
export type DirectoryContentsType = typeof directoryContents
export type CurrentDirectoryType = typeof currentDirectory
export type OpenFileType = typeof openFile
export type GetBookmarksType = typeof getBookmarks
export type SelectFolderType = typeof selectFolder
