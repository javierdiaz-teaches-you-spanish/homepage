/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* end of reset of style browser */`, "",{"version":3,"sources":["webpack://./src/styles/style-reset.css"],"names":[],"mappings":";CACC;;;CAGA;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,kCAAkC","sourcesContent":["\n /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, input {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* end of reset of style browser */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  width: 100vw;
  margin: auto;
}

h1,h2,h3 {
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-style: normal;
}

.hide {
  display: none;
}

.show {
  display: grid;
}

.photoImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photoImgReviews {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.iconImg {
  height: 30px;
  width: auto;
}

.projectImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
}

/* define background colors - starts*/
.light {
  --color-bg-first: #f5f8fa;
  --color-bg-header: #a7c0d2;
  --color-bg-section: white;
  --color-bg-article: #d0dde7;
  --color-article-shadow: #a7c0d2;
  --color-bg-second: #a7c0d2;
  --color-base-text-title: #2c3e4e;
  --color-base-text: #31485b;
  --color-base-text-article: #2c3e4e;
}

.dark {
  --color-bg-first: #37556d;
  --color-bg-header: #37556d;
  --color-bg-section: #37556d;
  --color-bg-article: #31485b;
  --color-article-shadow: #436986;
  --color-bg-second: #37556d;
  --color-base-text-title: #eaeff4;
  --color-base-text: #eaeff4;
  --color-base-text-article: #eaeff4;
}

.bgDivFirst {
  background-color: var(--color-bg-first);
}

.bgDivFirst > div > header {
  background-color: var(--color-bg-header);
}

.bgDivFirst > div > header > section {
  background-color: var(--color-bg-section);
}

article {
  background-color: var(--color-bg-article);
}

.bgDivSecond {
  /*footer*/
  background-color: var(--color-bg-second);
  color: var(--color-base-text);
}

/* define background colors end */

.page-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr auto-fit;
}

.page-container > header {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.page-container > header > picture {
  position: relative;
}

.textInPhoto {
  position: absolute;
  transform: translate(20px, -100%);
  /* translate X,Y */
  width: 80%;
  color: #f9f7f7;
  font-size: 4rem;
}

.page-container > main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 15px;
}

.content {
  /* aboutMe*/
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  gap: 10px;

  position: relative;
}

h2 {
  padding-top: 1%;
  color: var(--color-base-text-title);
  font-size: 2rem;
}

.contentProject {
  /* my work*/
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  gap: 10px;

  position: relative;
}

fieldset {
  display:flex;
  flex-direction: row;
  gap: 15px;
  padding-bottom: 10px;
}

article {
  --defining-width: calc(0.7 * 100vw);
  width: var(--defining-width);
 /*  height: calc(var(--defining-width) * 2.6); */
  height: fit-content;
  border-radius: 6px;
  box-shadow: var(--color-article-shadow) 2px 2px 4px 2px;
  padding-bottom: 30px;
}

article {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.095fr 0.005fr 0.9fr;
}

.divImgArticle {
  grid-column: 1/2;
  grid-row: 1/2;
  box-shadow: var(--color-bg-first) 2px 2px 2px 2px;
}

.divNameArticle {
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr;
}

.divNameArticle > h3 {
  color: var(--color-base-text-article);
  font-size: 1.2rem;
  font-weight: 900;
  padding-left: 4%;
  padding-top: 3%;
}

.divNameArticle > div {
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 10px;
  padding-top: 3.5%;
}

.divDescriptionArticle {
  grid-column: 1/2;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  row-gap: 15px;
  padding-top: 20px;
}

.divDescriptionArticle > p {
  color: var(--color-base-text-article);
  font-size: 1rem;
  padding-left: 4%;
  text-justify: distribute;
}

.projectImg {
  width: var(--defining-width);
  height: calc(var(--defining-width) * 0.25 * 0.7);
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
}

.text {
  flex-shrink: 1;
  padding: 5%;
  text-align: justify;
  color: var(--color-base-text);
  font-size: 1rem;
}

.divIcons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 2%;
}

footer {
  --define-height-footer: calc(0.7 * 100vh);
  width: 100%;
  height: var(--define-height-footer);
}

footer {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

footer > section {
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr;
  grid-template-rows: 1fr 1.2fr 1.2fr 1fr 0.7fr;
}

footer > section > h2 {
  grid-row: 1/2;
  grid-column: 1/4;
}

footer > section > h2 + p {
  grid-row: 2/3;
  grid-column: 1/4;
  row-gap: 1.1;
}

footer > section > h2 + p + p {
  grid-row: 3/4;
  grid-column: 1/4;
  row-gap: 1.1;
}

footer > section > h2 + p + p + p {
  grid-row: 4/5;
  grid-column: 3/4;
}

footer > section > img {
  grid-row: 4/5;
  grid-column: 1/2;
}


footer > section > div {
  grid-row: 5/6;
  grid-column: 1/4;
}

footer > section > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

.photoFooter {
  width: auto;
  height: 250px;
  object-fit: cover;
}

/*buttons*/

.themeButton {
  position: absolute;
  top: 4%;
  right: 3%;
  z-index: 1;
  background-color: var(--color-bg-first);

  transition: transform 250ms ease-in-out;
}

.themeButton:hover {
  transform: scale(1.1);
  background-color: var(--color-bg-section);
}

.themeButton:active {
  transform: scale(1.1);
  background-color: var(--color-bg-article);
  color: var(--color-bg-section);
}

a {
  transition: transform 250ms ease-in-out;
}

a:hover {
  transform: scale(1.05);
}

a:active {
  transform: scale(1.1);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: auto;\n}\n\nh1,h2,h3 {\n  font-family: 'Playfair Display', serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: grid;\n}\n\n.photoImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.photoImgReviews {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.iconImg {\n  height: 30px;\n  width: auto;\n}\n\n.projectImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n/* define background colors - starts*/\n.light {\n  --color-bg-first: #f5f8fa;\n  --color-bg-header: #a7c0d2;\n  --color-bg-section: white;\n  --color-bg-article: #d0dde7;\n  --color-article-shadow: #a7c0d2;\n  --color-bg-second: #a7c0d2;\n  --color-base-text-title: #2c3e4e;\n  --color-base-text: #31485b;\n  --color-base-text-article: #2c3e4e;\n}\n\n.dark {\n  --color-bg-first: #37556d;\n  --color-bg-header: #37556d;\n  --color-bg-section: #37556d;\n  --color-bg-article: #31485b;\n  --color-article-shadow: #436986;\n  --color-bg-second: #37556d;\n  --color-base-text-title: #eaeff4;\n  --color-base-text: #eaeff4;\n  --color-base-text-article: #eaeff4;\n}\n\n.bgDivFirst {\n  background-color: var(--color-bg-first);\n}\n\n.bgDivFirst > div > header {\n  background-color: var(--color-bg-header);\n}\n\n.bgDivFirst > div > header > section {\n  background-color: var(--color-bg-section);\n}\n\narticle {\n  background-color: var(--color-bg-article);\n}\n\n.bgDivSecond {\n  /*footer*/\n  background-color: var(--color-bg-second);\n  color: var(--color-base-text);\n}\n\n/* define background colors end */\n\n.page-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr auto-fit;\n}\n\n.page-container > header {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.page-container > header > picture {\n  position: relative;\n}\n\n.textInPhoto {\n  position: absolute;\n  transform: translate(20px, -100%);\n  /* translate X,Y */\n  width: 80%;\n  color: #f9f7f7;\n  font-size: 4rem;\n}\n\n.page-container > main {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-top: 30px;\n  padding-bottom: 15px;\n}\n\n.content {\n  /* aboutMe*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\nh2 {\n  padding-top: 1%;\n  color: var(--color-base-text-title);\n  font-size: 2rem;\n}\n\n.contentProject {\n  /* my work*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\nfieldset {\n  display:flex;\n  flex-direction: row;\n  gap: 15px;\n  padding-bottom: 10px;\n}\n\narticle {\n  --defining-width: calc(0.7 * 100vw);\n  width: var(--defining-width);\n /*  height: calc(var(--defining-width) * 2.6); */\n  height: fit-content;\n  border-radius: 6px;\n  box-shadow: var(--color-article-shadow) 2px 2px 4px 2px;\n  padding-bottom: 30px;\n}\n\narticle {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.095fr 0.005fr 0.9fr;\n}\n\n.divImgArticle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  box-shadow: var(--color-bg-first) 2px 2px 2px 2px;\n}\n\n.divNameArticle {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 2fr 1fr;\n}\n\n.divNameArticle > h3 {\n  color: var(--color-base-text-article);\n  font-size: 1.2rem;\n  font-weight: 900;\n  padding-left: 4%;\n  padding-top: 3%;\n}\n\n.divNameArticle > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  gap: 10px;\n  padding-top: 3.5%;\n}\n\n.divDescriptionArticle {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  display: flex;\n  flex-direction: column;\n  justify-content:flex-start;\n  row-gap: 15px;\n  padding-top: 20px;\n}\n\n.divDescriptionArticle > p {\n  color: var(--color-base-text-article);\n  font-size: 1rem;\n  padding-left: 4%;\n  text-justify: distribute;\n}\n\n.projectImg {\n  width: var(--defining-width);\n  height: calc(var(--defining-width) * 0.25 * 0.7);\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n.text {\n  flex-shrink: 1;\n  padding: 5%;\n  text-align: justify;\n  color: var(--color-base-text);\n  font-size: 1rem;\n}\n\n.divIcons {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  padding-bottom: 2%;\n}\n\nfooter {\n  --define-height-footer: calc(0.7 * 100vh);\n  width: 100%;\n  height: var(--define-height-footer);\n}\n\nfooter {\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nfooter > section {\n  height: 100%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 7fr;\n  grid-template-rows: 1fr 1.2fr 1.2fr 1fr 0.7fr;\n}\n\nfooter > section > h2 {\n  grid-row: 1/2;\n  grid-column: 1/4;\n}\n\nfooter > section > h2 + p {\n  grid-row: 2/3;\n  grid-column: 1/4;\n  row-gap: 1.1;\n}\n\nfooter > section > h2 + p + p {\n  grid-row: 3/4;\n  grid-column: 1/4;\n  row-gap: 1.1;\n}\n\nfooter > section > h2 + p + p + p {\n  grid-row: 4/5;\n  grid-column: 3/4;\n}\n\nfooter > section > img {\n  grid-row: 4/5;\n  grid-column: 1/2;\n}\n\n\nfooter > section > div {\n  grid-row: 5/6;\n  grid-column: 1/4;\n}\n\nfooter > section > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n}\n\n.photoFooter {\n  width: auto;\n  height: 250px;\n  object-fit: cover;\n}\n\n/*buttons*/\n\n.themeButton {\n  position: absolute;\n  top: 4%;\n  right: 3%;\n  z-index: 1;\n  background-color: var(--color-bg-first);\n\n  transition: transform 250ms ease-in-out;\n}\n\n.themeButton:hover {\n  transform: scale(1.1);\n  background-color: var(--color-bg-section);\n}\n\n.themeButton:active {\n  transform: scale(1.1);\n  background-color: var(--color-bg-article);\n  color: var(--color-bg-section);\n}\n\na {\n  transition: transform 250ms ease-in-out;\n}\n\na:hover {\n  transform: scale(1.05);\n}\n\na:active {\n  transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_large_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 981px) {
  .photoImg {
    width: 100%;
    object-fit: cover;
  }

  .photoImgReviews {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }

  .textInPhoto {
    font-size: 5.6rem;
  }

  .themeButton {
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 1;
  }

  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 2fr;
  }

  .page-container > header {
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .page-container > main {
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25px 1fr;
  }

  .content {
    justify-content: center;
  }

  .divIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  main > fieldset {
    grid-row: 1/2;
    padding-left: 40%;
  }

  .contentProject {
    grid-row: 2/3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  article {
    --defining-width: calc(0.82 * (100vw / 3));
    width: var(--defining-width);
   /*  height: calc(var(--defining-width) * 2.1); */
   height: fit-content;
   border-radius: 6px;
   padding-top: 10px;
   padding-bottom: 30px;
  }

  .projectImg {
    width: var(--defining-width);
    height: calc(var(--defining-width) * 0.3 * 0.7);
    object-fit: cover;
    border-radius: 6px 6px 0px 0px;
  }

  .divDescriptionArticle > p {
    padding-top: 3%;
  }

  footer {
    --define-height-footer: calc(0.45 * 100vh);
    width: 100%;
    height: var(--define-height-footer);
  }

  footer {
    width: 80%;
    height: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  footer > section > h2 + p {
    font-size: 1.3rem;
  }

  footer > section > h2 + p + p{
    font-size: 1.3rem;
  }

  footer > section > img {
    grid-row: 4/5;
    grid-column: 1/2;
    justify-content: left;
  }

  footer > section > h2 + p + p + p{
    grid-row: 4/5;
    grid-column: 2/3;
    justify-content: left;
  }

  footer > section > div {
    grid-row: 5/6;
    grid-column: 3/4;
  }

}
`, "",{"version":3,"sources":["webpack://./src/styles/style-large.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,UAAU;IACV,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;EAC/B;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;EAC9B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;GAC7B,gDAAgD;GAChD,mBAAmB;GACnB,kBAAkB;GAClB,iBAAiB;GACjB,oBAAoB;EACrB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,0CAA0C;IAC1C,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;AAEF","sourcesContent":["@media screen and (min-width: 981px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .photoImgReviews {\n    width: 90%;\n    height: 90%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 5.6rem;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 3%;\n    right: 3%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.7fr 2fr;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .page-container > main {\n    width: 100%;\n    height: 90%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 25px 1fr;\n  }\n\n  .content {\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main > fieldset {\n    grid-row: 1/2;\n    padding-left: 40%;\n  }\n\n  .contentProject {\n    grid-row: 2/3;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.82 * (100vw / 3));\n    width: var(--defining-width);\n   /*  height: calc(var(--defining-width) * 2.1); */\n   height: fit-content;\n   border-radius: 6px;\n   padding-top: 10px;\n   padding-bottom: 30px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  .divDescriptionArticle > p {\n    padding-top: 3%;\n  }\n\n  footer {\n    --define-height-footer: calc(0.45 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  footer > section > h2 + p {\n    font-size: 1.3rem;\n  }\n\n  footer > section > h2 + p + p{\n    font-size: 1.3rem;\n  }\n\n  footer > section > img {\n    grid-row: 4/5;\n    grid-column: 1/2;\n    justify-content: left;\n  }\n\n  footer > section > h2 + p + p + p{\n    grid-row: 4/5;\n    grid-column: 2/3;\n    justify-content: left;\n  }\n\n  footer > section > div {\n    grid-row: 5/6;\n    grid-column: 3/4;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_medium_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 621px) and (max-width: 980px) {
  .photoImg {
    width: 100%;
    object-fit: cover;
  }

  .textInPhoto {
    font-size: 4.5rem;
  }

  .photoImgReviews {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }

  .themeButton {
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: 1;
  }

  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto-fit;
  }

  .page-container > header {
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .divIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .contentProject {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  article {
    --defining-width: calc(0.75 * (100vw / 2));
    width: var(--defining-width);
    height: fit-content;
   /*  height: calc(var(--defining-width) * 2.1); */
    border-radius: 6px;
    padding-bottom: 30px;
  }

  .projectImg {
    width: var(--defining-width);
    height: calc(var(--defining-width) * 0.3 * 0.7);
    object-fit: cover;
    border-radius: 6px 6px 0px 0px;
  }

  footer {
    --define-height-footer: calc(0.3 * 100vh);
    width: 100%;
    height: var(--define-height-footer);
  }

  footer {
    width: 80%;
    height: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

 
  footer > section > div {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 40px;
    gap: 10px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style-medium.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,UAAU;IACV,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,gCAAgC;EAClC;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,mBAAmB;GACpB,gDAAgD;IAC/C,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,yCAAyC;IACzC,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;;EAGA;IACE,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 621px) and (max-width: 980px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 4.5rem;\n  }\n\n  .photoImgReviews {\n    width: 90%;\n    height: 90%;\n    object-fit: cover;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 2%;\n    right: 2%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr auto-fit;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .contentProject {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.75 * (100vw / 2));\n    width: var(--defining-width);\n    height: fit-content;\n   /*  height: calc(var(--defining-width) * 2.1); */\n    border-radius: 6px;\n    padding-bottom: 30px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  footer {\n    --define-height-footer: calc(0.3 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n \n  footer > section > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    padding-right: 40px;\n    gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   googleFonts: () => (/* binding */ googleFonts)
/* harmony export */ });
function googleFonts() {
    const link1 = document.createElement('link');
    link1.setAttribute('rel', 'preconnect');
    link1.setAttribute('href', 'https://fonts.googleapis.com');
    const link2 = document.createElement('link');
    link2.setAttribute('rel', 'preconnect');
    link2.setAttribute('href', 'href="https://fonts.gstatic.com');
    link2.setAttribute('crossorigin', '');
    const link3 = document.createElement('link');
    link3.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
    );
    link3.setAttribute('rel', 'stylesheet');
    const link4 = document.createElement('link');
    link4.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    );
    link4.setAttribute('rel', 'stylesheet');
  
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    document.head.appendChild(link4);
  }
  
  

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homepage: () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _assets_img_small_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _assets_img_medium_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _assets_img_large_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _assets_img_img_rev_large_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _assets_img_img_rev_small_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _assets_img_footer_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _assets_text_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _assets_icons_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32);
/* harmony import */ var _insertImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);















function homepage() {
  const root = document.documentElement;
  root.setAttribute("lang", "en");
  root.setAttribute("id", "root-element");
  root.className = "light";

  const flashMessages = document.createElement("div");
  flashMessages.setAttribute("id", "flash-messages");

  const themeButton = document.createElement("button");
  themeButton.classList.add("themeButton");
  const changeThemeImg = new Image();
  changeThemeImg.src = _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_6__;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(
    themeButton,
    changeThemeImg.src,
    "theme-light-dark",
    "iconImg",
    "30px",
    "30px"
  );
  themeButton.setAttribute("style", "border-radius: 30px;");
  themeButton.addEventListener("click", () => {
    setTheme();
  });

  function setTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  }

  // background colors
  const bgDivFirst = document.createElement("div");
  bgDivFirst.classList.add("bgDivFirst");
  const bgDivSecond = document.createElement("div");
  bgDivSecond.classList.add("bgDivSecond");

  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");

  // HEADER
  const header = document.createElement("header");
  const textInPhoto = document.createElement("H2");
  textInPhoto.textContent = "Online Tutor";
  textInPhoto.classList.add("textInPhoto");

  const photoPicture = document.createElement("picture");
  const sourceLarge = document.createElement("source");
  const sourceMedium = document.createElement("source");
  const photoImg = document.createElement("img");
  const myLargeImg = new Image();
  myLargeImg.src = _assets_img_large_img_jpg__WEBPACK_IMPORTED_MODULE_2__;
  sourceLarge.setAttribute("srcset", myLargeImg.src);
  sourceLarge.setAttribute("media", "(min-width: 981px)");
  const myMediumImg = new Image();
  myMediumImg.src = _assets_img_medium_img_jpg__WEBPACK_IMPORTED_MODULE_1__;
  sourceMedium.setAttribute("srcset", myMediumImg.src);
  sourceMedium.setAttribute("media", "(min-width:621px) and (max-width:980px)");
  const mySmallImg = new Image();
  mySmallImg.src = _assets_img_small_img_jpg__WEBPACK_IMPORTED_MODULE_0__;
  photoImg.setAttribute("src", mySmallImg.src);
  photoImg.setAttribute("alt", "");
  photoImg.classList.add("photoImg");

  const aboutMe = document.createElement("section");
  const aboutMeHeading1 = document.createElement("H2");
  const aboutMeHeading2 = document.createElement("H2");
  const aboutMeText1 = document.createElement("p");
  const aboutMeText2 = document.createElement("p");
  const aboutMeIcons = document.createElement("div");
  const linkedinLink = document.createElement("a");

  aboutMe.classList.add("content");
  aboutMeHeading1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.titleAbout1;
  aboutMeHeading2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.titleAbout2;
  aboutMeText1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentAboutMe1;
  aboutMeText1.classList.add("text");
  aboutMeText2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentAboutMe2;
  aboutMeText2.classList.add("text");
  aboutMeIcons.classList.add("divIcons");

  linkedinLink.setAttribute("href", _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.linkedinAccount);
  linkedinLink.setAttribute("target", "_blank");
  const linkedinImg = new Image();
  linkedinImg.src = _assets_icons_source__WEBPACK_IMPORTED_MODULE_9__.linkedin;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(
    linkedinLink,
    linkedinImg.src,
    "Linkedin",
    "iconImg",
    "30px",
    "30px"
  );

  // PROJECTS CONTENT
  const main = document.createElement("main");
  const content = document.createElement("section");
  content.classList.add("contentProject");

  for (let i = 0; i < _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.length; i++) {
    const project = document.createElement("article");
    project.setAttribute("id", `lang${i + 1}`);
    content.appendChild(project);
  }

  const allProjectsDiv = content.querySelectorAll("article");
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const div1 = document.createElement("div");
    div1.classList.add("divImgArticle");
    const screenshot = new Image();
    const div2 = document.createElement("div");
    div2.classList.add("divNameArticle");
    const name = document.createElement("h3");
    name.setAttribute("style", "grid-column:1/2");
    const links = document.createElement("div");
    links.setAttribute("style", "grid-column:2/3");
   
    const div3 = document.createElement("div");
    div3.classList.add("divDescriptionArticle");
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    const description3 = document.createElement("p");

    _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.map((e) => {
      switch (e.id === x.getAttribute("id")) {
        case true:
          screenshot.src = e.screenshotProjectSource;
          (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(div1, screenshot.src, "", "projectImg", "30px", "10px");
          name.textContent = e.projectName;
          description1.textContent = e.projectDescription1;
          description2.textContent = e.projectDescription2;
          description3.textContent = e.projectDescription3;
          if (x.getAttribute("id") === "lang1") {
            x.classList.add("show");
          } else {
            x.classList.add("hide");
          }
          break;
        case false:
          break;
      }
    });

    x.appendChild(div1);
    x.appendChild(div2);
    x.appendChild(div3);
    div2.appendChild(name);
    div2.appendChild(links);

    div3.appendChild(description1);
    div3.appendChild(description2);
    div3.appendChild(description3);
  });

  const selectLanguage = document.createElement("fieldset");

  _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.map((e) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = e.language;
    label.setAttribute("for", e.language);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "language");
    input.setAttribute("value", e.id);
    input.setAttribute("id", e.language);

    input.addEventListener("change", () => {
      displayRadioValue();
    });

    if (input.getAttribute("id") === "português") {
      input.setAttribute("checked", "true");
    }

    selectLanguage.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  });

  let selectedLang = "lang1";
  let allOptions = [];
  _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.map((e) => {
    allOptions.push(e.id);
  });

  function displayRadioValue() {
    let getSelectedValue = document.querySelector(
      'input[name="language"]:checked'
    );
    if (getSelectedValue != null) {
      selectedLang = getSelectedValue.value;
      displaySelectedText(selectedLang, allOptions);
    }
  }

  function displaySelectedText(selectedLang, allOptions) {
    const rest = allOptions.filter((string) => string !== selectedLang);
    const show = document.getElementById(`${selectedLang}`);
    show.classList.add("show");
    show.classList.remove("hide");
    rest.forEach((e) => {
      const hide = document.getElementById(e);
      hide.className = "hide";
    });
  }

  const photoReviews = document.createElement("picture");
  const sourceLargeAndMedium = document.createElement("source");
  const photoReviewsImg = document.createElement("img");
  const myLargeRevImg = new Image();
  myLargeRevImg.src = _assets_img_img_rev_large_png__WEBPACK_IMPORTED_MODULE_3__;
  sourceLargeAndMedium.setAttribute("srcset", myLargeRevImg.src);
  sourceLargeAndMedium.setAttribute("media", "(min-width: 621px)");
  const mySmallRevImg = new Image();
  mySmallRevImg.src = _assets_img_img_rev_small_png__WEBPACK_IMPORTED_MODULE_4__;
  photoReviewsImg.setAttribute("src", mySmallRevImg.src);
  photoReviewsImg.setAttribute("alt", "reviews");
  photoReviewsImg.classList.add("photoImgReviews");
  

  // FOOTER
  const footer = document.createElement("footer");
  const contactMe = document.createElement("section");
  const contactMeHeading = document.createElement("H2");
  const contactMeText = document.createElement("p");
  const contactMeText1 = document.createElement("p");
  const mailAddress = document.createElement("p");
  contactMeHeading.textContent = "Contact me";
  contactMeText.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentContactMe;
  contactMeText1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentContactMe1;

  mailAddress.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.mailText;
 
  const emailImg = new Image();
  emailImg.src = _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_7__;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(
    contactMe,
    emailImg.src,
    "email-address",
    "iconImg",
    "30px",
    "30px"
  );
  const contactMeIcons = document.createElement("div");

  const contactMelinkedinLink = document.createElement("a");

  contactMelinkedinLink.setAttribute("href", _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.linkedinAccount);
  contactMelinkedinLink.setAttribute("target", "_blank");
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(
    contactMelinkedinLink,
    linkedinImg.src,
    "Linkedin",
    "iconImg",
    "30px",
    "30px"
  );
  const linkedinTxt = document.createElement('p');
  linkedinTxt.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.linkedinAccountTxt;

  const imgFooter = document.createElement("img");
  const photoJD = new Image();
  photoJD.src = _assets_img_footer_img_png__WEBPACK_IMPORTED_MODULE_5__;
  imgFooter.classList.add("photoFooter");
  imgFooter.setAttribute("src", photoJD.src);
  imgFooter.setAttribute("width", "auto");
  imgFooter.setAttribute("height", "250px");
  imgFooter.setAttribute("alt", "javier diaz");

  document.body.appendChild(flashMessages);
  document.body.appendChild(themeButton);
  document.body.appendChild(bgDivFirst);
  document.body.appendChild(bgDivSecond);

  bgDivFirst.appendChild(pageContainer);
  bgDivSecond.appendChild(footer);
  pageContainer.appendChild(header);
  pageContainer.appendChild(main);
  header.appendChild(photoPicture);
  header.appendChild(aboutMe);
  photoPicture.appendChild(sourceLarge);
  photoPicture.appendChild(sourceMedium);
  photoPicture.appendChild(photoImg);
  photoPicture.appendChild(textInPhoto);
  aboutMe.appendChild(aboutMeHeading1);
  aboutMe.appendChild(aboutMeText1);
  aboutMe.appendChild(aboutMeHeading2);
  aboutMe.appendChild(aboutMeText2);
  aboutMe.appendChild(aboutMeIcons);
  aboutMeIcons.appendChild(linkedinLink);

  main.appendChild(selectLanguage);
  main.appendChild(content);
  content.appendChild(photoReviews);
  photoReviews.appendChild(sourceLargeAndMedium);
  photoReviews.appendChild(photoReviewsImg);

  footer.appendChild(contactMe);
  footer.appendChild(imgFooter);
  contactMe.appendChild(contactMeHeading);
  contactMe.appendChild(contactMeText);
  contactMe.appendChild(contactMeText1);
  contactMe.appendChild(mailAddress);
  contactMe.appendChild(contactMeIcons);
  contactMeIcons.appendChild(contactMelinkedinLink);
  contactMeIcons.appendChild(linkedinTxt);
}




/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35a2ae1dd3ae36ec19a3.jpg";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd2d39af865e3021ff4f.jpg";

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c57daea1a7076e9a242e.jpg";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74d19083871061e4a0fa.png";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "349abd88228f816a8a7c.png";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80c651aaf78bdc015fca.png";

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dbe4ad4e46c54f19979.png";

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fd29b2b9c11a6531107.png";

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayProjects: () => (/* binding */ arrayProjects),
/* harmony export */   linkedinAccount: () => (/* binding */ linkedinAccount),
/* harmony export */   linkedinAccountTxt: () => (/* binding */ linkedinAccountTxt),
/* harmony export */   mailText: () => (/* binding */ mailText),
/* harmony export */   textContentAboutMe1: () => (/* binding */ textContentAboutMe1),
/* harmony export */   textContentAboutMe2: () => (/* binding */ textContentAboutMe2),
/* harmony export */   textContentContactMe: () => (/* binding */ textContentContactMe),
/* harmony export */   textContentContactMe1: () => (/* binding */ textContentContactMe1),
/* harmony export */   titleAbout1: () => (/* binding */ titleAbout1),
/* harmony export */   titleAbout2: () => (/* binding */ titleAbout2)
/* harmony export */ });
/* harmony import */ var _img_screenshot_project1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _img_screenshot_project2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _img_screenshot_project3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _class_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);






const titleAbout1 = "Conheça Javier";
const titleAbout2 = "Meet Javier";
const textContentAboutMe1 =
  'Javier Diaz é um professor de espanhol com mais de cinco anos de experiência em ensino on-line.';
const textContentAboutMe2 =
  'Javier Diaz is a Spanish tutor with more than five years of online teaching experience.';

const textContentContactMe =
  'Se você acha que meu trabalho se encaixa no que você precisa, escreva para mim.';
const textContentContactMe1 =
  'If you think my work fits what you need, write to me.';

const mailText = 'jjdiazb2@gmail.com';

const linkedinAccount = 'https://linkedin.com/in/javier-josé-díaz-borboa-33a7682';
const linkedinAccountTxt = 'linkedin.com/in/javier-josé-díaz-borboa-33a7682';

const project1 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('lang1');
project1.projectName = 'Mais de 5400 aulas para alunos de todo o mundo';
project1.projectDescription1 =
  'Reconhecido por sua abordagem prática, clareza e dedicação, Javier tem atraído especialmente profissionais brasileiros que buscam melhorar suas oportunidades de trabalho por meio do domínio do idioma espanhol.';
project1.projectDescription2 =
  'Javier tem 42 avaliações 5 estrelas que comprovam a qualidade de seu ensino. Suas aulas são 100% on-line, flexíveis e personalizadas de acordo com os objetivos e o ritmo de cada aluno. Em contextos profissionais reais, ajudando os alunos a se expressarem com confiança em reuniões, entrevistas e apresentações.';
project1.projectDescription3 =
  'Seu nível intermediário/avançado de inglês lhe permitiu atrair alunos da Europa e de países de língua inglesa. Ele também possui o certificado "How to Teach a Language" concedido pela Preply em reconhecimento ao seu treinamento em pedagogia de idiomas.';
project1.screenshotProjectSource = _img_screenshot_project1_png__WEBPACK_IMPORTED_MODULE_0__;
project1.linkedinHref = '#';  // poner aqui el enlace del certificado de Preply
project1.language = 'português';

const project2 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('lang2');
project2.projectName = 'More than 5400 lessons to students from all over the world';
project2.projectDescription1 =
  'Recognized for his practical approach, clarity and dedication, Javier has particularly attracted Brazilian professionals looking to improve their job opportunities by mastering the Spanish language.';
project2.projectDescription2 =
  'Javier has 42 reviews of 5 stars that endorse the quality of his teaching. His classes are 100% online, flexible, and personalized according to the goals and pace of each student. Within real professional contexts, helping students to express themselves confidently in meetings, interviews and presentations.';
project2.projectDescription3 =
  'His intermediate/advanced level English proficiency has allowed him to attract students from Europe and English speaking countries. He also has the "How to Teach a Language" certificate awarded by Preply as a support to his language pedagogy training.';
project2.screenshotProjectSource = _img_screenshot_project2_png__WEBPACK_IMPORTED_MODULE_1__;
project2.linkedinHref = '#';
project2.language = 'english';

const project3 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('lang3');
project3.projectName = 'Más de 5400 lecciones para estudiantes de todo el mundo';
project3.projectDescription1 =
  'Reconocido por su enfoque práctico, claridad y dedicación, Javier ha atraído especialmente a profesionales brasileños que buscan mejorar sus oportunidades laborales dominando el idioma español.';
project3.projectDescription2 =
  'Javier tiene 42 reseñas de 5 estrellas que demuestran la calidad de su enseñanza. Sus clases son 100% online, flexibles y personalizadas según los objetivos y el ritmo de cada alumno. En contextos profesionales reales, ayudando a los estudiantes a expresarse con confianza en reuniones, entrevistas y presentaciones.';
project3.projectDescription3 =
  'Su dominio del inglés a nivel intermedio/avanzado le ha permitido atraer a estudiantes de Europa y de países de habla inglesa. Además, cuenta con el certificado "How to Teach a Language" otorgado por Preply como respaldo a su formación en pedagogía lingüística.';
project3.screenshotProjectSource = _img_screenshot_project3_png__WEBPACK_IMPORTED_MODULE_2__;
project3.linkedinHref = '#';
project3.language = 'español';

const arrayProjects = [
  project1,
  project2,
  project3,
];




/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "771e9f21d22857a66a14.png";

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c8161d4527c589100ba.png";

/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20e6886519ef3b5decdf.png";

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(value) {
    this.id = value;
    this.projectName = '';
    this.projectDescription1 = '';
    this.projectDescription2 = '';
    this.projectDescription3 = '';
    this.screenshotProjectSource = '';
    this.linkedinHref = '';
    this.language = '';
  }
}




/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkedin: () => (/* binding */ linkedin)
/* harmony export */ });
/* ICONS */

  const linkedin =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg';




/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertImg: () => (/* binding */ insertImg)
/* harmony export */ });
function insertImg(arg1, arg2, arg3, arg4,arg5,arg6) {
  // arg1 is the parent div - arg2 is the source
  // arg3 is the alt text - arg4 is the class
  // arg5 is the width - arg6 is the height
  const img = document.createElement('img');
  img.setAttribute('src', arg2);
  img.setAttribute('alt', arg3);
  img.setAttribute('width', arg5);
  img.setAttribute('height', arg6);
  img.classList.add(arg4);
  arg1.appendChild(img);
}




/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _styles_style_large_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _styles_style_medium_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _components_google_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);







const meta = document.createElement('meta');
meta.setAttribute('name','description');
meta.setAttribute('content','learning spanish online tutor javier diaz');

(0,_components_google_fonts__WEBPACK_IMPORTED_MODULE_4__.googleFonts)();
(0,_components_homepage__WEBPACK_IMPORTED_MODULE_5__.homepage)();

document.head.appendChild(meta);
 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVks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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDZGQUE2RixLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZ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QUFDTTtBQUNDO0FBQ3FCO0FBQ1A7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxxRUFBVztBQUNYLDhEQUFROztBQUVSO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLXJlc2V0LmNzcz9jNGQ2Iiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUtcmVzZXQuY3NzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUtbGFyZ2UuY3NzPzAwOWUiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUtbGFyZ2UuY3NzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLW1lZGl1bS5jc3M/Zjk5YiIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS1tZWRpdW0uY3NzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9nb29nbGUtZm9udHMuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvYXNzZXRzL3RleHQtY29udGVudC5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy9jbGFzcy1wcm9qZWN0LmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvYXNzZXRzL2ljb25zLXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5zZXJ0SW1nLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0NBQ0M7OztDQUdBOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxrQ0FBa0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaDEsaDIsaDMge1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ucGhvdG9JbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBob3RvSW1nUmV2aWV3cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaWNvbkltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wcm9qZWN0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcbn1cblxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIC0gc3RhcnRzKi9cbi5saWdodCB7XG4gIC0tY29sb3ItYmctZmlyc3Q6ICNmNWY4ZmE7XG4gIC0tY29sb3ItYmctaGVhZGVyOiAjYTdjMGQyO1xuICAtLWNvbG9yLWJnLXNlY3Rpb246IHdoaXRlO1xuICAtLWNvbG9yLWJnLWFydGljbGU6ICNkMGRkZTc7XG4gIC0tY29sb3ItYXJ0aWNsZS1zaGFkb3c6ICNhN2MwZDI7XG4gIC0tY29sb3ItYmctc2Vjb25kOiAjYTdjMGQyO1xuICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTogIzJjM2U0ZTtcbiAgLS1jb2xvci1iYXNlLXRleHQ6ICMzMTQ4NWI7XG4gIC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGU6ICMyYzNlNGU7XG59XG5cbi5kYXJrIHtcbiAgLS1jb2xvci1iZy1maXJzdDogIzM3NTU2ZDtcbiAgLS1jb2xvci1iZy1oZWFkZXI6ICMzNzU1NmQ7XG4gIC0tY29sb3ItYmctc2VjdGlvbjogIzM3NTU2ZDtcbiAgLS1jb2xvci1iZy1hcnRpY2xlOiAjMzE0ODViO1xuICAtLWNvbG9yLWFydGljbGUtc2hhZG93OiAjNDM2OTg2O1xuICAtLWNvbG9yLWJnLXNlY29uZDogIzM3NTU2ZDtcbiAgLS1jb2xvci1iYXNlLXRleHQtdGl0bGU6ICNlYWVmZjQ7XG4gIC0tY29sb3ItYmFzZS10ZXh0OiAjZWFlZmY0O1xuICAtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlOiAjZWFlZmY0O1xufVxuXG4uYmdEaXZGaXJzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWZpcnN0KTtcbn1cblxuLmJnRGl2Rmlyc3QgPiBkaXYgPiBoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1oZWFkZXIpO1xufVxuXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciA+IHNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcbn1cblxuYXJ0aWNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWFydGljbGUpO1xufVxuXG4uYmdEaXZTZWNvbmQge1xuICAvKmZvb3RlciovXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQpO1xufVxuXG4vKiBkZWZpbmUgYmFja2dyb3VuZCBjb2xvcnMgZW5kICovXG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOGZyIGF1dG8tZml0O1xufVxuXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyID4gcGljdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHRJblBob3RvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMTAwJSk7XG4gIC8qIHRyYW5zbGF0ZSBYLFkgKi9cbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6ICNmOWY3Zjc7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnBhZ2UtY29udGFpbmVyID4gbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gIC8qIGFib3V0TWUqL1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDIge1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jb250ZW50UHJvamVjdCB7XG4gIC8qIG15IHdvcmsqL1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmFydGljbGUge1xuICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuNyAqIDEwMHZ3KTtcbiAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAvKiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuNik7ICovXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItYXJ0aWNsZS1zaGFkb3cpIDJweCAycHggNHB4IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbmFydGljbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjA5NWZyIDAuMDA1ZnIgMC45ZnI7XG59XG5cbi5kaXZJbWdBcnRpY2xlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItYmctZmlyc3QpIDJweCAycHggMnB4IDJweDtcbn1cblxuLmRpdk5hbWVBcnRpY2xlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbn1cblxuLmRpdk5hbWVBcnRpY2xlID4gaDMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGUpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4uZGl2TmFtZUFydGljbGUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzLjUlO1xufVxuXG4uZGl2RGVzY3JpcHRpb25BcnRpY2xlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG4gIHJvdy1nYXA6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZGl2RGVzY3JpcHRpb25BcnRpY2xlID4gcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgdGV4dC1qdXN0aWZ5OiBkaXN0cmlidXRlO1xufVxuXG4ucHJvamVjdEltZyB7XG4gIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAwLjI1ICogMC43KTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcbn1cblxuLnRleHQge1xuICBmbGV4LXNocmluazogMTtcbiAgcGFkZGluZzogNSU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kaXZJY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG5mb290ZXIge1xuICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOiBjYWxjKDAuNyAqIDEwMHZoKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xufVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgN2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjJmciAxLjJmciAxZnIgMC43ZnI7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBoMiB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAge1xuICBncmlkLXJvdzogMi8zO1xuICBncmlkLWNvbHVtbjogMS80O1xuICByb3ctZ2FwOiAxLjE7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgcm93LWdhcDogMS4xO1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCArIHAge1xuICBncmlkLXJvdzogNC81O1xuICBncmlkLWNvbHVtbjogMy80O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcbiAgZ3JpZC1yb3c6IDQvNTtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cblxuXG5mb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcbiAgZ3JpZC1yb3c6IDUvNjtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbn1cblxuZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5waG90b0Zvb3RlciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLypidXR0b25zKi9cblxuLnRoZW1lQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQlO1xuICByaWdodDogMyU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWZpcnN0KTtcblxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aGVtZUJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XG59XG5cbi50aGVtZUJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWFydGljbGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XG59XG5cbmEge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbmE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5hOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Is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QUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUNBQXVDOztFQUV2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5oMSxoMixoMyB7XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcXG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5waG90b0ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucGhvdG9JbWdSZXZpZXdzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5pY29uSW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xcbn1cXG5cXG4vKiBkZWZpbmUgYmFja2dyb3VuZCBjb2xvcnMgLSBzdGFydHMqL1xcbi5saWdodCB7XFxuICAtLWNvbG9yLWJnLWZpcnN0OiAjZjVmOGZhO1xcbiAgLS1jb2xvci1iZy1oZWFkZXI6ICNhN2MwZDI7XFxuICAtLWNvbG9yLWJnLXNlY3Rpb246IHdoaXRlO1xcbiAgLS1jb2xvci1iZy1hcnRpY2xlOiAjZDBkZGU3O1xcbiAgLS1jb2xvci1hcnRpY2xlLXNoYWRvdzogI2E3YzBkMjtcXG4gIC0tY29sb3ItYmctc2Vjb25kOiAjYTdjMGQyO1xcbiAgLS1jb2xvci1iYXNlLXRleHQtdGl0bGU6ICMyYzNlNGU7XFxuICAtLWNvbG9yLWJhc2UtdGV4dDogIzMxNDg1YjtcXG4gIC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGU6ICMyYzNlNGU7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tY29sb3ItYmctZmlyc3Q6ICMzNzU1NmQ7XFxuICAtLWNvbG9yLWJnLWhlYWRlcjogIzM3NTU2ZDtcXG4gIC0tY29sb3ItYmctc2VjdGlvbjogIzM3NTU2ZDtcXG4gIC0tY29sb3ItYmctYXJ0aWNsZTogIzMxNDg1YjtcXG4gIC0tY29sb3ItYXJ0aWNsZS1zaGFkb3c6ICM0MzY5ODY7XFxuICAtLWNvbG9yLWJnLXNlY29uZDogIzM3NTU2ZDtcXG4gIC0tY29sb3ItYmFzZS10ZXh0LXRpdGxlOiAjZWFlZmY0O1xcbiAgLS1jb2xvci1iYXNlLXRleHQ6ICNlYWVmZjQ7XFxuICAtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlOiAjZWFlZmY0O1xcbn1cXG5cXG4uYmdEaXZGaXJzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1maXJzdCk7XFxufVxcblxcbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWhlYWRlcik7XFxufVxcblxcbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyID4gc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hcnRpY2xlKTtcXG59XFxuXFxuLmJnRGl2U2Vjb25kIHtcXG4gIC8qZm9vdGVyKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY29uZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcXG59XFxuXFxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIGVuZCAqL1xcblxcbi5wYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuOGZyIGF1dG8tZml0O1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyID4gcGljdHVyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0SW5QaG90byB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMTAwJSk7XFxuICAvKiB0cmFuc2xhdGUgWCxZICovXFxuICB3aWR0aDogODAlO1xcbiAgY29sb3I6ICNmOWY3Zjc7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciA+IG1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIC8qIGFib3V0TWUqL1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGdhcDogMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDIge1xcbiAgcGFkZGluZy10b3A6IDElO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC10aXRsZSk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250ZW50UHJvamVjdCB7XFxuICAvKiBteSB3b3JrKi9cXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuNyAqIDEwMHZ3KTtcXG4gIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxuIC8qICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi42KTsgKi9cXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1hcnRpY2xlLXNoYWRvdykgMnB4IDJweCA0cHggMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbmFydGljbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjA5NWZyIDAuMDA1ZnIgMC45ZnI7XFxufVxcblxcbi5kaXZJbWdBcnRpY2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItYmctZmlyc3QpIDJweCAycHggMnB4IDJweDtcXG59XFxuXFxuLmRpdk5hbWVBcnRpY2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG5cXG4uZGl2TmFtZUFydGljbGUgPiBoMyB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXG4gIHBhZGRpbmctdG9wOiAzJTtcXG59XFxuXFxuLmRpdk5hbWVBcnRpY2xlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAzLjUlO1xcbn1cXG5cXG4uZGl2RGVzY3JpcHRpb25BcnRpY2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG4gIHJvdy1nYXA6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XFxufVxcblxcbi5wcm9qZWN0SW1nIHtcXG4gIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4yNSAqIDAuNyk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG59XFxuXFxuLnRleHQge1xcbiAgZmxleC1zaHJpbms6IDE7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRpdkljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjcgKiAxMDB2aCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuZm9vdGVyID4gc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA3ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjJmciAxLjJmciAxZnIgMC43ZnI7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gIHJvdy1nYXA6IDEuMTtcXG59XFxuXFxuZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCArIHAge1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICByb3ctZ2FwOiAxLjE7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwICsgcCB7XFxuICBncmlkLXJvdzogNC81O1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuZm9vdGVyID4gc2VjdGlvbiA+IGltZyB7XFxuICBncmlkLXJvdzogNC81O1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuXFxuZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XFxuICBncmlkLXJvdzogNS82O1xcbiAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGhvdG9Gb290ZXIge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qYnV0dG9ucyovXFxuXFxuLnRoZW1lQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNCU7XFxuICByaWdodDogMyU7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctZmlyc3QpO1xcblxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGhlbWVCdXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XFxufVxcblxcbi50aGVtZUJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XFxufVxcblxcbmEge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1sYXJnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1sYXJnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIHtcbiAgLnBob3RvSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5waG90b0ltZ1Jldmlld3Mge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAudGV4dEluUGhvdG8ge1xuICAgIGZvbnQtc2l6ZTogNS42cmVtO1xuICB9XG5cbiAgLnRoZW1lQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzJTtcbiAgICByaWdodDogMyU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIDJmcjtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucGFnZS1jb250YWluZXIgPiBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxZnI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZGl2SWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICBtYWluID4gZmllbGRzZXQge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIH1cblxuICAuY29udGVudFByb2plY3Qge1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICBhcnRpY2xlIHtcbiAgICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuODIgKiAoMTAwdncgLyAzKSk7XG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgIC8qICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4xKTsgKi9cbiAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICBwYWRkaW5nLXRvcDogMTBweDtcbiAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLnByb2plY3RJbWcge1xuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMyAqIDAuNyk7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xuICB9XG5cbiAgLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjQ1ICogMTAwdmgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBmb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwe1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG5cbiAgZm9vdGVyID4gc2VjdGlvbiA+IGltZyB7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgfVxuXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwICsgcHtcbiAgICBncmlkLXJvdzogNC81O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG5cbiAgZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XG4gICAgZ3JpZC1yb3c6IDUvNjtcbiAgICBncmlkLWNvbHVtbjogMy80O1xuICB9XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS1sYXJnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLDRCQUE0QjtHQUM3QixnREFBZ0Q7R0FDaEQsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsb0JBQW9CO0VBQ3JCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xcbiAgLnBob3RvSW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgLnBob3RvSW1nUmV2aWV3cyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG5cXG4gIC50ZXh0SW5QaG90byB7XFxuICAgIGZvbnQtc2l6ZTogNS42cmVtO1xcbiAgfVxcblxcbiAgLnRoZW1lQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMlO1xcbiAgICByaWdodDogMyU7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciAyZnI7XFxuICB9XFxuXFxuICAucGFnZS1jb250YWluZXIgPiBoZWFkZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAucGFnZS1jb250YWluZXIgPiBtYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGl2SWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgbWFpbiA+IGZpZWxkc2V0IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XFxuICB9XFxuXFxuICAuY29udGVudFByb2plY3Qge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC44MiAqICgxMDB2dyAvIDMpKTtcXG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gICAvKiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuMSk7ICovXFxuICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAwLjMgKiAwLjcpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xcbiAgfVxcblxcbiAgLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xcbiAgICBwYWRkaW5nLXRvcDogMyU7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOiBjYWxjKDAuNDUgKiAxMDB2aCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCArIHB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGltZyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwICsgcHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgfVxcblxcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbWVkaXVtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1lZGl1bS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIxcHgpIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAucGhvdG9JbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLnRleHRJblBob3RvIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgfVxuXG4gIC5waG90b0ltZ1Jldmlld3Mge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAudGhlbWVCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8tZml0O1xuICB9XG5cbiAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXZJY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5jb250ZW50UHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIGFydGljbGUge1xuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43NSAqICgxMDB2dyAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAvKiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuMSk7ICovXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLnByb2plY3RJbWcge1xuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMyAqIDAuNyk7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOiBjYWxjKDAuMyAqIDEwMHZoKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiBcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUtbWVkaXVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixtQkFBbUI7R0FDcEIsZ0RBQWdEO0lBQy9DLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQjtJQUNqQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjFweCkgYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAucGhvdG9JbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuXFxuICAudGV4dEluUGhvdG8ge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gIH1cXG5cXG4gIC5waG90b0ltZ1Jldmlld3Mge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuXFxuICAudGhlbWVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMiU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvLWZpdDtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kaXZJY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAuY29udGVudFByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43NSAqICgxMDB2dyAvIDIpKTtcXG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAvKiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAwLjMgKiAwLjcpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjMgKiAxMDB2aCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiBcXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZnVuY3Rpb24gZ29vZ2xlRm9udHMoKSB7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluazEuc2V0QXR0cmlidXRlKCdyZWwnLCAncHJlY29ubmVjdCcpO1xuICAgIGxpbmsxLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyk7XG4gICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluazIuc2V0QXR0cmlidXRlKCdyZWwnLCAncHJlY29ubmVjdCcpO1xuICAgIGxpbmsyLnNldEF0dHJpYnV0ZSgnaHJlZicsICdocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScpO1xuICAgIGxpbmsyLnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnJyk7XG4gICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluazMuc2V0QXR0cmlidXRlKFxuICAgICAgJ2hyZWYnLFxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCdcbiAgICApO1xuICAgIGxpbmszLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBjb25zdCBsaW5rNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rNC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnaHJlZicsXG4gICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJ1xuICAgICk7XG4gICAgbGluazQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICBcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmsxKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmsyKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmszKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbms0KTtcbiAgfVxuICBcbiAgZXhwb3J0IHsgZ29vZ2xlRm9udHMgfTsiLCJpbXBvcnQgaW1hZ2VTbWFsbCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9zbWFsbC1pbWcuanBnXCI7XG5pbXBvcnQgaW1hZ2VNZWRpdW0gZnJvbSBcIi4uL2Fzc2V0cy9pbWcvbWVkaXVtLWltZy5qcGdcIjtcbmltcG9ydCBpbWFnZUxhcmdlIGZyb20gXCIuLi9hc3NldHMvaW1nL2xhcmdlLWltZy5qcGdcIjtcbmltcG9ydCBpbWdSZXZpZXdzTGFyZ2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvaW1nLXJldi1sYXJnZS5wbmdcIjtcbmltcG9ydCBpbWdSZXZpZXdzU21hbGwgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvaW1nLXJldi1zbWFsbC5wbmdcIjtcbmltcG9ydCBwaG90b0Zvb3RlciBmcm9tIFwiLi4vYXNzZXRzL2ltZy9mb290ZXItaW1nLnBuZ1wiO1xuaW1wb3J0IGNoYW5nZVRoZW1lIGZyb20gXCIuLi9hc3NldHMvaW1nL3RoZW1lLWxpZ2h0LWRhcmsucG5nXCI7XG5pbXBvcnQgZW1haWxJY29uIGZyb20gXCIuLi9hc3NldHMvaW1nL2VtYWlsLW91dGxpbmUucG5nXCI7XG5pbXBvcnQge1xuICB0aXRsZUFib3V0MSxcbiAgdGl0bGVBYm91dDIsXG4gIHRleHRDb250ZW50QWJvdXRNZTEsXG4gIHRleHRDb250ZW50QWJvdXRNZTIsXG59IGZyb20gXCIuLi9hc3NldHMvdGV4dC1jb250ZW50XCI7XG5pbXBvcnQgeyBsaW5rZWRpbkFjY291bnQsIGxpbmtlZGluQWNjb3VudFR4dCB9IGZyb20gXCIuLi9hc3NldHMvdGV4dC1jb250ZW50XCI7XG5pbXBvcnQgeyB0ZXh0Q29udGVudENvbnRhY3RNZSwgdGV4dENvbnRlbnRDb250YWN0TWUxICxtYWlsVGV4dCB9IGZyb20gXCIuLi9hc3NldHMvdGV4dC1jb250ZW50XCI7XG5pbXBvcnQgeyBhcnJheVByb2plY3RzIH0gZnJvbSBcIi4uL2Fzc2V0cy90ZXh0LWNvbnRlbnRcIjtcbmltcG9ydCB7IGxpbmtlZGluIH0gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy1zb3VyY2VcIjtcbmltcG9ydCB7IGluc2VydEltZyB9IGZyb20gXCIuL2luc2VydEltZ1wiO1xuXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJsYW5nXCIsIFwiZW5cIik7XG4gIHJvb3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyb290LWVsZW1lbnRcIik7XG4gIHJvb3QuY2xhc3NOYW1lID0gXCJsaWdodFwiO1xuXG4gIGNvbnN0IGZsYXNoTWVzc2FnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmbGFzaE1lc3NhZ2VzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmxhc2gtbWVzc2FnZXNcIik7XG5cbiAgY29uc3QgdGhlbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0aGVtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGhlbWVCdXR0b25cIik7XG4gIGNvbnN0IGNoYW5nZVRoZW1lSW1nID0gbmV3IEltYWdlKCk7XG4gIGNoYW5nZVRoZW1lSW1nLnNyYyA9IGNoYW5nZVRoZW1lO1xuICBpbnNlcnRJbWcoXG4gICAgdGhlbWVCdXR0b24sXG4gICAgY2hhbmdlVGhlbWVJbWcuc3JjLFxuICAgIFwidGhlbWUtbGlnaHQtZGFya1wiLFxuICAgIFwiaWNvbkltZ1wiLFxuICAgIFwiMzBweFwiLFxuICAgIFwiMzBweFwiXG4gICk7XG4gIHRoZW1lQnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyLXJhZGl1czogMzBweDtcIik7XG4gIHRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2V0VGhlbWUoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2V0VGhlbWUoKSB7XG4gICAgY29uc3QgbmV3VGhlbWUgPSByb290LmNsYXNzTmFtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcbiAgICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xuICB9XG5cbiAgLy8gYmFja2dyb3VuZCBjb2xvcnNcbiAgY29uc3QgYmdEaXZGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJnRGl2Rmlyc3QuY2xhc3NMaXN0LmFkZChcImJnRGl2Rmlyc3RcIik7XG4gIGNvbnN0IGJnRGl2U2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmdEaXZTZWNvbmQuY2xhc3NMaXN0LmFkZChcImJnRGl2U2Vjb25kXCIpO1xuXG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRhaW5lclwiKTtcblxuICAvLyBIRUFERVJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgdGV4dEluUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDJcIik7XG4gIHRleHRJblBob3RvLnRleHRDb250ZW50ID0gXCJPbmxpbmUgVHV0b3JcIjtcbiAgdGV4dEluUGhvdG8uY2xhc3NMaXN0LmFkZChcInRleHRJblBob3RvXCIpO1xuXG4gIGNvbnN0IHBob3RvUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xuICBjb25zdCBzb3VyY2VMYXJnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gIGNvbnN0IHNvdXJjZU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gIGNvbnN0IHBob3RvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbXlMYXJnZUltZyA9IG5ldyBJbWFnZSgpO1xuICBteUxhcmdlSW1nLnNyYyA9IGltYWdlTGFyZ2U7XG4gIHNvdXJjZUxhcmdlLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLCBteUxhcmdlSW1nLnNyYyk7XG4gIHNvdXJjZUxhcmdlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIFwiKG1pbi13aWR0aDogOTgxcHgpXCIpO1xuICBjb25zdCBteU1lZGl1bUltZyA9IG5ldyBJbWFnZSgpO1xuICBteU1lZGl1bUltZy5zcmMgPSBpbWFnZU1lZGl1bTtcbiAgc291cmNlTWVkaXVtLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLCBteU1lZGl1bUltZy5zcmMpO1xuICBzb3VyY2VNZWRpdW0uc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCIobWluLXdpZHRoOjYyMXB4KSBhbmQgKG1heC13aWR0aDo5ODBweClcIik7XG4gIGNvbnN0IG15U21hbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbXlTbWFsbEltZy5zcmMgPSBpbWFnZVNtYWxsO1xuICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbXlTbWFsbEltZy5zcmMpO1xuICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XG4gIHBob3RvSW1nLmNsYXNzTGlzdC5hZGQoXCJwaG90b0ltZ1wiKTtcblxuICBjb25zdCBhYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGFib3V0TWVIZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMlwiKTtcbiAgY29uc3QgYWJvdXRNZUhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgyXCIpO1xuICBjb25zdCBhYm91dE1lVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYWJvdXRNZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGFib3V0TWVJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxpbmtlZGluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIGFib3V0TWUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGFib3V0TWVIZWFkaW5nMS50ZXh0Q29udGVudCA9IHRpdGxlQWJvdXQxO1xuICBhYm91dE1lSGVhZGluZzIudGV4dENvbnRlbnQgPSB0aXRsZUFib3V0MjtcbiAgYWJvdXRNZVRleHQxLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRBYm91dE1lMTtcbiAgYWJvdXRNZVRleHQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBhYm91dE1lVGV4dDIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudEFib3V0TWUyO1xuICBhYm91dE1lVGV4dDIuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gIGFib3V0TWVJY29ucy5jbGFzc0xpc3QuYWRkKFwiZGl2SWNvbnNcIik7XG5cbiAgbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGlua2VkaW5BY2NvdW50KTtcbiAgbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgY29uc3QgbGlua2VkaW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbGlua2VkaW5JbWcuc3JjID0gbGlua2VkaW47XG4gIGluc2VydEltZyhcbiAgICBsaW5rZWRpbkxpbmssXG4gICAgbGlua2VkaW5JbWcuc3JjLFxuICAgIFwiTGlua2VkaW5cIixcbiAgICBcImljb25JbWdcIixcbiAgICBcIjMwcHhcIixcbiAgICBcIjMwcHhcIlxuICApO1xuXG4gIC8vIFBST0pFQ1RTIENPTlRFTlRcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRQcm9qZWN0XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBsYW5nJHtpICsgMX1gKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9XG5cbiAgY29uc3QgYWxsUHJvamVjdHNEaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhcnRpY2xlXCIpO1xuICBjb25zdCBwcm9qZWN0c0luRGl2ID0gWy4uLmFsbFByb2plY3RzRGl2XTtcbiAgY29uc3QgaXRlcmF0b3IgPSBwcm9qZWN0c0luRGl2LmVudHJpZXMoKTtcblxuICBwcm9qZWN0c0luRGl2LmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdjEuY2xhc3NMaXN0LmFkZChcImRpdkltZ0FydGljbGVcIik7XG4gICAgY29uc3Qgc2NyZWVuc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdjIuY2xhc3NMaXN0LmFkZChcImRpdk5hbWVBcnRpY2xlXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtY29sdW1uOjEvMlwiKTtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlua3Muc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjoyLzNcIik7XG4gICBcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYzLmNsYXNzTGlzdC5hZGQoXCJkaXZEZXNjcmlwdGlvbkFydGljbGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBhcnJheVByb2plY3RzLm1hcCgoZSkgPT4ge1xuICAgICAgc3dpdGNoIChlLmlkID09PSB4LmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICBzY3JlZW5zaG90LnNyYyA9IGUuc2NyZWVuc2hvdFByb2plY3RTb3VyY2U7XG4gICAgICAgICAgaW5zZXJ0SW1nKGRpdjEsIHNjcmVlbnNob3Quc3JjLCBcIlwiLCBcInByb2plY3RJbWdcIiwgXCIzMHB4XCIsIFwiMTBweFwiKTtcbiAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gZS5wcm9qZWN0TmFtZTtcbiAgICAgICAgICBkZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPSBlLnByb2plY3REZXNjcmlwdGlvbjE7XG4gICAgICAgICAgZGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gZS5wcm9qZWN0RGVzY3JpcHRpb24yO1xuICAgICAgICAgIGRlc2NyaXB0aW9uMy50ZXh0Q29udGVudCA9IGUucHJvamVjdERlc2NyaXB0aW9uMztcbiAgICAgICAgICBpZiAoeC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJsYW5nMVwiKSB7XG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHguYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgeC5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICB4LmFwcGVuZENoaWxkKGRpdjMpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChsaW5rcyk7XG5cbiAgICBkaXYzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMSk7XG4gICAgZGl2My5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjIpO1xuICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24zKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VsZWN0TGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cbiAgYXJyYXlQcm9qZWN0cy5tYXAoKGUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gZS5sYW5ndWFnZTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZS5sYW5ndWFnZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJsYW5ndWFnZVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlLmlkKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlLmxhbmd1YWdlKTtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVJhZGlvVmFsdWUoKTtcbiAgICB9KTtcblxuICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJwb3J0dWd1w6pzXCIpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cblxuICAgIHNlbGVjdExhbmd1YWdlLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICB9KTtcblxuICBsZXQgc2VsZWN0ZWRMYW5nID0gXCJsYW5nMVwiO1xuICBsZXQgYWxsT3B0aW9ucyA9IFtdO1xuICBhcnJheVByb2plY3RzLm1hcCgoZSkgPT4ge1xuICAgIGFsbE9wdGlvbnMucHVzaChlLmlkKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZGlzcGxheVJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W25hbWU9XCJsYW5ndWFnZVwiXTpjaGVja2VkJ1xuICAgICk7XG4gICAgaWYgKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWRMYW5nID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcbiAgICAgIGRpc3BsYXlTZWxlY3RlZFRleHQoc2VsZWN0ZWRMYW5nLCBhbGxPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5U2VsZWN0ZWRUZXh0KHNlbGVjdGVkTGFuZywgYWxsT3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3QgPSBhbGxPcHRpb25zLmZpbHRlcigoc3RyaW5nKSA9PiBzdHJpbmcgIT09IHNlbGVjdGVkTGFuZyk7XG4gICAgY29uc3Qgc2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NlbGVjdGVkTGFuZ31gKTtcbiAgICBzaG93LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIHNob3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgcmVzdC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBoaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7XG4gICAgICBoaWRlLmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcGhvdG9SZXZpZXdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBpY3R1cmVcIik7XG4gIGNvbnN0IHNvdXJjZUxhcmdlQW5kTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgY29uc3QgcGhvdG9SZXZpZXdzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbXlMYXJnZVJldkltZyA9IG5ldyBJbWFnZSgpO1xuICBteUxhcmdlUmV2SW1nLnNyYyA9IGltZ1Jldmlld3NMYXJnZTtcbiAgc291cmNlTGFyZ2VBbmRNZWRpdW0uc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIsIG15TGFyZ2VSZXZJbWcuc3JjKTtcbiAgc291cmNlTGFyZ2VBbmRNZWRpdW0uc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgXCIobWluLXdpZHRoOiA2MjFweClcIik7XG4gIGNvbnN0IG15U21hbGxSZXZJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbXlTbWFsbFJldkltZy5zcmMgPSBpbWdSZXZpZXdzU21hbGw7XG4gIHBob3RvUmV2aWV3c0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbXlTbWFsbFJldkltZy5zcmMpO1xuICBwaG90b1Jldmlld3NJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicmV2aWV3c1wiKTtcbiAgcGhvdG9SZXZpZXdzSW1nLmNsYXNzTGlzdC5hZGQoXCJwaG90b0ltZ1Jldmlld3NcIik7XG4gIFxuXG4gIC8vIEZPT1RFUlxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBjb250YWN0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgY29udGFjdE1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMlwiKTtcbiAgY29uc3QgY29udGFjdE1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0TWVUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0TWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IG1lXCI7XG4gIGNvbnRhY3RNZVRleHQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudENvbnRhY3RNZTtcbiAgY29udGFjdE1lVGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudENvbnRhY3RNZTE7XG5cbiAgbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSBtYWlsVGV4dDtcbiBcbiAgY29uc3QgZW1haWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZW1haWxJbWcuc3JjID0gZW1haWxJY29uO1xuICBpbnNlcnRJbWcoXG4gICAgY29udGFjdE1lLFxuICAgIGVtYWlsSW1nLnNyYyxcbiAgICBcImVtYWlsLWFkZHJlc3NcIixcbiAgICBcImljb25JbWdcIixcbiAgICBcIjMwcHhcIixcbiAgICBcIjMwcHhcIlxuICApO1xuICBjb25zdCBjb250YWN0TWVJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgY29udGFjdE1lbGlua2VkaW5MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgY29udGFjdE1lbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGlua2VkaW5BY2NvdW50KTtcbiAgY29udGFjdE1lbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgaW5zZXJ0SW1nKFxuICAgIGNvbnRhY3RNZWxpbmtlZGluTGluayxcbiAgICBsaW5rZWRpbkltZy5zcmMsXG4gICAgXCJMaW5rZWRpblwiLFxuICAgIFwiaWNvbkltZ1wiLFxuICAgIFwiMzBweFwiLFxuICAgIFwiMzBweFwiXG4gICk7XG4gIGNvbnN0IGxpbmtlZGluVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaW5rZWRpblR4dC50ZXh0Q29udGVudCA9IGxpbmtlZGluQWNjb3VudFR4dDtcblxuICBjb25zdCBpbWdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBwaG90b0pEID0gbmV3IEltYWdlKCk7XG4gIHBob3RvSkQuc3JjID0gcGhvdG9Gb290ZXI7XG4gIGltZ0Zvb3Rlci5jbGFzc0xpc3QuYWRkKFwicGhvdG9Gb290ZXJcIik7XG4gIGltZ0Zvb3Rlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGhvdG9KRC5zcmMpO1xuICBpbWdGb290ZXIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xuICBpbWdGb290ZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjUwcHhcIik7XG4gIGltZ0Zvb3Rlci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJqYXZpZXIgZGlhelwiKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZsYXNoTWVzc2FnZXMpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoZW1lQnV0dG9uKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiZ0RpdkZpcnN0KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiZ0RpdlNlY29uZCk7XG5cbiAgYmdEaXZGaXJzdC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbiAgYmdEaXZTZWNvbmQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGhvdG9QaWN0dXJlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFib3V0TWUpO1xuICBwaG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlTGFyZ2UpO1xuICBwaG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlTWVkaXVtKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHBob3RvSW1nKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHRleHRJblBob3RvKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lSGVhZGluZzEpO1xuICBhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0MSk7XG4gIGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZUhlYWRpbmcyKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDIpO1xuICBhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVJY29ucyk7XG4gIGFib3V0TWVJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRpbkxpbmspO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZ3VhZ2UpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBob3RvUmV2aWV3cyk7XG4gIHBob3RvUmV2aWV3cy5hcHBlbmRDaGlsZChzb3VyY2VMYXJnZUFuZE1lZGl1bSk7XG4gIHBob3RvUmV2aWV3cy5hcHBlbmRDaGlsZChwaG90b1Jldmlld3NJbWcpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0TWUpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoaW1nRm9vdGVyKTtcbiAgY29udGFjdE1lLmFwcGVuZENoaWxkKGNvbnRhY3RNZUhlYWRpbmcpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQoY29udGFjdE1lVGV4dCk7XG4gIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChjb250YWN0TWVUZXh0MSk7XG4gIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChtYWlsQWRkcmVzcyk7XG4gIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChjb250YWN0TWVJY29ucyk7XG4gIGNvbnRhY3RNZUljb25zLmFwcGVuZENoaWxkKGNvbnRhY3RNZWxpbmtlZGluTGluayk7XG4gIGNvbnRhY3RNZUljb25zLmFwcGVuZENoaWxkKGxpbmtlZGluVHh0KTtcbn1cblxuZXhwb3J0IHsgaG9tZXBhZ2UgfTtcbiIsImltcG9ydCBzY3JlZW5zaG90MSBmcm9tICcuL2ltZy9zY3JlZW5zaG90LXByb2plY3QxLnBuZyc7XG5pbXBvcnQgc2NyZWVuc2hvdDIgZnJvbSAnLi9pbWcvc2NyZWVuc2hvdC1wcm9qZWN0Mi5wbmcnO1xuaW1wb3J0IHNjcmVlbnNob3QzIGZyb20gJy4vaW1nL3NjcmVlbnNob3QtcHJvamVjdDMucG5nJztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vY2xhc3MtcHJvamVjdCc7XG5cbmNvbnN0IHRpdGxlQWJvdXQxID0gXCJDb25oZcOnYSBKYXZpZXJcIjtcbmNvbnN0IHRpdGxlQWJvdXQyID0gXCJNZWV0IEphdmllclwiO1xuY29uc3QgdGV4dENvbnRlbnRBYm91dE1lMSA9XG4gICdKYXZpZXIgRGlheiDDqSB1bSBwcm9mZXNzb3IgZGUgZXNwYW5ob2wgY29tIG1haXMgZGUgY2luY28gYW5vcyBkZSBleHBlcmnDqm5jaWEgZW0gZW5zaW5vIG9uLWxpbmUuJztcbmNvbnN0IHRleHRDb250ZW50QWJvdXRNZTIgPVxuICAnSmF2aWVyIERpYXogaXMgYSBTcGFuaXNoIHR1dG9yIHdpdGggbW9yZSB0aGFuIGZpdmUgeWVhcnMgb2Ygb25saW5lIHRlYWNoaW5nIGV4cGVyaWVuY2UuJztcblxuY29uc3QgdGV4dENvbnRlbnRDb250YWN0TWUgPVxuICAnU2Ugdm9jw6ogYWNoYSBxdWUgbWV1IHRyYWJhbGhvIHNlIGVuY2FpeGEgbm8gcXVlIHZvY8OqIHByZWNpc2EsIGVzY3JldmEgcGFyYSBtaW0uJztcbmNvbnN0IHRleHRDb250ZW50Q29udGFjdE1lMSA9XG4gICdJZiB5b3UgdGhpbmsgbXkgd29yayBmaXRzIHdoYXQgeW91IG5lZWQsIHdyaXRlIHRvIG1lLic7XG5cbmNvbnN0IG1haWxUZXh0ID0gJ2pqZGlhemIyQGdtYWlsLmNvbSc7XG5cbmNvbnN0IGxpbmtlZGluQWNjb3VudCA9ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYXZpZXItam9zw6ktZMOtYXotYm9yYm9hLTMzYTc2ODInO1xuY29uc3QgbGlua2VkaW5BY2NvdW50VHh0ID0gJ2xpbmtlZGluLmNvbS9pbi9qYXZpZXItam9zw6ktZMOtYXotYm9yYm9hLTMzYTc2ODInO1xuXG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdsYW5nMScpO1xucHJvamVjdDEucHJvamVjdE5hbWUgPSAnTWFpcyBkZSA1NDAwIGF1bGFzIHBhcmEgYWx1bm9zIGRlIHRvZG8gbyBtdW5kbyc7XG5wcm9qZWN0MS5wcm9qZWN0RGVzY3JpcHRpb24xID1cbiAgJ1JlY29uaGVjaWRvIHBvciBzdWEgYWJvcmRhZ2VtIHByw6F0aWNhLCBjbGFyZXphIGUgZGVkaWNhw6fDo28sIEphdmllciB0ZW0gYXRyYcOtZG8gZXNwZWNpYWxtZW50ZSBwcm9maXNzaW9uYWlzIGJyYXNpbGVpcm9zIHF1ZSBidXNjYW0gbWVsaG9yYXIgc3VhcyBvcG9ydHVuaWRhZGVzIGRlIHRyYWJhbGhvIHBvciBtZWlvIGRvIGRvbcOtbmlvIGRvIGlkaW9tYSBlc3BhbmhvbC4nO1xucHJvamVjdDEucHJvamVjdERlc2NyaXB0aW9uMiA9XG4gICdKYXZpZXIgdGVtIDQyIGF2YWxpYcOnw7VlcyA1IGVzdHJlbGFzIHF1ZSBjb21wcm92YW0gYSBxdWFsaWRhZGUgZGUgc2V1IGVuc2luby4gU3VhcyBhdWxhcyBzw6NvIDEwMCUgb24tbGluZSwgZmxleMOtdmVpcyBlIHBlcnNvbmFsaXphZGFzIGRlIGFjb3JkbyBjb20gb3Mgb2JqZXRpdm9zIGUgbyByaXRtbyBkZSBjYWRhIGFsdW5vLiBFbSBjb250ZXh0b3MgcHJvZmlzc2lvbmFpcyByZWFpcywgYWp1ZGFuZG8gb3MgYWx1bm9zIGEgc2UgZXhwcmVzc2FyZW0gY29tIGNvbmZpYW7Dp2EgZW0gcmV1bmnDtWVzLCBlbnRyZXZpc3RhcyBlIGFwcmVzZW50YcOnw7Vlcy4nO1xucHJvamVjdDEucHJvamVjdERlc2NyaXB0aW9uMyA9XG4gICdTZXUgbsOtdmVsIGludGVybWVkacOhcmlvL2F2YW7Dp2FkbyBkZSBpbmdsw6pzIGxoZSBwZXJtaXRpdSBhdHJhaXIgYWx1bm9zIGRhIEV1cm9wYSBlIGRlIHBhw61zZXMgZGUgbMOtbmd1YSBpbmdsZXNhLiBFbGUgdGFtYsOpbSBwb3NzdWkgbyBjZXJ0aWZpY2FkbyBcIkhvdyB0byBUZWFjaCBhIExhbmd1YWdlXCIgY29uY2VkaWRvIHBlbGEgUHJlcGx5IGVtIHJlY29uaGVjaW1lbnRvIGFvIHNldSB0cmVpbmFtZW50byBlbSBwZWRhZ29naWEgZGUgaWRpb21hcy4nO1xucHJvamVjdDEuc2NyZWVuc2hvdFByb2plY3RTb3VyY2UgPSBzY3JlZW5zaG90MTtcbnByb2plY3QxLmxpbmtlZGluSHJlZiA9ICcjJzsgIC8vIHBvbmVyIGFxdWkgZWwgZW5sYWNlIGRlbCBjZXJ0aWZpY2FkbyBkZSBQcmVwbHlcbnByb2plY3QxLmxhbmd1YWdlID0gJ3BvcnR1Z3XDqnMnO1xuXG5jb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdsYW5nMicpO1xucHJvamVjdDIucHJvamVjdE5hbWUgPSAnTW9yZSB0aGFuIDU0MDAgbGVzc29ucyB0byBzdHVkZW50cyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCc7XG5wcm9qZWN0Mi5wcm9qZWN0RGVzY3JpcHRpb24xID1cbiAgJ1JlY29nbml6ZWQgZm9yIGhpcyBwcmFjdGljYWwgYXBwcm9hY2gsIGNsYXJpdHkgYW5kIGRlZGljYXRpb24sIEphdmllciBoYXMgcGFydGljdWxhcmx5IGF0dHJhY3RlZCBCcmF6aWxpYW4gcHJvZmVzc2lvbmFscyBsb29raW5nIHRvIGltcHJvdmUgdGhlaXIgam9iIG9wcG9ydHVuaXRpZXMgYnkgbWFzdGVyaW5nIHRoZSBTcGFuaXNoIGxhbmd1YWdlLic7XG5wcm9qZWN0Mi5wcm9qZWN0RGVzY3JpcHRpb24yID1cbiAgJ0phdmllciBoYXMgNDIgcmV2aWV3cyBvZiA1IHN0YXJzIHRoYXQgZW5kb3JzZSB0aGUgcXVhbGl0eSBvZiBoaXMgdGVhY2hpbmcuIEhpcyBjbGFzc2VzIGFyZSAxMDAlIG9ubGluZSwgZmxleGlibGUsIGFuZCBwZXJzb25hbGl6ZWQgYWNjb3JkaW5nIHRvIHRoZSBnb2FscyBhbmQgcGFjZSBvZiBlYWNoIHN0dWRlbnQuIFdpdGhpbiByZWFsIHByb2Zlc3Npb25hbCBjb250ZXh0cywgaGVscGluZyBzdHVkZW50cyB0byBleHByZXNzIHRoZW1zZWx2ZXMgY29uZmlkZW50bHkgaW4gbWVldGluZ3MsIGludGVydmlld3MgYW5kIHByZXNlbnRhdGlvbnMuJztcbnByb2plY3QyLnByb2plY3REZXNjcmlwdGlvbjMgPVxuICAnSGlzIGludGVybWVkaWF0ZS9hZHZhbmNlZCBsZXZlbCBFbmdsaXNoIHByb2ZpY2llbmN5IGhhcyBhbGxvd2VkIGhpbSB0byBhdHRyYWN0IHN0dWRlbnRzIGZyb20gRXVyb3BlIGFuZCBFbmdsaXNoIHNwZWFraW5nIGNvdW50cmllcy4gSGUgYWxzbyBoYXMgdGhlIFwiSG93IHRvIFRlYWNoIGEgTGFuZ3VhZ2VcIiBjZXJ0aWZpY2F0ZSBhd2FyZGVkIGJ5IFByZXBseSBhcyBhIHN1cHBvcnQgdG8gaGlzIGxhbmd1YWdlIHBlZGFnb2d5IHRyYWluaW5nLic7XG5wcm9qZWN0Mi5zY3JlZW5zaG90UHJvamVjdFNvdXJjZSA9IHNjcmVlbnNob3QyO1xucHJvamVjdDIubGlua2VkaW5IcmVmID0gJyMnO1xucHJvamVjdDIubGFuZ3VhZ2UgPSAnZW5nbGlzaCc7XG5cbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ2xhbmczJyk7XG5wcm9qZWN0My5wcm9qZWN0TmFtZSA9ICdNw6FzIGRlIDU0MDAgbGVjY2lvbmVzIHBhcmEgZXN0dWRpYW50ZXMgZGUgdG9kbyBlbCBtdW5kbyc7XG5wcm9qZWN0My5wcm9qZWN0RGVzY3JpcHRpb24xID1cbiAgJ1JlY29ub2NpZG8gcG9yIHN1IGVuZm9xdWUgcHLDoWN0aWNvLCBjbGFyaWRhZCB5IGRlZGljYWNpw7NuLCBKYXZpZXIgaGEgYXRyYcOtZG8gZXNwZWNpYWxtZW50ZSBhIHByb2Zlc2lvbmFsZXMgYnJhc2lsZcOxb3MgcXVlIGJ1c2NhbiBtZWpvcmFyIHN1cyBvcG9ydHVuaWRhZGVzIGxhYm9yYWxlcyBkb21pbmFuZG8gZWwgaWRpb21hIGVzcGHDsW9sLic7XG5wcm9qZWN0My5wcm9qZWN0RGVzY3JpcHRpb24yID1cbiAgJ0phdmllciB0aWVuZSA0MiByZXNlw7FhcyBkZSA1IGVzdHJlbGxhcyBxdWUgZGVtdWVzdHJhbiBsYSBjYWxpZGFkIGRlIHN1IGVuc2XDsWFuemEuIFN1cyBjbGFzZXMgc29uIDEwMCUgb25saW5lLCBmbGV4aWJsZXMgeSBwZXJzb25hbGl6YWRhcyBzZWfDum4gbG9zIG9iamV0aXZvcyB5IGVsIHJpdG1vIGRlIGNhZGEgYWx1bW5vLiBFbiBjb250ZXh0b3MgcHJvZmVzaW9uYWxlcyByZWFsZXMsIGF5dWRhbmRvIGEgbG9zIGVzdHVkaWFudGVzIGEgZXhwcmVzYXJzZSBjb24gY29uZmlhbnphIGVuIHJldW5pb25lcywgZW50cmV2aXN0YXMgeSBwcmVzZW50YWNpb25lcy4nO1xucHJvamVjdDMucHJvamVjdERlc2NyaXB0aW9uMyA9XG4gICdTdSBkb21pbmlvIGRlbCBpbmdsw6lzIGEgbml2ZWwgaW50ZXJtZWRpby9hdmFuemFkbyBsZSBoYSBwZXJtaXRpZG8gYXRyYWVyIGEgZXN0dWRpYW50ZXMgZGUgRXVyb3BhIHkgZGUgcGHDrXNlcyBkZSBoYWJsYSBpbmdsZXNhLiBBZGVtw6FzLCBjdWVudGEgY29uIGVsIGNlcnRpZmljYWRvIFwiSG93IHRvIFRlYWNoIGEgTGFuZ3VhZ2VcIiBvdG9yZ2FkbyBwb3IgUHJlcGx5IGNvbW8gcmVzcGFsZG8gYSBzdSBmb3JtYWNpw7NuIGVuIHBlZGFnb2fDrWEgbGluZ8O8w61zdGljYS4nO1xucHJvamVjdDMuc2NyZWVuc2hvdFByb2plY3RTb3VyY2UgPSBzY3JlZW5zaG90MztcbnByb2plY3QzLmxpbmtlZGluSHJlZiA9ICcjJztcbnByb2plY3QzLmxhbmd1YWdlID0gJ2VzcGHDsW9sJztcblxuY29uc3QgYXJyYXlQcm9qZWN0cyA9IFtcbiAgcHJvamVjdDEsXG4gIHByb2plY3QyLFxuICBwcm9qZWN0Myxcbl07XG5cbmV4cG9ydCB7XG4gIHRpdGxlQWJvdXQxLFxuICB0aXRsZUFib3V0MixcbiAgdGV4dENvbnRlbnRBYm91dE1lMSxcbiAgdGV4dENvbnRlbnRBYm91dE1lMixcbiAgYXJyYXlQcm9qZWN0cyxcbiAgdGV4dENvbnRlbnRDb250YWN0TWUsXG4gIHRleHRDb250ZW50Q29udGFjdE1lMSxcbiAgbWFpbFRleHQsXG4gIGxpbmtlZGluQWNjb3VudCxcbiAgbGlua2VkaW5BY2NvdW50VHh0LFxufTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuaWQgPSB2YWx1ZTtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24xID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24yID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24zID0gJyc7XG4gICAgdGhpcy5zY3JlZW5zaG90UHJvamVjdFNvdXJjZSA9ICcnO1xuICAgIHRoaXMubGlua2VkaW5IcmVmID0gJyc7XG4gICAgdGhpcy5sYW5ndWFnZSA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIi8qIElDT05TICovXG5cbiAgY29uc3QgbGlua2VkaW4gPVxuICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2xpbmtlZGluL2xpbmtlZGluLW9yaWdpbmFsLnN2Zyc7XG5cbmV4cG9ydCB7IGxpbmtlZGluIH07XG4iLCJmdW5jdGlvbiBpbnNlcnRJbWcoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCxhcmc1LGFyZzYpIHtcbiAgLy8gYXJnMSBpcyB0aGUgcGFyZW50IGRpdiAtIGFyZzIgaXMgdGhlIHNvdXJjZVxuICAvLyBhcmczIGlzIHRoZSBhbHQgdGV4dCAtIGFyZzQgaXMgdGhlIGNsYXNzXG4gIC8vIGFyZzUgaXMgdGhlIHdpZHRoIC0gYXJnNiBpcyB0aGUgaGVpZ2h0XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBhcmcyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYXJnMyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYXJnNSk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGFyZzYpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChhcmc0KTtcbiAgYXJnMS5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5leHBvcnQgeyBpbnNlcnRJbWcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS1yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS1sYXJnZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS1tZWRpdW0uY3NzJztcbmltcG9ydCB7IGdvb2dsZUZvbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nb29nbGUtZm9udHNcIjtcbmltcG9ydCB7IGhvbWVwYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lcGFnZVwiO1xuXG5jb25zdCBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xubWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkZXNjcmlwdGlvbicpO1xubWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCdsZWFybmluZyBzcGFuaXNoIG9ubGluZSB0dXRvciBqYXZpZXIgZGlheicpO1xuXG5nb29nbGVGb250cygpO1xuaG9tZXBhZ2UoKTtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=