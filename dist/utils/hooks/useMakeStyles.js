"use strict";
exports.__esModule = true;
exports.useMakeStyles = void 0;
var react_1 = require("react");
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
var useMakeStyles = function (stylesCallback) {
    return function (props) {
        var deps = props ? Object.values(props) : [];
        return (0, react_1.useMemo)(function () { return stylesCallback(props); }, deps);
    };
};
exports.useMakeStyles = useMakeStyles;
//# sourceMappingURL=useMakeStyles.js.map