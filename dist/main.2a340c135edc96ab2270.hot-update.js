"use strict";
self["webpackHotUpdateDiplom"]("main",{

/***/ "./src/modules/formula.js":
/*!********************************!*\
  !*** ./src/modules/formula.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formula = function formula() {
  var formula = document.getElementById('formula');
  var formulaItem = formula.querySelectorAll('.formula-item');
  console.log('formula: ', formulaItem);
  formulaItem.forEach(function (elem) {
    var description = elem.firstChild;
    elem.lastElementChild.style.visibility = 'visible';
    elem.lastElementChild.style.opacity = 1;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb60d76043eac1a6503c")
/******/ })();
/******/ 
/******/ }
);