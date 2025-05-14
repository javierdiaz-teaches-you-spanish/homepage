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
  --color-bg-first: #f3eded;
  --color-bg-header: #d9c9c8;
  --color-bg-section: white;
  --color-bg-article: #e3d7d6;
  --color-article-shadow: #d9c9c8;
  --color-bg-second: #d9c9c8;
  --color-base-text-title: #2d2322;
  --color-base-text: #584644;
  --color-base-text-article: #2d2322;
}

.dark {
  --color-bg-first: #aa8c89;
  --color-bg-header: #aa8c89;
  --color-bg-section: #aa8c89;
  --color-bg-article: #93726f;
  --color-article-shadow: #c2a9a7;
  --color-bg-second: #aa8c89;
  --color-base-text-title: #f3eded;
  --color-base-text: #f3eded;
  --color-base-text-article: #f3eded;
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
  height: calc(var(--defining-width) * 2.6);
  border-radius: 6px;
  box-shadow: var(--color-article-shadow) 2px 2px 4px 2px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: auto;\n}\n\nh1,h2,h3 {\n  font-family: 'Playfair Display', serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: grid;\n}\n\n.photoImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.iconImg {\n  height: 30px;\n  width: auto;\n}\n\n.projectImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n/* define background colors - starts*/\n.light {\n  --color-bg-first: #f3eded;\n  --color-bg-header: #d9c9c8;\n  --color-bg-section: white;\n  --color-bg-article: #e3d7d6;\n  --color-article-shadow: #d9c9c8;\n  --color-bg-second: #d9c9c8;\n  --color-base-text-title: #2d2322;\n  --color-base-text: #584644;\n  --color-base-text-article: #2d2322;\n}\n\n.dark {\n  --color-bg-first: #aa8c89;\n  --color-bg-header: #aa8c89;\n  --color-bg-section: #aa8c89;\n  --color-bg-article: #93726f;\n  --color-article-shadow: #c2a9a7;\n  --color-bg-second: #aa8c89;\n  --color-base-text-title: #f3eded;\n  --color-base-text: #f3eded;\n  --color-base-text-article: #f3eded;\n}\n\n.bgDivFirst {\n  background-color: var(--color-bg-first);\n}\n\n.bgDivFirst > div > header {\n  background-color: var(--color-bg-header);\n}\n\n.bgDivFirst > div > header > section {\n  background-color: var(--color-bg-section);\n}\n\narticle {\n  background-color: var(--color-bg-article);\n}\n\n.bgDivSecond {\n  /*footer*/\n  background-color: var(--color-bg-second);\n  color: var(--color-base-text);\n}\n\n/* define background colors end */\n\n.page-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.8fr auto-fit;\n}\n\n.page-container > header {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.page-container > header > picture {\n  position: relative;\n}\n\n.textInPhoto {\n  position: absolute;\n  transform: translate(20px, -100%);\n  /* translate X,Y */\n  width: 80%;\n  color: #f9f7f7;\n  font-size: 4rem;\n}\n\n.page-container > main {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-top: 30px;\n  padding-bottom: 15px;\n}\n\n.content {\n  /* aboutMe*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\nh2 {\n  padding-top: 1%;\n  color: var(--color-base-text-title);\n  font-size: 2rem;\n}\n\n.contentProject {\n  /* my work*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\nfieldset {\n  display:flex;\n  flex-direction: row;\n  gap: 15px;\n  padding-bottom: 10px;\n}\n\narticle {\n  --defining-width: calc(0.7 * 100vw);\n  width: var(--defining-width);\n  height: calc(var(--defining-width) * 2.6);\n  border-radius: 6px;\n  box-shadow: var(--color-article-shadow) 2px 2px 4px 2px;\n}\n\narticle {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.095fr 0.005fr 0.9fr;\n}\n\n.divImgArticle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  box-shadow: var(--color-bg-first) 2px 2px 2px 2px;\n}\n\n.divNameArticle {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 2fr 1fr;\n}\n\n.divNameArticle > h3 {\n  color: var(--color-base-text-article);\n  font-size: 1.2rem;\n  font-weight: 900;\n  padding-left: 4%;\n  padding-top: 3%;\n}\n\n.divNameArticle > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  gap: 10px;\n  padding-top: 3.5%;\n}\n\n.divDescriptionArticle {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  display: flex;\n  flex-direction: column;\n  justify-content:flex-start;\n  row-gap: 15px;\n  padding-top: 20px;\n}\n\n.divDescriptionArticle > p {\n  color: var(--color-base-text-article);\n  font-size: 1rem;\n  padding-left: 4%;\n  text-justify: distribute;\n}\n\n.projectImg {\n  width: var(--defining-width);\n  height: calc(var(--defining-width) * 0.25 * 0.7);\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n.text {\n  flex-shrink: 1;\n  padding: 5%;\n  text-align: justify;\n  color: var(--color-base-text);\n  font-size: 1rem;\n}\n\n.divIcons {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  padding-bottom: 2%;\n}\n\nfooter {\n  --define-height-footer: calc(0.7 * 100vh);\n  width: 100%;\n  height: var(--define-height-footer);\n}\n\nfooter {\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nfooter > section {\n  height: 100%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 7fr;\n  grid-template-rows: 1fr 1.2fr 1.2fr 1fr 0.7fr;\n}\n\nfooter > section > h2 {\n  grid-row: 1/2;\n  grid-column: 1/4;\n}\n\nfooter > section > h2 + p {\n  grid-row: 2/3;\n  grid-column: 1/4;\n  row-gap: 1.1;\n}\n\nfooter > section > h2 + p + p {\n  grid-row: 3/4;\n  grid-column: 1/4;\n  row-gap: 1.1;\n}\n\nfooter > section > h2 + p + p + p {\n  grid-row: 4/5;\n  grid-column: 3/4;\n}\n\nfooter > section > img {\n  grid-row: 4/5;\n  grid-column: 1/2;\n}\n\n\nfooter > section > div {\n  grid-row: 5/6;\n  grid-column: 1/4;\n}\n\nfooter > section > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n}\n\n.photoFooter {\n  width: auto;\n  height: 250px;\n  object-fit: cover;\n}\n\n/*buttons*/\n\n.themeButton {\n  position: absolute;\n  top: 4%;\n  right: 3%;\n  z-index: 1;\n  background-color: var(--color-bg-first);\n\n  transition: transform 250ms ease-in-out;\n}\n\n.themeButton:hover {\n  transform: scale(1.1);\n  background-color: var(--color-bg-section);\n}\n\n.themeButton:active {\n  transform: scale(1.1);\n  background-color: var(--color-bg-article);\n  color: var(--color-bg-section);\n}\n\na {\n  transition: transform 250ms ease-in-out;\n}\n\na:hover {\n  transform: scale(1.05);\n}\n\na:active {\n  transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
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
    grid-template-rows: 15px 1fr;
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
    height: calc(var(--defining-width) * 2.3);
    border-radius: 6px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style-large.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;EAC/B;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,4BAA4B;EAC9B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,yCAAyC;IACzC,kBAAkB;EACpB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,0CAA0C;IAC1C,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;AAEF","sourcesContent":["@media screen and (min-width: 981px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 5.6rem;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 3%;\n    right: 3%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.7fr 2fr;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .page-container > main {\n    width: 100%;\n    height: 90%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 15px 1fr;\n  }\n\n  .content {\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main > fieldset {\n    grid-row: 1/2;\n    padding-left: 40%;\n  }\n\n  .contentProject {\n    grid-row: 2/3;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.82 * (100vw / 3));\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 2.3);\n    border-radius: 6px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  .divDescriptionArticle > p {\n    padding-top: 3%;\n  }\n\n  footer {\n    --define-height-footer: calc(0.45 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  footer > section > h2 + p {\n    font-size: 1.3rem;\n  }\n\n  footer > section > h2 + p + p{\n    font-size: 1.3rem;\n  }\n\n  footer > section > img {\n    grid-row: 4/5;\n    grid-column: 1/2;\n    justify-content: left;\n  }\n\n  footer > section > h2 + p + p + p{\n    grid-row: 4/5;\n    grid-column: 2/3;\n    justify-content: left;\n  }\n\n  footer > section > div {\n    grid-row: 5/6;\n    grid-column: 3/4;\n  }\n\n}\n"],"sourceRoot":""}]);
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
    height: calc(var(--defining-width) * 2.1);
    border-radius: 6px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style-medium.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,gCAAgC;EAClC;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,yCAAyC;IACzC,kBAAkB;EACpB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,yCAAyC;IACzC,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;;EAGA;IACE,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 621px) and (max-width: 980px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 4.5rem;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 2%;\n    right: 2%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr auto-fit;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .contentProject {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.75 * (100vw / 2));\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 2.1);\n    border-radius: 6px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  footer {\n    --define-height-footer: calc(0.3 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n \n  footer > section > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    padding-right: 40px;\n    gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_img_footer_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _assets_text_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _assets_icons_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _insertImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);













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
  changeThemeImg.src = _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_4__;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_8__.insertImg)(
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
  aboutMeHeading1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.titleAbout1;
  aboutMeHeading2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.titleAbout2;
  aboutMeText1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.textContentAboutMe1;
  aboutMeText1.classList.add("text");
  aboutMeText2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.textContentAboutMe2;
  aboutMeText2.classList.add("text");
  aboutMeIcons.classList.add("divIcons");

  linkedinLink.setAttribute("href", _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.linkedinAccount);
  linkedinLink.setAttribute("target", "_blank");
  const linkedinImg = new Image();
  linkedinImg.src = _assets_icons_source__WEBPACK_IMPORTED_MODULE_7__.linkedin;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_8__.insertImg)(
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

  for (let i = 0; i < _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.arrayProjects.length; i++) {
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

    _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.arrayProjects.map((e) => {
      switch (e.id === x.getAttribute("id")) {
        case true:
          screenshot.src = e.screenshotProjectSource;
          (0,_insertImg__WEBPACK_IMPORTED_MODULE_8__.insertImg)(div1, screenshot.src, "", "projectImg", "30px", "10px");
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

  _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.arrayProjects.map((e) => {
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
  _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.arrayProjects.map((e) => {
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

  // FOOTER
  const footer = document.createElement("footer");
  const contactMe = document.createElement("section");
  const contactMeHeading = document.createElement("H2");
  const contactMeText = document.createElement("p");
  const contactMeText1 = document.createElement("p");
  const mailAddress = document.createElement("p");
  contactMeHeading.textContent = "Contact me";
  contactMeText.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.textContentContactMe;
  contactMeText1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.textContentContactMe1;

  mailAddress.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.mailText;
 
  const emailImg = new Image();
  emailImg.src = _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_5__;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_8__.insertImg)(
    contactMe,
    emailImg.src,
    "email-address",
    "iconImg",
    "30px",
    "30px"
  );
  const contactMeIcons = document.createElement("div");

  const contactMelinkedinLink = document.createElement("a");

  contactMelinkedinLink.setAttribute("href", _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.linkedinAccount);
  contactMelinkedinLink.setAttribute("target", "_blank");
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_8__.insertImg)(
    contactMelinkedinLink,
    linkedinImg.src,
    "Linkedin",
    "iconImg",
    "30px",
    "30px"
  );
  const linkedinTxt = document.createElement('p');
  linkedinTxt.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_6__.linkedinAccountTxt;

  const imgFooter = document.createElement("img");
  const photoJD = new Image();
  photoJD.src = _assets_img_footer_img_png__WEBPACK_IMPORTED_MODULE_3__;
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

module.exports = __webpack_require__.p + "80c651aaf78bdc015fca.png";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dbe4ad4e46c54f19979.png";

/***/ }),
/* 24 */,
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fd29b2b9c11a6531107.png";

/***/ }),
/* 26 */,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVEYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHlGQUF5RixPQUFPLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sK29CQUErb0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLDBEQUEwRDtBQUMvbUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7OztBQ3pEMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QjdFO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFV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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sNkZBQTZGLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFV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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNOO0FBQ007QUFDQztBQUNxQjtBQUNQOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUEscUVBQVc7QUFDWCw4REFBUTs7QUFFUjtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS1yZXNldC5jc3M/YzRkNiIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzcz8wMDllIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS1tZWRpdW0uY3NzP2Y5OWIiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUtbWVkaXVtLmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZ29vZ2xlLWZvbnRzLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy90ZXh0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9hc3NldHMvY2xhc3MtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy9pY29ucy1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2luc2VydEltZy5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgaW5wdXQge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtDQUNDOzs7Q0FHQTs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsa0NBQWtDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgxLGgyLGgzIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnBob3RvSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pY29uSW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnByb2plY3RJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xufVxuXG4vKiBkZWZpbmUgYmFja2dyb3VuZCBjb2xvcnMgLSBzdGFydHMqL1xuLmxpZ2h0IHtcbiAgLS1jb2xvci1iZy1maXJzdDogI2YzZWRlZDtcbiAgLS1jb2xvci1iZy1oZWFkZXI6ICNkOWM5Yzg7XG4gIC0tY29sb3ItYmctc2VjdGlvbjogd2hpdGU7XG4gIC0tY29sb3ItYmctYXJ0aWNsZTogI2UzZDdkNjtcbiAgLS1jb2xvci1hcnRpY2xlLXNoYWRvdzogI2Q5YzljODtcbiAgLS1jb2xvci1iZy1zZWNvbmQ6ICNkOWM5Yzg7XG4gIC0tY29sb3ItYmFzZS10ZXh0LXRpdGxlOiAjMmQyMzIyO1xuICAtLWNvbG9yLWJhc2UtdGV4dDogIzU4NDY0NDtcbiAgLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZTogIzJkMjMyMjtcbn1cblxuLmRhcmsge1xuICAtLWNvbG9yLWJnLWZpcnN0OiAjYWE4Yzg5O1xuICAtLWNvbG9yLWJnLWhlYWRlcjogI2FhOGM4OTtcbiAgLS1jb2xvci1iZy1zZWN0aW9uOiAjYWE4Yzg5O1xuICAtLWNvbG9yLWJnLWFydGljbGU6ICM5MzcyNmY7XG4gIC0tY29sb3ItYXJ0aWNsZS1zaGFkb3c6ICNjMmE5YTc7XG4gIC0tY29sb3ItYmctc2Vjb25kOiAjYWE4Yzg5O1xuICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTogI2YzZWRlZDtcbiAgLS1jb2xvci1iYXNlLXRleHQ6ICNmM2VkZWQ7XG4gIC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGU6ICNmM2VkZWQ7XG59XG5cbi5iZ0RpdkZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctZmlyc3QpO1xufVxuXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWhlYWRlcik7XG59XG5cbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyID4gc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xufVxuXG5hcnRpY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XG59XG5cbi5iZ0RpdlNlY29uZCB7XG4gIC8qZm9vdGVyKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2Vjb25kKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dCk7XG59XG5cbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyBlbmQgKi9cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC44ZnIgYXV0by1maXQ7XG59XG5cbi5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIgPiBwaWN0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGV4dEluUGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0xMDAlKTtcbiAgLyogdHJhbnNsYXRlIFgsWSAqL1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogI2Y5ZjdmNztcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4ucGFnZS1jb250YWluZXIgPiBtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgLyogYWJvdXRNZSovXG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBnYXA6IDEwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMiB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC10aXRsZSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmNvbnRlbnRQcm9qZWN0IHtcbiAgLyogbXkgd29yayovXG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBnYXA6IDEwcHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuYXJ0aWNsZSB7XG4gIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43ICogMTAwdncpO1xuICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi42KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1hcnRpY2xlLXNoYWRvdykgMnB4IDJweCA0cHggMnB4O1xufVxuXG5hcnRpY2xlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4wOTVmciAwLjAwNWZyIDAuOWZyO1xufVxuXG4uZGl2SW1nQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvbG9yLWJnLWZpcnN0KSAycHggMnB4IDJweCAycHg7XG59XG5cbi5kaXZOYW1lQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG5cbi5kaXZOYW1lQXJ0aWNsZSA+IGgzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbn1cblxuLmRpdk5hbWVBcnRpY2xlID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMy41JTtcbn1cblxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuICByb3ctZ2FwOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGUpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHRleHQtanVzdGlmeTogZGlzdHJpYnV0ZTtcbn1cblxuLnByb2plY3RJbWcge1xuICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4yNSAqIDAuNyk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XG59XG5cbi50ZXh0IHtcbiAgZmxleC1zaHJpbms6IDE7XG4gIHBhZGRpbmc6IDUlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGl2SWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuZm9vdGVyIHtcbiAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjcgKiAxMDB2aCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcbn1cblxuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuZm9vdGVyID4gc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDdmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS4yZnIgMS4yZnIgMWZyIDAuN2ZyO1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS80O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwIHtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgcm93LWdhcDogMS4xO1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCB7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIHJvdy1nYXA6IDEuMTtcbn1cblxuZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCArIHAgKyBwIHtcbiAgZ3JpZC1yb3c6IDQvNTtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbn1cblxuZm9vdGVyID4gc2VjdGlvbiA+IGltZyB7XG4gIGdyaWQtcm93OiA0LzU7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG59XG5cblxuZm9vdGVyID4gc2VjdGlvbiA+IGRpdiB7XG4gIGdyaWQtcm93OiA1LzY7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucGhvdG9Gb290ZXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi8qYnV0dG9ucyovXG5cbi50aGVtZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0JTtcbiAgcmlnaHQ6IDMlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1maXJzdCk7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4udGhlbWVCdXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xufVxuXG4udGhlbWVCdXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hcnRpY2xlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG5hOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuYTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQywwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VB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QWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUNBQXVDOztFQUV2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5oMSxoMixoMyB7XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcXG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5waG90b0ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaWNvbkltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnByb2plY3RJbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG59XFxuXFxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIC0gc3RhcnRzKi9cXG4ubGlnaHQge1xcbiAgLS1jb2xvci1iZy1maXJzdDogI2YzZWRlZDtcXG4gIC0tY29sb3ItYmctaGVhZGVyOiAjZDljOWM4O1xcbiAgLS1jb2xvci1iZy1zZWN0aW9uOiB3aGl0ZTtcXG4gIC0tY29sb3ItYmctYXJ0aWNsZTogI2UzZDdkNjtcXG4gIC0tY29sb3ItYXJ0aWNsZS1zaGFkb3c6ICNkOWM5Yzg7XFxuICAtLWNvbG9yLWJnLXNlY29uZDogI2Q5YzljODtcXG4gIC0tY29sb3ItYmFzZS10ZXh0LXRpdGxlOiAjMmQyMzIyO1xcbiAgLS1jb2xvci1iYXNlLXRleHQ6ICM1ODQ2NDQ7XFxuICAtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlOiAjMmQyMzIyO1xcbn1cXG5cXG4uZGFyayB7XFxuICAtLWNvbG9yLWJnLWZpcnN0OiAjYWE4Yzg5O1xcbiAgLS1jb2xvci1iZy1oZWFkZXI6ICNhYThjODk7XFxuICAtLWNvbG9yLWJnLXNlY3Rpb246ICNhYThjODk7XFxuICAtLWNvbG9yLWJnLWFydGljbGU6ICM5MzcyNmY7XFxuICAtLWNvbG9yLWFydGljbGUtc2hhZG93OiAjYzJhOWE3O1xcbiAgLS1jb2xvci1iZy1zZWNvbmQ6ICNhYThjODk7XFxuICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTogI2YzZWRlZDtcXG4gIC0tY29sb3ItYmFzZS10ZXh0OiAjZjNlZGVkO1xcbiAgLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZTogI2YzZWRlZDtcXG59XFxuXFxuLmJnRGl2Rmlyc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctZmlyc3QpO1xcbn1cXG5cXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1oZWFkZXIpO1xcbn1cXG5cXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciA+IHNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XFxufVxcblxcbmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XFxufVxcblxcbi5iZ0RpdlNlY29uZCB7XFxuICAvKmZvb3RlciovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dCk7XFxufVxcblxcbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyBlbmQgKi9cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjhmciBhdXRvLWZpdDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciA+IHBpY3R1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dEluUGhvdG8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTEwMCUpO1xcbiAgLyogdHJhbnNsYXRlIFgsWSAqL1xcbiAgd2lkdGg6IDgwJTtcXG4gIGNvbG9yOiAjZjlmN2Y3O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIgPiBtYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAvKiBhYm91dE1lKi9cXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmctdG9wOiAxJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGVudFByb2plY3Qge1xcbiAgLyogbXkgd29yayovXFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbmFydGljbGUge1xcbiAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjcgKiAxMDB2dyk7XFxuICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuNik7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1hcnRpY2xlLXNoYWRvdykgMnB4IDJweCA0cHggMnB4O1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4wOTVmciAwLjAwNWZyIDAuOWZyO1xcbn1cXG5cXG4uZGl2SW1nQXJ0aWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNvbG9yLWJnLWZpcnN0KSAycHggMnB4IDJweCAycHg7XFxufVxcblxcbi5kaXZOYW1lQXJ0aWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuXFxuLmRpdk5hbWVBcnRpY2xlID4gaDMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxufVxcblxcbi5kaXZOYW1lQXJ0aWNsZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMy41JTtcXG59XFxuXFxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XFxuICByb3ctZ2FwOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5kaXZEZXNjcmlwdGlvbkFydGljbGUgPiBwIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDQlO1xcbiAgdGV4dC1qdXN0aWZ5OiBkaXN0cmlidXRlO1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMjUgKiAwLjcpO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XFxufVxcblxcbi50ZXh0IHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kaXZJY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC43ICogMTAwdmgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWRlZmluZS1oZWlnaHQtZm9vdGVyKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS4yZnIgMS4yZnIgMWZyIDAuN2ZyO1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaDIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICByb3ctZ2FwOiAxLjE7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgcm93LWdhcDogMS4xO1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCArIHAge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBpbWcge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xcbiAgZ3JpZC1yb3c6IDUvNjtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnBob3RvRm9vdGVyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4vKmJ1dHRvbnMqL1xcblxcbi50aGVtZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQlO1xcbiAgcmlnaHQ6IDMlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWZpcnN0KTtcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRoZW1lQnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xcbn1cXG5cXG4udGhlbWVCdXR0b246YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnLWFydGljbGUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJnLXNlY3Rpb24pO1xcbn1cXG5cXG5hIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbGFyZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbGFyZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSB7XG4gIC5waG90b0ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAudGV4dEluUGhvdG8ge1xuICAgIGZvbnQtc2l6ZTogNS42cmVtO1xuICB9XG5cbiAgLnRoZW1lQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzJTtcbiAgICByaWdodDogMyU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIDJmcjtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucGFnZS1jb250YWluZXIgPiBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVweCAxZnI7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZGl2SWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICBtYWluID4gZmllbGRzZXQge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIH1cblxuICAuY29udGVudFByb2plY3Qge1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICBhcnRpY2xlIHtcbiAgICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuODIgKiAoMTAwdncgLyAzKSk7XG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAucHJvamVjdEltZyB7XG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4zICogMC43KTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XG4gIH1cblxuICAuZGl2RGVzY3JpcHRpb25BcnRpY2xlID4gcCB7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOiBjYWxjKDAuNDUgKiAxMDB2aCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG5cbiAgZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCArIHB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cblxuICBmb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcbiAgICBncmlkLXJvdzogNC81O1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG5cbiAgZm9vdGVyID4gc2VjdGlvbiA+IGgyICsgcCArIHAgKyBwe1xuICAgIGdyaWQtcm93OiA0LzU7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cblxuICBmb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcbiAgICBncmlkLXJvdzogNS82O1xuICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gIH1cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xcbiAgLnBob3RvSW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgLnRleHRJblBob3RvIHtcXG4gICAgZm9udC1zaXplOiA1LjZyZW07XFxuICB9XFxuXFxuICAudGhlbWVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMyU7XFxuICAgIHJpZ2h0OiAzJTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIDJmcjtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciA+IG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1cHggMWZyO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kaXZJY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICBtYWluID4gZmllbGRzZXQge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50UHJvamVjdCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjgyICogKDEwMHZ3IC8gMykpO1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RJbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4zICogMC43KTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG4gIH1cXG5cXG4gIC5kaXZEZXNjcmlwdGlvbkFydGljbGUgPiBwIHtcXG4gICAgcGFkZGluZy10b3A6IDMlO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjQ1ICogMTAwdmgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwe1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBpbWcge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB9XFxuXFxuICBmb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCArIHB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1lZGl1bS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tZWRpdW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLnBob3RvSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC50ZXh0SW5QaG90byB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gIH1cblxuICAudGhlbWVCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8tZml0O1xuICB9XG5cbiAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXZJY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5jb250ZW50UHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuXG4gIGFydGljbGUge1xuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43NSAqICgxMDB2dyAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAyLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gIC5wcm9qZWN0SW1nIHtcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAwLjMgKiAwLjcpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjMgKiAxMDB2aCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIGdhcDogMTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLW1lZGl1bS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQjtJQUNqQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjFweCkgYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAucGhvdG9JbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuXFxuICAudGV4dEluUGhvdG8ge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gIH1cXG5cXG4gIC50aGVtZUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyJTtcXG4gICAgcmlnaHQ6IDIlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8tZml0O1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRpdkljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50UHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjc1ICogKDEwMHZ3IC8gMikpO1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RJbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4zICogMC43KTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC4zICogMTAwdmgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gXFxuICBmb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImZ1bmN0aW9uIGdvb2dsZUZvbnRzKCkge1xuICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsxLnNldEF0dHJpYnV0ZSgncmVsJywgJ3ByZWNvbm5lY3QnKTtcbiAgICBsaW5rMS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScpO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsyLnNldEF0dHJpYnV0ZSgncmVsJywgJ3ByZWNvbm5lY3QnKTtcbiAgICBsaW5rMi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nKTtcbiAgICBsaW5rMi5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJycpO1xuICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmszLnNldEF0dHJpYnV0ZShcbiAgICAgICdocmVmJyxcbiAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXAnXG4gICAgKTtcbiAgICBsaW5rMy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgY29uc3QgbGluazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluazQuc2V0QXR0cmlidXRlKFxuICAgICAgJ2hyZWYnLFxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCdcbiAgICApO1xuICAgIGxpbms0LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMik7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rNCk7XG4gIH1cbiAgXG4gIGV4cG9ydCB7IGdvb2dsZUZvbnRzIH07IiwiaW1wb3J0IGltYWdlU21hbGwgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvc21hbGwtaW1nLmpwZ1wiO1xuaW1wb3J0IGltYWdlTWVkaXVtIGZyb20gXCIuLi9hc3NldHMvaW1nL21lZGl1bS1pbWcuanBnXCI7XG5pbXBvcnQgaW1hZ2VMYXJnZSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9sYXJnZS1pbWcuanBnXCI7XG5pbXBvcnQgcGhvdG9Gb290ZXIgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvZm9vdGVyLWltZy5wbmdcIjtcbmltcG9ydCBjaGFuZ2VUaGVtZSBmcm9tIFwiLi4vYXNzZXRzL2ltZy90aGVtZS1saWdodC1kYXJrLnBuZ1wiO1xuaW1wb3J0IGVtYWlsSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ltZy9lbWFpbC1vdXRsaW5lLnBuZ1wiO1xuaW1wb3J0IHtcbiAgdGl0bGVBYm91dDEsXG4gIHRpdGxlQWJvdXQyLFxuICB0ZXh0Q29udGVudEFib3V0TWUxLFxuICB0ZXh0Q29udGVudEFib3V0TWUyLFxufSBmcm9tIFwiLi4vYXNzZXRzL3RleHQtY29udGVudFwiO1xuaW1wb3J0IHsgbGlua2VkaW5BY2NvdW50LCBsaW5rZWRpbkFjY291bnRUeHQgfSBmcm9tIFwiLi4vYXNzZXRzL3RleHQtY29udGVudFwiO1xuaW1wb3J0IHsgdGV4dENvbnRlbnRDb250YWN0TWUsIHRleHRDb250ZW50Q29udGFjdE1lMSAsbWFpbFRleHQgfSBmcm9tIFwiLi4vYXNzZXRzL3RleHQtY29udGVudFwiO1xuaW1wb3J0IHsgYXJyYXlQcm9qZWN0cyB9IGZyb20gXCIuLi9hc3NldHMvdGV4dC1jb250ZW50XCI7XG5pbXBvcnQgeyBsaW5rZWRpbiB9IGZyb20gXCIuLi9hc3NldHMvaWNvbnMtc291cmNlXCI7XG5pbXBvcnQgeyBpbnNlcnRJbWcgfSBmcm9tIFwiLi9pbnNlcnRJbWdcIjtcblxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHJvb3Quc2V0QXR0cmlidXRlKFwibGFuZ1wiLCBcImVuXCIpO1xuICByb290LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicm9vdC1lbGVtZW50XCIpO1xuICByb290LmNsYXNzTmFtZSA9IFwibGlnaHRcIjtcblxuICBjb25zdCBmbGFzaE1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmxhc2hNZXNzYWdlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZsYXNoLW1lc3NhZ2VzXCIpO1xuXG4gIGNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGhlbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRoZW1lQnV0dG9uXCIpO1xuICBjb25zdCBjaGFuZ2VUaGVtZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjaGFuZ2VUaGVtZUltZy5zcmMgPSBjaGFuZ2VUaGVtZTtcbiAgaW5zZXJ0SW1nKFxuICAgIHRoZW1lQnV0dG9uLFxuICAgIGNoYW5nZVRoZW1lSW1nLnNyYyxcbiAgICBcInRoZW1lLWxpZ2h0LWRhcmtcIixcbiAgICBcImljb25JbWdcIixcbiAgICBcIjMwcHhcIixcbiAgICBcIjMwcHhcIlxuICApO1xuICB0aGVtZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJvcmRlci1yYWRpdXM6IDMwcHg7XCIpO1xuICB0aGVtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldFRoZW1lKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gcm9vdC5jbGFzc05hbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG4gICAgcm9vdC5jbGFzc05hbWUgPSBuZXdUaGVtZTtcbiAgfVxuXG4gIC8vIGJhY2tncm91bmQgY29sb3JzXG4gIGNvbnN0IGJnRGl2Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZ0RpdkZpcnN0LmNsYXNzTGlzdC5hZGQoXCJiZ0RpdkZpcnN0XCIpO1xuICBjb25zdCBiZ0RpdlNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJnRGl2U2Vjb25kLmNsYXNzTGlzdC5hZGQoXCJiZ0RpdlNlY29uZFwiKTtcblxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1jb250YWluZXJcIik7XG5cbiAgLy8gSEVBREVSXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHRleHRJblBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgyXCIpO1xuICB0ZXh0SW5QaG90by50ZXh0Q29udGVudCA9IFwiT25saW5lIFR1dG9yXCI7XG4gIHRleHRJblBob3RvLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0SW5QaG90b1wiKTtcblxuICBjb25zdCBwaG90b1BpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgY29uc3Qgc291cmNlTGFyZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICBjb25zdCBzb3VyY2VNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICBjb25zdCBwaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG15TGFyZ2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbXlMYXJnZUltZy5zcmMgPSBpbWFnZUxhcmdlO1xuICBzb3VyY2VMYXJnZS5zZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiwgbXlMYXJnZUltZy5zcmMpO1xuICBzb3VyY2VMYXJnZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcIihtaW4td2lkdGg6IDk4MXB4KVwiKTtcbiAgY29uc3QgbXlNZWRpdW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbXlNZWRpdW1JbWcuc3JjID0gaW1hZ2VNZWRpdW07XG4gIHNvdXJjZU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiwgbXlNZWRpdW1JbWcuc3JjKTtcbiAgc291cmNlTWVkaXVtLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIFwiKG1pbi13aWR0aDo2MjFweCkgYW5kIChtYXgtd2lkdGg6OTgwcHgpXCIpO1xuICBjb25zdCBteVNtYWxsSW1nID0gbmV3IEltYWdlKCk7XG4gIG15U21hbGxJbWcuc3JjID0gaW1hZ2VTbWFsbDtcbiAgcGhvdG9JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIG15U21hbGxJbWcuc3JjKTtcbiAgcGhvdG9JbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO1xuICBwaG90b0ltZy5jbGFzc0xpc3QuYWRkKFwicGhvdG9JbWdcIik7XG5cbiAgY29uc3QgYWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBhYm91dE1lSGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDJcIik7XG4gIGNvbnN0IGFib3V0TWVIZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMlwiKTtcbiAgY29uc3QgYWJvdXRNZVRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGFib3V0TWVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBhYm91dE1lSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBhYm91dE1lLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBhYm91dE1lSGVhZGluZzEudGV4dENvbnRlbnQgPSB0aXRsZUFib3V0MTtcbiAgYWJvdXRNZUhlYWRpbmcyLnRleHRDb250ZW50ID0gdGl0bGVBYm91dDI7XG4gIGFib3V0TWVUZXh0MS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50QWJvdXRNZTE7XG4gIGFib3V0TWVUZXh0MS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgYWJvdXRNZVRleHQyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRBYm91dE1lMjtcbiAgYWJvdXRNZVRleHQyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICBhYm91dE1lSWNvbnMuY2xhc3NMaXN0LmFkZChcImRpdkljb25zXCIpO1xuXG4gIGxpbmtlZGluTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGxpbmtlZGluQWNjb3VudCk7XG4gIGxpbmtlZGluTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGNvbnN0IGxpbmtlZGluSW1nID0gbmV3IEltYWdlKCk7XG4gIGxpbmtlZGluSW1nLnNyYyA9IGxpbmtlZGluO1xuICBpbnNlcnRJbWcoXG4gICAgbGlua2VkaW5MaW5rLFxuICAgIGxpbmtlZGluSW1nLnNyYyxcbiAgICBcIkxpbmtlZGluXCIsXG4gICAgXCJpY29uSW1nXCIsXG4gICAgXCIzMHB4XCIsXG4gICAgXCIzMHB4XCJcbiAgKTtcblxuICAvLyBQUk9KRUNUUyBDT05URU5UXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50UHJvamVjdFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbGFuZyR7aSArIDF9YCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXJ0aWNsZVwiKTtcbiAgY29uc3QgcHJvamVjdHNJbkRpdiA9IFsuLi5hbGxQcm9qZWN0c0Rpdl07XG4gIGNvbnN0IGl0ZXJhdG9yID0gcHJvamVjdHNJbkRpdi5lbnRyaWVzKCk7XG5cbiAgcHJvamVjdHNJbkRpdi5mb3JFYWNoKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgbGV0IHggPSBpbmRleFsxXTtcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJkaXZJbWdBcnRpY2xlXCIpO1xuICAgIGNvbnN0IHNjcmVlbnNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJkaXZOYW1lQXJ0aWNsZVwiKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLWNvbHVtbjoxLzJcIik7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1jb2x1bW46Mi8zXCIpO1xuICAgXG4gICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2My5jbGFzc0xpc3QuYWRkKFwiZGl2RGVzY3JpcHRpb25BcnRpY2xlXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgYXJyYXlQcm9qZWN0cy5tYXAoKGUpID0+IHtcbiAgICAgIHN3aXRjaCAoZS5pZCA9PT0geC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgc2NyZWVuc2hvdC5zcmMgPSBlLnNjcmVlbnNob3RQcm9qZWN0U291cmNlO1xuICAgICAgICAgIGluc2VydEltZyhkaXYxLCBzY3JlZW5zaG90LnNyYywgXCJcIiwgXCJwcm9qZWN0SW1nXCIsIFwiMzBweFwiLCBcIjEwcHhcIik7XG4gICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGUucHJvamVjdE5hbWU7XG4gICAgICAgICAgZGVzY3JpcHRpb24xLnRleHRDb250ZW50ID0gZS5wcm9qZWN0RGVzY3JpcHRpb24xO1xuICAgICAgICAgIGRlc2NyaXB0aW9uMi50ZXh0Q29udGVudCA9IGUucHJvamVjdERlc2NyaXB0aW9uMjtcbiAgICAgICAgICBkZXNjcmlwdGlvbjMudGV4dENvbnRlbnQgPSBlLnByb2plY3REZXNjcmlwdGlvbjM7XG4gICAgICAgICAgaWYgKHguZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibGFuZzFcIikge1xuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB4LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIHguYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgeC5hcHBlbmRDaGlsZChkaXYzKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQobGlua3MpO1xuXG4gICAgZGl2My5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjEpO1xuICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24yKTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMyk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG4gIGFycmF5UHJvamVjdHMubWFwKChlKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGUubGFuZ3VhZ2U7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGUubGFuZ3VhZ2UpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibGFuZ3VhZ2VcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZS5pZCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgZS5sYW5ndWFnZSk7XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXlSYWRpb1ZhbHVlKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwicG9ydHVndcOqc1wiKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG5cbiAgICBzZWxlY3RMYW5ndWFnZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfSk7XG5cbiAgbGV0IHNlbGVjdGVkTGFuZyA9IFwibGFuZzFcIjtcbiAgbGV0IGFsbE9wdGlvbnMgPSBbXTtcbiAgYXJyYXlQcm9qZWN0cy5tYXAoKGUpID0+IHtcbiAgICBhbGxPcHRpb25zLnB1c2goZS5pZCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRpc3BsYXlSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwibGFuZ3VhZ2VcIl06Y2hlY2tlZCdcbiAgICApO1xuICAgIGlmIChnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHtcbiAgICAgIHNlbGVjdGVkTGFuZyA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XG4gICAgICBkaXNwbGF5U2VsZWN0ZWRUZXh0KHNlbGVjdGVkTGFuZywgYWxsT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVNlbGVjdGVkVGV4dChzZWxlY3RlZExhbmcsIGFsbE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXN0ID0gYWxsT3B0aW9ucy5maWx0ZXIoKHN0cmluZykgPT4gc3RyaW5nICE9PSBzZWxlY3RlZExhbmcpO1xuICAgIGNvbnN0IHNob3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzZWxlY3RlZExhbmd9YCk7XG4gICAgc2hvdy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICBzaG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHJlc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgaGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO1xuICAgICAgaGlkZS5jbGFzc05hbWUgPSBcImhpZGVcIjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZPT1RFUlxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBjb250YWN0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgY29udGFjdE1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMlwiKTtcbiAgY29uc3QgY29udGFjdE1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0TWVUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0TWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IG1lXCI7XG4gIGNvbnRhY3RNZVRleHQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudENvbnRhY3RNZTtcbiAgY29udGFjdE1lVGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudENvbnRhY3RNZTE7XG5cbiAgbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSBtYWlsVGV4dDtcbiBcbiAgY29uc3QgZW1haWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZW1haWxJbWcuc3JjID0gZW1haWxJY29uO1xuICBpbnNlcnRJbWcoXG4gICAgY29udGFjdE1lLFxuICAgIGVtYWlsSW1nLnNyYyxcbiAgICBcImVtYWlsLWFkZHJlc3NcIixcbiAgICBcImljb25JbWdcIixcbiAgICBcIjMwcHhcIixcbiAgICBcIjMwcHhcIlxuICApO1xuICBjb25zdCBjb250YWN0TWVJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgY29udGFjdE1lbGlua2VkaW5MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgY29udGFjdE1lbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGlua2VkaW5BY2NvdW50KTtcbiAgY29udGFjdE1lbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgaW5zZXJ0SW1nKFxuICAgIGNvbnRhY3RNZWxpbmtlZGluTGluayxcbiAgICBsaW5rZWRpbkltZy5zcmMsXG4gICAgXCJMaW5rZWRpblwiLFxuICAgIFwiaWNvbkltZ1wiLFxuICAgIFwiMzBweFwiLFxuICAgIFwiMzBweFwiXG4gICk7XG4gIGNvbnN0IGxpbmtlZGluVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaW5rZWRpblR4dC50ZXh0Q29udGVudCA9IGxpbmtlZGluQWNjb3VudFR4dDtcblxuICBjb25zdCBpbWdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBwaG90b0pEID0gbmV3IEltYWdlKCk7XG4gIHBob3RvSkQuc3JjID0gcGhvdG9Gb290ZXI7XG4gIGltZ0Zvb3Rlci5jbGFzc0xpc3QuYWRkKFwicGhvdG9Gb290ZXJcIik7XG4gIGltZ0Zvb3Rlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGhvdG9KRC5zcmMpO1xuICBpbWdGb290ZXIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCJhdXRvXCIpO1xuICBpbWdGb290ZXIuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjUwcHhcIik7XG4gIGltZ0Zvb3Rlci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJqYXZpZXIgZGlhelwiKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZsYXNoTWVzc2FnZXMpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoZW1lQnV0dG9uKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiZ0RpdkZpcnN0KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiZ0RpdlNlY29uZCk7XG5cbiAgYmdEaXZGaXJzdC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcbiAgYmdEaXZTZWNvbmQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocGhvdG9QaWN0dXJlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFib3V0TWUpO1xuICBwaG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlTGFyZ2UpO1xuICBwaG90b1BpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlTWVkaXVtKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHBob3RvSW1nKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHRleHRJblBob3RvKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lSGVhZGluZzEpO1xuICBhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0MSk7XG4gIGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZUhlYWRpbmcyKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDIpO1xuICBhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVJY29ucyk7XG4gIGFib3V0TWVJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRpbkxpbmspO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VsZWN0TGFuZ3VhZ2UpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1lKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGltZ0Zvb3Rlcik7XG4gIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChjb250YWN0TWVIZWFkaW5nKTtcbiAgY29udGFjdE1lLmFwcGVuZENoaWxkKGNvbnRhY3RNZVRleHQpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQoY29udGFjdE1lVGV4dDEpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQobWFpbEFkZHJlc3MpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQoY29udGFjdE1lSWNvbnMpO1xuICBjb250YWN0TWVJY29ucy5hcHBlbmRDaGlsZChjb250YWN0TWVsaW5rZWRpbkxpbmspO1xuICBjb250YWN0TWVJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRpblR4dCk7XG59XG5cbmV4cG9ydCB7IGhvbWVwYWdlIH07XG4iLCJpbXBvcnQgc2NyZWVuc2hvdDEgZnJvbSAnLi9pbWcvc2NyZWVuc2hvdC1wcm9qZWN0MS5wbmcnO1xuaW1wb3J0IHNjcmVlbnNob3QyIGZyb20gJy4vaW1nL3NjcmVlbnNob3QtcHJvamVjdDIucG5nJztcbmltcG9ydCBzY3JlZW5zaG90MyBmcm9tICcuL2ltZy9zY3JlZW5zaG90LXByb2plY3QzLnBuZyc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NsYXNzLXByb2plY3QnO1xuXG5jb25zdCB0aXRsZUFib3V0MSA9IFwiQ29uaGXDp2EgSmF2aWVyXCI7XG5jb25zdCB0aXRsZUFib3V0MiA9IFwiTWVldCBKYXZpZXJcIjtcbmNvbnN0IHRleHRDb250ZW50QWJvdXRNZTEgPVxuICAnSmF2aWVyIERpYXogw6kgdW0gcHJvZmVzc29yIGRlIGVzcGFuaG9sIGNvbSBtYWlzIGRlIGNpbmNvIGFub3MgZGUgZXhwZXJpw6puY2lhIGVtIGVuc2lubyBvbi1saW5lLic7XG5jb25zdCB0ZXh0Q29udGVudEFib3V0TWUyID1cbiAgJ0phdmllciBEaWF6IGlzIGEgU3BhbmlzaCB0dXRvciB3aXRoIG1vcmUgdGhhbiBmaXZlIHllYXJzIG9mIG9ubGluZSB0ZWFjaGluZyBleHBlcmllbmNlLic7XG5cbmNvbnN0IHRleHRDb250ZW50Q29udGFjdE1lID1cbiAgJ1NlIHZvY8OqIGFjaGEgcXVlIG1ldSB0cmFiYWxobyBzZSBlbmNhaXhhIG5vIHF1ZSB2b2PDqiBwcmVjaXNhLCBlc2NyZXZhIHBhcmEgbWltLic7XG5jb25zdCB0ZXh0Q29udGVudENvbnRhY3RNZTEgPVxuICAnSWYgeW91IHRoaW5rIG15IHdvcmsgZml0cyB3aGF0IHlvdSBuZWVkLCB3cml0ZSB0byBtZS4nO1xuXG5jb25zdCBtYWlsVGV4dCA9ICdqamRpYXpiMkBnbWFpbC5jb20nO1xuXG5jb25zdCBsaW5rZWRpbkFjY291bnQgPSAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vamF2aWVyLWpvc8OpLWTDrWF6LWJvcmJvYS0zM2E3NjgyJztcbmNvbnN0IGxpbmtlZGluQWNjb3VudFR4dCA9ICdsaW5rZWRpbi5jb20vaW4vamF2aWVyLWpvc8OpLWTDrWF6LWJvcmJvYS0zM2E3NjgyJztcblxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnbGFuZzEnKTtcbnByb2plY3QxLnByb2plY3ROYW1lID0gJ01haXMgZGUgNTQwMCBhdWxhcyBwYXJhIGFsdW5vcyBkZSB0b2RvIG8gbXVuZG8nO1xucHJvamVjdDEucHJvamVjdERlc2NyaXB0aW9uMSA9XG4gICdSZWNvbmhlY2lkbyBwb3Igc3VhIGFib3JkYWdlbSBwcsOhdGljYSwgY2xhcmV6YSBlIGRlZGljYcOnw6NvLCBKYXZpZXIgdGVtIGF0cmHDrWRvIGVzcGVjaWFsbWVudGUgcHJvZmlzc2lvbmFpcyBicmFzaWxlaXJvcyBxdWUgYnVzY2FtIG1lbGhvcmFyIHN1YXMgb3BvcnR1bmlkYWRlcyBkZSB0cmFiYWxobyBwb3IgbWVpbyBkbyBkb23DrW5pbyBkbyBpZGlvbWEgZXNwYW5ob2wuJztcbnByb2plY3QxLnByb2plY3REZXNjcmlwdGlvbjIgPVxuICAnSmF2aWVyIHRlbSA0MiBhdmFsaWHDp8O1ZXMgNSBlc3RyZWxhcyBxdWUgY29tcHJvdmFtIGEgcXVhbGlkYWRlIGRlIHNldSBlbnNpbm8uIFN1YXMgYXVsYXMgc8OjbyAxMDAlIG9uLWxpbmUsIGZsZXjDrXZlaXMgZSBwZXJzb25hbGl6YWRhcyBkZSBhY29yZG8gY29tIG9zIG9iamV0aXZvcyBlIG8gcml0bW8gZGUgY2FkYSBhbHVuby4gRW0gY29udGV4dG9zIHByb2Zpc3Npb25haXMgcmVhaXMsIGFqdWRhbmRvIG9zIGFsdW5vcyBhIHNlIGV4cHJlc3NhcmVtIGNvbSBjb25maWFuw6dhIGVtIHJldW5pw7VlcywgZW50cmV2aXN0YXMgZSBhcHJlc2VudGHDp8O1ZXMuJztcbnByb2plY3QxLnByb2plY3REZXNjcmlwdGlvbjMgPVxuICAnU2V1IG7DrXZlbCBpbnRlcm1lZGnDoXJpby9hdmFuw6dhZG8gZGUgaW5nbMOqcyBsaGUgcGVybWl0aXUgYXRyYWlyIGFsdW5vcyBkYSBFdXJvcGEgZSBkZSBwYcOtc2VzIGRlIGzDrW5ndWEgaW5nbGVzYS4gRWxlIHRhbWLDqW0gcG9zc3VpIG8gY2VydGlmaWNhZG8gXCJIb3cgdG8gVGVhY2ggYSBMYW5ndWFnZVwiIGNvbmNlZGlkbyBwZWxhIFByZXBseSBlbSByZWNvbmhlY2ltZW50byBhbyBzZXUgdHJlaW5hbWVudG8gZW0gcGVkYWdvZ2lhIGRlIGlkaW9tYXMuJztcbnByb2plY3QxLnNjcmVlbnNob3RQcm9qZWN0U291cmNlID0gc2NyZWVuc2hvdDE7XG5wcm9qZWN0MS5saW5rZWRpbkhyZWYgPSAnIyc7ICAvLyBwb25lciBhcXVpIGVsIGVubGFjZSBkZWwgY2VydGlmaWNhZG8gZGUgUHJlcGx5XG5wcm9qZWN0MS5sYW5ndWFnZSA9ICdwb3J0dWd1w6pzJztcblxuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnbGFuZzInKTtcbnByb2plY3QyLnByb2plY3ROYW1lID0gJ01vcmUgdGhhbiA1NDAwIGxlc3NvbnMgdG8gc3R1ZGVudHMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQnO1xucHJvamVjdDIucHJvamVjdERlc2NyaXB0aW9uMSA9XG4gICdSZWNvZ25pemVkIGZvciBoaXMgcHJhY3RpY2FsIGFwcHJvYWNoLCBjbGFyaXR5IGFuZCBkZWRpY2F0aW9uLCBKYXZpZXIgaGFzIHBhcnRpY3VsYXJseSBhdHRyYWN0ZWQgQnJhemlsaWFuIHByb2Zlc3Npb25hbHMgbG9va2luZyB0byBpbXByb3ZlIHRoZWlyIGpvYiBvcHBvcnR1bml0aWVzIGJ5IG1hc3RlcmluZyB0aGUgU3BhbmlzaCBsYW5ndWFnZS4nO1xucHJvamVjdDIucHJvamVjdERlc2NyaXB0aW9uMiA9XG4gICdKYXZpZXIgaGFzIDQyIHJldmlld3Mgb2YgNSBzdGFycyB0aGF0IGVuZG9yc2UgdGhlIHF1YWxpdHkgb2YgaGlzIHRlYWNoaW5nLiBIaXMgY2xhc3NlcyBhcmUgMTAwJSBvbmxpbmUsIGZsZXhpYmxlLCBhbmQgcGVyc29uYWxpemVkIGFjY29yZGluZyB0byB0aGUgZ29hbHMgYW5kIHBhY2Ugb2YgZWFjaCBzdHVkZW50LiBXaXRoaW4gcmVhbCBwcm9mZXNzaW9uYWwgY29udGV4dHMsIGhlbHBpbmcgc3R1ZGVudHMgdG8gZXhwcmVzcyB0aGVtc2VsdmVzIGNvbmZpZGVudGx5IGluIG1lZXRpbmdzLCBpbnRlcnZpZXdzIGFuZCBwcmVzZW50YXRpb25zLic7XG5wcm9qZWN0Mi5wcm9qZWN0RGVzY3JpcHRpb24zID1cbiAgJ0hpcyBpbnRlcm1lZGlhdGUvYWR2YW5jZWQgbGV2ZWwgRW5nbGlzaCBwcm9maWNpZW5jeSBoYXMgYWxsb3dlZCBoaW0gdG8gYXR0cmFjdCBzdHVkZW50cyBmcm9tIEV1cm9wZSBhbmQgRW5nbGlzaCBzcGVha2luZyBjb3VudHJpZXMuIEhlIGFsc28gaGFzIHRoZSBcIkhvdyB0byBUZWFjaCBhIExhbmd1YWdlXCIgY2VydGlmaWNhdGUgYXdhcmRlZCBieSBQcmVwbHkgYXMgYSBzdXBwb3J0IHRvIGhpcyBsYW5ndWFnZSBwZWRhZ29neSB0cmFpbmluZy4nO1xucHJvamVjdDIuc2NyZWVuc2hvdFByb2plY3RTb3VyY2UgPSBzY3JlZW5zaG90MjtcbnByb2plY3QyLmxpbmtlZGluSHJlZiA9ICcjJztcbnByb2plY3QyLmxhbmd1YWdlID0gJ2VuZ2xpc2gnO1xuXG5jb25zdCBwcm9qZWN0MyA9IG5ldyBQcm9qZWN0KCdsYW5nMycpO1xucHJvamVjdDMucHJvamVjdE5hbWUgPSAnTcOhcyBkZSA1NDAwIGxlY2Npb25lcyBwYXJhIGVzdHVkaWFudGVzIGRlIHRvZG8gZWwgbXVuZG8nO1xucHJvamVjdDMucHJvamVjdERlc2NyaXB0aW9uMSA9XG4gICdSZWNvbm9jaWRvIHBvciBzdSBlbmZvcXVlIHByw6FjdGljbywgY2xhcmlkYWQgeSBkZWRpY2FjacOzbiwgSmF2aWVyIGhhIGF0cmHDrWRvIGVzcGVjaWFsbWVudGUgYSBwcm9mZXNpb25hbGVzIGJyYXNpbGXDsW9zIHF1ZSBidXNjYW4gbWVqb3JhciBzdXMgb3BvcnR1bmlkYWRlcyBsYWJvcmFsZXMgZG9taW5hbmRvIGVsIGlkaW9tYSBlc3Bhw7FvbC4nO1xucHJvamVjdDMucHJvamVjdERlc2NyaXB0aW9uMiA9XG4gICdKYXZpZXIgdGllbmUgNDIgcmVzZcOxYXMgZGUgNSBlc3RyZWxsYXMgcXVlIGRlbXVlc3RyYW4gbGEgY2FsaWRhZCBkZSBzdSBlbnNlw7FhbnphLiBTdXMgY2xhc2VzIHNvbiAxMDAlIG9ubGluZSwgZmxleGlibGVzIHkgcGVyc29uYWxpemFkYXMgc2Vnw7puIGxvcyBvYmpldGl2b3MgeSBlbCByaXRtbyBkZSBjYWRhIGFsdW1uby4gRW4gY29udGV4dG9zIHByb2Zlc2lvbmFsZXMgcmVhbGVzLCBheXVkYW5kbyBhIGxvcyBlc3R1ZGlhbnRlcyBhIGV4cHJlc2Fyc2UgY29uIGNvbmZpYW56YSBlbiByZXVuaW9uZXMsIGVudHJldmlzdGFzIHkgcHJlc2VudGFjaW9uZXMuJztcbnByb2plY3QzLnByb2plY3REZXNjcmlwdGlvbjMgPVxuICAnU3UgZG9taW5pbyBkZWwgaW5nbMOpcyBhIG5pdmVsIGludGVybWVkaW8vYXZhbnphZG8gbGUgaGEgcGVybWl0aWRvIGF0cmFlciBhIGVzdHVkaWFudGVzIGRlIEV1cm9wYSB5IGRlIHBhw61zZXMgZGUgaGFibGEgaW5nbGVzYS4gQWRlbcOhcywgY3VlbnRhIGNvbiBlbCBjZXJ0aWZpY2FkbyBcIkhvdyB0byBUZWFjaCBhIExhbmd1YWdlXCIgb3RvcmdhZG8gcG9yIFByZXBseSBjb21vIHJlc3BhbGRvIGEgc3UgZm9ybWFjacOzbiBlbiBwZWRhZ29nw61hIGxpbmfDvMOtc3RpY2EuJztcbnByb2plY3QzLnNjcmVlbnNob3RQcm9qZWN0U291cmNlID0gc2NyZWVuc2hvdDM7XG5wcm9qZWN0My5saW5rZWRpbkhyZWYgPSAnIyc7XG5wcm9qZWN0My5sYW5ndWFnZSA9ICdlc3Bhw7FvbCc7XG5cbmNvbnN0IGFycmF5UHJvamVjdHMgPSBbXG4gIHByb2plY3QxLFxuICBwcm9qZWN0MixcbiAgcHJvamVjdDMsXG5dO1xuXG5leHBvcnQge1xuICB0aXRsZUFib3V0MSxcbiAgdGl0bGVBYm91dDIsXG4gIHRleHRDb250ZW50QWJvdXRNZTEsXG4gIHRleHRDb250ZW50QWJvdXRNZTIsXG4gIGFycmF5UHJvamVjdHMsXG4gIHRleHRDb250ZW50Q29udGFjdE1lLFxuICB0ZXh0Q29udGVudENvbnRhY3RNZTEsXG4gIG1haWxUZXh0LFxuICBsaW5rZWRpbkFjY291bnQsXG4gIGxpbmtlZGluQWNjb3VudFR4dCxcbn07XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLmlkID0gdmFsdWU7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9ICcnO1xuICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uMSA9ICcnO1xuICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uMiA9ICcnO1xuICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uMyA9ICcnO1xuICAgIHRoaXMuc2NyZWVuc2hvdFByb2plY3RTb3VyY2UgPSAnJztcbiAgICB0aGlzLmxpbmtlZGluSHJlZiA9ICcnO1xuICAgIHRoaXMubGFuZ3VhZ2UgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCIvKiBJQ09OUyAqL1xuXG4gIGNvbnN0IGxpbmtlZGluID1cbiAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9saW5rZWRpbi9saW5rZWRpbi1vcmlnaW5hbC5zdmcnO1xuXG5leHBvcnQgeyBsaW5rZWRpbiB9O1xuIiwiZnVuY3Rpb24gaW5zZXJ0SW1nKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsYXJnNSxhcmc2KSB7XG4gIC8vIGFyZzEgaXMgdGhlIHBhcmVudCBkaXYgLSBhcmcyIGlzIHRoZSBzb3VyY2VcbiAgLy8gYXJnMyBpcyB0aGUgYWx0IHRleHQgLSBhcmc0IGlzIHRoZSBjbGFzc1xuICAvLyBhcmc1IGlzIHRoZSB3aWR0aCAtIGFyZzYgaXMgdGhlIGhlaWdodFxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYXJnMik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFyZzMpO1xuICBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGFyZzUpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBhcmc2KTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoYXJnNCk7XG4gIGFyZzEuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZXhwb3J0IHsgaW5zZXJ0SW1nIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUtcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUtbGFyZ2UuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUtbWVkaXVtLmNzcyc7XG5pbXBvcnQgeyBnb29nbGVGb250cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ29vZ2xlLWZvbnRzXCI7XG5pbXBvcnQgeyBob21lcGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZXBhZ2VcIjtcblxuY29uc3QgbWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbm1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzY3JpcHRpb24nKTtcbm1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywnbGVhcm5pbmcgc3BhbmlzaCBvbmxpbmUgdHV0b3IgamF2aWVyIGRpYXonKTtcblxuZ29vZ2xlRm9udHMoKTtcbmhvbWVwYWdlKCk7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9