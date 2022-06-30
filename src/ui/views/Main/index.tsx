import { Box } from '@mui/system'
import useSWR from 'swr'

import { ui } from '../../../constants/ui'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { Bookmark } from '../../elements/Bookmark'
import { FilesystemItem } from '../../elements/FilesystemItem'
import { UserBookmarks } from '../../elements/UserBookmarks'
import { useStyles } from './Main.styles'

export const Main = () => {
  const styles = useStyles(null)
  const { path, setPath } = useNavigation()
  const { data: bookmarks } = useSWR('bookmarks', window.api.getBookmarks)
  const { data } = useSWR([path, ui.hideSystemFiles], window.api.directoryContents, {
    refreshInterval: ui.filesRefreshInterval,
  })

  if (!data) return null // TODO: add loader

  return (
    <Box sx={styles.main} component={'main'}>
      <Box sx={styles.left}>
        {bookmarks && bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} key={bookmark.name} />)}
        <UserBookmarks />
      </Box>
      <Box sx={styles.right}>
        {/* TODO: add breadcrumbs */}
        {data && data.map((item) => <FilesystemItem item={item} key={item.name} setPath={setPath} />)}
      </Box>
    </Box>
  )
}
