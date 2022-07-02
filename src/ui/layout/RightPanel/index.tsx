import { Box } from '@mui/system'
import useSWR from 'swr'

import { ui } from '../../../constants/ui'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { Breadcrumbs } from '../../elements/Breadcrumbs'
import { FilesystemItem } from '../../elements/FilesystemItem'
import { useStyles } from './RightPanel.styles'

export const RightPanel = () => {
  const styles = useStyles(null)
  const { path, setPath } = useNavigation()
  const { data } = useSWR([path, ui.hideSystemFiles], window.api.directoryContents, {
    refreshInterval: ui.filesRefreshInterval,
  })

  if (!data) return null // TODO: add loader

  return (
    <Box sx={styles.right}>
      <Breadcrumbs path={path} setPath={setPath} />
      {data && data.map((item) => <FilesystemItem item={item} key={item.name} setPath={setPath} />)}
    </Box>
  )
}
