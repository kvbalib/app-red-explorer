import { Box } from '@mui/system'
import useSWR from 'swr'

import { Typography } from '../../../theme/Variants'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { ButtonOverlay } from '../../elements/ButtonOverlay'
import { FilesystemItem } from '../../elements/FilesystemItem'
import { useStyles } from './Main.styles'

export const Main = () => {
  const styles = useStyles(null)
  const { path, setPath } = useNavigation()
  const { data } = useSWR(path, window.api.directoryContents)

  const handleSelectFile = async () => {
    const paths = await window.api.selectFile()

    console.log(paths)
  }

  return (
    <Box sx={styles.main} component={'main'}>
      <Box sx={styles.left}>
        <ButtonOverlay onClick={handleSelectFile}>
          <Box sx={{ typography: Typography.overline }} children={'left'} />
        </ButtonOverlay>
      </Box>
      <Box sx={styles.right}>
        {data && data.map((item) => <FilesystemItem item={item} key={item.name} setPath={setPath} />)}
      </Box>
    </Box>
  )
}
