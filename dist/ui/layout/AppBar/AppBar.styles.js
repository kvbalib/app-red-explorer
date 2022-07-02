"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderBottom: 2,
        borderBottomStyle: 'dashed',
        borderColor: 'primary.main',
        color: 'text.primary',
        display: 'flex',
        flexFlow: 'row nowrap',
        gridArea: 'nav',
        justifyContent: 'space-between',
        p: 4,
        WebkitUserSelect: 'none',
        WebkitAppRegion: 'drag'
    },
    buttonLabel: {
        lineHeight: 1,
        mt: 2
    },
    buttonsWrapper: {
        display: 'flex',
        gap: 4,
        WebkitAppRegion: 'no-drag'
    },
    iconButton: {
        alignItems: 'center',
        color: 'primary.main',
        flexDirection: 'column',
        justifyContent: 'center',
        WebkitAppRegion: 'no-drag'
    },
    windowControls: {
        alignSelf: 'flex-start',
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: 2,
        WebkitAppRegion: 'no-drag'
    }
}); });
//# sourceMappingURL=AppBar.styles.js.map