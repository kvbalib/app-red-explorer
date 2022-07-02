import { Theme } from '@mui/system/createTheme'
import { SxProps } from '@mui/system/styleFunctionSx'

import { Typography } from '../../../theme/Variants'

export interface ITypographyProps {
  styles?: SxProps<Theme>
  variant?: Typography
}
