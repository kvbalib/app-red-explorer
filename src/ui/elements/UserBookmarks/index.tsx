import { Box } from '@mui/system'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

import { ui } from '../../../constants/ui'
import { Bookmark } from '../Bookmark'
import { ButtonOverlay } from '../ButtonOverlay'
import { useStyles } from './UserBookmarks.styles'
import { useUserBookmarks } from './useUserBookmarks'

export const UserBookmarks = () => {
  const styles = useStyles(null)
  const { bookmarks, handleAdd, handleDelete, isDeleteMode, toggleDeleteMode } = useUserBookmarks()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.bookmarks}>
        {bookmarks.map((bookmark, index) => (
          <Bookmark
            bookmark={bookmark}
            deleteProps={{ isDeleteMode, onDelete: handleDelete }}
            key={bookmark.path + index}
          />
        ))}
      </Box>
      <Box sx={styles.footer}>
        <ButtonOverlay styles={styles.icon} onClick={toggleDeleteMode}>
          <AiFillMinusCircle size={ui.bookmarkIconSize} />
        </ButtonOverlay>
        <ButtonOverlay styles={styles.icon} onClick={handleAdd}>
          <AiFillPlusCircle size={ui.bookmarkIconSize} />
        </ButtonOverlay>
      </Box>
    </Box>
  )
}
