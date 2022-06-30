import { useEffect, useState } from 'react'

import { StorageKeys } from '../../../constants/storageKeys'
import { IBookmark } from '../../../models/Preload'
import { LocalStore } from '../../../services/LocalStore'

export const useUserBookmarks = () => {
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

  useEffect(() => {
    const data = LocalStore.get<IBookmark[]>(StorageKeys.Bookmarks) ?? []

    if (data) setBookmarksState(data)
  }, [refreshToken])

  return {
    bookmarks: bookmarksState,
    handleAdd,
  }
}
