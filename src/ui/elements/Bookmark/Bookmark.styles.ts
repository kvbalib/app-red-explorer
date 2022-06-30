import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  root: {
    alignItems: 'center',
    color: 'primary.main',
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: 2,
  },
}))
