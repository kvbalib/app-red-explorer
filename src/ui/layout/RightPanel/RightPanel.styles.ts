import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  right: {
    alignContent: 'flex-start',
    columnGap: 8,
    display: 'flex',
    flex: 3,
    flexFlow: 'row wrap',
    flexShrink: 1,
    overflowY: 'auto',
    p: 4,
    rowGap: 4,
  },
}))
