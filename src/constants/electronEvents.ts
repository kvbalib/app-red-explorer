/**
 * Electron Renderer process to Main process events.
 */
export enum ElectronEvents {
  OpenFile = 'OpenFile',
  GetBookmarks = 'GetBookmarks',
  SelectFolder = 'SelectFolder',
  WindowMaximize = 'WindowMaximize',
  WindowMinimize = 'WindowMinimize',
}
