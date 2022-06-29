import { Box } from '@mui/system'
import { FC, PropsWithChildren } from 'react'

import { Typography } from '../../../theme/Variants'
import { ITypographyProps } from './Text'
import { useStyles } from './Text.styles'

export const Text: FC<PropsWithChildren<ITypographyProps>> = ({ children, variant = Typography.body }) => {
  const styles = useStyles({ variant })

  return <Box sx={styles.root} children={children} />
}