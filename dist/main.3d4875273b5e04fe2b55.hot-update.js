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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/fo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




(0,_modules_telefon__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_phoneValidation__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var menu = function menu() {
  var popupMenu = document.querySelector('.popup-menu');
  var popupDialogMenu = document.querySelector('.popup-dialog-menu');
  var menuBtn = document.querySelector('.menu__icon');
  var buttonFooter = document.querySelector('.button-footer');
  var popupRepairTypes = document.querySelector('.popup-repair-types');
  var fullPprice1 = document.querySelector('.__full-price1');

  var toggleMenu = function toggleMenu() {
    popupDialogMenu.classList.toggle('showHide-menu');

    if (popupMenu.style.visibility === 'visible') {
      popupMenu.style.visibility = 'hidden';
    } else {
      popupMenu.style.visibility = 'visible';
    }
  };

  var smoothScroll = function smoothScroll(e) {
    var target = e.target;
    e.preventDefault();
    document.querySelector(target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  var showFullPrice = function showFullPrice(e) {
    e.preventDefault();
    popupRepairTypes.style.visibility = 'visible';
    popupRepairTypes.addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains('close') || !target.closest('.popup-dialog')) {
        popupRepairTypes.style.visibility = 'hidden';
      }
    });
  };

  popupMenu.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('__full-price')) {
      showFullPrice();
    } else if (target.classList.contains('menu-link')) {
      smoothScroll(e);
    }

    if (target.classList.contains('close-menu') || target.classList.contains('menu-link') || target.classList.contains('__full-price') || !target.closest('.popup-dialog-menu')) {
      toggleMenu();
    }
  });
  menuBtn.addEventListener('click', toggleMenu);
  buttonFooter.addEventListener('click', smoothScroll);
  fullPprice1.addEventListener('click', showFullPrice);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/modules/phoneValidation.js":
/*!****************************************!*\
  !*** ./src/modules/phoneValidation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var phoneValidation = function phoneValidation() {
  function maskPhone(elem) {
    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';

    function mask(e) {
      var keyCode = e.keyCode;
      var template = masked,
          def = template.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');
      var i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');

      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }

      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');

      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }

      if (e.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }
    }

    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }

  var tel = document.querySelectorAll('[name="phone"]');
  tel.forEach(function (elem) {
    maskPhone(elem);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneValidation);

/***/ }),

/***/ "./src/modules/telefon.js":
/*!********************************!*\
  !*** ./src/modules/telefon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var telefon = function telefon() {
  var tel = document.querySelector('.header-contacts__phone-number-accord');
  var arrow = document.querySelector('.header-contacts__arrow');

  var toggleTel = function toggleTel() {
    if (tel.style.top) {
      tel.style.top = '';
      tel.firstChild.style.opacity = '';
      arrow.style.transform = '';
    } else {
      tel.style.top = '30px';
      tel.firstChild.style.opacity = '1';
      arrow.style.transform = 'rotate(-0.5turn)';
    }
  };

  arrow.addEventListener('click', toggleTel); // console.dir(tel);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (telefon);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("07ba00b594acb0d96202")
/******/ })();
/******/ 
/******/ }
);