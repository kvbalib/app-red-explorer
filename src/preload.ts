import { contextBridge, ipcRenderer } from 'electron'
import { readdir } from 'fs/promises'
import path from 'path'

import { ElectronEvents } from './constants/electronEvents'
import { Filetypes } from './constants/filetypes'
import { regExp } from './constants/regExp'
import { ui } from './constants/ui'
import { IFilesystemItem } from './models/Filesystem'
import { IBookmark } from './models/Preload'
import { truncateFilename } from './utils/helpers/truncateFilename'

const minimizeWindow = () => ipcRenderer.send(ElectronEvents.WindowMinimize)

const maximizeWindow = () => ipcRenderer.send(ElectronEvents.WindowMaximize)

const directoryContents = async (path: string, hideSystemFiles: boolean) => {
  const results = await readdir(path, { withFileTypes: true })
  const list = results.filter((item) => !regExp.systemFile.test(item.name))

  return (hideSystemFiles ? list : results)
    .map<IFilesystemItem>((entry) => ({
      name: entry.name,
      shortName: truncateFilename(entry.name, ui.maxFilenameLength),
      type: entry.isDirectory() ? Filetypes.Directory : Filetypes.File,
      path: `${path}/${entry.name}`,
    }))
    .sort((n1, n2) => {
      if (n1.type > n2.type) return 1
      if (n1.type < n2.type) return -1
      return 0
    })
}

const currentDirectory = () => process.cwd()

const openFile = (path: string): Promise<string> => ipcRenderer.invoke(ElectronEvents.OpenFile, path)

const getBookmarks = async (): Promise<IBookmark[]> => await ipcRenderer.invoke(ElectronEvents.GetBookmarks)

const selectFolder = async (): Promise<IBookmark | null> => {
  const folderPath: string | undefined = (await ipcRenderer.invoke(ElectronEvents.SelectFolder))[0]

  if (!folderPath) return null

  return {
    name: path.basename(folderPath) || '/',
    path: folderPath,
  }
}

contextBridge.exposeInMainWorld('api', {
  currentDirectory,
  directoryContents,
  getBookmarks,
  maximizeWindow,
  minimizeWindow,
  openFile,
  selectFolder,
})

// Import types in src/models/Preload.d.ts
export type DirectoryContentsType = typeof directoryContents
export type CurrentDirectoryType = typeof currentDirectory
export type OpenFileType = typeof openFile
export type GetBookmarksType = typeof getBookmarks
export type SelectFolderType = typeof selectFolder
export type MaximizeWindowType = typeof maximizeWindow
export type MinimizeWindowType = typeof minimizeWindow
