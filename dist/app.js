'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var jsx_runtime_1 = require('react/jsx-runtime');
var client_1 = __importDefault(require('react-dom/client'));
var ui_1 = require('./ui');
var root = client_1['default'].createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(ui_1.App, {}, void 0));
//# sourceMappingURL=app.js.map
