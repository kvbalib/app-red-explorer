/**
 * Electron Renderer process to Main process events.
 */
export enum ElectronEvents {
  OpenFile = 'openFile',
  GetBookmarks = 'getBookmarks',
  SelectFolder = 'selectFolder',
}
