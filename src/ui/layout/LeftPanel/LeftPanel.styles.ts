import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  left: {
    bgcolor: 'background.dark',
    borderRight: 2,
    borderColor: 'primary.main',
    borderRightStyle: 'dashed',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    gap: 4,
    overflowY: 'scroll',
    p: 4,
  },
}))
