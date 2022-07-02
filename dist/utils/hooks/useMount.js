"use strict";
exports.__esModule = true;
exports.useMount = void 0;
var react_1 = require("react");
/**
 * Hook used to call function once on component mount.
 *
 * @param callback
 */
var useMount = function (callback) { return (0, react_1.useEffect)(function () { return callback(); }, []); };
exports.useMount = useMount;
//# sourceMappingURL=useMount.js.map