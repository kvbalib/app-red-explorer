"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.useBookmarksState = void 0;
var core_1 = require("@hookstate/core");
var storageKeys_1 = require("../../constants/storageKeys");
var LocalStore_1 = require("../../services/LocalStore");
var useMount_1 = require("../../utils/hooks/useMount");
var index_1 = require("./index");
var useBookmarksState = function () {
    var state = (0, core_1.useState)(index_1.bookmarksState);
    var handleAdd = function () { return __awaiter(void 0, void 0, void 0, function () {
        var bookmark, prev, data;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, window.api.selectFolder()];
                case 1:
                    bookmark = _b.sent();
                    if (bookmark) {
                        prev = (_a = LocalStore_1.LocalStore.get(storageKeys_1.StorageKeys.Bookmarks)) !== null && _a !== void 0 ? _a : [];
                        data = __spreadArray(__spreadArray([], prev, true), [bookmark], false);
                        LocalStore_1.LocalStore.set(storageKeys_1.StorageKeys.Bookmarks, data);
                        state.set(data);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (_a) {
        var _b;
        var name = _a.name, path = _a.path;
        var prev = (_b = LocalStore_1.LocalStore.get(storageKeys_1.StorageKeys.Bookmarks)) !== null && _b !== void 0 ? _b : [];
        var data = prev.filter(function (item) { return !(item.name === name && item.path === path); });
        LocalStore_1.LocalStore.set(storageKeys_1.StorageKeys.Bookmarks, data);
        state.set(data);
    };
    (0, useMount_1.useMount)(function () {
        var _a;
        var data = (_a = LocalStore_1.LocalStore.get(storageKeys_1.StorageKeys.Bookmarks)) !== null && _a !== void 0 ? _a : [];
        if (data)
            state.set(data);
    });
    return {
        bookmarks: state.get(),
        handleAdd: handleAdd,
        handleDelete: handleDelete
    };
};
exports.useBookmarksState = useBookmarksState;
//# sourceMappingURL=useBookmarksState.js.map