import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  left: {
    bgcolor: 'background.dark',
    borderRight: 2,
    borderColor: 'primary.main',
    borderRightStyle: 'dashed',
    display: 'flex',
    flex: 1,
    overflowY: 'scroll',
    p: 4,
  },
  main: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gridArea: 'main',
    maxHeight: '100%',
    maxWidth: '100vw',
    overflowY: 'hidden',
    position: 'relative',
    width: '100%',
  },
  right: {
    alignContent: 'flex-start',
    bgcolor: 'background.light',
    columnGap: 8,
    display: 'flex',
    flex: 3,
    flexFlow: 'row wrap',
    overflowY: 'scroll',
    p: 4,
    rowGap: 4,
  },
}))