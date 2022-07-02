import { ThemeProvider } from '@mui/system'
import ReactDOM from 'react-dom/client'

import { NavigationProvider } from './navigation'
import { theme } from './theme'
import { Grid } from './ui/layout/Grid'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <NavigationProvider>
      <Grid />
    </NavigationProvider>
  </ThemeProvider>
)
