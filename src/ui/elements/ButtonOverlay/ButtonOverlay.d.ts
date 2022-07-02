import { Theme } from '@mui/system/createTheme'
import { SxProps } from '@mui/system/styleFunctionSx'
import { DragEventHandler, MouseEventHandler } from 'react'

type ClickHandlerType = MouseEventHandler<HTMLButtonElement> | (() => void)

export interface IButtonOverlayProps {
  isDoubleClick?: boolean
  onClick: ClickHandlerType
  onRightClick?: ClickHandlerType
  styles?: SxProps<Theme>
  disabled?: boolean
  onDragStart?: DragEventHandler<HTMLButtonElement>
  isDraggable?: boolean
}
