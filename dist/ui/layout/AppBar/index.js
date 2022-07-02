"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AppBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var fa_1 = require("react-icons/fa");
var gi_1 = require("react-icons/gi");
var Variants_1 = require("../../../theme/Variants");
var useMount_1 = require("../../../utils/hooks/useMount");
var useNavigation_1 = require("../../../utils/hooks/useNavigation");
var ButtonOverlay_1 = require("../../elements/ButtonOverlay");
var Text_1 = require("../../elements/Text");
var AppBar_styles_1 = require("./AppBar.styles");
var AppBar = function () {
    var styles = (0, AppBar_styles_1.useStyles)(null);
    var _a = (0, useNavigation_1.useNavigation)(), goBack = _a.goBack, canGoForward = _a.canGoForward, canGoBack = _a.canGoBack, goForward = _a.goForward;
    var palette = (0, system_1.useTheme)().palette;
    var handleKeyDown = function (event) {
        if (event.key === 'ArrowLeft')
            goBack();
        if (event.key === 'ArrowRight')
            goForward();
    };
    (0, useMount_1.useMount)(function () {
        document.addEventListener('keydown', handleKeyDown);
        return function () { return document.removeEventListener('keydown', handleKeyDown); };
    });
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.container, component: 'nav' }, { children: [(0, jsx_runtime_1.jsx)(gi_1.GiBirdClaw, { color: palette.primary.main, size: 48 }, void 0), (0, jsx_runtime_1.jsx)(Text_1.Text, { variant: Variants_1.Typography.overline, styles: styles.title, children: 'Red Explorer' }, void 0), (0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.buttonsWrapper }, { children: [(0, jsx_runtime_1.jsxs)(ButtonOverlay_1.ButtonOverlay, __assign({ onClick: goBack, disabled: !canGoBack, styles: styles.iconButton }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaArrowLeft, { color: canGoBack ? palette.primary.main : palette.background.light, size: 32 }, void 0), (0, jsx_runtime_1.jsx)(Text_1.Text, { variant: Variants_1.Typography.overline, children: 'Back' }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(ButtonOverlay_1.ButtonOverlay, __assign({ onClick: goForward, disabled: !canGoForward, styles: styles.iconButton }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaArrowRight, { color: canGoForward ? palette.primary.main : palette.background.light, size: 32 }, void 0), (0, jsx_runtime_1.jsx)(Text_1.Text, { variant: Variants_1.Typography.overline, children: 'Next' }, void 0)] }), void 0)] }), void 0)] }), void 0));
};
exports.AppBar = AppBar;
//# sourceMappingURL=index.js.map