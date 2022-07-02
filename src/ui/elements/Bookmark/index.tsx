import { Box } from '@mui/system'
import { TiDelete } from 'react-icons/ti'

import { Typography } from '../../../theme/Variants'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { ButtonOverlay } from '../ButtonOverlay'
import { Text } from '../Text'
import { IBookmarkProps } from './Bookmark'
import { useStyles } from './Bookmark.styles'
import { useBookmarkIcon } from './useBookmarkIcon'

export const Bookmark = ({ bookmark, deleteProps }: IBookmarkProps) => {
  const styles = useStyles(null)
  const { setPath } = useNavigation()
  const { Icon } = useBookmarkIcon(bookmark.name)

  const handleClick = () => setPath(bookmark.path)

  return (
    <Box sx={styles.root}>
      <ButtonOverlay styles={styles.button} onClick={handleClick}>
        <Icon />
        <Text styles={styles.label} variant={Typography.body2} children={bookmark.name} />
      </ButtonOverlay>
      {deleteProps && deleteProps.isDeleteMode && (
        // TODO: replace lambda
        <ButtonOverlay onClick={() => deleteProps.onDelete(bookmark)} styles={styles.deleteButton}>
          <TiDelete size={16} />
        </ButtonOverlay>
      )}
    </Box>
  )
}
