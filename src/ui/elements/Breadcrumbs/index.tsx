import { Box, useTheme } from '@mui/system'
import { FaChevronRight, FaHome } from 'react-icons/fa'

import { ui } from '../../../constants/ui'
import { Typography } from '../../../theme/Variants'
import { truncateFilename } from '../../../utils/helpers/truncateFilename'
import { ButtonOverlay } from '../ButtonOverlay'
import { Text } from '../Text'
import { IBreadcrumbsProps } from './Breadcrumbs'
import { useStyles } from './Breadcrumbs.styles'

export const Breadcrumbs = ({ path, setPath }: IBreadcrumbsProps) => {
  const styles = useStyles(null)
  const { palette } = useTheme()
  const breadcrumbs = path === '/' ? [] : path.split('/').filter(Boolean)
  const goHome = () => setPath('/')

  return (
    <Box sx={styles.root}>
      <ButtonOverlay onClick={goHome} styles={styles.breadcrumb}>
        <FaHome color={palette.background.dark} size={12} />
      </ButtonOverlay>
      {breadcrumbs.map((breadcrumb, index) => {
        const navigate = () => setPath('/' + breadcrumbs.slice(0, index + 1).join('/'))

        return (
          <ButtonOverlay onClick={navigate} styles={styles.breadcrumb} key={breadcrumb + index}>
            <FaChevronRight size={12} />
            <Text
              styles={styles.label}
              variant={Typography.overline}
              children={truncateFilename(breadcrumb, ui.maxFilenameLength)}
            />
          </ButtonOverlay>
        )
      })}
    </Box>
  )
}
