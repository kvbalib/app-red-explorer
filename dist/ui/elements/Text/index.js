"use strict";
exports.__esModule = true;
exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var Variants_1 = require("../../../theme/Variants");
var Text_styles_1 = require("./Text.styles");
var Text = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? Variants_1.Typography.body : _b, styleProps = _a.styles;
    var styles = (0, Text_styles_1.useStyles)({ variant: variant, styles: styleProps });
    return (0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.root, children: children }, void 0);
};
exports.Text = Text;
//# sourceMappingURL=index.js.map