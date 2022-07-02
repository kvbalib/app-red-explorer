"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    left: {
        bgcolor: 'background.dark',
        borderRight: 2,
        borderColor: 'primary.main',
        borderRightStyle: 'dashed',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        gap: 4,
        overflowY: 'scroll',
        p: 4
    },
    main: {
        display: 'flex',
        flexFlow: 'row nowrap',
        gridArea: 'main',
        maxHeight: '100%',
        maxWidth: '100vw',
        overflowY: 'hidden',
        position: 'relative',
        width: '100%'
    },
    right: {
        alignContent: 'flex-start',
        bgcolor: 'background.light',
        columnGap: 8,
        display: 'flex',
        flex: 3,
        flexFlow: 'row wrap',
        flexShrink: 1,
        overflowY: 'scroll',
        p: 4,
        rowGap: 4
    }
}); });
//# sourceMappingURL=Main.styles.js.map