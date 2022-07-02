import { Theme } from '@mui/system/createTheme'
import { SxProps } from '@mui/system/styleFunctionSx'

import { ui } from '../../../constants/ui'
import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'

export const useStyles = useMakeStyles<SxProps<Theme> | undefined>((props) => ({
  root: {
    backgroundColor: 'transparent',
    border: 'none',
    display: 'inline-flex',
    m: 0,
    p: 0,
    transition: `all ${ui.cssTransitionDefault}ms ease-in-out`,
    '&:hover': {
      opacity: 0.75,
    },
    '&:active': {
      transform: 'translate(2px, 2px)',
    },
    '&:disabled': {
      opacity: 0.75,
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    ...props,
  },
}))
