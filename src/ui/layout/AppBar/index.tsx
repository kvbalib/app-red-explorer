import { Box, useTheme } from '@mui/system'
import { MouseEventHandler } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { GiBirdClaw } from 'react-icons/gi'

import { Typography } from '../../../theme/Variants'
import { useMount } from '../../../utils/hooks/useMount'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { ButtonOverlay } from '../../elements/ButtonOverlay'
import { Text } from '../../elements/Text'
import { useStyles } from './AppBar.styles'

export const AppBar = () => {
  const styles = useStyles(null)
  const { goBack, canGoForward, canGoBack, goForward } = useNavigation()
  const { palette } = useTheme()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') goBack()
    if (event.key === 'ArrowRight') goForward()
  }

  useMount(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <Box sx={styles.container} component={'nav'}>
      <GiBirdClaw color={palette.primary.main} size={48} />
      <Text variant={Typography.overline} styles={styles.title} children={'Red Explorer'} />
      <Box sx={styles.buttonsWrapper}>
        <ButtonOverlay onClick={goBack} disabled={!canGoBack} styles={styles.iconButton}>
          <FaArrowLeft color={canGoBack ? palette.primary.main : palette.background.light} size={32} />
          <Text variant={Typography.overline} children={'Back'} />
        </ButtonOverlay>
        <ButtonOverlay onClick={goForward} disabled={!canGoForward} styles={styles.iconButton}>
          <FaArrowRight color={canGoForward ? palette.primary.main : palette.background.light} size={32} />
          <Text variant={Typography.overline} children={'Next'} />
        </ButtonOverlay>
      </Box>
    </Box>
  )
}
