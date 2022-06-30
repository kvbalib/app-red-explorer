import {
  FaDesktop,
  FaDownload,
  FaFilm,
  FaHome,
  FaMusic,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegImages,
} from 'react-icons/fa'

import { Bookmarks } from '../../../constants/bookmarks'
import { ui } from '../../../constants/ui'

export const useBookmarkIcon = (name: string) => {
  const Icon = () => {
    switch (name.toLowerCase()) {
      case Bookmarks.Home:
        return <FaHome size={ui.bookmarkIconSize} />
      case Bookmarks.Desktop:
        return <FaDesktop size={ui.bookmarkIconSize} />
      case Bookmarks.Music:
        return <FaMusic size={ui.bookmarkIconSize} />
      case Bookmarks.Documents:
        return <FaRegFolderOpen size={ui.bookmarkIconSize} />
      case Bookmarks.Videos:
        return <FaFilm size={ui.bookmarkIconSize} />
      case Bookmarks.Downloads:
        return <FaDownload size={ui.bookmarkIconSize} />
      case Bookmarks.Pictures:
        return <FaRegImages size={ui.bookmarkIconSize} />
      default:
        return <FaRegFolder size={ui.bookmarkIconSize} />
    }
  }

  return { Icon }
}
