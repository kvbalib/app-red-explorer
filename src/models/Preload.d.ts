import {
  CurrentDirectoryType,
  DirectoryContentsType,
  GetBookmarksType,
  MaximizeWindowType,
  MinimizeWindowType,
  OpenFileType,
  SelectFolderType,
} from '../preload'

export interface IPreload {
  currentDirectory: CurrentDirectoryType
  directoryContents: DirectoryContentsType
  getBookmarks: GetBookmarksType
  maximizeWindow: MaximizeWindowType
  minimizeWindow: MinimizeWindowType
  openFile: OpenFileType
  selectFolder: SelectFolderType
}

export interface IBookmark {
  name: string
  path: string
}
