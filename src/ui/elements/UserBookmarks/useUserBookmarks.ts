import { useState } from '@hookstate/core'
import { useEffect } from 'react'

import { StorageKeys } from '../../../constants/storageKeys'
import { IBookmark } from '../../../models/Preload'
import { LocalStore } from '../../../services/LocalStore'
import { bookmarksState } from '../../../state/bookmarks'
import { useMount } from '../../../utils/hooks/useMount'
import { useToggle } from '../../../utils/hooks/useToggle'

export const useUserBookmarks = () => {
  const state = useState(bookmarksState)
  const { handleToggle, handleHide, isVisible: isDeleteMode } = useToggle()

  const handleAdd = async () => {
    const bookmark = await window.api.selectFolder()

    if (bookmark) state.set((prev) => [...prev, bookmark])
  }

  const handleDelete = ({ name, path }: IBookmark) => {
    state.set((prev) => prev.filter((item) => !(item.name === name && item.path === path)))
    handleHide()
  }

  useMount(() => {
    const data = LocalStore.get<IBookmark[]>(StorageKeys.Bookmarks) ?? []

    if (data) state.set(data)
  })

  useEffect(() => {
    LocalStore.set(StorageKeys.Bookmarks, state.get())
  }, [state])

  return {
    bookmarks: state.get(),
    handleAdd,
    handleDelete,
    isDeleteMode,
    toggleDeleteMode: handleToggle,
  }
}
