import { Typography } from '../../../theme/Variants'

export const useStyles = () => ({
  left: {
    bgcolor: 'background.dark',
    borderRight: 2,
    borderColor: 'primary.main',
    borderRightStyle: 'dashed',
    display: 'flex',
    flex: 1,
    p: 4,
  },
  main: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gridArea: 'main',
    maxWidth: '100vw',
    width: '100%',
  },
  right: {
    alignContent: 'flex-start',
    bgcolor: 'background.light',
    display: 'flex',
    flexFlow: 'row wrap',
    flex: 3,
    columnGap: 8,
    rowGap: 4,
    p: 4,
    overflowY: 'scroll'
  },
  item: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 64,
    minWidth: 64,
    wordBreak: 'break-word',
  },
  caption: {
    typography: Typography.caption,
    textAlign: 'center',
    mt: 1,
  }
})