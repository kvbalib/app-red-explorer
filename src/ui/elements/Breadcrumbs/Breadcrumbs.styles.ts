import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  root: {
    alignItems: 'center',
    backgroundColor: 'background.lighter',
    color: 'text.secondary',
    display: 'flex',
    flexFlow: 'row wrap',
    minHeight: 20,
    gap: 1,
    width: '100%',
    pl: 2,
  },
  breadcrumb: {
    alignItems: 'center',
    color: 'text.secondary',
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    gap: 2,
  },
  label: {
    color: 'background.dark',
    lineHeight: 2,
  },
}))
