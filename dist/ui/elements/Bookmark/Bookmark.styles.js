"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        display: 'inline-flex',
        flexFlow: 'row nowrap',
        color: 'primary.main',
        gap: 2
    },
    label: {
        flex: 1,
        textAlign: 'left'
    },
    deleteButton: {
        color: 'error',
        display: 'inline-flex',
        justifySelf: 'flex-end'
    }
}); });
//# sourceMappingURL=Bookmark.styles.js.map