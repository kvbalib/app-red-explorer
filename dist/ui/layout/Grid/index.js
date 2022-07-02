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
exports.Grid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var Main_1 = require("../../views/Main");
var AppBar_1 = require("../AppBar");
var Grid_styles_1 = require("./Grid.styles");
var Grid = function () {
    var styles = (0, Grid_styles_1.useStyles)(null);
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.appContainer }, { children: [(0, jsx_runtime_1.jsx)(AppBar_1.AppBar, {}, void 0), (0, jsx_runtime_1.jsx)(Main_1.Main, {}, void 0)] }), void 0));
};
exports.Grid = Grid;
//# sourceMappingURL=index.js.map