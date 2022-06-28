import { Box } from '@mui/system'
import { FaFile,FaRegFolder } from 'react-icons/fa'
import useSWR from 'swr'

import { Typography } from '../../../theme/Variants'
import { useNavigation } from '../../../utils/hooks/useNavigation'
import { useStyles } from './Main.styles'

export const Main = () => {
  const styles = useStyles()
  const { path } = useNavigation()
  const { data, error, isValidating } = useSWR(path, window.api.directoryContents)

  return (
    <Box sx={styles.main} component={'main'}>
      <Box sx={styles.left}>
        <Box sx={{ typography: Typography.overline }} children={'left'} />
      </Box>
      <Box sx={styles.right}>
      {data && data.map((item) => {
        const Icon = item.type === 'directory' ? FaRegFolder : FaFile

        return (
          <Box sx={styles.item} key={item.name} onClick={() => console.log(item)}>
            <Icon size={48} />
            <Box sx={styles.caption} children={item.name} />
          </Box>
        )
      })}
      </Box>
    </Box>
  )
}
