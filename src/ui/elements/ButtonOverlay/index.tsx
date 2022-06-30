import { FC, PropsWithChildren } from 'react'

import { Box } from '@mui/system'

import { IButtonOverlayProps } from './ButtonOverlay'
import { useStyles } from './ButtonOverlay.styles'

export const ButtonOverlay: FC<PropsWithChildren<IButtonOverlayProps>> = ({
  children,
  disabled,
  isDoubleClick,
  onClick,
  onRightClick,
  styles: styleProps,
}) => {
  const styles = useStyles(styleProps)
  const onDoubleClick = isDoubleClick ? onClick : undefined
  const onSingleClick = !isDoubleClick ? onClick : undefined

  return (
    <Box
      sx={styles.root}
      component={'button'}
      disabled={disabled}
      onDoubleClick={onDoubleClick}
      onClick={onSingleClick}
      onContextMenu={onRightClick}
      children={children}
    />
  )
}
