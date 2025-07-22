(() => {
var exports = {};
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 3360:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "share_container__Ry0wl",
	"text": "share_text__aODxt"
};


/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ share),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Hero/index.js + 1 modules
var Hero = __webpack_require__(2484);
// EXTERNAL MODULE: ./src/components/Button/index.js + 1 modules
var Button = __webpack_require__(8526);
;// CONCATENATED MODULE: ./src/utilities/clipboard.js
const copyToClipboard = (str)=>{
    if (!document.queryCommandSupported("copy")) return;
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selection = document.getSelection();
    const selected = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selection && selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
    }
};

// EXTERNAL MODULE: ./src/utilities/export.js
var utilities_export = __webpack_require__(7146);
// EXTERNAL MODULE: ./src/utilities/checklistsContext.js
var checklistsContext = __webpack_require__(5067);
;// CONCATENATED MODULE: ./src/components/ExportButton/ExportButton.js






const ExportButton = ({ text , feedbackText  })=>{
    const [exported, setExported] = external_react_default().useState(false);
    const { checkedIds  } = (0,checklistsContext/* useCheckedIds */.v9)();
    const handleExport = ()=>{
        const exportId = (0,utilities_export/* encode */.c)(checkedIds.join(","));
        const baseUrl = `${window.location.origin}/export`;
        const exportUrl = exportId ? `${baseUrl}/${exportId}` : baseUrl;
        copyToClipboard(exportUrl);
        setExported(true);
        setTimeout(()=>{
            setExported(false);
        }, 5000);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        text: text,
        feedbackText: feedbackText,
        onClick: handleExport,
        toggled: exported
    });
};
/* harmony default export */ const ExportButton_ExportButton = (ExportButton);

;// CONCATENATED MODULE: ./src/components/ExportButton/index.js


// EXTERNAL MODULE: ./src/components/Layout/index.js + 7 modules
var Layout = __webpack_require__(8151);
// EXTERNAL MODULE: ./pages/share/share.module.css
var share_module = __webpack_require__(3360);
var share_module_default = /*#__PURE__*/__webpack_require__.n(share_module);
;// CONCATENATED MODULE: ./pages/share/index.js






const ShareRoute = ({ t  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        t: t,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (share_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                title: t.core.exportTitle,
                subtitle: t.core.exportSubtitle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ExportButton_ExportButton, {
                    text: t.core.exportAction,
                    feedbackText: t.core.exportComplete
                })
            })
        })
    });
};
async function getStaticProps({ locale  }) {
    const t = (await __webpack_require__(242)(`./${locale}/index`)).default;
    return {
        props: {
            t
        }
    };
}
/* harmony default export */ const share = (ShareRoute);


/***/ }),

/***/ 7146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ decode),
/* harmony export */   "c": () => (/* binding */ encode)
/* harmony export */ });
const encode = (str)=>{
    return btoa(str);
};
const decode = (str)=>{
    return atob(str);
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,67,663,889,526], () => (__webpack_exec__(7501)));
module.exports = __webpack_exports__;

})();