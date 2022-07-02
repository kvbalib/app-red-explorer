import { IBookmark } from '../../../models/Preload'

export interface IBookmarkProps {
  bookmark: IBookmark
  deleteProps?: {
    onDelete: (bookmark: IBookmark) => void
    isDeleteMode: boolean
  }
}
