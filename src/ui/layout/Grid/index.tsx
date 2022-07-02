import { Box } from '@mui/system'

import { AppBar } from '../AppBar'
import { LeftPanel } from '../LeftPanel'
import { RightPanel } from '../RightPanel'
import { useStyles } from './Grid.styles'

export const Grid = () => {
  const styles = useStyles(null)

  return (
    <Box sx={styles.appContainer}>
      <AppBar />
      <Box sx={styles.main} component={'main'}>
        <LeftPanel />
        <RightPanel />
      </Box>
    </Box>
  )
}
