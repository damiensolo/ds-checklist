exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 4051:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Footer_root__yxLAr",
	"content": "Footer_content__l7Y5A",
	"title": "Footer_title__LdEX5",
	"text": "Footer_text__TPgcV"
};


/***/ }),

/***/ 1919:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__g7Df9",
	"logo": "Header_logo__UGbyD",
	"logoImage": "Header_logoImage__nHmtp",
	"logoLight": "Header_logoLight__cnws6",
	"logoDark": "Header_logoDark__IBAEK",
	"burger": "Header_burger__xSpW7",
	"line": "Header_line__SEFNB",
	"rightSection": "Header_rightSection__2rPS8",
	"menu": "Header_menu__tWkmD",
	"item": "Header_item__GP2It",
	"active": "Header_active__NQ1A8",
	"button": "Header_button__JlZh6",
	"nav": "Header_nav__EgB8P"
};


/***/ }),

/***/ 630:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Hero_root__sTDY_",
	"title": "Hero_title__Rw7GJ",
	"subtitle": "Hero_subtitle__7O5mG",
	"content": "Hero_content__LiDbY"
};


/***/ }),

/***/ 8740:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__A1qNp",
	"content": "Layout_content__CTp00"
};


/***/ }),

/***/ 9472:
/***/ ((module) => {

// Exports
module.exports = {
	"toggleButton": "ThemeToggle_toggleButton__pSou9"
};


/***/ }),

/***/ 2484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Hero_Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Hero/Hero.module.css
var Hero_module = __webpack_require__(630);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./src/components/Hero/Hero.js



const Hero = ({ title , subtitle , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Hero_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Hero_module_default()).title,
                children: title
            }),
            typeof subtitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Hero_module_default()).subtitle,
                dangerouslySetInnerHTML: {
                    __html: subtitle
                }
            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Hero_module_default()).subtitle,
                children: subtitle
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Hero_module_default()).content,
                children: children
            })
        ]
    });
};
/* harmony default export */ const Hero_Hero = (Hero);

;// CONCATENATED MODULE: ./src/components/Hero/index.js



/***/ }),

/***/ 8151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/utilities/themeContext.js
var themeContext = __webpack_require__(663);
// EXTERNAL MODULE: ./src/components/ThemeToggle/ThemeToggle.module.css
var ThemeToggle_module = __webpack_require__(9472);
var ThemeToggle_module_default = /*#__PURE__*/__webpack_require__.n(ThemeToggle_module);
;// CONCATENATED MODULE: ./src/components/ThemeToggle/ThemeToggle.js




const ThemeToggle = ()=>{
    const { isDarkMode , toggleTheme  } = (0,themeContext/* useTheme */.F)();
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (ThemeToggle_module_default()).toggleButton,
        onClick: toggleTheme,
        "aria-label": `Switch to ${isDarkMode ? "light" : "dark"} mode`,
        title: `Switch to ${isDarkMode ? "light" : "dark"} mode`,
        children: isDarkMode ? // Sun icon for light mode
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
                    stroke: "currentColor",
                    strokeWidth: "2"
                })
            ]
        }) : // Moon icon for dark mode
        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "currentColor"
            })
        })
    });
};
/* harmony default export */ const ThemeToggle_ThemeToggle = (ThemeToggle);

;// CONCATENATED MODULE: ./src/components/ThemeToggle/index.js


// EXTERNAL MODULE: ./src/components/Header/Header.module.css
var Header_module = __webpack_require__(1919);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Header/Header.js








const Header = ({ t  })=>{
    const router = (0,router_.useRouter)();
    const { isDarkMode  } = (0,themeContext/* useTheme */.F)();
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const rightSectionClassName = external_classnames_default()((Header_module_default()).rightSection, active && (Header_module_default()).active);
    const burgerClassName = external_classnames_default()((Header_module_default()).burger, active && (Header_module_default()).active);
    const toggleMenu = (0,external_react_.useCallback)((flag)=>{
        setActive((prev)=>{
            const nextActive = flag === undefined ? !prev : flag;
            document.body.style.overflow = nextActive ? "hidden" : "auto";
            return nextActive;
        });
    }, []);
    const closeMenu = (0,external_react_.useCallback)(()=>toggleMenu(false), []);
    const navigate = (e, to)=>{
        e.preventDefault();
        closeMenu();
        router.push(to);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (Header_module_default()).logo,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/sd-logo.png",
                            alt: "SD Logo",
                            className: `${(Header_module_default()).logoImage} ${isDarkMode ? (Header_module_default()).logoDark : (Header_module_default()).logoLight}`,
                            onClick: closeMenu
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: closeMenu,
                            children: "Design System Checklist"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: rightSectionClassName,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: (Header_module_default()).nav,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (Header_module_default()).menu,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/",
                                        onClick: (e)=>navigate(e, "/"),
                                        className: router.pathname === "/" ? (Header_module_default()).active : "",
                                        children: "Build"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/metrics",
                                        onClick: (e)=>navigate(e, "/metrics"),
                                        className: router.pathname === "/metrics" ? (Header_module_default()).active : "",
                                        children: "Measure"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/about",
                                        onClick: (e)=>navigate(e, "/about"),
                                        children: t.core.about
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/share",
                                        onClick: (e)=>navigate(e, "/share"),
                                        children: t.core.share
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle_ThemeToggle, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: burgerClassName,
                onClick: ()=>toggleMenu(),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).line
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Header/index.js


// EXTERNAL MODULE: ./src/components/Footer/Footer.module.css
var Footer_module = __webpack_require__(4051);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js




const Footer = ({ t  })=>{
    const { isDarkMode  } = (0,themeContext/* useTheme */.F)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).content,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Footer_module_default()).title,
                    children: t.footerTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Footer_module_default()).text,
                    children: t.footerText
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.js


// EXTERNAL MODULE: ./src/components/Layout/Layout.module.css
var Layout_module = __webpack_require__(8740);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.js







const Layout = ({ t , children  })=>{
    const { pathname  } = (0,router_.useRouter)();
    const [mounted, setMounted] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                t: t
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
                children: mounted && /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
                    timeout: {
                        enter: 600,
                        exit: 0
                    },
                    classNames: "fade",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Layout_module_default()).container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Layout_module_default()).content,
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {
                                t: t
                            })
                        ]
                    })
                }, pathname)
            })
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/Layout/index.js



/***/ }),

/***/ 242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/index": [
		3885,
		885
	],
	"./ko/index": [
		275,
		275
	],
	"./pt/index": [
		6164,
		164
	],
	"./tr/index": [
		4136,
		136
	],
	"./zh-cn/index": [
		6100,
		100
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ })

};
;