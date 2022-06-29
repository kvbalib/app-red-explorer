import { Typography } from '../../../theme/Variants'
import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  item: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 64,
    minWidth: 64,
  },
  caption: {
    typography: Typography.caption,
    textAlign: 'center',
    mt: 1,
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    boxOrient: 'vertical',
    wordBreak: 'break-all'
  }
}))