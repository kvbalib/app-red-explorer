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
exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var swr_1 = __importDefault(require("swr"));
var ui_1 = require("../../../constants/ui");
var useNavigation_1 = require("../../../utils/hooks/useNavigation");
var Bookmark_1 = require("../../elements/Bookmark");
var Breadcrumbs_1 = require("../../elements/Breadcrumbs");
var FilesystemItem_1 = require("../../elements/FilesystemItem");
var UserBookmarks_1 = require("../../elements/UserBookmarks");
var Main_styles_1 = require("./Main.styles");
var Main = function () {
    var styles = (0, Main_styles_1.useStyles)(null);
    var _a = (0, useNavigation_1.useNavigation)(), path = _a.path, setPath = _a.setPath;
    var bookmarks = (0, swr_1["default"])('bookmarks', window.api.getBookmarks).data;
    var data = (0, swr_1["default"])([path, ui_1.ui.hideSystemFiles], window.api.directoryContents, {
        refreshInterval: ui_1.ui.filesRefreshInterval
    }).data;
    if (!data)
        return null; // TODO: add loader
    // TODO: separate left / right panel to prevent re-renders on navigate
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.main, component: 'main' }, { children: [(0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.left }, { children: [bookmarks && bookmarks.map(function (bookmark) { return (0, jsx_runtime_1.jsx)(Bookmark_1.Bookmark, { bookmark: bookmark }, bookmark.name); }), (0, jsx_runtime_1.jsx)(UserBookmarks_1.UserBookmarks, {}, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.right }, { children: [(0, jsx_runtime_1.jsx)(Breadcrumbs_1.Breadcrumbs, { path: path, setPath: setPath }, void 0), data && data.map(function (item) { return (0, jsx_runtime_1.jsx)(FilesystemItem_1.FilesystemItem, { item: item, setPath: setPath }, item.name); })] }), void 0)] }), void 0));
};
exports.Main = Main;
//# sourceMappingURL=index.js.map