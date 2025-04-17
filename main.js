/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Avatar Airbender.ttf */ \"./src/fonts/Avatar Airbender.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/HerculanumLTProRoman.TTF */ \"./src/fonts/HerculanumLTProRoman.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ********* */\r\n/* * Fonts * */\r\n/* ********* */\r\n\r\n@font-face {\r\n    font-family: Avatar;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n@font-face {\r\n    font-family: Herculanum;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n\r\n/* ************** */\r\n/* * Animations * */\r\n/* ************** */\r\n\r\n@keyframes rock-shake {\r\n    0% { transform: translateX(0); }\r\n    10% { transform: translateX(-5px) rotate(-2deg); }\r\n    20% { transform: translateX(5px) rotate(2deg); }\r\n    30% { transform: translateX(-3px) rotate(-1deg); }\r\n    40% { transform: translateX(3px) rotate(1deg); }\r\n    50% { transform: translateX(0); } \r\n    100% { transform: translateX(0); } \r\n}\r\n\r\n@keyframes steam-rise {\r\n    0% {\r\n        transform: translateY(0) scale(1);\r\n        opacity: 0.8;\r\n    }\r\n    50% {\r\n        transform: translateY(-2px) scale(1.05);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translateY(0) scale(1);\r\n        opacity: 0.8;\r\n    }\r\n}\r\n\r\nbody {\r\n    font-family: 'Avatar', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/* *************** */\r\n/* * Nav Styling * */\r\n/* *************** */\r\n\r\nheader {\r\n    background-color: white;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.574);\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n}\r\n\r\n.title {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n}\r\n\r\nh1 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.title img {\r\n    width: 100px;\r\n    transform: scale(1.3);\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    gap: 30px;\r\n    margin: 45px 50px 0 0;\r\n}\r\n\r\n.buttons button {\r\n    font-family: 'Herculanum', serif;\r\n    border: none;\r\n    font-size: 1.2rem;\r\n    height: 40px;\r\n    width: 60px;\r\n    background-color: transparent;\r\n    color: inherit;\r\n}\r\n\r\n.buttons button:hover {\r\n    text-decoration: underline;\r\n    text-underline-offset: 8px;\r\n    text-decoration-color: #a9ba5a;\r\n    text-decoration-thickness: 3px;\r\n    animation: rock-shake 1.5s ease;\r\n}\r\n\r\n\r\n\r\n/* ******************* */\r\n/* * Content Styling * */\r\n/* ******************* */\r\n\r\n\r\n#content {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 150px 0 80px 0;\r\n}\r\n\r\n\r\n\r\n/* **************** */\r\n/* * Home Styling * */\r\n/* **************** */\r\n\r\n.welcome {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.welcome p {\r\n    font-family: 'Herculanum', serif;\r\n    font-size: 1.5rem;\r\n    margin-top: 0;\r\n}\r\n\r\n.tea-icon svg {\r\n    height: 390px;\r\n    width: auto;\r\n}\r\n\r\n#steam1, #steam2 {\r\n    animation: steam-rise 2.5s ease-in-out infinite;\r\n    opacity: 0.8;\r\n  }\r\n\r\n\r\n\r\n/* **************** */\r\n/* * Menu Styling * */\r\n/* **************** */\r\n\r\n.menu-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 250px;\r\n    height: 150px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.577);\r\n}\r\n\r\n.card img {\r\n    height: 100px;\r\n}\r\n\r\n.card > .icon {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.light-bites, .drinks, .sweet-treats {\r\n    font-family: 'Herculanum', serif;\r\n    display: grid;\r\n    gap: 80px;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n\r\n\r\n/* ***************** */\r\n/* * About Styling * */\r\n/* ***************** */\r\n\r\n.about-container {\r\n    font-family: 'Herculanum', serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.about {\r\n    text-align: center;\r\n    padding: 0 300px;\r\n}\r\n\r\n.about-container h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.about p {\r\n    font-size: 1.1rem;\r\n    text-align: center;\r\n    font-family: 'Herculanum', serif;\r\n    margin-top: 0;\r\n}\r\n\r\n.about-container img {\r\n    height: 40px;\r\n}\r\n\r\n.contact p {\r\n    font-size: 1.1rem;\r\n    margin-top: 0;    \r\n}\r\n\r\n.attributions {\r\n    text-align: center;\r\n}\r\n\r\n.attributions ul {\r\n    margin-top: 0;\r\n}\r\n\r\n.attributions li{\r\n    font-family: 'Herculanum', serif;\r\n    list-style: none;\r\n}\r\n\r\na:link, a:visited {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n/* ****************** */\r\n/* * Footer Styling * */\r\n/* ****************** */\r\n\r\nfooter {\r\n    font-family: 'Herculanum', serif;\r\n    background-color: white;\r\n    font-size: .9rem;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding-bottom: 8px;\r\n    width: 100%;\r\n    text-align: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fonts/Avatar Airbender.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Avatar Airbender.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"130d63b3c7813adb077e.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/Avatar_Airbender.ttf?");

/***/ }),

/***/ "./src/fonts/HerculanumLTProRoman.TTF":
/*!********************************************!*\
  !*** ./src/fonts/HerculanumLTProRoman.TTF ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18c13a12fd7e95ce6e6e.TTF\";\n\n//# sourceURL=webpack:///./src/fonts/HerculanumLTProRoman.TTF?");

/***/ }),

/***/ "./src/img/candy.png":
/*!***************************!*\
  !*** ./src/img/candy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55d12fb7e59bb3d2aee4.png\";\n\n//# sourceURL=webpack:///./src/img/candy.png?");

/***/ }),

/***/ "./src/img/chat.png":
/*!**************************!*\
  !*** ./src/img/chat.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efb70b512d8828bcfe7a.png\";\n\n//# sourceURL=webpack:///./src/img/chat.png?");

/***/ }),

/***/ "./src/img/coffee-cup.png":
/*!********************************!*\
  !*** ./src/img/coffee-cup.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"812f82303104d1651be1.png\";\n\n//# sourceURL=webpack:///./src/img/coffee-cup.png?");

/***/ }),

/***/ "./src/img/cookies.png":
/*!*****************************!*\
  !*** ./src/img/cookies.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acf98c4a19aab77255b8.png\";\n\n//# sourceURL=webpack:///./src/img/cookies.png?");

/***/ }),

/***/ "./src/img/drink.png":
/*!***************************!*\
  !*** ./src/img/drink.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa11ec00fca754df30b3.png\";\n\n//# sourceURL=webpack:///./src/img/drink.png?");

/***/ }),

/***/ "./src/img/dumplings.png":
/*!*******************************!*\
  !*** ./src/img/dumplings.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa0bffa2e13212250961.png\";\n\n//# sourceURL=webpack:///./src/img/dumplings.png?");

/***/ }),

/***/ "./src/img/leaves.png":
/*!****************************!*\
  !*** ./src/img/leaves.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ceaee7ff3e4444edb86e.png\";\n\n//# sourceURL=webpack:///./src/img/leaves.png?");

/***/ }),

/***/ "./src/img/mapo-tofu.png":
/*!*******************************!*\
  !*** ./src/img/mapo-tofu.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99779340fb105af8eae6.png\";\n\n//# sourceURL=webpack:///./src/img/mapo-tofu.png?");

/***/ }),

/***/ "./src/img/mooncake.png":
/*!******************************!*\
  !*** ./src/img/mooncake.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd43d4b11484eeaf7513.png\";\n\n//# sourceURL=webpack:///./src/img/mooncake.png?");

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a8c4ae6003c489e5451.png\";\n\n//# sourceURL=webpack:///./src/img/star.png?");

/***/ }),

/***/ "./src/img/sushi.png":
/*!***************************!*\
  !*** ./src/img/sushi.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92d1b9363798584a33de.png\";\n\n//# sourceURL=webpack:///./src/img/sushi.png?");

/***/ }),

/***/ "./src/img/tea-cup.png":
/*!*****************************!*\
  !*** ./src/img/tea-cup.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67d51d05b730f3734047.png\";\n\n//# sourceURL=webpack:///./src/img/tea-cup.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeButton = document.getElementById(\"home\");\r\nconst menuButton = document.getElementById(\"menu\");\r\nconst aboutButton = document.getElementById(\"about\");\r\n\r\nhomeButton.addEventListener(\"click\", _pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nmenuButton.addEventListener(\"click\", _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\naboutButton.addEventListener(\"click\", _pages_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _img_leaves_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/leaves.png */ \"./src/img/leaves.png\");\n/* harmony import */ var _img_chat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/chat.png */ \"./src/img/chat.png\");\n/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/star.png */ \"./src/img/star.png\");\n\r\n\r\n\r\n\r\n\r\nfunction about() {\r\n    const container = document.querySelector(\"#content\");\r\n    container.textContent = \"\";\r\n\r\n    // create container for about section\r\n    const aboutContainer = document.createElement(\"div\");\r\n    aboutContainer.classList.add(\"about-container\");\r\n\r\n    // array of objects for each section of about page\r\n    const aboutContent = [\r\n        {  \r\n            class: \"about\",\r\n            header: \"About Cafe Ba Sing Se\",\r\n            imgSrc: _img_leaves_png__WEBPACK_IMPORTED_MODULE_0__,\r\n            items: [\r\n                {\r\n                    content: \"We are located in the Lower Ring of Ba Sing Se, the capital of the Earth Kingdom. Our doors are open to anyone and everyone who would like a small respite from life. Each dish and cup of tea are made with care. Here, peace is guaranteed -- there is no war in Cafe Ba Sing Se, just tea!\"\r\n                }\r\n            ]\r\n        },\r\n        {\r\n            class: \"contact\",\r\n            header: \"Contact Us\",\r\n            imgSrc: _img_chat_png__WEBPACK_IMPORTED_MODULE_1__,\r\n            items: [\r\n                {content: \"Location: Lower Ring, Ba Sing Se\"},\r\n                {content: \"Hours: From sunrise to moonrise\"},\r\n                {content: \"Inquiries: tea@cafebasingse.com\"},\r\n                {content: \"Phone: (888) 88E-ARTH\"}\r\n            ]\r\n        },\r\n        {\r\n            class: \"attributions\",\r\n            header: \"Icon Attributions\",\r\n            imgSrc: _img_star_png__WEBPACK_IMPORTED_MODULE_2__,\r\n            items: [\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/sweets\",\r\n                    title: \"sweets icons\",\r\n                    innerHTML: \"Sweets icons created by Paul J. - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/sushi\",\r\n                    title: \"sushi icons\",\r\n                    innerHTML: \"Sushi icons created by Flat Icons - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/christmas\",\r\n                    title: \"christmas icons\",\r\n                    innerHTML: \"Christmas icons created by Abbasi - Flaticon\"\r\n                }, \r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/juice\",\r\n                    title: \"juice icons\",\r\n                    innerHTML: \"Juice icons created by Smashicons - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/coffee-cup\", \r\n                    title: \"coffee cup icons\",\r\n                    innerHTML: \"Coffee cup icons created by Freepik - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/mooncake\",\r\n                    title: \"mooncake icons\",\r\n                    innerHTML: \"Mooncake icons created by Freepik - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/mapo-tofu\",\r\n                    title: \"mapo tofu icons\",\r\n                    innerHTML: \"Mapo tofu icons created by Freepik - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/cookies\",\r\n                    title: \"cookie icons\",\r\n                    innerHTML: \"Cookies icons created by ultimatearm - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/leaves\",\r\n                    title: \"leaves icons\",\r\n                    innerHTML: \"Leaves icons created by Prosymbols Premium - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/cookies\",\r\n                    title: \"cookies icons\",\r\n                    innerHTML: \"Dumpling icons created by BZZRINCANTATION - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://www.flaticon.com/free-icons/contact\",\r\n                    title: \"contact icons\",\r\n                    innerHTML: \"Contact icons created by Prashanth Rapolu 15 - Flaticon\"\r\n                },\r\n                {\r\n                    href: \"https://dribbble.com/dariusdan?ref=svgrepo.com\",\r\n                    tile: \"home tea icon\",\r\n                    innerHTML: \"Vectors and icons by Darius Dan in CC Attribution License via SVG Repo \"\r\n                }\r\n                \r\n            ]\r\n        }\r\n    ];\r\n\r\n\r\n    aboutContent.forEach((section, index) => {\r\n        const sectionDiv = document.createElement(\"div\");\r\n        sectionDiv.classList.add(section.class);\r\n\r\n        const header = document.createElement(\"h2\");\r\n        header.textContent = section.header;\r\n        sectionDiv.appendChild(header);\r\n\r\n        const icon = document.createElement(\"img\");\r\n        icon.src = section.imgSrc;\r\n        sectionDiv.appendChild(icon);\r\n\r\n        if (index === 0 || index === 1) {\r\n            section.items.forEach(item => {\r\n                const element = document.createElement(\"p\");\r\n                element.textContent = item.content;\r\n                sectionDiv.appendChild(element);\r\n            })\r\n        }\r\n\r\n        if (index === 2) {\r\n            const list = document.createElement(\"ul\");\r\n\r\n            section.items.forEach(item => {\r\n                \r\n                const listItem = document.createElement(\"li\");\r\n                const attribution = document.createElement(\"a\");\r\n\r\n                attribution.href = item.href;\r\n                attribution.title = item.title;\r\n                attribution.textContent = item.innerHTML;\r\n\r\n                listItem.appendChild(attribution);\r\n                list.appendChild(listItem);\r\n                \r\n            })\r\n            sectionDiv.appendChild(list);\r\n        }\r\n        aboutContainer.appendChild(sectionDiv);\r\n    });\r\n    container.appendChild(aboutContainer);\r\n}\n\n//# sourceURL=webpack:///./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\r\n    const container = document.querySelector(\"#content\");\r\n    container.textContent = \"\";\r\n\r\n    const welcomeContainer = document.createElement(\"div\");\r\n    welcomeContainer.classList.add(\"welcome\");\r\n\r\n    const header = document.createElement(\"h1\");\r\n    header.textContent = \"Welcome to Cafe Ba Sing Se\";\r\n    welcomeContainer.appendChild(header);\r\n\r\n    const subtext = document.createElement(\"p\");\r\n    subtext.textContent = \"where there is no war, just tea\";\r\n    welcomeContainer.appendChild(subtext);\r\n\r\n    container.appendChild(welcomeContainer);\r\n\r\n    const teaContainer = document.createElement(\"div\");\r\n    teaContainer.classList.add(\"tea-icon\");\r\n\r\n    const teaSVG = `\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800px\" height=\"800px\" viewBox=\"0 0 64 64\">\r\n        <title>tea</title>            \r\n        <g id=\"tea\">                \r\n            <circle cx=\"24.5\" cy=\"25.5\" r=\"21.5\" style=\"fill:#eaeaea\"/>                \r\n            <path d=\"M43.632,8.5A1.132,1.132,0,1,1,42.5,7.368,1.132,1.132,0,0,1,43.632,8.5Z\" style=\"fill:#4c241d\"/>\r\n            <path d=\"M33.033,37a18.915,18.915,0,0,0,2.654,25H51.313A18.926,18.926,0,0,0,57.5,48a19.127,19.127,0,0,0-.118-2h.032A5.616,5.616,0,0,0,63,40.366V30.634A5.616,5.616,0,0,0,57.414,25H52V18H30l5,7v9.636A19.207,19.207,0,0,0,33.033,37ZM52,29h5.414A1.612,1.612,0,0,1,59,30.634v9.732A1.612,1.612,0,0,1,57.414,42h-.9A19.585,19.585,0,0,0,52,34.636Z\" style=\"fill:#6b4f5b;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <path d=\"M10,40H36a0,0,0,0,1,0,0v9A13,13,0,0,1,23,62h0A13,13,0,0,1,10,49V40A0,0,0,0,1,10,40Z\" style=\"fill:#ffffff;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <path d=\"M10,42h0a0,0,0,0,1,0,0V52a0,0,0,0,1,0,0h0a4.952,4.952,0,0,1-4.952-4.952v-.1A4.952,4.952,0,0,1,10,42Z\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"52\" y1=\"24\" x2=\"52\" y2=\"31\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"35\" y1=\"25\" x2=\"45\" y2=\"25\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"3\" y1=\"62\" x2=\"63\" y2=\"62\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <path id=\"steam1\" d=\"M17,36V34.5A1.5,1.5,0,0,1,18.5,33h7A1.5,1.5,0,0,0,27,31.5v-4A1.5,1.5,0,0,0,25.5,26h-2A1.5,1.5,0,0,1,22,24.5h0A1.5,1.5,0,0,1,23.5,23h1A1.5,1.5,0,0,0,26,21.5V17\" style=\"fill:none;stroke:#b5a19c;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <path id=\"steam2\" d=\"M22,37V30.5A1.5,1.5,0,0,0,20.5,29h-1A1.5,1.5,0,0,1,18,27.5v-2A1.5,1.5,0,0,0,16.5,24h0A1.5,1.5,0,0,1,15,22.5v-1A1.5,1.5,0,0,1,16.5,20h2A1.5,1.5,0,0,0,20,18.5V13\" style=\"fill:none;stroke:#b5a19c;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"34.129\" y1=\"3\" x2=\"31.181\" y2=\"5.948\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"31.181\" y1=\"3\" x2=\"34.129\" y2=\"5.948\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <path d=\"M54,47s0,7-4,11\" style=\"fill:none;stroke:#b5a19c;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <line x1=\"19\" y1=\"40\" x2=\"19\" y2=\"44\" style=\"fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n            <polygon points=\"23 54 15 54 15 46.627 17 44 21 44 23 46.756 23 54\" style=\"fill:#a9ba5a;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px\"/>\r\n        </g>\r\n    </svg>`;\r\n\r\n    teaContainer.innerHTML = teaSVG;\r\n    container.appendChild(teaContainer);\r\n}\n\n//# sourceURL=webpack:///./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _img_sushi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/sushi.png */ \"./src/img/sushi.png\");\n/* harmony import */ var _img_dumplings_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/dumplings.png */ \"./src/img/dumplings.png\");\n/* harmony import */ var _img_mapo_tofu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mapo-tofu.png */ \"./src/img/mapo-tofu.png\");\n/* harmony import */ var _img_tea_cup_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/tea-cup.png */ \"./src/img/tea-cup.png\");\n/* harmony import */ var _img_drink_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/drink.png */ \"./src/img/drink.png\");\n/* harmony import */ var _img_coffee_cup_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/coffee-cup.png */ \"./src/img/coffee-cup.png\");\n/* harmony import */ var _img_mooncake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/mooncake.png */ \"./src/img/mooncake.png\");\n/* harmony import */ var _img_candy_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/candy.png */ \"./src/img/candy.png\");\n/* harmony import */ var _img_cookies_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/cookies.png */ \"./src/img/cookies.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction menu() {\r\n    const container = document.querySelector(\"#content\");\r\n    container.textContent = \"\";\r\n    \r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"menu-container\");\r\n\r\n    const menuData = [\r\n        {\r\n            title: \"LIGHT BITES\",\r\n            class: \"light-bites\",\r\n            items: [\r\n                {id: \"sushi\", name: \"Sushi\", imgSrc: _img_sushi_png__WEBPACK_IMPORTED_MODULE_0__},\r\n                {id: \"dumplings\", name: \"Dumplings\", imgSrc: _img_dumplings_png__WEBPACK_IMPORTED_MODULE_1__},\r\n                {id: \"tofu\", name: \"Tofu\", imgSrc: _img_mapo_tofu_png__WEBPACK_IMPORTED_MODULE_2__}\r\n            ]\r\n        },\r\n        {\r\n            title: \"DRINKS\",\r\n            class: \"drinks\",\r\n            items: [\r\n                {id: \"tea\", name: \"Tea\", imgSrc: _img_tea_cup_png__WEBPACK_IMPORTED_MODULE_3__},\r\n                {id: \"juice\", name: \"Juice\", imgSrc: _img_drink_png__WEBPACK_IMPORTED_MODULE_4__},\r\n                {id: \"coffee\", name: \"Coffee\", imgSrc: _img_coffee_cup_png__WEBPACK_IMPORTED_MODULE_5__}\r\n            ]\r\n        },\r\n        {\r\n            title: \"SWEET TREATS\",\r\n            class: \"sweet-treats\",\r\n            items: [\r\n                {id: \"moon-cakes\", name: \"Moon Cakes\", imgSrc: _img_mooncake_png__WEBPACK_IMPORTED_MODULE_6__},\r\n                {id: \"jennamite\", name: \"Jennamite\", imgSrc: _img_candy_png__WEBPACK_IMPORTED_MODULE_7__},\r\n                {id: \"cookies\", name: \"Kale Cookies\", imgSrc: _img_cookies_png__WEBPACK_IMPORTED_MODULE_8__}\r\n            ]\r\n        }\r\n    ];\r\n\r\n    menuData.forEach((section, index) => {\r\n        console.log(section);\r\n        const sectionContainer = document.createElement(\"div\");\r\n        sectionContainer.classList.add(`section-${index + 1}-container`);\r\n\r\n        const sectionTitle = document.createElement(\"h2\");\r\n        sectionTitle.textContent = section.title;\r\n        sectionContainer.appendChild(sectionTitle);\r\n\r\n\r\n        const cardContainer = document.createElement(\"div\");\r\n        cardContainer.classList.add(section.class);\r\n\r\n        section.items.forEach(card => {\r\n            const sectionItem = document.createElement(\"div\");\r\n            sectionItem.classList.add(\"card\");\r\n            sectionItem.id = card.id;\r\n\r\n            const cardName = document.createElement(\"h3\");\r\n            cardName.textContent = card.name;\r\n            sectionItem.appendChild(cardName);\r\n\r\n            const iconDiv = document.createElement(\"div\");\r\n            iconDiv.classList.add(\"icon\");\r\n\r\n            const icon = document.createElement(\"img\");\r\n            icon.src = card.imgSrc;\r\n            iconDiv.appendChild(icon);\r\n            sectionItem.appendChild(iconDiv);\r\n\r\n            cardContainer.appendChild(sectionItem);\r\n        });\r\n        sectionContainer.appendChild(cardContainer);\r\n        menuContainer.appendChild(sectionContainer);\r\n    });\r\n    container.appendChild(menuContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;