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
exports.UserBookmarks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var ai_1 = require("react-icons/ai");
var ui_1 = require("../../../constants/ui");
var Bookmark_1 = require("../Bookmark");
var ButtonOverlay_1 = require("../ButtonOverlay");
var UserBookmarks_styles_1 = require("./UserBookmarks.styles");
var useUserBookmarks_1 = require("./useUserBookmarks");
var UserBookmarks = function () {
    var styles = (0, UserBookmarks_styles_1.useStyles)(null);
    var _a = (0, useUserBookmarks_1.useUserBookmarks)(), bookmarks = _a.bookmarks, handleAdd = _a.handleAdd, handleDelete = _a.handleDelete, isDeleteMode = _a.isDeleteMode, toggleDeleteMode = _a.toggleDeleteMode;
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.root }, { children: [(0, jsx_runtime_1.jsx)(system_1.Box, __assign({ sx: styles.bookmarks }, { children: bookmarks.map(function (bookmark, index) { return ((0, jsx_runtime_1.jsx)(Bookmark_1.Bookmark, { bookmark: bookmark, deleteProps: { isDeleteMode: isDeleteMode, onDelete: handleDelete } }, bookmark.path + index)); }) }), void 0), (0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.footer }, { children: [(0, jsx_runtime_1.jsx)(ButtonOverlay_1.ButtonOverlay, __assign({ styles: styles.icon, onClick: toggleDeleteMode }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillMinusCircle, { size: ui_1.ui.bookmarkIconSize }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(ButtonOverlay_1.ButtonOverlay, __assign({ styles: styles.icon, onClick: handleAdd }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillPlusCircle, { size: ui_1.ui.bookmarkIconSize }, void 0) }), void 0)] }), void 0)] }), void 0));
};
exports.UserBookmarks = UserBookmarks;
//# sourceMappingURL=index.js.map