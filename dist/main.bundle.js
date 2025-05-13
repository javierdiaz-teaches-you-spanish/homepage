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
  grid-template-rows: 0.7fr 3fr;
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

article {
  --defining-width: calc(0.7 * 100vw);
  width: var(--defining-width);
  height: calc(var(--defining-width) * 2.9);
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
  grid-template-rows: 1fr 1.2fr 1fr 1fr 1fr;
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
  grid-column: 3/4;
}

footer > section > h2 + p + p + p {
  grid-row: 4, 5;
  grid-column: 3/4;
}

footer > section > img {
  grid-row: 3/4;
  grid-column: 1/2;
}

footer > section > img + img {
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: auto;\n}\n\nh1,h2,h3 {\n  font-family: 'Playfair Display', serif;\n  font-optical-sizing: auto;\n  font-weight: 600;\n  font-style: normal;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n.photoImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.iconImg {\n  height: 30px;\n  width: auto;\n}\n\n.projectImg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n/* define background colors - starts*/\n.light {\n  --color-bg-first: #f3eded;\n  --color-bg-header: #d9c9c8;\n  --color-bg-section: white;\n  --color-bg-article: #e3d7d6;\n  --color-article-shadow: #d9c9c8;\n  --color-bg-second: #d9c9c8;\n  --color-base-text-title: #2d2322;\n  --color-base-text: #584644;\n  --color-base-text-article: #2d2322;\n}\n\n.dark {\n  --color-bg-first: #aa8c89;\n  --color-bg-header: #aa8c89;\n  --color-bg-section: #aa8c89;\n  --color-bg-article: #93726f;\n  --color-article-shadow: #c2a9a7;\n  --color-bg-second: #aa8c89;\n  --color-base-text-title: #f3eded;\n  --color-base-text: #f3eded;\n  --color-base-text-article: #f3eded;\n}\n\n.bgDivFirst {\n  background-color: var(--color-bg-first);\n}\n\n.bgDivFirst > div > header {\n  background-color: var(--color-bg-header);\n}\n\n.bgDivFirst > div > header > section {\n  background-color: var(--color-bg-section);\n}\n\narticle {\n  background-color: var(--color-bg-article);\n}\n\n.bgDivSecond {\n  /*footer*/\n  background-color: var(--color-bg-second);\n  color: var(--color-base-text);\n}\n\n/* define background colors end */\n\n.page-container {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.7fr 3fr;\n}\n\n.page-container > header {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.page-container > header > picture {\n  position: relative;\n}\n\n.textInPhoto {\n  position: absolute;\n  transform: translate(20px, -100%);\n  /* translate X,Y */\n  width: 80%;\n  color: #f9f7f7;\n  font-size: 4rem;\n}\n\n.page-container > main {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.content {\n  /* aboutMe*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\nh2 {\n  padding-top: 1%;\n  color: var(--color-base-text-title);\n  font-size: 2rem;\n}\n\n.contentProject {\n  /* my work*/\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 6px;\n  gap: 10px;\n\n  position: relative;\n}\n\narticle {\n  --defining-width: calc(0.7 * 100vw);\n  width: var(--defining-width);\n  height: calc(var(--defining-width) * 2.9);\n  border-radius: 6px;\n  box-shadow: var(--color-article-shadow) 2px 2px 4px 2px;\n}\n\narticle {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.095fr 0.005fr 0.9fr;\n}\n\n.divImgArticle {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  box-shadow: var(--color-bg-first) 2px 2px 2px 2px;\n}\n\n.divNameArticle {\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 2fr 1fr;\n}\n\n.divNameArticle > h3 {\n  color: var(--color-base-text-article);\n  font-size: 1.2rem;\n  font-weight: 900;\n  padding-left: 4%;\n  padding-top: 3%;\n}\n\n.divNameArticle > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n  gap: 10px;\n  padding-top: 3.5%;\n}\n\n.divDescriptionArticle {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  display: flex;\n  flex-direction: column;\n  justify-content:flex-start;\n  row-gap: 15px;\n  padding-top: 20px;\n}\n\n.divDescriptionArticle > p {\n  color: var(--color-base-text-article);\n  font-size: 1rem;\n  padding-left: 4%;\n}\n\n.projectImg {\n  width: var(--defining-width);\n  height: calc(var(--defining-width) * 0.25 * 0.7);\n  object-fit: cover;\n  border-radius: 6px 6px 0px 0px;\n}\n\n.text {\n  flex-shrink: 1;\n  padding: 5%;\n  text-align: justify;\n  color: var(--color-base-text);\n  font-size: 1rem;\n}\n\n.divIcons {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  padding-bottom: 2%;\n}\n\nfooter {\n  --define-height-footer: calc(0.7 * 100vh);\n  width: 100%;\n  height: var(--define-height-footer);\n}\n\nfooter {\n  width: 100%;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\nfooter > section {\n  height: 100%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 7fr;\n  grid-template-rows: 1fr 1.2fr 1fr 1fr 1fr;\n}\n\nfooter > section > h2 {\n  grid-row: 1/2;\n  grid-column: 1/4;\n}\n\nfooter > section > h2 + p {\n  grid-row: 2/3;\n  grid-column: 1/4;\n  row-gap: 1.1;\n}\n\nfooter > section > h2 + p + p {\n  grid-row: 3/4;\n  grid-column: 3/4;\n}\n\nfooter > section > h2 + p + p + p {\n  grid-row: 4, 5;\n  grid-column: 3/4;\n}\n\nfooter > section > img {\n  grid-row: 3/4;\n  grid-column: 1/2;\n}\n\nfooter > section > img + img {\n  grid-row: 4/5;\n  grid-column: 1/2;\n}\n\nfooter > section > div {\n  grid-row: 5/6;\n  grid-column: 1/4;\n}\n\nfooter > section > div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n}\n\n.photoFooter {\n  width: auto;\n  height: 250px;\n  object-fit: cover;\n}\n\n/*buttons*/\n\n.themeButton {\n  position: absolute;\n  top: 4%;\n  right: 3%;\n  z-index: 1;\n  background-color: var(--color-bg-first);\n\n  transition: transform 250ms ease-in-out;\n}\n\n.themeButton:hover {\n  transform: scale(1.1);\n  background-color: var(--color-bg-section);\n}\n\n.themeButton:active {\n  transform: scale(1.1);\n  background-color: var(--color-bg-article);\n  color: var(--color-bg-section);\n}\n\na {\n  transition: transform 250ms ease-in-out;\n}\n\na:hover {\n  transform: scale(1.05);\n}\n\na:active {\n  transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
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
    grid-template-rows: 0.7fr 2.6fr;
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
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
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

  main > H2 {
    grid-row: 1/2;
    padding-left: 4%;
    font-size: 2.5rem;
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

  footer > section > img {
    grid-row: 3/4;
    grid-column: 2/3;
  }

  footer > section > img + img {
    grid-row: 4/5;
    grid-column: 2/3;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style-large.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;EACjC;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,6BAA6B;EAC/B;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,yCAAyC;IACzC,kBAAkB;EACpB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,0CAA0C;IAC1C,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;AACF","sourcesContent":["@media screen and (min-width: 981px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 5.6rem;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 3%;\n    right: 3%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.7fr 2.6fr;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .page-container > main {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px 1fr;\n  }\n\n  .content {\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main > H2 {\n    grid-row: 1/2;\n    padding-left: 4%;\n    font-size: 2.5rem;\n  }\n\n  .contentProject {\n    grid-row: 2/3;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.82 * (100vw / 3));\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 2.3);\n    border-radius: 6px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  .divDescriptionArticle > p {\n    padding-top: 3%;\n  }\n\n  footer {\n    --define-height-footer: calc(0.45 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  footer > section > h2 + p {\n    font-size: 1.3rem;\n  }\n\n  footer > section > img {\n    grid-row: 3/4;\n    grid-column: 2/3;\n  }\n\n  footer > section > img + img {\n    grid-row: 4/5;\n    grid-column: 2/3;\n  }\n}\n"],"sourceRoot":""}]);
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
    grid-template-rows: 1fr 3fr;
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

  footer > section > img {
    grid-row: 3/4;
    grid-column: 2/3;
  }
  footer > section > img + img {
    grid-row: 4/5;
    grid-column: 2/3;
  }
  footer > section > div {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 40px;
    gap: 10px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style-medium.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0CAA0C;IAC1C,4BAA4B;IAC5B,yCAAyC;IACzC,kBAAkB;EACpB;;EAEA;IACE,4BAA4B;IAC5B,+CAA+C;IAC/C,iBAAiB;IACjB,8BAA8B;EAChC;;EAEA;IACE,yCAAyC;IACzC,WAAW;IACX,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 621px) and (max-width: 980px) {\n  .photoImg {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  .textInPhoto {\n    font-size: 4.5rem;\n  }\n\n  .themeButton {\n    position: absolute;\n    top: 2%;\n    right: 2%;\n    z-index: 1;\n  }\n\n  .page-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 3fr;\n  }\n\n  .page-container > header {\n    width: 80%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .divIcons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  .contentProject {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n\n  article {\n    --defining-width: calc(0.75 * (100vw / 2));\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 2.1);\n    border-radius: 6px;\n  }\n\n  .projectImg {\n    width: var(--defining-width);\n    height: calc(var(--defining-width) * 0.3 * 0.7);\n    object-fit: cover;\n    border-radius: 6px 6px 0px 0px;\n  }\n\n  footer {\n    --define-height-footer: calc(0.3 * 100vh);\n    width: 100%;\n    height: var(--define-height-footer);\n  }\n\n  footer {\n    width: 80%;\n    height: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  footer > section > img {\n    grid-row: 3/4;\n    grid-column: 2/3;\n  }\n  footer > section > img + img {\n    grid-row: 4/5;\n    grid-column: 2/3;\n  }\n  footer > section > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    padding-right: 40px;\n    gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_img_open_in_new_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _assets_img_phone_dial_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _assets_text_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _assets_icons_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _insertImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);

















function homepage() {
  const root = document.documentElement;
  root.setAttribute('lang','en');
  root.setAttribute('id', 'root-element');
  root.className = 'light';

  const flashMessages = document.createElement('div');
  flashMessages.setAttribute('id', 'flash-messages');

  const themeButton = document.createElement('button');
  themeButton.classList.add('themeButton');
  const changeThemeImg = new Image();
  changeThemeImg.src = _assets_img_theme_light_dark_png__WEBPACK_IMPORTED_MODULE_4__;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(themeButton, changeThemeImg.src, 'theme-light-dark', 'iconImg','30px','30px');
  themeButton.setAttribute('style', 'border-radius: 30px;');
  themeButton.addEventListener('click', () => {
    setTheme();
  });

  function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }

  // background colors
  const bgDivFirst = document.createElement('div');
  bgDivFirst.classList.add('bgDivFirst');
  const bgDivSecond = document.createElement('div');
  bgDivSecond.classList.add('bgDivSecond');

  const pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container');

// HEADER
const header = document.createElement('header');
const textInPhoto = document.createElement('H2');
textInPhoto.textContent = 'Online Tutor';
textInPhoto.classList.add('textInPhoto');

const photoPicture = document.createElement('picture');
  const sourceLarge = document.createElement('source');
  const sourceMedium = document.createElement('source');
  const photoImg = document.createElement('img');
  const myLargeImg = new Image();
  myLargeImg.src = _assets_img_large_img_jpg__WEBPACK_IMPORTED_MODULE_2__;
  sourceLarge.setAttribute('srcset', myLargeImg.src);
  sourceLarge.setAttribute('media', '(min-width: 981px)');
  const myMediumImg = new Image();
  myMediumImg.src = _assets_img_medium_img_jpg__WEBPACK_IMPORTED_MODULE_1__;
  sourceMedium.setAttribute('srcset', myMediumImg.src);
  sourceMedium.setAttribute('media', '(min-width:621px) and (max-width:980px)');
  const mySmallImg = new Image();
  mySmallImg.src = _assets_img_small_img_jpg__WEBPACK_IMPORTED_MODULE_0__;
  photoImg.setAttribute('src', mySmallImg.src);
  photoImg.setAttribute('alt', '');
  photoImg.classList.add('photoImg');

  const aboutMe = document.createElement('section');
  const aboutMeHeading1 = document.createElement('H2');
  const aboutMeHeading2 = document.createElement('H2');
  const aboutMeText1 = document.createElement('p');
  const aboutMeText2 = document.createElement('p');
  const aboutMeIcons = document.createElement('div');
  const linkedinLink = document.createElement('a');

  aboutMe.classList.add('content');
  aboutMeHeading1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.titleAbout1;
  aboutMeHeading2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.titleAbout2;
  aboutMeText1.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentAboutMe1;
  aboutMeText1.classList.add('text');
  aboutMeText2.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentAboutMe2;
  aboutMeText2.classList.add('text');
  aboutMeIcons.classList.add('divIcons');
 
  linkedinLink.setAttribute('href', _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.linkedinAccount);
  linkedinLink.setAttribute('target', '_blank');
  const linkedinImg = new Image();
  linkedinImg.src = _assets_icons_source__WEBPACK_IMPORTED_MODULE_9__.linkedin;
  (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(linkedinLink, linkedinImg.src, 'Linkedin', 'iconImg','30px','30px');

// PROJECTS CONTENT
const main = document.createElement('main');
const contentHeading = document.createElement('H2');
const content = document.createElement('section');
content.classList.add('contentProject');

contentHeading.textContent = 'My work';
  for (let i = 0; i < _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.length; i++) {
    const project = document.createElement('article');
    project.setAttribute('id', `project${i + 1}`);
    content.appendChild(project);
  }

  const allProjectsDiv = content.querySelectorAll('article');
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const div1 = document.createElement('div');
    div1.classList.add('divImgArticle');
    const screenshot = new Image();
    const div2 = document.createElement('div');
    div2.classList.add('divNameArticle');
    const name = document.createElement('h3');
    name.setAttribute('style', 'grid-column:1/2');
    const links = document.createElement('div');
    links.setAttribute('style', 'grid-column:2/3');
    const newWindowLink = document.createElement('a');
    newWindowLink.setAttribute('target', '_blank');
    const newWindowImg = new Image();
    newWindowImg.src = _assets_img_open_in_new_png__WEBPACK_IMPORTED_MODULE_5__;
    (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(newWindowLink, newWindowImg.src, 'new-window', 'iconImg','30px','30px');
    const div3 = document.createElement('div');
    div3.classList.add('divDescriptionArticle');
    const description1 = document.createElement('p');
    const description2 = document.createElement('p');
    const description3 = document.createElement('p');

    _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.arrayProjects.map((e) => {
      switch (e.id === x.getAttribute('id')) {
        case true:
          screenshot.src = e.screenshotProjectSource;
          (0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(div1, screenshot.src, '', 'projectImg','30px','10px');
          name.textContent = e.projectName;
          newWindowLink.setAttribute('href', e.projectNewWindow);
          description1.textContent = e.projectDescription1;
          description2.textContent = e.projectDescription2;
          description3.textContent = e.projectDescription3;
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
    links.appendChild(newWindowLink);
    div3.appendChild(description1);
    div3.appendChild(description2);
    div3.appendChild(description3);
  });

// FOOTER
const footer = document.createElement('footer');
const contactMe = document.createElement('section');
const contactMeHeading = document.createElement('H2');
const contactMeText = document.createElement('p');
const phoneNumber = document.createElement('p');
const mailAddress = document.createElement('p');
contactMeHeading.textContent = 'Contact me';
contactMeText.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.textContentContactMe;

mailAddress.textContent = _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.mailText;
const phoneImg = new Image();
phoneImg.src = _assets_img_phone_dial_outline_png__WEBPACK_IMPORTED_MODULE_7__;
(0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(contactMe, phoneImg.src, 'phone', 'iconImg','30px','30px');
const emailImg = new Image();
emailImg.src = _assets_img_email_outline_png__WEBPACK_IMPORTED_MODULE_6__;
(0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(contactMe, emailImg.src, 'email-address', 'iconImg','30px','30px');
const contactMeIcons = document.createElement('div');

const contactMelinkedinLink = document.createElement('a');

contactMelinkedinLink.setAttribute('href', _assets_text_content__WEBPACK_IMPORTED_MODULE_8__.linkedinAccount);
contactMelinkedinLink.setAttribute('target', '_blank');
(0,_insertImg__WEBPACK_IMPORTED_MODULE_10__.insertImg)(contactMelinkedinLink, linkedinImg.src, 'Linkedin', 'iconImg','30px','30px');

const imgFooter = document.createElement('img');
const photoJD = new Image();
photoJD.src = _assets_img_footer_img_png__WEBPACK_IMPORTED_MODULE_3__;
imgFooter.classList.add('photoFooter');
imgFooter.setAttribute('src', photoJD.src);
imgFooter.setAttribute('width', 'auto');
imgFooter.setAttribute('height', '250px');
imgFooter.setAttribute('alt', 'javier diaz');


  /////////////////////////////////

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

  main.appendChild(contentHeading);
  main.appendChild(content);

  footer.appendChild(contactMe);
  footer.appendChild(imgFooter);
  contactMe.appendChild(contactMeHeading);
  contactMe.appendChild(contactMeText);
  contactMe.appendChild(phoneNumber);
  contactMe.appendChild(mailAddress);
  contactMe.appendChild(contactMeIcons);
  contactMeIcons.appendChild(contactMelinkedinLink);

};




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
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f7b746b2d2213d9be8.png";

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fd29b2b9c11a6531107.png";

/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ac611e6880eb90c6253.png";

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
/* harmony export */   titleAbout1: () => (/* binding */ titleAbout1),
/* harmony export */   titleAbout2: () => (/* binding */ titleAbout2)
/* harmony export */ });
/* harmony import */ var _img_screenshot_project1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _img_screenshot_project2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _img_screenshot_project3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _class_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);






const titleAbout1 = "Conheça Javier";
const titleAbout2 = "Meet Javier";
const textContentAboutMe1 =
  'Javier Diaz é um professor de espanhol com mais de cinco anos de experiência em ensino on-line.';
const textContentAboutMe2 =
  'Javier Diaz is a Spanish tutor with more than five years of online teaching experience.';

const textContentContactMe =
  'Se você acha que meu trabalho se encaixa no que você precisa, escreva para mim.\nIf you think my work fits what you need, write to me.';
/* const phoneText = '123-4567-890'; */
const mailText = 'jjdiazb2@gmail.com';

const linkedinAccount = 'https://linkedin.com/in/javier-josé-díaz-borboa-33a7682';
const linkedinAccountTxt = 'linkedin.com/in/javier-josé-díaz-borboa-33a7682';

const project1 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('project1');
project1.projectName = 'Mais de 5400 aulas para alunos de todo o mundo';
project1.projectDescription1 =
  'Reconhecido por sua abordagem prática, clareza e dedicação, Javier tem atraído especialmente profissionais brasileiros que buscam melhorar suas oportunidades de trabalho por meio do domínio do idioma espanhol.';
project1.projectDescription2 =
  'Javier tem 42 avaliações 5 estrelas que comprovam a qualidade de seu ensino. Suas aulas são 100% on-line, flexíveis e personalizadas de acordo com os objetivos e o ritmo de cada aluno. Em contextos profissionais reais, ajudando os alunos a se expressarem com confiança em reuniões, entrevistas e apresentações.';
project1.projectDescription3 =
  'Seu nível intermediário/avançado de inglês lhe permitiu atrair alunos da Europa e de países de língua inglesa. Ele também possui o certificado "How to Teach a Language" concedido pela Preply em reconhecimento ao seu treinamento em pedagogia de idiomas.';
project1.screenshotProjectSource = _img_screenshot_project1_png__WEBPACK_IMPORTED_MODULE_0__;
project1.linkedinHref = '#';
/* project1.projectNewWindow = '#'; */

const project2 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('project2');
project2.projectName = 'More than 5400 lessons to students from all over the world';
project2.projectDescription1 =
  'Recognized for his practical approach, clarity and dedication, Javier has particularly attracted Brazilian professionals looking to improve their job opportunities by mastering the Spanish language.';
project2.projectDescription2 =
  'Javier has 42 reviews of 5 stars that endorse the quality of his teaching. His classes are 100% online, flexible, and personalized according to the goals and pace of each student. Within real professional contexts, helping students to express themselves confidently in meetings, interviews and presentations.';
project2.projectDescription3 =
  'His intermediate/advanced level English proficiency has allowed him to attract students from Europe and English speaking countries. He also has the "How to Teach a Language" certificate awarded by Preply as a support to his language pedagogy training.';
project2.screenshotProjectSource = _img_screenshot_project2_png__WEBPACK_IMPORTED_MODULE_1__;
project2.linkedinHref = '#';
/* project2.projectNewWindow = '#'; */

const project3 = new _class_project__WEBPACK_IMPORTED_MODULE_3__.Project('project3');
project3.projectName = 'Más de 5400 lecciones para estudiantes de todo el mundo';
project3.projectDescription1 =
  'Reconocido por su enfoque práctico, claridad y dedicación, Javier ha atraído especialmente a profesionales brasileños que buscan mejorar sus oportunidades laborales dominando el idioma español.';
project3.projectDescription2 =
  'Javier tiene 42 reseñas de 5 estrellas que demuestran la calidad de su enseñanza. Sus clases son 100% online, flexibles y personalizadas según los objetivos y el ritmo de cada alumno. En contextos profesionales reales, ayudando a los estudiantes a expresarse con confianza en reuniones, entrevistas y presentaciones.';
project3.projectDescription3 =
  'Su dominio del inglés a nivel intermedio/avanzado le ha permitido atraer a estudiantes de Europa y de países de habla inglesa. Además, cuenta con el certificado "How to Teach a Language" otorgado por Preply como respaldo a su formación en pedagogía lingüística.';
project3.screenshotProjectSource = _img_screenshot_project3_png__WEBPACK_IMPORTED_MODULE_2__;
project3.linkedinHref = '#';
/* project3.projectNewWindow = '#'; */

const arrayProjects = [
  project1,
  project2,
  project3,
];




/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c8161d4527c589100ba.png";

/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20e6886519ef3b5decdf.png";

/***/ }),
/* 30 */
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
   /*  this.projectNewWindow = ''; */
  }
}




/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkedin: () => (/* binding */ linkedin)
/* harmony export */ });
/* ICONS */

  const linkedin =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg';




/***/ }),
/* 32 */
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




/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "771e9f21d22857a66a14.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFB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Ozs7Ozs7Ozs7Ozs7OztBQ3pFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7O0FDYm5COztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7OztBQ0xwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7VUNickI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNOO0FBQ007QUFDQztBQUNxQjtBQUNQOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUEscUVBQVc7QUFDWCw4REFBUTs7QUFFUjtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS1yZXNldC5jc3M/YzRkNiIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzcz8wMDllIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS1tZWRpdW0uY3NzP2Y5OWIiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUtbWVkaXVtLmNzcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZ29vZ2xlLWZvbnRzLmpzIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy90ZXh0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9hc3NldHMvY2xhc3MtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2Fzc2V0cy9pY29ucy1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2luc2VydEltZy5qcyIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmllcmRpYXotaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2aWVyZGlhei1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZpZXJkaWF6LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgaW5wdXQge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtDQUNDOzs7Q0FHQTs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsa0NBQWtDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgxLGgyLGgzIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ucGhvdG9JbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmljb25JbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucHJvamVjdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XG59XG5cbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyAtIHN0YXJ0cyovXG4ubGlnaHQge1xuICAtLWNvbG9yLWJnLWZpcnN0OiAjZjNlZGVkO1xuICAtLWNvbG9yLWJnLWhlYWRlcjogI2Q5YzljODtcbiAgLS1jb2xvci1iZy1zZWN0aW9uOiB3aGl0ZTtcbiAgLS1jb2xvci1iZy1hcnRpY2xlOiAjZTNkN2Q2O1xuICAtLWNvbG9yLWFydGljbGUtc2hhZG93OiAjZDljOWM4O1xuICAtLWNvbG9yLWJnLXNlY29uZDogI2Q5YzljODtcbiAgLS1jb2xvci1iYXNlLXRleHQtdGl0bGU6ICMyZDIzMjI7XG4gIC0tY29sb3ItYmFzZS10ZXh0OiAjNTg0NjQ0O1xuICAtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlOiAjMmQyMzIyO1xufVxuXG4uZGFyayB7XG4gIC0tY29sb3ItYmctZmlyc3Q6ICNhYThjODk7XG4gIC0tY29sb3ItYmctaGVhZGVyOiAjYWE4Yzg5O1xuICAtLWNvbG9yLWJnLXNlY3Rpb246ICNhYThjODk7XG4gIC0tY29sb3ItYmctYXJ0aWNsZTogIzkzNzI2ZjtcbiAgLS1jb2xvci1hcnRpY2xlLXNoYWRvdzogI2MyYTlhNztcbiAgLS1jb2xvci1iZy1zZWNvbmQ6ICNhYThjODk7XG4gIC0tY29sb3ItYmFzZS10ZXh0LXRpdGxlOiAjZjNlZGVkO1xuICAtLWNvbG9yLWJhc2UtdGV4dDogI2YzZWRlZDtcbiAgLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZTogI2YzZWRlZDtcbn1cblxuLmJnRGl2Rmlyc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1maXJzdCk7XG59XG5cbi5iZ0RpdkZpcnN0ID4gZGl2ID4gaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctaGVhZGVyKTtcbn1cblxuLmJnRGl2Rmlyc3QgPiBkaXYgPiBoZWFkZXIgPiBzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XG59XG5cbmFydGljbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hcnRpY2xlKTtcbn1cblxuLmJnRGl2U2Vjb25kIHtcbiAgLypmb290ZXIqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0KTtcbn1cblxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIGVuZCAqL1xuXG4ucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciAzZnI7XG59XG5cbi5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIgPiBwaWN0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGV4dEluUGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0xMDAlKTtcbiAgLyogdHJhbnNsYXRlIFgsWSAqL1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogI2Y5ZjdmNztcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4ucGFnZS1jb250YWluZXIgPiBtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gIC8qIGFib3V0TWUqL1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDIge1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jb250ZW50UHJvamVjdCB7XG4gIC8qIG15IHdvcmsqL1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZ2FwOiAxMHB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYXJ0aWNsZSB7XG4gIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43ICogMTAwdncpO1xuICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi45KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1hcnRpY2xlLXNoYWRvdykgMnB4IDJweCA0cHggMnB4O1xufVxuXG5hcnRpY2xlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4wOTVmciAwLjAwNWZyIDAuOWZyO1xufVxuXG4uZGl2SW1nQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvbG9yLWJnLWZpcnN0KSAycHggMnB4IDJweCAycHg7XG59XG5cbi5kaXZOYW1lQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG5cbi5kaXZOYW1lQXJ0aWNsZSA+IGgzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctbGVmdDogNCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbn1cblxuLmRpdk5hbWVBcnRpY2xlID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMy41JTtcbn1cblxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuICByb3ctZ2FwOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGUpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogNCU7XG59XG5cbi5wcm9qZWN0SW1nIHtcbiAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMjUgKiAwLjcpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xufVxuXG4udGV4dCB7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBwYWRkaW5nOiA1JTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmRpdkljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbmZvb3RlciB7XG4gIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC43ICogMTAwdmgpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA3ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuMmZyIDFmciAxZnIgMWZyO1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS80O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwIHtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgcm93LWdhcDogMS4xO1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCB7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwICsgcCB7XG4gIGdyaWQtcm93OiA0LCA1O1xuICBncmlkLWNvbHVtbjogMy80O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cblxuZm9vdGVyID4gc2VjdGlvbiA+IGltZyArIGltZyB7XG4gIGdyaWQtcm93OiA0LzU7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG59XG5cbmZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xuICBncmlkLXJvdzogNS82O1xuICBncmlkLWNvbHVtbjogMS80O1xufVxuXG5mb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnBob3RvRm9vdGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4vKmJ1dHRvbnMqL1xuXG4udGhlbWVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNCU7XG4gIHJpZ2h0OiAzJTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctZmlyc3QpO1xuXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLnRoZW1lQnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcbn1cblxuLnRoZW1lQnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbmE6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGtDQUFr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QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUNBQXVDOztFQUV2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5oMSxoMixoMyB7XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcXG4gIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5waG90b0ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaWNvbkltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnByb2plY3RJbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG59XFxuXFxuLyogZGVmaW5lIGJhY2tncm91bmQgY29sb3JzIC0gc3RhcnRzKi9cXG4ubGlnaHQge1xcbiAgLS1jb2xvci1iZy1maXJzdDogI2YzZWRlZDtcXG4gIC0tY29sb3ItYmctaGVhZGVyOiAjZDljOWM4O1xcbiAgLS1jb2xvci1iZy1zZWN0aW9uOiB3aGl0ZTtcXG4gIC0tY29sb3ItYmctYXJ0aWNsZTogI2UzZDdkNjtcXG4gIC0tY29sb3ItYXJ0aWNsZS1zaGFkb3c6ICNkOWM5Yzg7XFxuICAtLWNvbG9yLWJnLXNlY29uZDogI2Q5YzljODtcXG4gIC0tY29sb3ItYmFzZS10ZXh0LXRpdGxlOiAjMmQyMzIyO1xcbiAgLS1jb2xvci1iYXNlLXRleHQ6ICM1ODQ2NDQ7XFxuICAtLWNvbG9yLWJhc2UtdGV4dC1hcnRpY2xlOiAjMmQyMzIyO1xcbn1cXG5cXG4uZGFyayB7XFxuICAtLWNvbG9yLWJnLWZpcnN0OiAjYWE4Yzg5O1xcbiAgLS1jb2xvci1iZy1oZWFkZXI6ICNhYThjODk7XFxuICAtLWNvbG9yLWJnLXNlY3Rpb246ICNhYThjODk7XFxuICAtLWNvbG9yLWJnLWFydGljbGU6ICM5MzcyNmY7XFxuICAtLWNvbG9yLWFydGljbGUtc2hhZG93OiAjYzJhOWE3O1xcbiAgLS1jb2xvci1iZy1zZWNvbmQ6ICNhYThjODk7XFxuICAtLWNvbG9yLWJhc2UtdGV4dC10aXRsZTogI2YzZWRlZDtcXG4gIC0tY29sb3ItYmFzZS10ZXh0OiAjZjNlZGVkO1xcbiAgLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZTogI2YzZWRlZDtcXG59XFxuXFxuLmJnRGl2Rmlyc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctZmlyc3QpO1xcbn1cXG5cXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1oZWFkZXIpO1xcbn1cXG5cXG4uYmdEaXZGaXJzdCA+IGRpdiA+IGhlYWRlciA+IHNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctc2VjdGlvbik7XFxufVxcblxcbmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctYXJ0aWNsZSk7XFxufVxcblxcbi5iZ0RpdlNlY29uZCB7XFxuICAvKmZvb3RlciovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWNvbmQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UtdGV4dCk7XFxufVxcblxcbi8qIGRlZmluZSBiYWNrZ3JvdW5kIGNvbG9ycyBlbmQgKi9cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciAzZnI7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIgPiBoZWFkZXIgPiBwaWN0dXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHRJblBob3RvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0xMDAlKTtcXG4gIC8qIHRyYW5zbGF0ZSBYLFkgKi9cXG4gIHdpZHRoOiA4MCU7XFxuICBjb2xvcjogI2Y5ZjdmNztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyID4gbWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAvKiBhYm91dE1lKi9cXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmgyIHtcXG4gIHBhZGRpbmctdG9wOiAxJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtdGl0bGUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGVudFByb2plY3Qge1xcbiAgLyogbXkgd29yayovXFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC43ICogMTAwdncpO1xcbiAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAyLjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItYXJ0aWNsZS1zaGFkb3cpIDJweCAycHggNHB4IDJweDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMDk1ZnIgMC4wMDVmciAwLjlmcjtcXG59XFxuXFxuLmRpdkltZ0FydGljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jb2xvci1iZy1maXJzdCkgMnB4IDJweCAycHggMnB4O1xcbn1cXG5cXG4uZGl2TmFtZUFydGljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxufVxcblxcbi5kaXZOYW1lQXJ0aWNsZSA+IGgzIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQtYXJ0aWNsZSk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDQlO1xcbiAgcGFkZGluZy10b3A6IDMlO1xcbn1cXG5cXG4uZGl2TmFtZUFydGljbGUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDMuNSU7XFxufVxcblxcbi5kaXZEZXNjcmlwdGlvbkFydGljbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgcm93LWdhcDogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uZGl2RGVzY3JpcHRpb25BcnRpY2xlID4gcCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZS10ZXh0LWFydGljbGUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXG59XFxuXFxuLnByb2plY3RJbWcge1xcbiAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1kZWZpbmluZy13aWR0aCkgKiAwLjI1ICogMC43KTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICBmbGV4LXNocmluazogMTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLXRleHQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGl2SWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxufVxcblxcbmZvb3RlciB7XFxuICAtLWRlZmluZS1oZWlnaHQtZm9vdGVyOiBjYWxjKDAuNyAqIDEwMHZoKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuMmZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaDIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAge1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICByb3ctZ2FwOiAxLjE7XFxufVxcblxcbmZvb3RlciA+IHNlY3Rpb24gPiBoMiArIHAgKyBwIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwICsgcCArIHAge1xcbiAgZ3JpZC1yb3c6IDQsIDU7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gaW1nICsgaW1nIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcXG4gIGdyaWQtcm93OiA1LzY7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG5mb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5waG90b0Zvb3RlciB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMjUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLypidXR0b25zKi9cXG5cXG4udGhlbWVCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0JTtcXG4gIHJpZ2h0OiAzJTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1maXJzdCk7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50aGVtZUJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcXG59XFxuXFxuLnRoZW1lQnV0dG9uOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1hcnRpY2xlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iZy1zZWN0aW9uKTtcXG59XFxuXFxuYSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWxhcmdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWxhcmdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xuICAucGhvdG9JbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG5cbiAgLnRleHRJblBob3RvIHtcbiAgICBmb250LXNpemU6IDUuNnJlbTtcbiAgfVxuXG4gIC50aGVtZUJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMyU7XG4gICAgcmlnaHQ6IDMlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjdmciAyLjZmcjtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucGFnZS1jb250YWluZXIgPiBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXZJY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIG1haW4gPiBIMiB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgLmNvbnRlbnRQcm9qZWN0IHtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgYXJ0aWNsZSB7XG4gICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjgyICogKDEwMHZ3IC8gMykpO1xuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgLnByb2plY3RJbWcge1xuICAgIHdpZHRoOiB2YXIoLS1kZWZpbmluZy13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMyAqIDAuNyk7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xuICB9XG5cbiAgLmRpdkRlc2NyaXB0aW9uQXJ0aWNsZSA+IHAge1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgLS1kZWZpbmUtaGVpZ2h0LWZvb3RlcjogY2FsYygwLjQ1ICogMTAwdmgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBmb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBpbWcge1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgfVxuXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBpbWcgKyBpbWcge1xuICAgIGdyaWQtcm93OiA0LzU7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLWxhcmdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0MsaUJBQWlCO0lBQ2pCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xcbiAgLnBob3RvSW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcblxcbiAgLnRleHRJblBob3RvIHtcXG4gICAgZm9udC1zaXplOiA1LjZyZW07XFxuICB9XFxuXFxuICAudGhlbWVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMyU7XFxuICAgIHJpZ2h0OiAzJTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuN2ZyIDIuNmZyO1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGFpbmVyID4gbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGl2SWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgbWFpbiA+IEgyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICAuY29udGVudFByb2plY3Qge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIC0tZGVmaW5pbmctd2lkdGg6IGNhbGMoMC44MiAqICgxMDB2dyAvIDMpKTtcXG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDIuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0SW1nIHtcXG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWRlZmluaW5nLXdpZHRoKSAqIDAuMyAqIDAuNyk7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XFxuICB9XFxuXFxuICAuZGl2RGVzY3JpcHRpb25BcnRpY2xlID4gcCB7XFxuICAgIHBhZGRpbmctdG9wOiAzJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC40NSAqIDEwMHZoKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBmb290ZXIgPiBzZWN0aW9uID4gaDIgKyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICB9XFxuXFxuICBmb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBpbWcgKyBpbWcge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1lZGl1bS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tZWRpdW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLnBob3RvSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC50ZXh0SW5QaG90byB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gIH1cblxuICAudGhlbWVCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcbiAgfVxuXG4gIC5wYWdlLWNvbnRhaW5lciA+IGhlYWRlciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZGl2SWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuY29udGVudFByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cblxuICBhcnRpY2xlIHtcbiAgICAtLWRlZmluaW5nLXdpZHRoOiBjYWxjKDAuNzUgKiAoMTAwdncgLyAyKSk7XG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAucHJvamVjdEltZyB7XG4gICAgd2lkdGg6IHZhcigtLWRlZmluaW5nLXdpZHRoKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4zICogMC43KTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDBweCAwcHg7XG4gIH1cblxuICBmb290ZXIge1xuICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC4zICogMTAwdmgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogdmFyKC0tZGVmaW5lLWhlaWdodC1mb290ZXIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBmb290ZXIgPiBzZWN0aW9uID4gaW1nIHtcbiAgICBncmlkLXJvdzogMy80O1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gIH1cbiAgZm9vdGVyID4gc2VjdGlvbiA+IGltZyArIGltZyB7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICB9XG4gIGZvb3RlciA+IHNlY3Rpb24gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIGdhcDogMTBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLW1lZGl1bS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLGlCQUFpQjtJQUNqQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5waG90b0ltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG5cXG4gIC50ZXh0SW5QaG90byB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgfVxcblxcbiAgLnRoZW1lQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIlO1xcbiAgICByaWdodDogMiU7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbiAgfVxcblxcbiAgLnBhZ2UtY29udGFpbmVyID4gaGVhZGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRpdkljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50UHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgLS1kZWZpbmluZy13aWR0aDogY2FsYygwLjc1ICogKDEwMHZ3IC8gMikpO1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMi4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RJbWcge1xcbiAgICB3aWR0aDogdmFyKC0tZGVmaW5pbmctd2lkdGgpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tZGVmaW5pbmctd2lkdGgpICogMC4zICogMC43KTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMHB4IDBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIC0tZGVmaW5lLWhlaWdodC1mb290ZXI6IGNhbGMoMC4zICogMTAwdmgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kZWZpbmUtaGVpZ2h0LWZvb3Rlcik7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGZvb3RlciA+IHNlY3Rpb24gPiBpbWcge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgfVxcbiAgZm9vdGVyID4gc2VjdGlvbiA+IGltZyArIGltZyB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICB9XFxuICBmb290ZXIgPiBzZWN0aW9uID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImZ1bmN0aW9uIGdvb2dsZUZvbnRzKCkge1xuICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsxLnNldEF0dHJpYnV0ZSgncmVsJywgJ3ByZWNvbm5lY3QnKTtcbiAgICBsaW5rMS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScpO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsyLnNldEF0dHJpYnV0ZSgncmVsJywgJ3ByZWNvbm5lY3QnKTtcbiAgICBsaW5rMi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nKTtcbiAgICBsaW5rMi5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJycpO1xuICAgIGNvbnN0IGxpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmszLnNldEF0dHJpYnV0ZShcbiAgICAgICdocmVmJyxcbiAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXAnXG4gICAgKTtcbiAgICBsaW5rMy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgY29uc3QgbGluazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluazQuc2V0QXR0cmlidXRlKFxuICAgICAgJ2hyZWYnLFxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCdcbiAgICApO1xuICAgIGxpbms0LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMik7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rNCk7XG4gIH1cbiAgXG4gIGV4cG9ydCB7IGdvb2dsZUZvbnRzIH07IiwiaW1wb3J0IGltYWdlU21hbGwgZnJvbSAnLi4vYXNzZXRzL2ltZy9zbWFsbC1pbWcuanBnJztcbmltcG9ydCBpbWFnZU1lZGl1bSBmcm9tICcuLi9hc3NldHMvaW1nL21lZGl1bS1pbWcuanBnJztcbmltcG9ydCBpbWFnZUxhcmdlIGZyb20gJy4uL2Fzc2V0cy9pbWcvbGFyZ2UtaW1nLmpwZyc7XG5pbXBvcnQgcGhvdG9Gb290ZXIgZnJvbSAnLi4vYXNzZXRzL2ltZy9mb290ZXItaW1nLnBuZyc7XG5pbXBvcnQgY2hhbmdlVGhlbWUgZnJvbSAnLi4vYXNzZXRzL2ltZy90aGVtZS1saWdodC1kYXJrLnBuZyc7XG5pbXBvcnQgZXh0ZXJuYWxMaW5rIGZyb20gJy4uL2Fzc2V0cy9pbWcvb3Blbi1pbi1uZXcucG5nJztcbmltcG9ydCBlbWFpbEljb24gZnJvbSAnLi4vYXNzZXRzL2ltZy9lbWFpbC1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGhvbmUtZGlhbC1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgeyB0aXRsZUFib3V0MSwgdGl0bGVBYm91dDIsdGV4dENvbnRlbnRBYm91dE1lMSx0ZXh0Q29udGVudEFib3V0TWUyIH0gZnJvbSAnLi4vYXNzZXRzL3RleHQtY29udGVudCc7XG5pbXBvcnQgeyBsaW5rZWRpbkFjY291bnQsIGxpbmtlZGluQWNjb3VudFR4dCB9IGZyb20gJy4uL2Fzc2V0cy90ZXh0LWNvbnRlbnQnO1xuaW1wb3J0IHtcbiAgdGV4dENvbnRlbnRDb250YWN0TWUsXG4gIG1haWxUZXh0LFxufSBmcm9tICcuLi9hc3NldHMvdGV4dC1jb250ZW50JztcbmltcG9ydCB7IGFycmF5UHJvamVjdHMgfSBmcm9tICcuLi9hc3NldHMvdGV4dC1jb250ZW50JztcbmltcG9ydCB7IGxpbmtlZGluIH0gZnJvbSAnLi4vYXNzZXRzL2ljb25zLXNvdXJjZSc7XG5pbXBvcnQgeyBpbnNlcnRJbWcgfSBmcm9tICcuL2luc2VydEltZyc7XG5cblxuXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCdlbicpO1xuICByb290LnNldEF0dHJpYnV0ZSgnaWQnLCAncm9vdC1lbGVtZW50Jyk7XG4gIHJvb3QuY2xhc3NOYW1lID0gJ2xpZ2h0JztcblxuICBjb25zdCBmbGFzaE1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsYXNoTWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdmbGFzaC1tZXNzYWdlcycpO1xuXG4gIGNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRoZW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RoZW1lQnV0dG9uJyk7XG4gIGNvbnN0IGNoYW5nZVRoZW1lSW1nID0gbmV3IEltYWdlKCk7XG4gIGNoYW5nZVRoZW1lSW1nLnNyYyA9IGNoYW5nZVRoZW1lO1xuICBpbnNlcnRJbWcodGhlbWVCdXR0b24sIGNoYW5nZVRoZW1lSW1nLnNyYywgJ3RoZW1lLWxpZ2h0LWRhcmsnLCAnaWNvbkltZycsJzMwcHgnLCczMHB4Jyk7XG4gIHRoZW1lQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyLXJhZGl1czogMzBweDsnKTtcbiAgdGhlbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2V0VGhlbWUoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2V0VGhlbWUoKSB7XG4gICAgY29uc3QgbmV3VGhlbWUgPSByb290LmNsYXNzTmFtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xuICB9XG5cbiAgLy8gYmFja2dyb3VuZCBjb2xvcnNcbiAgY29uc3QgYmdEaXZGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZ0RpdkZpcnN0LmNsYXNzTGlzdC5hZGQoJ2JnRGl2Rmlyc3QnKTtcbiAgY29uc3QgYmdEaXZTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmdEaXZTZWNvbmQuY2xhc3NMaXN0LmFkZCgnYmdEaXZTZWNvbmQnKTtcblxuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250YWluZXInKTtcblxuLy8gSEVBREVSXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmNvbnN0IHRleHRJblBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDInKTtcbnRleHRJblBob3RvLnRleHRDb250ZW50ID0gJ09ubGluZSBUdXRvcic7XG50ZXh0SW5QaG90by5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5QaG90bycpO1xuXG5jb25zdCBwaG90b1BpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XG4gIGNvbnN0IHNvdXJjZUxhcmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gIGNvbnN0IHNvdXJjZU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICBjb25zdCBwaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBteUxhcmdlSW1nID0gbmV3IEltYWdlKCk7XG4gIG15TGFyZ2VJbWcuc3JjID0gaW1hZ2VMYXJnZTtcbiAgc291cmNlTGFyZ2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBteUxhcmdlSW1nLnNyYyk7XG4gIHNvdXJjZUxhcmdlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCAnKG1pbi13aWR0aDogOTgxcHgpJyk7XG4gIGNvbnN0IG15TWVkaXVtSW1nID0gbmV3IEltYWdlKCk7XG4gIG15TWVkaXVtSW1nLnNyYyA9IGltYWdlTWVkaXVtO1xuICBzb3VyY2VNZWRpdW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBteU1lZGl1bUltZy5zcmMpO1xuICBzb3VyY2VNZWRpdW0uc2V0QXR0cmlidXRlKCdtZWRpYScsICcobWluLXdpZHRoOjYyMXB4KSBhbmQgKG1heC13aWR0aDo5ODBweCknKTtcbiAgY29uc3QgbXlTbWFsbEltZyA9IG5ldyBJbWFnZSgpO1xuICBteVNtYWxsSW1nLnNyYyA9IGltYWdlU21hbGw7XG4gIHBob3RvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbXlTbWFsbEltZy5zcmMpO1xuICBwaG90b0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcbiAgcGhvdG9JbWcuY2xhc3NMaXN0LmFkZCgncGhvdG9JbWcnKTtcblxuICBjb25zdCBhYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBhYm91dE1lSGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xuICBjb25zdCBhYm91dE1lSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xuICBjb25zdCBhYm91dE1lVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGFib3V0TWVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYWJvdXRNZUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxpbmtlZGluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBhYm91dE1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgYWJvdXRNZUhlYWRpbmcxLnRleHRDb250ZW50ID0gdGl0bGVBYm91dDE7XG4gIGFib3V0TWVIZWFkaW5nMi50ZXh0Q29udGVudCA9IHRpdGxlQWJvdXQyO1xuICBhYm91dE1lVGV4dDEudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudEFib3V0TWUxO1xuICBhYm91dE1lVGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICBhYm91dE1lVGV4dDIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudEFib3V0TWUyO1xuICBhYm91dE1lVGV4dDIuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICBhYm91dE1lSWNvbnMuY2xhc3NMaXN0LmFkZCgnZGl2SWNvbnMnKTtcbiBcbiAgbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtlZGluQWNjb3VudCk7XG4gIGxpbmtlZGluTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgY29uc3QgbGlua2VkaW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbGlua2VkaW5JbWcuc3JjID0gbGlua2VkaW47XG4gIGluc2VydEltZyhsaW5rZWRpbkxpbmssIGxpbmtlZGluSW1nLnNyYywgJ0xpbmtlZGluJywgJ2ljb25JbWcnLCczMHB4JywnMzBweCcpO1xuXG4vLyBQUk9KRUNUUyBDT05URU5UXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuY29uc3QgY29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudFByb2plY3QnKTtcblxuY29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSAnTXkgd29yayc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3Qke2kgKyAxfWApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBhbGxQcm9qZWN0c0RpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpO1xuICBjb25zdCBwcm9qZWN0c0luRGl2ID0gWy4uLmFsbFByb2plY3RzRGl2XTtcbiAgY29uc3QgaXRlcmF0b3IgPSBwcm9qZWN0c0luRGl2LmVudHJpZXMoKTtcblxuICBwcm9qZWN0c0luRGl2LmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2RpdkltZ0FydGljbGUnKTtcbiAgICBjb25zdCBzY3JlZW5zaG90ID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZGl2TmFtZUFydGljbGUnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZ3JpZC1jb2x1bW46MS8yJyk7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2dyaWQtY29sdW1uOjIvMycpO1xuICAgIGNvbnN0IG5ld1dpbmRvd0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmV3V2luZG93TGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBjb25zdCBuZXdXaW5kb3dJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBuZXdXaW5kb3dJbWcuc3JjID0gZXh0ZXJuYWxMaW5rO1xuICAgIGluc2VydEltZyhuZXdXaW5kb3dMaW5rLCBuZXdXaW5kb3dJbWcuc3JjLCAnbmV3LXdpbmRvdycsICdpY29uSW1nJywnMzBweCcsJzMwcHgnKTtcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2My5jbGFzc0xpc3QuYWRkKCdkaXZEZXNjcmlwdGlvbkFydGljbGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGFycmF5UHJvamVjdHMubWFwKChlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGUuaWQgPT09IHguZ2V0QXR0cmlidXRlKCdpZCcpKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICBzY3JlZW5zaG90LnNyYyA9IGUuc2NyZWVuc2hvdFByb2plY3RTb3VyY2U7XG4gICAgICAgICAgaW5zZXJ0SW1nKGRpdjEsIHNjcmVlbnNob3Quc3JjLCAnJywgJ3Byb2plY3RJbWcnLCczMHB4JywnMTBweCcpO1xuICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBlLnByb2plY3ROYW1lO1xuICAgICAgICAgIG5ld1dpbmRvd0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZS5wcm9qZWN0TmV3V2luZG93KTtcbiAgICAgICAgICBkZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPSBlLnByb2plY3REZXNjcmlwdGlvbjE7XG4gICAgICAgICAgZGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gZS5wcm9qZWN0RGVzY3JpcHRpb24yO1xuICAgICAgICAgIGRlc2NyaXB0aW9uMy50ZXh0Q29udGVudCA9IGUucHJvamVjdERlc2NyaXB0aW9uMztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHguYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgeC5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICB4LmFwcGVuZENoaWxkKGRpdjMpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChsaW5rcyk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobmV3V2luZG93TGluayk7XG4gICAgZGl2My5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjEpO1xuICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24yKTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMyk7XG4gIH0pO1xuXG4vLyBGT09URVJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuY29uc3QgY29udGFjdE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29uc3QgY29udGFjdE1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0gyJyk7XG5jb25zdCBjb250YWN0TWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnRhY3RNZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCBtZSc7XG5jb250YWN0TWVUZXh0LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRDb250YWN0TWU7XG5cbm1haWxBZGRyZXNzLnRleHRDb250ZW50ID0gbWFpbFRleHQ7XG5jb25zdCBwaG9uZUltZyA9IG5ldyBJbWFnZSgpO1xucGhvbmVJbWcuc3JjID0gcGhvbmVJY29uO1xuaW5zZXJ0SW1nKGNvbnRhY3RNZSwgcGhvbmVJbWcuc3JjLCAncGhvbmUnLCAnaWNvbkltZycsJzMwcHgnLCczMHB4Jyk7XG5jb25zdCBlbWFpbEltZyA9IG5ldyBJbWFnZSgpO1xuZW1haWxJbWcuc3JjID0gZW1haWxJY29uO1xuaW5zZXJ0SW1nKGNvbnRhY3RNZSwgZW1haWxJbWcuc3JjLCAnZW1haWwtYWRkcmVzcycsICdpY29uSW1nJywnMzBweCcsJzMwcHgnKTtcbmNvbnN0IGNvbnRhY3RNZUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGNvbnRhY3RNZWxpbmtlZGluTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuY29udGFjdE1lbGlua2VkaW5MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtlZGluQWNjb3VudCk7XG5jb250YWN0TWVsaW5rZWRpbkxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5pbnNlcnRJbWcoY29udGFjdE1lbGlua2VkaW5MaW5rLCBsaW5rZWRpbkltZy5zcmMsICdMaW5rZWRpbicsICdpY29uSW1nJywnMzBweCcsJzMwcHgnKTtcblxuY29uc3QgaW1nRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBwaG90b0pEID0gbmV3IEltYWdlKCk7XG5waG90b0pELnNyYyA9IHBob3RvRm9vdGVyO1xuaW1nRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Bob3RvRm9vdGVyJyk7XG5pbWdGb290ZXIuc2V0QXR0cmlidXRlKCdzcmMnLCBwaG90b0pELnNyYyk7XG5pbWdGb290ZXIuc2V0QXR0cmlidXRlKCd3aWR0aCcsICdhdXRvJyk7XG5pbWdGb290ZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMjUwcHgnKTtcbmltZ0Zvb3Rlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdqYXZpZXIgZGlheicpO1xuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmbGFzaE1lc3NhZ2VzKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGVtZUJ1dHRvbik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdEaXZGaXJzdCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmdEaXZTZWNvbmQpO1xuXG4gIGJnRGl2Rmlyc3QuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG4gIGJnRGl2U2Vjb25kLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHBob3RvUGljdHVyZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChhYm91dE1lKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZUxhcmdlKTtcbiAgcGhvdG9QaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZU1lZGl1bSk7XG4gIHBob3RvUGljdHVyZS5hcHBlbmRDaGlsZChwaG90b0ltZyk7XG4gIHBob3RvUGljdHVyZS5hcHBlbmRDaGlsZCh0ZXh0SW5QaG90byk7XG4gIGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZUhlYWRpbmcxKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDEpO1xuICBhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVIZWFkaW5nMik7XG4gIGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQyKTtcbiAgYWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lSWNvbnMpO1xuICBhYm91dE1lSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkaW5MaW5rKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkaW5nKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1lKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGltZ0Zvb3Rlcik7XG4gIGNvbnRhY3RNZS5hcHBlbmRDaGlsZChjb250YWN0TWVIZWFkaW5nKTtcbiAgY29udGFjdE1lLmFwcGVuZENoaWxkKGNvbnRhY3RNZVRleHQpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQobWFpbEFkZHJlc3MpO1xuICBjb250YWN0TWUuYXBwZW5kQ2hpbGQoY29udGFjdE1lSWNvbnMpO1xuICBjb250YWN0TWVJY29ucy5hcHBlbmRDaGlsZChjb250YWN0TWVsaW5rZWRpbkxpbmspO1xuXG59O1xuXG5cbmV4cG9ydCB7IGhvbWVwYWdlIH07IiwiaW1wb3J0IHNjcmVlbnNob3QxIGZyb20gJy4vaW1nL3NjcmVlbnNob3QtcHJvamVjdDEucG5nJztcbmltcG9ydCBzY3JlZW5zaG90MiBmcm9tICcuL2ltZy9zY3JlZW5zaG90LXByb2plY3QyLnBuZyc7XG5pbXBvcnQgc2NyZWVuc2hvdDMgZnJvbSAnLi9pbWcvc2NyZWVuc2hvdC1wcm9qZWN0My5wbmcnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9jbGFzcy1wcm9qZWN0JztcblxuY29uc3QgdGl0bGVBYm91dDEgPSBcIkNvbmhlw6dhIEphdmllclwiO1xuY29uc3QgdGl0bGVBYm91dDIgPSBcIk1lZXQgSmF2aWVyXCI7XG5jb25zdCB0ZXh0Q29udGVudEFib3V0TWUxID1cbiAgJ0phdmllciBEaWF6IMOpIHVtIHByb2Zlc3NvciBkZSBlc3BhbmhvbCBjb20gbWFpcyBkZSBjaW5jbyBhbm9zIGRlIGV4cGVyacOqbmNpYSBlbSBlbnNpbm8gb24tbGluZS4nO1xuY29uc3QgdGV4dENvbnRlbnRBYm91dE1lMiA9XG4gICdKYXZpZXIgRGlheiBpcyBhIFNwYW5pc2ggdHV0b3Igd2l0aCBtb3JlIHRoYW4gZml2ZSB5ZWFycyBvZiBvbmxpbmUgdGVhY2hpbmcgZXhwZXJpZW5jZS4nO1xuXG5jb25zdCB0ZXh0Q29udGVudENvbnRhY3RNZSA9XG4gICdTZSB2b2PDqiBhY2hhIHF1ZSBtZXUgdHJhYmFsaG8gc2UgZW5jYWl4YSBubyBxdWUgdm9jw6ogcHJlY2lzYSwgZXNjcmV2YSBwYXJhIG1pbS5cXG5JZiB5b3UgdGhpbmsgbXkgd29yayBmaXRzIHdoYXQgeW91IG5lZWQsIHdyaXRlIHRvIG1lLic7XG4vKiBjb25zdCBwaG9uZVRleHQgPSAnMTIzLTQ1NjctODkwJzsgKi9cbmNvbnN0IG1haWxUZXh0ID0gJ2pqZGlhemIyQGdtYWlsLmNvbSc7XG5cbmNvbnN0IGxpbmtlZGluQWNjb3VudCA9ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYXZpZXItam9zw6ktZMOtYXotYm9yYm9hLTMzYTc2ODInO1xuY29uc3QgbGlua2VkaW5BY2NvdW50VHh0ID0gJ2xpbmtlZGluLmNvbS9pbi9qYXZpZXItam9zw6ktZMOtYXotYm9yYm9hLTMzYTc2ODInO1xuXG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScpO1xucHJvamVjdDEucHJvamVjdE5hbWUgPSAnTWFpcyBkZSA1NDAwIGF1bGFzIHBhcmEgYWx1bm9zIGRlIHRvZG8gbyBtdW5kbyc7XG5wcm9qZWN0MS5wcm9qZWN0RGVzY3JpcHRpb24xID1cbiAgJ1JlY29uaGVjaWRvIHBvciBzdWEgYWJvcmRhZ2VtIHByw6F0aWNhLCBjbGFyZXphIGUgZGVkaWNhw6fDo28sIEphdmllciB0ZW0gYXRyYcOtZG8gZXNwZWNpYWxtZW50ZSBwcm9maXNzaW9uYWlzIGJyYXNpbGVpcm9zIHF1ZSBidXNjYW0gbWVsaG9yYXIgc3VhcyBvcG9ydHVuaWRhZGVzIGRlIHRyYWJhbGhvIHBvciBtZWlvIGRvIGRvbcOtbmlvIGRvIGlkaW9tYSBlc3BhbmhvbC4nO1xucHJvamVjdDEucHJvamVjdERlc2NyaXB0aW9uMiA9XG4gICdKYXZpZXIgdGVtIDQyIGF2YWxpYcOnw7VlcyA1IGVzdHJlbGFzIHF1ZSBjb21wcm92YW0gYSBxdWFsaWRhZGUgZGUgc2V1IGVuc2luby4gU3VhcyBhdWxhcyBzw6NvIDEwMCUgb24tbGluZSwgZmxleMOtdmVpcyBlIHBlcnNvbmFsaXphZGFzIGRlIGFjb3JkbyBjb20gb3Mgb2JqZXRpdm9zIGUgbyByaXRtbyBkZSBjYWRhIGFsdW5vLiBFbSBjb250ZXh0b3MgcHJvZmlzc2lvbmFpcyByZWFpcywgYWp1ZGFuZG8gb3MgYWx1bm9zIGEgc2UgZXhwcmVzc2FyZW0gY29tIGNvbmZpYW7Dp2EgZW0gcmV1bmnDtWVzLCBlbnRyZXZpc3RhcyBlIGFwcmVzZW50YcOnw7Vlcy4nO1xucHJvamVjdDEucHJvamVjdERlc2NyaXB0aW9uMyA9XG4gICdTZXUgbsOtdmVsIGludGVybWVkacOhcmlvL2F2YW7Dp2FkbyBkZSBpbmdsw6pzIGxoZSBwZXJtaXRpdSBhdHJhaXIgYWx1bm9zIGRhIEV1cm9wYSBlIGRlIHBhw61zZXMgZGUgbMOtbmd1YSBpbmdsZXNhLiBFbGUgdGFtYsOpbSBwb3NzdWkgbyBjZXJ0aWZpY2FkbyBcIkhvdyB0byBUZWFjaCBhIExhbmd1YWdlXCIgY29uY2VkaWRvIHBlbGEgUHJlcGx5IGVtIHJlY29uaGVjaW1lbnRvIGFvIHNldSB0cmVpbmFtZW50byBlbSBwZWRhZ29naWEgZGUgaWRpb21hcy4nO1xucHJvamVjdDEuc2NyZWVuc2hvdFByb2plY3RTb3VyY2UgPSBzY3JlZW5zaG90MTtcbnByb2plY3QxLmxpbmtlZGluSHJlZiA9ICcjJztcbi8qIHByb2plY3QxLnByb2plY3ROZXdXaW5kb3cgPSAnIyc7ICovXG5cbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ3Byb2plY3QyJyk7XG5wcm9qZWN0Mi5wcm9qZWN0TmFtZSA9ICdNb3JlIHRoYW4gNTQwMCBsZXNzb25zIHRvIHN0dWRlbnRzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkJztcbnByb2plY3QyLnByb2plY3REZXNjcmlwdGlvbjEgPVxuICAnUmVjb2duaXplZCBmb3IgaGlzIHByYWN0aWNhbCBhcHByb2FjaCwgY2xhcml0eSBhbmQgZGVkaWNhdGlvbiwgSmF2aWVyIGhhcyBwYXJ0aWN1bGFybHkgYXR0cmFjdGVkIEJyYXppbGlhbiBwcm9mZXNzaW9uYWxzIGxvb2tpbmcgdG8gaW1wcm92ZSB0aGVpciBqb2Igb3Bwb3J0dW5pdGllcyBieSBtYXN0ZXJpbmcgdGhlIFNwYW5pc2ggbGFuZ3VhZ2UuJztcbnByb2plY3QyLnByb2plY3REZXNjcmlwdGlvbjIgPVxuICAnSmF2aWVyIGhhcyA0MiByZXZpZXdzIG9mIDUgc3RhcnMgdGhhdCBlbmRvcnNlIHRoZSBxdWFsaXR5IG9mIGhpcyB0ZWFjaGluZy4gSGlzIGNsYXNzZXMgYXJlIDEwMCUgb25saW5lLCBmbGV4aWJsZSwgYW5kIHBlcnNvbmFsaXplZCBhY2NvcmRpbmcgdG8gdGhlIGdvYWxzIGFuZCBwYWNlIG9mIGVhY2ggc3R1ZGVudC4gV2l0aGluIHJlYWwgcHJvZmVzc2lvbmFsIGNvbnRleHRzLCBoZWxwaW5nIHN0dWRlbnRzIHRvIGV4cHJlc3MgdGhlbXNlbHZlcyBjb25maWRlbnRseSBpbiBtZWV0aW5ncywgaW50ZXJ2aWV3cyBhbmQgcHJlc2VudGF0aW9ucy4nO1xucHJvamVjdDIucHJvamVjdERlc2NyaXB0aW9uMyA9XG4gICdIaXMgaW50ZXJtZWRpYXRlL2FkdmFuY2VkIGxldmVsIEVuZ2xpc2ggcHJvZmljaWVuY3kgaGFzIGFsbG93ZWQgaGltIHRvIGF0dHJhY3Qgc3R1ZGVudHMgZnJvbSBFdXJvcGUgYW5kIEVuZ2xpc2ggc3BlYWtpbmcgY291bnRyaWVzLiBIZSBhbHNvIGhhcyB0aGUgXCJIb3cgdG8gVGVhY2ggYSBMYW5ndWFnZVwiIGNlcnRpZmljYXRlIGF3YXJkZWQgYnkgUHJlcGx5IGFzIGEgc3VwcG9ydCB0byBoaXMgbGFuZ3VhZ2UgcGVkYWdvZ3kgdHJhaW5pbmcuJztcbnByb2plY3QyLnNjcmVlbnNob3RQcm9qZWN0U291cmNlID0gc2NyZWVuc2hvdDI7XG5wcm9qZWN0Mi5saW5rZWRpbkhyZWYgPSAnIyc7XG4vKiBwcm9qZWN0Mi5wcm9qZWN0TmV3V2luZG93ID0gJyMnOyAqL1xuXG5jb25zdCBwcm9qZWN0MyA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MycpO1xucHJvamVjdDMucHJvamVjdE5hbWUgPSAnTcOhcyBkZSA1NDAwIGxlY2Npb25lcyBwYXJhIGVzdHVkaWFudGVzIGRlIHRvZG8gZWwgbXVuZG8nO1xucHJvamVjdDMucHJvamVjdERlc2NyaXB0aW9uMSA9XG4gICdSZWNvbm9jaWRvIHBvciBzdSBlbmZvcXVlIHByw6FjdGljbywgY2xhcmlkYWQgeSBkZWRpY2FjacOzbiwgSmF2aWVyIGhhIGF0cmHDrWRvIGVzcGVjaWFsbWVudGUgYSBwcm9mZXNpb25hbGVzIGJyYXNpbGXDsW9zIHF1ZSBidXNjYW4gbWVqb3JhciBzdXMgb3BvcnR1bmlkYWRlcyBsYWJvcmFsZXMgZG9taW5hbmRvIGVsIGlkaW9tYSBlc3Bhw7FvbC4nO1xucHJvamVjdDMucHJvamVjdERlc2NyaXB0aW9uMiA9XG4gICdKYXZpZXIgdGllbmUgNDIgcmVzZcOxYXMgZGUgNSBlc3RyZWxsYXMgcXVlIGRlbXVlc3RyYW4gbGEgY2FsaWRhZCBkZSBzdSBlbnNlw7FhbnphLiBTdXMgY2xhc2VzIHNvbiAxMDAlIG9ubGluZSwgZmxleGlibGVzIHkgcGVyc29uYWxpemFkYXMgc2Vnw7puIGxvcyBvYmpldGl2b3MgeSBlbCByaXRtbyBkZSBjYWRhIGFsdW1uby4gRW4gY29udGV4dG9zIHByb2Zlc2lvbmFsZXMgcmVhbGVzLCBheXVkYW5kbyBhIGxvcyBlc3R1ZGlhbnRlcyBhIGV4cHJlc2Fyc2UgY29uIGNvbmZpYW56YSBlbiByZXVuaW9uZXMsIGVudHJldmlzdGFzIHkgcHJlc2VudGFjaW9uZXMuJztcbnByb2plY3QzLnByb2plY3REZXNjcmlwdGlvbjMgPVxuICAnU3UgZG9taW5pbyBkZWwgaW5nbMOpcyBhIG5pdmVsIGludGVybWVkaW8vYXZhbnphZG8gbGUgaGEgcGVybWl0aWRvIGF0cmFlciBhIGVzdHVkaWFudGVzIGRlIEV1cm9wYSB5IGRlIHBhw61zZXMgZGUgaGFibGEgaW5nbGVzYS4gQWRlbcOhcywgY3VlbnRhIGNvbiBlbCBjZXJ0aWZpY2FkbyBcIkhvdyB0byBUZWFjaCBhIExhbmd1YWdlXCIgb3RvcmdhZG8gcG9yIFByZXBseSBjb21vIHJlc3BhbGRvIGEgc3UgZm9ybWFjacOzbiBlbiBwZWRhZ29nw61hIGxpbmfDvMOtc3RpY2EuJztcbnByb2plY3QzLnNjcmVlbnNob3RQcm9qZWN0U291cmNlID0gc2NyZWVuc2hvdDM7XG5wcm9qZWN0My5saW5rZWRpbkhyZWYgPSAnIyc7XG4vKiBwcm9qZWN0My5wcm9qZWN0TmV3V2luZG93ID0gJyMnOyAqL1xuXG5jb25zdCBhcnJheVByb2plY3RzID0gW1xuICBwcm9qZWN0MSxcbiAgcHJvamVjdDIsXG4gIHByb2plY3QzLFxuXTtcblxuZXhwb3J0IHtcbiAgdGl0bGVBYm91dDEsXG4gIHRpdGxlQWJvdXQyLFxuICB0ZXh0Q29udGVudEFib3V0TWUxLFxuICB0ZXh0Q29udGVudEFib3V0TWUyLFxuICBhcnJheVByb2plY3RzLFxuICB0ZXh0Q29udGVudENvbnRhY3RNZSxcbiAgbWFpbFRleHQsXG4gIGxpbmtlZGluQWNjb3VudCxcbiAgbGlua2VkaW5BY2NvdW50VHh0LFxufTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMuaWQgPSB2YWx1ZTtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24xID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24yID0gJyc7XG4gICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24zID0gJyc7XG4gICAgdGhpcy5zY3JlZW5zaG90UHJvamVjdFNvdXJjZSA9ICcnO1xuICAgIHRoaXMubGlua2VkaW5IcmVmID0gJyc7XG4gICAvKiAgdGhpcy5wcm9qZWN0TmV3V2luZG93ID0gJyc7ICovXG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiLyogSUNPTlMgKi9cblxuICBjb25zdCBsaW5rZWRpbiA9XG4gICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbGlua2VkaW4vbGlua2VkaW4tb3JpZ2luYWwuc3ZnJztcblxuZXhwb3J0IHsgbGlua2VkaW4gfTtcbiIsImZ1bmN0aW9uIGluc2VydEltZyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0LGFyZzUsYXJnNikge1xuICAvLyBhcmcxIGlzIHRoZSBwYXJlbnQgZGl2IC0gYXJnMiBpcyB0aGUgc291cmNlXG4gIC8vIGFyZzMgaXMgdGhlIGFsdCB0ZXh0IC0gYXJnNCBpcyB0aGUgY2xhc3NcbiAgLy8gYXJnNSBpcyB0aGUgd2lkdGggLSBhcmc2IGlzIHRoZSBoZWlnaHRcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFyZzIpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhcmczKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBhcmc1KTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYXJnNik7XG4gIGltZy5jbGFzc0xpc3QuYWRkKGFyZzQpO1xuICBhcmcxLmFwcGVuZENoaWxkKGltZyk7XG59XG5cbmV4cG9ydCB7IGluc2VydEltZyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLXJlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLWxhcmdlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLW1lZGl1bS5jc3MnO1xuaW1wb3J0IHsgZ29vZ2xlRm9udHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2dvb2dsZS1mb250c1wiO1xuaW1wb3J0IHsgaG9tZXBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVwYWdlXCI7XG5cbmNvbnN0IG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG5tZXRhLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Rlc2NyaXB0aW9uJyk7XG5tZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsJ2xlYXJuaW5nIHNwYW5pc2ggb25saW5lIHR1dG9yIGphdmllciBkaWF6Jyk7XG5cbmdvb2dsZUZvbnRzKCk7XG5ob21lcGFnZSgpO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGEpO1xuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==