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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.NavigationProvider = exports.NavigationContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var initialState = {
    canGoBack: false,
    canGoForward: false,
    goBack: function () { },
    goForward: function () { },
    history: ['/'],
    historyPosIndex: 0,
    path: '/',
    setPath: function () { }
};
exports.NavigationContext = (0, react_1.createContext)(initialState);
var NavigationProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(initialState), navigationState = _b[0], setNavigationState = _b[1];
    var setPath = function (path) {
        return setNavigationState(function (prev) {
            var history = __spreadArray(__spreadArray([], prev.history, true), [path], false);
            var historyPosIndex = history.length - 1;
            return __assign(__assign({}, prev), { canGoBack: historyPosIndex > 0, canGoForward: historyPosIndex < history.length - 1, history: history, historyPosIndex: historyPosIndex, path: path });
        });
    };
    var goBack = function () {
        return setNavigationState(function (prev) {
            var history = prev.history, historyPosIndex = prev.historyPosIndex, canGoBack = prev.canGoBack;
            if (canGoBack) {
                var newIndex = historyPosIndex - 1;
                return __assign(__assign({}, prev), { canGoBack: newIndex > 0, canGoForward: newIndex < history.length - 1, historyPosIndex: newIndex, path: history[newIndex] });
            }
            return prev;
        });
    };
    var goForward = function () {
        return setNavigationState(function (prev) {
            var history = prev.history, historyPosIndex = prev.historyPosIndex, canGoForward = prev.canGoForward;
            if (canGoForward) {
                var newIndex = historyPosIndex + 1;
                return __assign(__assign({}, prev), { canGoBack: newIndex > 0, canGoForward: newIndex < history.length - 1, historyPosIndex: newIndex, path: history[newIndex] });
            }
            return prev;
        });
    };
    var goUp = function () { return setPath(navigationState.path.split('/').slice(0, -1).join('/') || '/'); };
    return (0, jsx_runtime_1.jsx)(exports.NavigationContext.Provider, { value: __assign(__assign({}, navigationState), { setPath: setPath, goBack: goBack, goForward: goForward }), children: children }, void 0);
};
exports.NavigationProvider = NavigationProvider;
//# sourceMappingURL=index.js.map