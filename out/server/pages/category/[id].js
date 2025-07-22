(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 2218:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "category_container__CcNiM",
	"sections": "category_sections__ol1qB"
};


/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_CategoryNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1866);
/* harmony import */ var _src_components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2484);
/* harmony import */ var _src_components_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6145);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8151);
/* harmony import */ var _src_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3944);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2218);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_category_module_css__WEBPACK_IMPORTED_MODULE_8__);









const CategoryRoute = (props)=>{
    const { t  } = props;
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = query;
    const keys = Object.keys(_src_data__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const items = keys.map((k)=>_src_data__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[k]);
    let previous;
    let next;
    const item = items.find((item, index)=>{
        const isFound = item.id === id;
        const prevItem = items[index - 1];
        const nextItem = items[index + 1];
        if (isFound && prevItem) previous = {
            ...t[prevItem.id],
            id: prevItem.id
        };
        if (isFound && nextItem) next = {
            ...t[nextItem.id],
            id: nextItem.id
        };
        return isFound;
    });
    if (!item) return null;
    const { id: categoryId , sections  } = item;
    const categoryTranslations = t[categoryId];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Hero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: categoryTranslations.title,
                    subtitle: categoryTranslations.description
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().sections),
                    children: [
                        sections.map((section)=>{
                            const sectionTranslations = categoryTranslations.sections[section.id];
                            if (!sectionTranslations) {
                                throw new Error(`Can't find section: ${section.id}`);
                            }
                            const sectionData = {
                                title: sectionTranslations.title,
                                description: sectionTranslations.description,
                                resources: section.resources,
                                checklist: section.checklist.map((id)=>{
                                    if (!sectionTranslations.checklist[id]) {
                                        throw new Error(`Can't find item: ${id}`);
                                    }
                                    return {
                                        id,
                                        title: sectionTranslations.checklist[id].title,
                                        description: sectionTranslations.checklist[id].description
                                    };
                                })
                            };
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Section__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                section: sectionData,
                                completedLabel: t.core.completed
                            }, section.id);
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_CategoryNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            previousLabel: t.core.previous,
                            nextLabel: t.core.next,
                            next: next ? {
                                text: next.title,
                                url: `/category/${next.id}/`
                            } : {
                                text: t.core.exportAction,
                                url: "/share/"
                            },
                            previous: previous && {
                                text: previous.title,
                                url: `/category/${previous.id}/`
                            }
                        })
                    ]
                })
            ]
        })
    });
};
async function getStaticPaths() {
    return {
        paths: [
            "/category/design-language",
            "/category/foundations",
            "/category/components",
            "/category/maintenance", 
        ],
        fallback: true
    };
}
async function getStaticProps({ locale  }) {
    const t = (await __webpack_require__(242)(`./${locale}/index`)).default;
    return {
        props: {
            t
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryRoute);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,67,663,889,168,944,189], () => (__webpack_exec__(7671)));
module.exports = __webpack_exports__;

})();