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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var bookmarks_1 = require("./constants/bookmarks");
var electronEvents_1 = require("./constants/electronEvents");
if (require('electron-squirrel-startup')) {
    electron_1.app.quit();
}
var createWindow = function () {
    var mainWindow = new electron_1.BrowserWindow({
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    });
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    electron_1.ipcMain.on(electronEvents_1.ElectronEvents.WindowMinimize, function () { return mainWindow.minimize(); });
    electron_1.ipcMain.on(electronEvents_1.ElectronEvents.WindowMaximize, function () {
        if (mainWindow.isMaximized())
            mainWindow.unmaximize();
        else
            mainWindow.maximize();
    });
    if (electron_is_dev_1["default"]) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
};
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
electron_1.ipcMain.handle(electronEvents_1.ElectronEvents.OpenFile, function (event, path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, electron_1.shell.openPath(path)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// TODO: add error handling
electron_1.ipcMain.handle(electronEvents_1.ElectronEvents.GetBookmarks, function () { return __awaiter(void 0, void 0, void 0, function () {
    var bookmarks;
    return __generator(this, function (_a) {
        bookmarks = Object.entries(bookmarks_1.Bookmarks).map(function (_a) {
            var key = _a[0], val = _a[1];
            return ({
                name: key,
                path: electron_1.app.getPath(val) || ''
            });
        });
        return [2 /*return*/, bookmarks.filter(function (bookmark) { return Boolean(bookmark.path); })];
    });
}); });
electron_1.ipcMain.handle(electronEvents_1.ElectronEvents.SelectFolder, function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, filePaths, canceled;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, electron_1.dialog.showOpenDialog({
                    title: 'Select folder',
                    properties: ['openDirectory']
                })];
            case 1:
                _a = _b.sent(), filePaths = _a.filePaths, canceled = _a.canceled;
                if (canceled)
                    return [2 /*return*/, []];
                return [2 /*return*/, filePaths];
        }
    });
}); });
//# sourceMappingURL=index.js.map