"use strict";
exports.__esModule = true;
exports.useToggle = void 0;
var react_1 = require("react");
/**
 * Hook used to handle on/off state of an element.
 *
 * @param {boolean} initialVisible
 * @returns {{handleShow: () => void, handleToggle: () => void, handleHide: () => void, isVisible: boolean}}
 */
var useToggle = function (initialVisible) {
    if (initialVisible === void 0) { initialVisible = false; }
    var _a = (0, react_1.useState)(initialVisible), isVisible = _a[0], toggle = _a[1];
    var handleToggle = function () { return toggle(function (state) { return !state; }); };
    var handleShow = function () { return toggle(true); };
    var handleHide = function () { return toggle(false); };
    return {
        handleHide: handleHide,
        handleShow: handleShow,
        handleToggle: handleToggle,
        isVisible: isVisible
    };
};
exports.useToggle = useToggle;
//# sourceMappingURL=useToggle.js.map