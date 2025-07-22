(() => {
var exports = {};
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 1899:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "metrics_container__YgbN4",
	"list": "metrics_list__VqzRm",
	"listItem": "metrics_listItem__Lvhv1",
	"arrowRight": "metrics_arrowRight__hBF3A",
	"sectionOverview": "metrics_sectionOverview__JPRhx",
	"sectionDescription": "metrics_sectionDescription__aKH8H"
};


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2484);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8151);
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8526);
/* harmony import */ var _src_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6237);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_utilities_checklistsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5067);
/* harmony import */ var _metrics_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1899);
/* harmony import */ var _metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_metrics_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_icons_arrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5503);










const MetricsRoute = ({ t  })=>{
    const { checkedIds  } = (0,_src_utilities_checklistsContext__WEBPACK_IMPORTED_MODULE_7__/* .useCheckedIds */ .v9)();
    const metricsData = {
        id: "metrics",
        sections: [
            {
                id: "business-financial",
                title: "Business & Financial Impact",
                description: "Metrics that connect the design system directly to financial and strategic business goals.",
                checklist: [
                    "metrics-roi",
                    "metrics-time-to-value",
                    "metrics-cost-savings",
                    "metrics-conversion-rate",
                    "metrics-brand-reputation",
                    "metrics-company-scalability"
                ]
            },
            {
                id: "adoption-engagement",
                title: "Adoption & Engagement",
                description: "Track how teams and products are adopting and engaging with your design system.",
                checklist: [
                    "metrics-adoption-rate",
                    "metrics-component-usage",
                    "metrics-contributions",
                    "metrics-documentation-visits",
                    "metrics-team-satisfaction",
                    "metrics-participation-support"
                ]
            },
            {
                id: "product-design-efficiency",
                title: "Product & Design Efficiency",
                description: "Measure improvements in design and product development workflows.",
                checklist: [
                    "metrics-time-to-market",
                    "metrics-prototype-speed",
                    "metrics-component-library-health",
                    "metrics-component-detachments",
                    "metrics-design-review-time",
                    "metrics-onboarding-time"
                ]
            },
            {
                id: "development-efficiency",
                title: "Development & Engineering Efficiency",
                description: "Track improvements in development speed and engineering workflows.",
                checklist: [
                    "metrics-handoff-time",
                    "metrics-task-completion",
                    "metrics-tech-debt",
                    "metrics-code-complexity",
                    "metrics-linter-warnings",
                    "metrics-system-update-efficiency"
                ]
            },
            {
                id: "quality-ux",
                title: "Quality & User Experience",
                description: "Monitor the impact on product quality and user experience.",
                checklist: [
                    "metrics-ui-consistency",
                    "metrics-accessibility",
                    "metrics-support-tickets",
                    "metrics-design-debt",
                    "metrics-accessibility-score",
                    "metrics-user-satisfaction",
                    "metrics-task-completion-rates"
                ]
            }
        ]
    };
    const metricsTranslations = {
        title: "Design System Metrics",
        description: "Measure the impact and effectiveness of your design system with these key performance indicators and metrics.",
        "business-financial": {
            title: "Business & Financial Impact",
            description: "Metrics that connect the design system directly to financial and strategic business goals.",
            "metrics-roi": {
                title: "Return on Investment (ROI)",
                description: "Measure the overall financial gains of the design system against the cost of its investment."
            },
            "metrics-time-to-value": {
                title: "Time to Value",
                description: "Track the time from the initial investment to when the system begins delivering measurable returns, such as cost savings or revenue boosts."
            },
            "metrics-cost-savings": {
                title: "Cost Savings",
                description: "Calculate savings from increased efficiency, reduced refactoring, and fewer design/development hours spent on redundant work."
            },
            "metrics-conversion-rate": {
                title: "Conversion Rate Improvement",
                description: "Analyze how a more consistent and usable interface impacts user conversion rates."
            },
            "metrics-brand-reputation": {
                title: "Brand Reputation & Consistency",
                description: "Track improvements in brand recognition and trust, driven by a consistent visual identity across all products."
            },
            "metrics-company-scalability": {
                title: "Company Scalability",
                description: "Measure the increase in team capacity and the ability to build and launch new products or features more quickly."
            }
        },
        "adoption-engagement": {
            title: "Adoption & Engagement",
            description: "Track how teams and products are adopting and engaging with your design system.",
            "metrics-adoption-rate": {
                title: "Adoption Rate",
                description: "Calculate the percentage of products, teams, or projects actively using the design system's libraries and components."
            },
            "metrics-component-usage": {
                title: "Component & Library Usage",
                description: "Use tools like Figma analytics to track how many components and libraries are being used and how frequently."
            },
            "metrics-contributions": {
                title: "Contributions to the System",
                description: "Monitor the number of contributions (e.g., new components, bug fixes) from various teams, indicating a collaborative and valued system."
            },
            "metrics-documentation-visits": {
                title: "Documentation Visits",
                description: "Measure engagement with the design system's documentation to see if it's a helpful and frequently used resource."
            },
            "metrics-team-satisfaction": {
                title: "Team Satisfaction Surveys",
                description: "Collect qualitative feedback from design, development, and product teams to gauge their satisfaction and identify areas for improvement."
            },
            "metrics-participation-support": {
                title: "Participation & Support",
                description: "Track attendance at design system meetings ('office hours') and the number of support questions, which should decrease as the system matures."
            }
        },
        "product-design-efficiency": {
            title: "Product & Design Efficiency",
            description: "Measure improvements in design and product development workflows.",
            "metrics-time-to-market": {
                title: "Time to Market",
                description: "Measure the reduction in time it takes to go from an initial idea to a launched product or feature."
            },
            "metrics-prototype-speed": {
                title: "Prototype Speed",
                description: "Track the acceleration in how quickly new feature prototypes can be created and tested."
            },
            "metrics-component-library-health": {
                title: "Component Library Health",
                description: "Monitor the growth of reusable components in the system and track total components available."
            },
            "metrics-component-detachments": {
                title: "Component Detachments (Figma)",
                description: "Track how often designers detach from components, which can signal gaps or usability issues in the system."
            },
            "metrics-design-review-time": {
                title: "Design Review Time",
                description: "Measure the reduction in time spent in design review cycles due to a shared understanding of patterns and components."
            },
            "metrics-onboarding-time": {
                title: "Onboarding Time",
                description: "Monitor the time saved when onboarding new designers and developers, as they can get up to speed with established patterns quickly."
            }
        },
        "development-efficiency": {
            title: "Development & Engineering Efficiency",
            description: "Track improvements in development speed and engineering workflows.",
            "metrics-handoff-time": {
                title: "Design-to-Development Handoff Time",
                description: "Measure the speed and efficiency of the handoff process between design and development teams."
            },
            "metrics-task-completion": {
                title: "Average Task Completion Time",
                description: "Compare the time developers spend on UI-related tasks before and after the design system's implementation."
            },
            "metrics-tech-debt": {
                title: "Reduction in Technical Debt",
                description: "Track the decrease in UI-related technical debt by measuring the reuse of standardized, pre-vetted code."
            },
            "metrics-code-complexity": {
                title: "Code Complexity",
                description: "Monitor for a reduction in code complexity and the need for refactoring, thanks to component reuse."
            },
            "metrics-linter-warnings": {
                title: "Linter Warnings",
                description: "Track the number of UI-related linter warnings, which should decrease significantly with a standardized codebase."
            },
            "metrics-system-update-efficiency": {
                title: "System-Wide Update Efficiency",
                description: "Measure the reduction in time and effort required to implement system-wide design changes or platform upgrades."
            }
        },
        "quality-ux": {
            title: "Quality & User Experience",
            description: "Monitor the impact on product quality and user experience.",
            "metrics-ui-consistency": {
                title: "UI Consistency",
                description: "Track and measure the reduction in visual inconsistencies, UI bugs, and user-reported discrepancies across products."
            },
            "metrics-accessibility": {
                title: "Accessibility Issues",
                description: "Measure the decrease in accessibility-related bugs found during QA testing."
            },
            "metrics-support-tickets": {
                title: "Support Ticket Reduction",
                description: "Track the decrease in support tickets related to UI confusion or usability problems."
            },
            "metrics-design-debt": {
                title: "Reduction in Design Debt",
                description: "Monitor the decrease in the number of design debt tickets and 'snowflake' components (one-off designs)."
            },
            "metrics-accessibility-score": {
                title: "Accessibility Score",
                description: "Track improvements in automated accessibility audit scores (e.g., WCAG compliance)."
            },
            "metrics-user-satisfaction": {
                title: "User Satisfaction",
                description: "Monitor changes in user satisfaction scores (e.g., CSAT, NPS) related to the product's interface and usability."
            },
            "metrics-task-completion-rates": {
                title: "Task Completion Rates",
                description: "Measure improvements in the success rate of users completing key tasks within the product."
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        t: t,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: metricsTranslations.title,
                    subtitle: metricsTranslations.description,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/metrics/business-financial",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            text: "Get started"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().list),
                    children: metricsData.sections.map((sectionData)=>{
                        const sectionTranslations = metricsTranslations[sectionData.id];
                        const total = sectionData.checklist.length;
                        const completed = sectionData.checklist.filter((itemId)=>checkedIds.includes(itemId)).length;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            href: `/metrics/${sectionData.id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().listItem),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionOverview),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            title: sectionTranslations.title,
                                            total: total,
                                            completed: completed,
                                            completedLabel: t.core.completed
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionDescription),
                                            children: sectionTranslations.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_metrics_module_css__WEBPACK_IMPORTED_MODULE_9___default().arrowRight),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_icons_arrowRight__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                        })
                                    ]
                                })
                            })
                        }, sectionData.id);
                    })
                })
            ]
        })
    });
};
async function getStaticProps({ locale ="en"  }) {
    try {
        const t = (await __webpack_require__(242)(`./${locale || "en"}/index`)).default;
        return {
            props: {
                t
            }
        };
    } catch (error) {
        // Fallback to English if locale translation doesn't exist
        const t1 = (await __webpack_require__.e(/* import() */ 885).then(__webpack_require__.bind(__webpack_require__, 3885))).default;
        return {
            props: {
                t: t1
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricsRoute);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,67,663,889,168,526], () => (__webpack_exec__(6057)));
module.exports = __webpack_exports__;

})();