import { useMakeStyles } from '../../../utils/hooks/useMakeStyles'
import { ITypographyProps } from './Text'

export const useStyles = useMakeStyles<ITypographyProps>((props) => ({
  root: {
    typography: props.variant,
  },
}))
