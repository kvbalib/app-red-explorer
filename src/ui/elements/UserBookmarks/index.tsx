import { Box } from '@mui/system'
import { FaSearchPlus } from 'react-icons/fa'

import { ui } from '../../../constants/ui'
import { Bookmark } from '../Bookmark'
import { ButtonOverlay } from '../ButtonOverlay'
import { useStyles } from './UserBookmarks.styles'
import { useUserBookmarks } from './useUserBookmarks'

export const UserBookmarks = () => {
  const styles = useStyles(null)
  const { bookmarks, handleAdd } = useUserBookmarks()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.bookmarks}>
        {bookmarks.map((bookmark, index) => (
          <Bookmark bookmark={bookmark} key={bookmark.path + index} />
        ))}
      </Box>
      <Box sx={styles.footer}>
        <ButtonOverlay styles={styles.addIcon} onClick={handleAdd}>
          <FaSearchPlus size={ui.bookmarkIconSize} />
        </ButtonOverlay>
      </Box>
    </Box>
  )
}
