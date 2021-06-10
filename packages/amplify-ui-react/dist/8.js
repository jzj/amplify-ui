(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[8],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-s3-text-picker.entry.js":
/*!*****************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-s3-text-picker.entry.js ***!
  \*****************************************************************************/
/*! exports provided: amplify_s3_text_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_text_picker", function() { return AmplifyS3TextPicker; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "@aws-amplify/core");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "../amplify-ui-components/dist/esm-es5/storage-types-f257c0f2.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "@aws-amplify/auth");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "../amplify-ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "../amplify-ui-components/dist/esm-es5/constants-d7afd96c.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "@aws-amplify/storage");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-95bd359a.js */ "../amplify-ui-components/dist/esm-es5/storage-helpers-95bd359a.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};









var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3TextPicker');

var AmplifyS3TextPicker =
/** @class */
function () {
  function class_1(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'text/*';
    /** The access level of the text file */

    this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
    /** Fallback content for aplify-s3-text */

    this.fallbackText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
  }

  class_1.prototype.handleInput = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      var file, _a, _b, path, level, fileToKey, track, key, error_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            file = event.target.files[0];
            _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, fileToKey = _a.fileToKey, track = _a.track;
            key = path + Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);

            if (!file) {
              throw new Error('No file was selected');
            }

            _c.label = 1;

          case 1:
            _c.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , Object(_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger)];

          case 2:
            _c.sent();

            this.src = key;
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _c.sent();
            logger.debug(error_1);
            throw new Error(error_1);

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  class_1.prototype.render = function () {
    var _this = this;

    return Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-text", {
      textKey: this.src,
      path: this.path,
      level: this.level,
      track: this.track,
      identityId: this.identityId,
      contentType: this.contentType,
      fallbackText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.fallbackText)
    }), Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", {
      inputHandler: function inputHandler(e) {
        return _this.handleInput(e);
      },
      acceptValue: 'text/*'
    }));
  };

  return class_1;
}();



/***/ }),

/***/ "../amplify-ui-components/dist/esm-es5/storage-helpers-95bd359a.js":
/*!*************************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/storage-helpers-95bd359a.js ***!
  \*************************************************************************/
/*! exports provided: a, c, g, i, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStorageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return imageFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return putStorageObject; });
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-d7afd96c.js */ "../amplify-ui-components/dist/esm-es5/constants-d7afd96c.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/storage */ "@aws-amplify/storage");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var imageFileType = new Set(['apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'tif', 'tiff', 'webp']);

var calcKey = function calcKey(file, fileToKey) {
  var name = file.name,
      size = file.size,
      type = file.type;
  var key = encodeURI(name);

  if (fileToKey) {
    if (typeof fileToKey === 'string') {
      key = fileToKey;
    } else if (typeof fileToKey === 'function') {
      key = fileToKey({
        name: name,
        size: size,
        type: type
      });
    } else {
      key = encodeURI(JSON.stringify(fileToKey));
    }

    if (!key) {
      key = 'empty_key';
    }
  }

  return key.replace(/\s/g, '_');
};

var getStorageObject = function getStorageObject(key, level, track, identityId, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var src, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
            level: level,
            track: track,
            identityId: identityId
          })];

        case 2:
          src = _a.sent();
          logger.debug('Storage image get', src);
          return [2
          /*return*/
          , src];

        case 3:
          error_1 = _a.sent();
          throw new Error(error_1);

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var readFileAsync = function readFileAsync(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject('Failed to read file!');
      reader.abort();
    };

    reader.readAsText(blob);
  });
};

var getTextSource = function getTextSource(key, level, track, identityId, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var textSrc, text, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 4,, 5]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
            download: true,
            level: level,
            track: track,
            identityId: identityId
          })];

        case 2:
          textSrc = _a.sent();
          logger.debug(textSrc);
          return [4
          /*yield*/
          , readFileAsync(textSrc['Body'])];

        case 3:
          text = _a.sent();
          return [2
          /*return*/
          , text];

        case 4:
          error_2 = _a.sent();
          throw new Error(error_2);

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var putStorageObject = function putStorageObject(key, body, level, track, contentType, logger) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put !== 'function') {
            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }

          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put(key, body, {
            contentType: contentType,
            level: level,
            track: track
          })];

        case 2:
          data = _a.sent();
          logger.debug('Upload data', data);
          return [3
          /*break*/
          , 4];

        case 3:
          error_3 = _a.sent();
          throw new Error(error_3);

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=8.js.map