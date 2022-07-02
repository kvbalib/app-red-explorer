"use strict";
exports.__esModule = true;
exports.LocalStore = void 0;
var LocalStore = /** @class */ (function () {
    function LocalStore() {
    }
    LocalStore.set = function (key, data, ttl) {
        var now = new Date();
        var expiration = ttl ? now.getTime() + ttl : undefined;
        window.localStorage.setItem(key, JSON.stringify({
            data: data,
            expiration: expiration
        }));
    };
    LocalStore.get = function (key) {
        try {
            var storage = window.localStorage.getItem(key);
            if (!storage)
                return null;
            var data = JSON.parse(storage);
            if (data.expiration) {
                var now = new Date();
                if (now.getTime() > data.expiration) {
                    window.localStorage.removeItem(key);
                    return null;
                }
            }
            return data.data;
        }
        catch (error) {
            return null;
        }
    };
    LocalStore["delete"] = function (key) { return window.localStorage.removeItem(key); };
    return LocalStore;
}());
exports.LocalStore = LocalStore;
//# sourceMappingURL=index.js.map