(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[20],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-greetings.entry.js":
/*!************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-greetings.entry.js ***!
  \************************************************************************/
/*! exports provided: amplify_greetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_greetings", function() { return AmplifyGreetings; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "../amplify-ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "../amplify-ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "../amplify-ui-components/dist/esm-es5/constants-d7afd96c.js");
/* harmony import */ var _helpers_2f7c1449_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-2f7c1449.js */ "../amplify-ui-components/dist/esm-es5/helpers-2f7c1449.js");







var amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

var AmplifyGreetings =
/** @class */
function () {
  function AmplifyGreetings(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** Username displayed in the greetings */

    this.username = null;
    /** Logo displayed inside of the header */

    this.logo = null;
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_2f7c1449_js__WEBPACK_IMPORTED_MODULE_6__["d"];
  }

  AmplifyGreetings.prototype.render = function () {
    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", {
      "class": "greetings"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      "class": "logo"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "logo"
    }, this.logo && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.logo))), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      "class": "nav"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "nav"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-nav", null, this.username && Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
      name: "greetings-message"
    }, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "Hello, ", this.username)), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-out", {
      handleAuthStateChange: this.handleAuthStateChange
    })))));
  };

  return AmplifyGreetings;
}();

AmplifyGreetings.style = amplifyGreetingsCss;


/***/ })

}]);
//# sourceMappingURL=20.js.map