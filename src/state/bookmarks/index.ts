import { createState } from '@hookstate/core'

import { IBookmark } from '../../models/Preload'

export const bookmarksState = createState<IBookmark[]>([])
