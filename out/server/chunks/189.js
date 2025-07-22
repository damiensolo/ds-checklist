exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 2920:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "CategoryNav_root__9XkDo",
	"item": "CategoryNav_item__3jRHL",
	"overline": "CategoryNav_overline__djlpv",
	"link": "CategoryNav_link__sH_ZU"
};


/***/ }),

/***/ 4111:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Checklist_container__sK85Y"
};


/***/ }),

/***/ 2698:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ChecklistItem_container__iQjuo",
	"input": "ChecklistItem_input__40ROK",
	"label": "ChecklistItem_label__AnnTP",
	"title": "ChecklistItem_title__qQUks",
	"description": "ChecklistItem_description__eXOSK"
};


/***/ }),

/***/ 767:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Link_link__1F_mp",
	"arrowRight": "Link_arrowRight__S9Aq0"
};


/***/ }),

/***/ 947:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Resources_container__tDKLu"
};


/***/ }),

/***/ 8983:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Section_container__LigcO",
	"title": "Section_title__M6dVi",
	"description": "Section_description__e9f_a"
};


/***/ }),

/***/ 1866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CategoryNav_CategoryNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/CategoryNav/CategoryNav.module.css
var CategoryNav_module = __webpack_require__(2920);
var CategoryNav_module_default = /*#__PURE__*/__webpack_require__.n(CategoryNav_module);
;// CONCATENATED MODULE: ./src/components/CategoryNav/CategoryNav.js




const CategoryNav = ({ previous , next , previousLabel , nextLabel  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CategoryNav_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CategoryNav_module_default()).item,
                children: previous && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: (CategoryNav_module_default()).overline,
                            children: previousLabel
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: previous.url,
                            className: (CategoryNav_module_default()).link,
                            children: previous.text
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CategoryNav_module_default()).item,
                children: next && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: (CategoryNav_module_default()).overline,
                            children: nextLabel
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: next.url,
                            className: (CategoryNav_module_default()).link,
                            children: next.text
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CategoryNav_CategoryNav = (CategoryNav);

;// CONCATENATED MODULE: ./src/components/CategoryNav/index.js



/***/ }),

/***/ 6145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Section_Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/SectionTitle/index.js + 3 modules
var SectionTitle = __webpack_require__(6237);
// EXTERNAL MODULE: ./src/utilities/checklistsContext.js
var checklistsContext = __webpack_require__(5067);
// EXTERNAL MODULE: ./src/components/ChecklistItem/ChecklistItem.module.css
var ChecklistItem_module = __webpack_require__(2698);
var ChecklistItem_module_default = /*#__PURE__*/__webpack_require__.n(ChecklistItem_module);
;// CONCATENATED MODULE: ./src/components/ChecklistItem/ChecklistItem.js




const ChecklistItem = ({ title , description , id  })=>{
    const { add , remove , checked  } = (0,checklistsContext/* useCheckItem */.SD)(id);
    const handleChange = (e)=>{
        const { checked  } = e.target;
        if (checked) add(id);
        if (!checked) remove(id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (ChecklistItem_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (ChecklistItem_module_default()).input,
                type: "checkbox",
                id: id,
                onChange: handleChange,
                checked: checked
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (ChecklistItem_module_default()).label,
                htmlFor: id,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (ChecklistItem_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (ChecklistItem_module_default()).description,
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ChecklistItem_ChecklistItem = (ChecklistItem);

;// CONCATENATED MODULE: ./src/components/ChecklistItem/index.js


// EXTERNAL MODULE: ./src/components/Checklist/Checklist.module.css
var Checklist_module = __webpack_require__(4111);
var Checklist_module_default = /*#__PURE__*/__webpack_require__.n(Checklist_module);
;// CONCATENATED MODULE: ./src/components/Checklist/Checklist.js




const Checklist = ({ checklist  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (Checklist_module_default()).container,
        children: checklist.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ChecklistItem_ChecklistItem, {
                title: item.title,
                id: item.id,
                description: item.description
            }, item.title))
    });
};
/* harmony default export */ const Checklist_Checklist = (Checklist);

;// CONCATENATED MODULE: ./src/components/Checklist/index.js


// EXTERNAL MODULE: ./src/icons/arrowRight.jsx
var arrowRight = __webpack_require__(5503);
// EXTERNAL MODULE: ./src/components/Link/Link.module.css
var Link_module = __webpack_require__(767);
var Link_module_default = /*#__PURE__*/__webpack_require__.n(Link_module);
;// CONCATENATED MODULE: ./src/components/Link/Link.js




const Link = ({ title , url  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        className: (Link_module_default()).link,
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Link_module_default()).arrowRight,
                children: /*#__PURE__*/ jsx_runtime_.jsx(arrowRight/* default */.Z, {})
            }),
            title
        ]
    });
};
/* harmony default export */ const Link_Link = (Link);

;// CONCATENATED MODULE: ./src/components/Link/index.js


// EXTERNAL MODULE: ./src/components/Resources/Resources.module.css
var Resources_module = __webpack_require__(947);
var Resources_module_default = /*#__PURE__*/__webpack_require__.n(Resources_module);
;// CONCATENATED MODULE: ./src/components/Resources/Resources.js




const Resources = ({ resources  })=>{
    if (!resources) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (Resources_module_default()).container,
        children: resources.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link_Link, {
                    title: item.title,
                    url: item.url
                })
            }, item.title))
    });
};
/* harmony default export */ const Resources_Resources = (Resources);

;// CONCATENATED MODULE: ./src/components/Resources/index.js


// EXTERNAL MODULE: ./src/components/Section/Section.module.css
var Section_module = __webpack_require__(8983);
var Section_module_default = /*#__PURE__*/__webpack_require__.n(Section_module);
;// CONCATENATED MODULE: ./src/components/Section/Section.js







const Section = ({ section , completedLabel  })=>{
    const { title , id , description , checklist , resources  } = section;
    const { checkedIds  } = (0,checklistsContext/* useCheckedIds */.v9)();
    const total = section.checklist.length;
    const completed = section.checklist.filter((item)=>checkedIds.includes(item.id)).length;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: id,
        className: (Section_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle/* default */.Z, {
                title: title,
                total: total,
                completed: completed,
                className: (Section_module_default()).title,
                completedLabel: completedLabel
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Section_module_default()).description,
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Checklist_Checklist, {
                checklist: checklist
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Resources_Resources, {
                resources: resources
            })
        ]
    });
};
/* harmony default export */ const Section_Section = (Section);

;// CONCATENATED MODULE: ./src/components/Section/index.js



/***/ })

};
;