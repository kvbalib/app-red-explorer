import { useEffect, useState } from 'react'

import { StorageKeys } from '../../../constants/storageKeys'
import { IBookmark } from '../../../models/Preload'
import { LocalStore } from '../../../services/LocalStore'
import { useToggle } from '../../../utils/hooks/useToggle'

export const useUserBookmarks = () => {
  const { handleToggle, handleHide, isVisible: isDeleteMode } = useToggle()
  const [refreshToken, setRefreshToken] = useState(0)
  const [bookmarksState, setBookmarksState] = useState<IBookmark[]>([])

  const handleAdd = async () => {
    const bookmark = await window.api.selectFolder()

    if (bookmark) {
      const prev = LocalStore.get<IBookmark[]>(StorageKeys.Bookmarks) ?? []
      const data = [...prev, bookmark]

      LocalStore.set(StorageKeys.Bookmarks, data)
      setRefreshToken((prev) => prev + 1)
    }
  }

  const handleDelete = ({ name, path }: IBookmark) => {
    const prev = LocalStore.get<IBookmark[]>(StorageKeys.Bookmarks) ?? []
    const data = prev.filter((item) => !(item.name === name && item.path === path))

    LocalStore.set(StorageKeys.Bookmarks, data)
    setRefreshToken((prev) => prev + 1)
  }

  useEffect(() => {
    const data = LocalStore.get<IBookmark[]>(StorageKeys.Bookmarks) ?? []

    if (data) setBookmarksState(data)
    if (isDeleteMode) handleHide()
  }, [refreshToken])

  return {
    bookmarks: bookmarksState,
    handleAdd,
    handleDelete,
    isDeleteMode,
    toggleDeleteMode: handleToggle,
  }
}
