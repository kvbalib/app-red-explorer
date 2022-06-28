"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
if (require('electron-squirrel-startup')) {
    electron_1.app.quit();
}
var createWindow = function () {
    var mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    });
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    if (electron_is_dev_1["default"]) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
};
electron_1.app.on('ready', createWindow);
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
//# sourceMappingURL=index.js.map