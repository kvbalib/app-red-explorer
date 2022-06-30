import { Typography } from '../../../theme/Variants'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { ButtonOverlay } from '../ButtonOverlay'
import { Text } from '../Text'
import { IBookmarkProps } from './Bookmark'
import { useStyles } from './Bookmark.styles'
import { useBookmarkIcon } from './useBookmarkIcon'

export const Bookmark = ({ bookmark }: IBookmarkProps) => {
  const styles = useStyles(null)
  const { setPath } = useNavigation()
  const { Icon } = useBookmarkIcon(bookmark.name)

  const handleClick = () => setPath(bookmark.path)

  return (
    <ButtonOverlay styles={styles.root} onClick={handleClick}>
      <Icon />
      <Text variant={Typography.body2} children={bookmark.name} />
    </ButtonOverlay>
  )
}
