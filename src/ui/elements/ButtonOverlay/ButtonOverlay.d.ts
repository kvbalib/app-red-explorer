import { MouseEventHandler } from 'react'

import { Theme } from '@mui/system/createTheme'
import { SxProps } from '@mui/system/styleFunctionSx'

export interface IButtonOverlayProps {
  isDoubleClick?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  onRightClick?: MouseEventHandler<HTMLButtonElement>
  styles?: SxProps<Theme>
  disabled?: boolean
}
