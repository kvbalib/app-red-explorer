import { Box } from '@mui/system'
import useSWR from 'swr'

import { Bookmark } from '../../elements/Bookmark'
import { UserBookmarks } from '../../elements/UserBookmarks'
import { useStyles } from './LeftPanel.styles'

export const LeftPanel = () => {
  const styles = useStyles(null)
  const { data: bookmarks } = useSWR('bookmarks', window.api.getBookmarks)

  return (
    <Box sx={styles.left}>
      {bookmarks && bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} key={bookmark.name} />)}
      <UserBookmarks />
    </Box>
  )
}
