import { Box } from '@mui/system'

import { useStyles } from './AppBar.styles'

export const AppBar = () => {
  const styles = useStyles()

  return (
    <Box sx={styles.container} component={'nav'}>
      nav
    </Box>
  )
}