"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function () { return ({
    appContainer: {
        color: 'text.primary',
        display: 'grid',
        gridTemplateAreas: '"nav" "main"',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr',
        maxHeight: '100vh',
        maxWidth: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative'
    }
}); });
//# sourceMappingURL=Grid.styles.js.map