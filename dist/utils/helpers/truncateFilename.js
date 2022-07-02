"use strict";
exports.__esModule = true;
exports.truncateFilename = void 0;
var regExp_1 = require("../../constants/regExp");
var ui_1 = require("../../constants/ui");
// TODO: add word awareness.
var truncateFilename = function (filename, maxLength) {
    var _a, _b;
    if (filename.length < ui_1.ui.maxFilenameLength)
        return filename;
    var extension = (_b = (_a = regExp_1.regExp.fileExtension.exec(filename)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    return filename.substring(0, maxLength - 1) + '...' + extension;
};
exports.truncateFilename = truncateFilename;
//# sourceMappingURL=truncateFilename.js.map