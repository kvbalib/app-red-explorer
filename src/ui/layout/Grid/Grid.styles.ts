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
}))
