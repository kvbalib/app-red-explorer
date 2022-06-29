import { CurrentDirectoryType, DirectoryContentsType, OpenFileType, SelectFileType } from '../preload'

export interface IPreload {
  directoryContents: DirectoryContentsType
  currentDirectory: CurrentDirectoryType
  openFile: OpenFileType
  selectFile: SelectFileType
}
