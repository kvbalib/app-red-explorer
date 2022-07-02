"use strict";
exports.__esModule = true;
exports.useBookmarkIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var bookmarks_1 = require("../../../constants/bookmarks");
var ui_1 = require("../../../constants/ui");
var useBookmarkIcon = function (name) {
    var Icon = function () {
        switch (name.toLowerCase()) {
            case bookmarks_1.Bookmarks.Home:
                return (0, jsx_runtime_1.jsx)(fa_1.FaHome, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Desktop:
                return (0, jsx_runtime_1.jsx)(fa_1.FaDesktop, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Music:
                return (0, jsx_runtime_1.jsx)(fa_1.FaMusic, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Documents:
                return (0, jsx_runtime_1.jsx)(fa_1.FaRegFolderOpen, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Videos:
                return (0, jsx_runtime_1.jsx)(fa_1.FaFilm, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Downloads:
                return (0, jsx_runtime_1.jsx)(fa_1.FaDownload, { size: ui_1.ui.bookmarkIconSize }, void 0);
            case bookmarks_1.Bookmarks.Pictures:
                return (0, jsx_runtime_1.jsx)(fa_1.FaRegImages, { size: ui_1.ui.bookmarkIconSize }, void 0);
            default:
                return (0, jsx_runtime_1.jsx)(fa_1.FaRegFolder, { size: ui_1.ui.bookmarkIconSize }, void 0);
        }
    };
    return { Icon: Icon };
};
exports.useBookmarkIcon = useBookmarkIcon;
//# sourceMappingURL=useBookmarkIcon.js.map