exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 9552:
/***/ ((module) => {

// Exports
module.exports = {
	"text": "ProgressBar_text__BdVY3",
	"completed": "ProgressBar_completed__ko74e",
	"container": "ProgressBar_container__GeXGr",
	"bar": "ProgressBar_bar__chnMq"
};


/***/ }),

/***/ 1007:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "SectionTitle_root__X8q_M",
	"title": "SectionTitle_title__B5OAc"
};


/***/ }),

/***/ 6237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ SectionTitle_SectionTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ProgressBar/ProgressBar.module.css
var ProgressBar_module = __webpack_require__(9552);
var ProgressBar_module_default = /*#__PURE__*/__webpack_require__.n(ProgressBar_module);
;// CONCATENATED MODULE: ./src/components/ProgressBar/ProgressBar.js



const ProgressBar = ({ current , total , className , completedLabel  })=>{
    const width = 100 / total * current;
    const text = width === 100 ? completedLabel : current + "/" + total;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: [
                    (ProgressBar_module_default()).text,
                    width === 100 && (ProgressBar_module_default()).completed
                ].join(" "),
                children: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProgressBar_module_default()).container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (ProgressBar_module_default()).bar,
                    style: {
                        width: width + "%"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const ProgressBar_ProgressBar = (ProgressBar);

;// CONCATENATED MODULE: ./src/components/ProgressBar/index.js


// EXTERNAL MODULE: ./src/components/SectionTitle/SectionTitle.module.css
var SectionTitle_module = __webpack_require__(1007);
var SectionTitle_module_default = /*#__PURE__*/__webpack_require__.n(SectionTitle_module);
;// CONCATENATED MODULE: ./src/components/SectionTitle/SectionTitle.js





const SectionTitle = ({ title , total , completed , completedLabel , className ,  })=>{
    const rootClassName = external_classnames_default()((SectionTitle_module_default()).root, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: rootClassName,
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (SectionTitle_module_default()).title,
                children: title
            }),
            total && /*#__PURE__*/ jsx_runtime_.jsx(ProgressBar_ProgressBar, {
                current: completed,
                total: total,
                completedLabel: completedLabel
            })
        ]
    });
};
/* harmony default export */ const SectionTitle_SectionTitle = (SectionTitle);

;// CONCATENATED MODULE: ./src/components/SectionTitle/index.js



/***/ }),

/***/ 5503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ArrowRightIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "white",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.0675 11.01L13.191 6.55364L14.2029 5.44635L21.088 11.7383L14.2246 18.533L13.1693 17.467L18.1764 12.51H4V11.01H18.0675Z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowRightIcon);


/***/ })

};
;