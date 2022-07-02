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
exports.LeftPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var swr_1 = __importDefault(require("swr"));
var Bookmark_1 = require("../../elements/Bookmark");
var UserBookmarks_1 = require("../../elements/UserBookmarks");
var LeftPanel_styles_1 = require("./LeftPanel.styles");
var LeftPanel = function () {
    var styles = (0, LeftPanel_styles_1.useStyles)(null);
    var bookmarks = (0, swr_1["default"])('bookmarks', window.api.getBookmarks).data;
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.left }, { children: [bookmarks && bookmarks.map(function (bookmark) { return (0, jsx_runtime_1.jsx)(Bookmark_1.Bookmark, { bookmark: bookmark }, bookmark.name); }), (0, jsx_runtime_1.jsx)(UserBookmarks_1.UserBookmarks, {}, void 0)] }), void 0));
};
exports.LeftPanel = LeftPanel;
//# sourceMappingURL=index.js.map