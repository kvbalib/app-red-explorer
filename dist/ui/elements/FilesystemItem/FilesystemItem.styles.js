"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var Variants_1 = require("../../../theme/Variants");
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    item: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 64,
        minWidth: 64
    },
    caption: {
        typography: Variants_1.Typography.caption,
        textAlign: 'center',
        mt: 1,
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        boxOrient: 'vertical',
        wordBreak: 'break-all'
    }
}); });
//# sourceMappingURL=FilesystemItem.styles.js.map