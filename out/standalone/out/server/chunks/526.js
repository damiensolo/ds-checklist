exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 5057:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Button_root__heKK3",
	"inner": "Button_inner__falwP",
	"icon": "Button_icon__mSIRG",
	"feedback": "Button_feedback__QqigF",
	"--toggled": "Button_--toggled__9W2Sn"
};


/***/ }),

/***/ 8526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Button/Button.module.css
var Button_module = __webpack_require__(5057);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./src/components/Button/Button.js




const Button = (props, ref)=>{
    const { text , icon , feedbackText , toggled , onClick , href , attributes  } = props;
    const rootClassName = external_classnames_default()((Button_module_default()).root, toggled && (Button_module_default())["--toggled"]);
    const rootAttributes = {
        ...attributes
    };
    const TagName = href ? "a" : "button";
    if (!href) {
        rootAttributes.type = "button";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TagName, {
        ...rootAttributes,
        href: href,
        className: rootClassName,
        onClick: onClick,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (Button_module_default()).inner,
                children: [
                    icon && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Button_module_default()).icon,
                        children: icon
                    }),
                    text && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Button_module_default()).text,
                        children: text
                    })
                ]
            }),
            feedbackText && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Button_module_default()).feedback,
                children: feedbackText
            })
        ]
    });
};
/* harmony default export */ const Button_Button = (/*#__PURE__*/external_react_default().forwardRef(Button));

;// CONCATENATED MODULE: ./src/components/Button/index.js



/***/ })

};
;