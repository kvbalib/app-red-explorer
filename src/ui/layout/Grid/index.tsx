import { Box } from '@mui/system'

import { Main } from '../../views/Main'
import { AppBar } from '../AppBar'
import { useStyles } from './Grid.styles'

export const Grid = () => {
  const styles = useStyles(null)

  return (
    <Box sx={styles.appContainer}>
      <AppBar />
      <Main />
    </Box>
  )
}
