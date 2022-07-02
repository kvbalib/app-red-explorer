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
exports.Bookmark = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var ti_1 = require("react-icons/ti");
var Variants_1 = require("../../../theme/Variants");
var useNavigation_1 = require("../../../utils/hooks/useNavigation");
var ButtonOverlay_1 = require("../ButtonOverlay");
var Text_1 = require("../Text");
var Bookmark_styles_1 = require("./Bookmark.styles");
var useBookmarkIcon_1 = require("./useBookmarkIcon");
var Bookmark = function (_a) {
    var bookmark = _a.bookmark, deleteProps = _a.deleteProps;
    var styles = (0, Bookmark_styles_1.useStyles)(null);
    var setPath = (0, useNavigation_1.useNavigation)().setPath;
    var Icon = (0, useBookmarkIcon_1.useBookmarkIcon)(bookmark.name).Icon;
    var handleClick = function () { return setPath(bookmark.path); };
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.root }, { children: [(0, jsx_runtime_1.jsxs)(ButtonOverlay_1.ButtonOverlay, __assign({ styles: styles.button, onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)(Icon, {}, void 0), (0, jsx_runtime_1.jsx)(Text_1.Text, { styles: styles.label, variant: Variants_1.Typography.body2, children: bookmark.name }, void 0)] }), void 0), deleteProps && deleteProps.isDeleteMode && (
            // TODO: replace lambda
            (0, jsx_runtime_1.jsx)(ButtonOverlay_1.ButtonOverlay, __assign({ onClick: function () { return deleteProps.onDelete(bookmark); }, styles: styles.deleteButton }, { children: (0, jsx_runtime_1.jsx)(ti_1.TiDelete, { size: 16 }, void 0) }), void 0))] }), void 0));
};
exports.Bookmark = Bookmark;
//# sourceMappingURL=index.js.map