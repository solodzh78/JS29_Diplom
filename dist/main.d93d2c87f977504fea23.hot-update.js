"use strict";
self["webpackHotUpdateDiplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_telefon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/telefon */ "./src/modules/telefon.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_phoneValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/phoneValidation */ "./src/modules/phoneValidation.js");
/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/formula */ "./src/modules/formula.js");




(0,_modules_telefon__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_phoneValidation__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

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
  var formulaItem = formula.querySelectorAll('.formula-item__descr');
  console.log('formula: ', formulaItem);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fec63d72554c86842ba0")
/******/ })();
/******/ 
/******/ }
);