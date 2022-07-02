import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    color: 'primary.main',
    gap: 2,
  },
  label: {
    flex: 1,
    textAlign: 'left',
  },
  deleteButton: {
    color: 'error',
    display: 'inline-flex',
    justifySelf: 'flex-end',
  },
}))
