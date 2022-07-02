"use strict";
exports.__esModule = true;
exports.useUserBookmarks = void 0;
var react_1 = require("react");
var useBookmarksState_1 = require("../../../state/bookmarks/useBookmarksState");
var useToggle_1 = require("../../../utils/hooks/useToggle");
var useUserBookmarks = function () {
    var _a = (0, useToggle_1.useToggle)(), handleToggle = _a.handleToggle, handleHide = _a.handleHide, isDeleteMode = _a.isVisible;
    var _b = (0, useBookmarksState_1.useBookmarksState)(), bookmarks = _b.bookmarks, handleAdd = _b.handleAdd, handleDelete = _b.handleDelete;
    (0, react_1.useEffect)(function () {
        if (isDeleteMode)
            handleHide();
    }, [bookmarks]);
    return {
        bookmarks: bookmarks,
        handleAdd: handleAdd,
        handleDelete: handleDelete,
        isDeleteMode: isDeleteMode,
        toggleDeleteMode: handleToggle
    };
};
exports.useUserBookmarks = useUserBookmarks;
//# sourceMappingURL=useUserBookmarks.js.map