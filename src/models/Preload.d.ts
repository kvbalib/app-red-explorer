import {
  CurrentDirectoryType,
  DirectoryContentsType,
  GetBookmarksType,
  OpenFileType,
  SelectFolderType,
} from '../preload'

export interface IPreload {
  directoryContents: DirectoryContentsType
  currentDirectory: CurrentDirectoryType
  getBookmarks: GetBookmarksType
  openFile: OpenFileType
  selectFolder: SelectFolderType
}

export interface IBookmark {
  name: string
  path: string
}
