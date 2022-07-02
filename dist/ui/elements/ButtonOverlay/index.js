"use strict";
exports.__esModule = true;
exports.ButtonOverlay = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var ButtonOverlay_styles_1 = require("./ButtonOverlay.styles");
var ButtonOverlay = function (_a) {
    var children = _a.children, disabled = _a.disabled, isDoubleClick = _a.isDoubleClick, isDraggable = _a.isDraggable, onClick = _a.onClick, onDragStart = _a.onDragStart, onRightClick = _a.onRightClick, styleProps = _a.styles;
    var styles = (0, ButtonOverlay_styles_1.useStyles)(styleProps);
    return ((0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.root, component: 'button', disabled: disabled, onDoubleClick: isDoubleClick ? onClick : undefined, onClick: !isDoubleClick ? onClick : undefined, onContextMenu: onRightClick, children: children, onDragStart: onDragStart, draggable: isDraggable }, void 0));
};
exports.ButtonOverlay = ButtonOverlay;
//# sourceMappingURL=index.js.map