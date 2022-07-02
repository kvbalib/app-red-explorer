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
exports.useStyles = void 0;
var ui_1 = require("../../../constants/ui");
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function (props) { return ({
    root: __assign({ backgroundColor: 'transparent', border: 'none', display: 'inline-flex', m: 0, p: 0, transition: "all ".concat(ui_1.ui.cssTransitionDefault, "ms ease-in-out"), '&:hover': {
            opacity: 0.75
        }, '&:active': {
            transform: 'translate(2px, 2px)'
        }, '&:disabled': {
            opacity: 0.75
        }, '&:focus': {
            outline: 'none',
            boxShadow: 'none'
        } }, props)
}); });
//# sourceMappingURL=ButtonOverlay.styles.js.map