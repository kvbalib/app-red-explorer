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
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var react_1 = require("react");
var theme_1 = require("../theme");
var Grid_1 = require("./layout/Grid");
var App = function () {
    (0, react_1.useEffect)(function () { return console.log(window.api.currentDirectory()); }, []);
    return ((0, jsx_runtime_1.jsx)(system_1.ThemeProvider, __assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(Grid_1.Grid, {}, void 0) }), void 0));
};
exports.App = App;
//# sourceMappingURL=index.js.map