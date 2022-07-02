import { Box } from '@mui/system'
import { FC, PropsWithChildren } from 'react'

import { IButtonOverlayProps } from './ButtonOverlay'
import { useStyles } from './ButtonOverlay.styles'

export const ButtonOverlay: FC<PropsWithChildren<IButtonOverlayProps>> = ({
  children,
  disabled,
  isDoubleClick,
  isDraggable,
  onClick,
  onDragStart,
  onRightClick,
  styles: styleProps,
}) => {
  const styles = useStyles(styleProps)

  return (
    <Box
      sx={styles.root}
      component={'button'}
      disabled={disabled}
      onDoubleClick={isDoubleClick ? onClick : undefined}
      onClick={!isDoubleClick ? onClick : undefined}
      onContextMenu={onRightClick}
      children={children}
      onDragStart={onDragStart}
      draggable={isDraggable}
    />
  )
}
