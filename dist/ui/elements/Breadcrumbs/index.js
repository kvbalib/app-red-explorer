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
exports.Breadcrumbs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var fa_1 = require("react-icons/fa");
var ui_1 = require("../../../constants/ui");
var Variants_1 = require("../../../theme/Variants");
var truncateFilename_1 = require("../../../utils/helpers/truncateFilename");
var ButtonOverlay_1 = require("../ButtonOverlay");
var Text_1 = require("../Text");
var Breadcrumbs_styles_1 = require("./Breadcrumbs.styles");
var Breadcrumbs = function (_a) {
    var path = _a.path, setPath = _a.setPath;
    var styles = (0, Breadcrumbs_styles_1.useStyles)(null);
    var palette = (0, system_1.useTheme)().palette;
    var breadcrumbs = path === '/' ? [] : path.split('/').filter(Boolean);
    var goHome = function () { return setPath('/'); };
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: styles.root }, { children: [(0, jsx_runtime_1.jsx)(ButtonOverlay_1.ButtonOverlay, __assign({ onClick: goHome, styles: styles.breadcrumb }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaHome, { color: palette.background.dark, size: 12 }, void 0) }), void 0), breadcrumbs.map(function (breadcrumb, index) {
                var navigate = function () { return setPath('/' + breadcrumbs.slice(0, index + 1).join('/')); };
                return ((0, jsx_runtime_1.jsxs)(ButtonOverlay_1.ButtonOverlay, __assign({ onClick: navigate, styles: styles.breadcrumb }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaChevronRight, { size: 12 }, void 0), (0, jsx_runtime_1.jsx)(Text_1.Text, { styles: styles.label, variant: Variants_1.Typography.overline, children: (0, truncateFilename_1.truncateFilename)(breadcrumb, ui_1.ui.maxFilenameLength) }, void 0)] }), breadcrumb + index));
            })] }), void 0));
};
exports.Breadcrumbs = Breadcrumbs;
//# sourceMappingURL=index.js.map