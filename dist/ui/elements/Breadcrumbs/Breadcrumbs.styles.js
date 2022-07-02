"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    root: {
        alignItems: 'center',
        backgroundColor: 'background.lighter',
        color: 'text.secondary',
        display: 'flex',
        flexFlow: 'row wrap',
        minHeight: 20,
        gap: 1,
        width: '100%',
        pl: 2
    },
    breadcrumb: {
        alignItems: 'center',
        color: 'text.secondary',
        display: 'inline-flex',
        flexFlow: 'row nowrap',
        gap: 2
    },
    label: {
        color: 'background.dark',
        lineHeight: 2
    }
}); });
//# sourceMappingURL=Breadcrumbs.styles.js.map