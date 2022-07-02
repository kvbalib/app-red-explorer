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
var useMakeStyles_1 = require("../../../utils/hooks/useMakeStyles");
exports.useStyles = (0, useMakeStyles_1.useMakeStyles)(function (props) { return ({
    root: __assign({ typography: props.variant }, props.styles)
}); });
//# sourceMappingURL=Text.styles.js.map