"use strict";
exports.__esModule = true;
exports.theme = void 0;
var system_1 = require("@mui/system");
var ui_1 = require("../constants/ui");
var palette_1 = require("./palette");
var typography_1 = require("./typography");
exports.theme = (0, system_1.createTheme)({
    palette: palette_1.palette,
    typography: typography_1.typography,
    spacing: function (val) { return val * ui_1.ui.spacingMultiplier; }
});
//# sourceMappingURL=index.js.map