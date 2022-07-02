import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles(() => ({
  appContainer: {
    color: 'text.primary',
    display: 'grid',
    gridTemplateAreas: '"nav" "main"',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    maxHeight: '100vh',
    maxWidth: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
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
}))
