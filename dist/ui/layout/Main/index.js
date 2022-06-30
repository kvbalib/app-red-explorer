'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.Main = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var system_1 = require('@mui/system');
var Main_styles_1 = require('./Main.styles');
var Main = function () {
  var styles = (0, Main_styles_1.useStyles)();
  return (0, jsx_runtime_1.jsxs)(
    system_1.Box,
    __assign(
      { component: 'main' },
      {
        children: [
          (0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.left }, void 0),
          (0, jsx_runtime_1.jsx)(system_1.Box, { sx: styles.right }, void 0),
        ],
      }
    ),
    void 0
  );
};
exports.Main = Main;
//# sourceMappingURL=index.js.map
