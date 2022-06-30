import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  root: {
    color: 'primary.main',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  addIcon: {
    color: 'primary.main',
  },
  bookmarks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  footer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    mt: 4,
  },
}))
