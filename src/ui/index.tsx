import { ThemeProvider } from '@mui/system'

import { NavigationProvider } from '../navigation'
import { theme } from '../theme'
import { Grid } from './layout/Grid'

export const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationProvider>
      <Grid />
    </NavigationProvider>
  </ThemeProvider>
)
