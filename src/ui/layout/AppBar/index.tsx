import { Box, useTheme } from '@mui/system'
import { CgClose, CgMaximize, CgMinimize } from 'react-icons/cg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { texts } from '../../../constants/texts'
import { ui } from '../../../constants/ui'
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

  const closeWindow = () => window.close()

  return (
    <Box sx={styles.container} component={'nav'}>
      <Box sx={styles.buttonsWrapper}>
        <ButtonOverlay onClick={goBack} disabled={!canGoBack} styles={styles.iconButton}>
          <FaArrowLeft
            color={canGoBack ? palette.primary.main : palette.background.light}
            size={ui.windowControlsSize}
          />
          <Text variant={Typography.overline} styles={styles.buttonLabel} children={texts.back} />
        </ButtonOverlay>
        <ButtonOverlay onClick={goForward} disabled={!canGoForward} styles={styles.iconButton}>
          <FaArrowRight
            color={canGoForward ? palette.primary.main : palette.background.light}
            size={ui.windowControlsSize}
          />
          <Text variant={Typography.overline} styles={styles.buttonLabel} children={texts.next} />
        </ButtonOverlay>
      </Box>
      <Box sx={styles.windowControls}>
        <ButtonOverlay onClick={window.api.minimizeWindow}>
          <CgMinimize color={palette.primary.main} size={ui.windowControlsSize} />
        </ButtonOverlay>
        <ButtonOverlay onClick={window.api.maximizeWindow}>
          <CgMaximize color={palette.primary.main} size={ui.windowControlsSize} />
        </ButtonOverlay>
        <ButtonOverlay onClick={closeWindow}>
          <CgClose color={palette.primary.main} size={ui.windowControlsSize} />
        </ButtonOverlay>
      </Box>
    </Box>
  )
}
