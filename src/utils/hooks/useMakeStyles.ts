import { Theme } from '@mui/system/createTheme'
import { SxProps } from '@mui/system/styleFunctionSx'
import { useMemo } from 'react'

interface IStyles {
  [key: string]: SxProps<Theme>
}

/**
 * A style hook factory, used to standardize the creation of styles for the Box component.
 * It takes a callback as a parameter, automatically passing parameters from the function call along with their types.
 * Hook uses memoization dependant of the passed props.
 *
 * usage:
 *
 * 1. If needed, create interface for the parameters (optional):
 * @example
 * interface IStyleProps {
 *   isMobile: boolean
 * }
 *
 * 2. Call to create styles hook (and pass the style props type):
 * @example
 * const useStyles = useMakeStyles<IStyleProps>(({ isMobile } => ({
 *   item: {
 *     maxWidth: isMobile ? 32 : 64,
 *   }
 * })
 *
 * TODO: remove the need to pass null if no props are used.
 * 3. Use the hook in the MUI Box component, pass in props or null if none were defined:
 * @example
 * const Component = ({ isMobile }: IComponentProps) => {
 *   const styles = useStyles({ isMobile })
 *
 *   return <Box sx={styles.item}>
 * }
 *
 * @param stylesCallback
 * @return IStyles
 *
 * TODO: add return types
 */
export const useMakeStyles =
  <TStyleProps = unknown>(stylesCallback: (props: TStyleProps) => IStyles): ((props: TStyleProps) => IStyles) =>
  (props) => {
    const deps = props ? Object.values(props) : []

    return useMemo(() => stylesCallback(props), deps)
  }
