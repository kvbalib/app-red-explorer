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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var client_1 = __importDefault(require("react-dom/client"));
var navigation_1 = require("./navigation");
var theme_1 = require("./theme");
var Grid_1 = require("./ui/layout/Grid");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(system_1.ThemeProvider, __assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsx)(navigation_1.NavigationProvider, { children: (0, jsx_runtime_1.jsx)(Grid_1.Grid, {}, void 0) }, void 0) }), void 0));
//# sourceMappingURL=app.js.map