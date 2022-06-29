import { Box } from '@mui/system'

import { AppBar } from '../AppBar'
import { Main } from '../Main'
import { useStyles } from './Grid.styles'

export const Grid = () => {
  const styles = useStyles(null)

  return (
    <Box sx={styles.appContainer}>
      <AppBar/>
      <Main/>
    </Box>
  )
}