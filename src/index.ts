import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import electronIsDev from 'electron-is-dev'

import { Bookmarks } from './constants/bookmarks'
import { ElectronEvents } from './constants/electronEvents'
import { IBookmark } from './models/Preload'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  if (electronIsDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// Preload event listeners

ipcMain.handle(ElectronEvents.OpenFile, async (event, args) => {
  await shell.openPath(args)
})

// TODO: add error handling
ipcMain.handle(ElectronEvents.GetBookmarks, async () => {
  const bookmarks = Object.entries(Bookmarks).map<IBookmark>(([key, val]) => ({
    name: key,
    path: app.getPath(val) || '',
  }))

  return bookmarks.filter((bookmark) => Boolean(bookmark.path))
})

ipcMain.handle(ElectronEvents.SelectFolder, async () => {
  const { filePaths, canceled } = await dialog.showOpenDialog({
    title: 'Select folder',
    properties: ['openDirectory'],
  })

  if (canceled) return []

  return filePaths
})
