"use strict";
exports.__esModule = true;
exports.ButtonOverlay = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var ButtonOverlay_styles_1 = require("./ButtonOverlay.styles");
var ButtonOverlay = function (_a) {
    var children = _a.children, disabled = _a.disabled, isDoubleClick = _a.isDoubleClick, onClick = _a.onClick, onRightClick = _a.onRightClick, styleProps = _a.styles;
    var styles = (0, ButtonOverlay_styles_1.useStyles)(styleProps);
    var onDoubleClick = isDoubleClick ? onClick : undefined;
    var onSingleClick = !isDoubleClick ? onClick : undefined;
    return ((0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.root, component: 'button', disabled: disabled, onDoubleClick: onDoubleClick, onClick: onSingleClick, onContextMenu: onRightClick, children: children }, void 0));
};
exports.ButtonOverlay = ButtonOverlay;
//# sourceMappingURL=index.js.map