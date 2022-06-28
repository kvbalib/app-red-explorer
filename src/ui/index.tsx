import { ThemeProvider } from '@mui/system'

import { theme } from '../theme'
import { NavigationProvider } from './functional/NavigationProvider'
import { Grid } from './layout/Grid'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <Grid />
      </NavigationProvider>
    </ThemeProvider>
  )
}