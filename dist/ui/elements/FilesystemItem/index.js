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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FilesystemItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var system_1 = require("@mui/system");
var fa_1 = require("react-icons/fa");
var filetypes_1 = require("../../../constants/filetypes");
var ui_1 = require("../../../constants/ui");
var ButtonOverlay_1 = require("../ButtonOverlay");
var FilesystemItem_styles_1 = require("./FilesystemItem.styles");
var FilesystemItem = function (_a) {
    var item = _a.item, setPath = _a.setPath;
    var styles = (0, FilesystemItem_styles_1.useStyles)(null);
    var isDirectory = item.type === filetypes_1.Filetypes.Directory;
    var Icon = isDirectory ? fa_1.FaRegFolder : fa_1.FaFile;
    var handleSetPath = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isDirectory) return [3 /*break*/, 1];
                    setPath(item.path);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, window.api.openFile(item.path)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleRightClick = function (event) {
        // TODO: add menu: browse / open / add to bookmarks
    };
    return (
    // @TODO: implement drag and drop
    (0, jsx_runtime_1.jsxs)(ButtonOverlay_1.ButtonOverlay, __assign({ styles: styles.item, onClick: handleSetPath, onRightClick: handleRightClick, isDoubleClick: true }, { children: [(0, jsx_runtime_1.jsx)(Icon, { size: ui_1.ui.fileIconSize }, void 0), (0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.caption, children: item.shortName }, void 0)] }), item.name));
};
exports.FilesystemItem = FilesystemItem;
//# sourceMappingURL=index.js.map