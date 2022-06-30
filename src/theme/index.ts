import { createTheme } from '@mui/system'

import { ui } from '../constants/ui'
import { palette } from './palette'
import { typography } from './typography'

export const theme = createTheme({
  palette,
  typography,
  spacing: (val: number) => val * ui.spacingMultiplier,
})
