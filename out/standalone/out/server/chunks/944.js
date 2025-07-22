"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 3944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data)
});

;// CONCATENATED MODULE: ./src/data/designLanguage.js
/* harmony default export */ const designLanguage = ({
    id: "design-language",
    sections: [
        {
            id: "dl-brand",
            checklist: [
                "dl-brand-vision",
                "dl-brand-principles",
                "dl-brand-tone",
                "dl-brand-terminology",
                "dl-brand-assets", 
            ],
            resources: [
                {
                    title: "Patagonia's vision",
                    url: "https://www.patagonia.com/company-info.html"
                },
                {
                    title: "IBM Design Principles",
                    url: "https://www.designprinciplesftw.com/collections/ibm-design-principles"
                },
                {
                    title: "Lightning Design System's Voice and Tone",
                    url: "https://www.lightningdesignsystem.com/guidelines/voice-and-tone/"
                }, 
            ]
        },
        {
            id: "dl-guidelines",
            checklist: [
                "dl-guidelines-a11y",
                "dl-guidelines-writing",
                "dl-guidelines-microcopy",
                "dl-guidelines-terminology",
                "dl-guidelines-i18n", 
            ],
            resources: [
                {
                    title: "Atlassian Design System: Writing guidelines",
                    url: "https://atlassian.design/content/writing-guidelines/"
                },
                {
                    title: "Material Design: Glossary",
                    url: "https://m3.material.io/foundations/glossary"
                },
                {
                    title: "Material Design: Accessibility",
                    url: "https://m3.material.io/foundations/accessible-design/overview"
                }, 
            ]
        }, 
    ]
});

;// CONCATENATED MODULE: ./src/data/designFoundations.js
/* harmony default export */ const designFoundations = ({
    id: "foundations",
    sections: [
        {
            id: "df-color",
            checklist: [
                "df-color-a11y",
                "df-color-semantic",
                "df-color-dark-mode",
                "df-color-guidelines", 
            ],
            resources: [
                {
                    title: "Reshaped: Color",
                    url: "https://reshaped.so/docs/tokens/color"
                },
                {
                    title: "Material Design: Dark theme",
                    url: "https://material.io/design/color/dark-theme.html"
                },
                {
                    title: "IBM Design Language: Color",
                    url: "https://www.ibm.com/design/language/color/"
                }, 
            ]
        },
        {
            id: "df-layout",
            checklist: [
                "df-layout-units",
                "df-layout-grid",
                "df-layout-breakpoints",
                "df-layout-spacing", 
            ],
            resources: [
                {
                    title: "Material Design: Responsive Layout Grid",
                    url: "https://material.io/design/layout/responsive-layout-grid.html"
                },
                {
                    title: "Ant Design: Layout",
                    url: "https://ant.design/docs/spec/layout"
                }, 
            ]
        },
        {
            id: "df-typography",
            checklist: [
                "df-typography-mobile",
                "df-typography-grid",
                "df-typography-readability",
                "df-typography-performance",
                "df-typography-guidelines", 
            ],
            resources: [
                {
                    title: "Material Design: Understanding Typography",
                    url: "https://material.io/design/typography/understanding-typography.html#type-properties"
                },
                {
                    title: "Better Web Type",
                    url: "https://betterwebtype.com/"
                }, 
            ]
        },
        {
            id: "df-elevation",
            checklist: [
                "df-elevation-shadows",
                "df-elevation-background",
                "df-elevation-z", 
            ],
            resources: [
                {
                    title: "Reshaped: Shadow",
                    url: "https://reshaped.so/docs/tokens/shadow"
                },
                {
                    title: "Material Design: Elevation",
                    url: "https://m3.material.io/styles/elevation/overview"
                },
                {
                    title: "Atlassian Design System: Elevation",
                    url: "https://atlassian.design/foundations/elevation/"
                }, 
            ]
        },
        {
            id: "df-motion",
            checklist: [
                "df-motion-easing",
                "df-motion-duration",
                "df-motion-a11y"
            ]
        },
        {
            id: "df-iconography",
            checklist: [
                "df-iconography-a11y",
                "df-iconography-style",
                "df-iconography-naming",
                "df-iconography-grid",
                "df-iconography-keywords",
                "df-iconography-reserved",
                "df-iconography-guidelines", 
            ],
            resources: [
                {
                    title: "A complete guide to iconography",
                    url: "https://www.designsystems.com/iconography-guide/"
                },
                {
                    title: "Material Design: Product Icons",
                    url: "https://material.io/design/iconography/product-icons.html"
                }, 
            ]
        }, 
    ]
});

;// CONCATENATED MODULE: ./src/data/components.js
/* harmony default export */ const components = ({
    id: "components",
    sections: [
        {
            id: "c-accordion",
            checklist: [
                "c-accordion-active",
                "c-accordion-composition",
                "c-accordion-transition",
                "c-accordion-a11y-relation", 
            ],
            resources: [
                {
                    title: "Reshaped: Accordion",
                    url: "https://reshaped.so/docs/utilities/accordion"
                },
                {
                    title: "MUI: Accordion",
                    url: "https://mui.com/material-ui/react-accordion/"
                },
                {
                    title: "Radix: Accordion",
                    url: "https://www.radix-ui.com/docs/primitives/components/accordion"
                }, 
            ]
        },
        {
            id: "c-alert",
            checklist: [
                "c-alert-colors",
                "c-alert-title",
                "c-alert-icon",
                "c-alert-actions",
                "c-alert-responsive",
                "c-alert-a11y-roles", 
            ],
            resources: [
                {
                    title: "Reshaped: Alert",
                    url: "https://reshaped.so/docs/components/alert"
                },
                {
                    title: "Atlassian Design System: Banner",
                    url: "https://atlassian.design/components/banner/examples"
                },
                {
                    title: "MUI: Alert",
                    url: "https://mui.com/material-ui/react-alert/"
                }, 
            ]
        },
        {
            id: "c-avatar",
            checklist: [
                "c-avatar-image",
                "c-avatar-image-fallback",
                "c-avatar-sizes",
                "c-avatar-colors",
                "c-avatar-shape",
                "c-avatar-group",
                "c-avatar-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Avatar",
                    url: "https://reshaped.so/docs/components/avatar"
                },
                {
                    title: "Polaris: Avatar",
                    url: "https://polaris.shopify.com/components/avatar"
                },
                {
                    title: "Chakra: Avatar",
                    url: "https://chakra-ui.com/docs/components/avatar/usage"
                }, 
            ]
        },
        {
            id: "c-badge",
            checklist: [
                "c-badge-colors",
                "c-badge-variants",
                "c-badge-sizes",
                "c-badge-icon-support",
                "c-badge-dismiss",
                "c-badge-empty",
                "c-badge-positioning", 
            ],
            resources: [
                {
                    title: "Reshaped: Badge",
                    url: "https://reshaped.so/docs/components/badge"
                },
                {
                    title: "Material: Badge",
                    url: "https://material.io/components/badges/overview"
                },
                {
                    title: "Spectrum: Badge",
                    url: "https://spectrum.adobe.com/page/badge/"
                }, 
            ]
        },
        {
            id: "c-button",
            checklist: [
                "c-button-colors",
                "c-button-variants",
                "c-button-sizes",
                "c-button-icon",
                "c-button-hover",
                "c-button-active",
                "c-button-loading",
                "c-button-disabled",
                "c-button-a11y-role",
                "c-button-a11y-focus", 
            ],
            resources: [
                {
                    title: "Reshaped: Button",
                    url: "https://reshaped.so/docs/components/button"
                },
                {
                    title: "Atlassian Design System: Button",
                    url: "https://atlassian.design/components/button/examples"
                },
                {
                    title: "Material: Button",
                    url: "https://material.io/components/all-buttons"
                }, 
            ]
        },
        {
            id: "c-breadcrumbs",
            checklist: [
                "c-breadcrumbs-icon",
                "c-breadcrumbs-disabled",
                "c-breadcrumbs-collapsed",
                "c-breadcrumbs-separator", 
            ],
            resources: [
                {
                    title: "Reshaped: Breadcrumbs",
                    url: "https://reshaped.so/docs/components/breadcrumbs"
                },
                {
                    title: "Atlassian Design System: Breadcrumbs",
                    url: "https://atlassian.design/components/breadcrumbs/examples"
                },
                {
                    title: "Spectrum: Breadcrumbs",
                    url: "https://spectrum.adobe.com/page/breadcrumbs/"
                }, 
            ]
        },
        {
            id: "c-calendar",
            checklist: [
                "c-calendar-modes",
                "c-calendar-selected",
                "c-calendar-month-selection",
                "c-calendar-day-names",
                "c-calendar-i18n",
                "c-calendar-a11y-keyboard",
                "c-calendar-a11y-state", 
            ],
            resources: [
                {
                    title: "Atlassian Design System: Calendar",
                    url: "https://atlassian.design/components/calendar/examples"
                },
                {
                    title: "React Spectrum: Calendar",
                    url: "https://react-spectrum.adobe.com/react-spectrum/Calendar.html"
                },
                {
                    title: "MUI: Date picker",
                    url: "https://mui.com/x/react-date-pickers/date-picker/"
                }, 
            ]
        },
        {
            id: "c-card",
            checklist: [
                "c-card-composition",
                "c-card-media-sections",
                "c-card-actions",
                "c-card-responsive",
                "c-card-groups", 
            ],
            resources: [
                {
                    title: "Reshaped: Card",
                    url: "https://reshaped.so/docs/components/card"
                },
                {
                    title: "MUI: Card",
                    url: "https://mui.com/material-ui/react-card/"
                },
                {
                    title: "Material: Card",
                    url: "https://material.io/components/cards/overview"
                }, 
            ]
        },
        {
            id: "c-carousel",
            checklist: [
                "c-carousel-navigation",
                "c-carousel-composition",
                "c-carousel-item-size",
                "c-carousel-touch",
                "c-carousel-responsive",
                "c-carousel-a11y-keyboard-navigation", 
            ],
            resources: [
                {
                    title: "Reshaped: Carousel",
                    url: "https://reshaped.so/docs/components/carousel"
                },
                {
                    title: "Mantine: Carousel",
                    url: "https://mantine.dev/others/carousel/"
                },
                {
                    title: "Mistica: Carousel",
                    url: "https://mistica-web.vercel.app/?path=/story/components-carousels-carousel--default"
                }, 
            ]
        },
        {
            id: "c-checkbox",
            checklist: [
                "c-checkbox-label",
                "c-checkbox-checked",
                "c-checkbox-error",
                "c-checkbox-disabled",
                "c-checkbox-indeterminate",
                "c-checkbox-group",
                "c-checkbox-a11y-keyboard", 
            ],
            resources: [
                {
                    title: "Reshaped: Checkbox",
                    url: "https://reshaped.so/docs/components/checkbox"
                },
                {
                    title: "Audi Design System: Checkbox",
                    url: "https://react.ui.audi/?path=/story/components-checkbox--properties"
                },
                {
                    title: "MUI: Checkbox",
                    url: "https://mui.com/material-ui/react-checkbox/"
                }, 
            ]
        },
        {
            id: "c-divider",
            checklist: [
                "c-divider-direction",
                "c-divider-a11y-role"
            ],
            resources: [
                {
                    title: "Reshaped: Divider",
                    url: "https://reshaped.so/docs/components/divider"
                },
                {
                    title: "React Spectrum: Divider",
                    url: "https://react-spectrum.adobe.com/react-spectrum/Divider.html"
                },
                {
                    title: "Mantive: Divider",
                    url: "https://mantine.dev/core/divider/"
                }, 
            ]
        },
        {
            id: "c-dropdown",
            checklist: [
                "c-dropdown-composition",
                "c-dropdown-hover",
                "c-dropdown-positioning",
                "c-dropdown-responsive",
                "c-dropdown-a11y-focus",
                "c-dropdown-a11y-keyboard", 
            ],
            resources: [
                {
                    title: "Reshaped: Popover",
                    url: "https://reshaped.so/docs/components/popover"
                },
                {
                    title: "Atlassian Design System: Dropdown menu",
                    url: "https://atlassian.design/components/dropdown-menu/examples"
                },
                {
                    title: "MUI: Popover",
                    url: "https://mui.com/material-ui/react-popover/"
                }, 
            ]
        },
        {
            id: "c-icon",
            checklist: [
                "c-icon-colors",
                "c-icon-sizes",
                "c-icon-a11y-decoration"
            ],
            resources: [
                {
                    title: "Reshaped: Icon",
                    url: "https://reshaped.so/docs/utilities/icon"
                },
                {
                    title: "React Spectrum: Icon",
                    url: "https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"
                },
                {
                    title: "Polaris: Icon",
                    url: "https://polaris.shopify.com/components/icon"
                }, 
            ]
        },
        {
            id: "c-image",
            checklist: [
                "c-image-sizes",
                "c-image-fallback",
                "c-image-density",
                "c-image-a11y-alt", 
            ],
            resources: [
                {
                    title: "Reshaped: Image",
                    url: "https://reshaped.so/docs/utilities/image"
                },
                {
                    title: "Chakra: Image",
                    url: "https://chakra-ui.com/docs/components/image/usage"
                },
                {
                    title: "Mantine: Image",
                    url: "https://mantine.dev/core/image/"
                }, 
            ]
        },
        {
            id: "c-link",
            checklist: [
                "c-link-icon",
                "c-link-colors",
                "c-link-disabled",
                "c-link-font-inheritance",
                "c-link-multiline",
                "c-link-a11y-role", 
            ],
            resources: [
                {
                    title: "Reshaped: Link",
                    url: "https://reshaped.so/docs/components/link"
                },
                {
                    title: "React Spectrum: Link",
                    url: "https://react-spectrum.adobe.com/react-spectrum/Link.html"
                },
                {
                    title: "MUI: Link",
                    url: "https://mui.com/material-ui/react-link/"
                }, 
            ]
        },
        {
            id: "c-list",
            checklist: [
                "c-list-order",
                "c-list-composition",
                "c-list-a11y-role"
            ],
            resources: [
                {
                    title: "Polaris: List",
                    url: "https://polaris.shopify.com/components/list"
                },
                {
                    title: "Carbon Design System: List",
                    url: "https://carbondesignsystem.com/components/list/usage/"
                },
                {
                    title: "Mantine: List",
                    url: "https://mantine.dev/core/list/"
                }, 
            ]
        },
        {
            id: "c-loading-indicator",
            checklist: [
                "c-loading-indicator-colors",
                "c-loading-indicators-sizes",
                "c-loading-indicator-time",
                "c-loading-indicator-a11y-reduced-motion",
                "c-loading-indicator-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Loader",
                    url: "https://reshaped.so/docs/components/loader"
                },
                {
                    title: "Atlassian Design System: Spinner",
                    url: "https://atlassian.design/components/spinner/examples"
                },
                {
                    title: "Carbon Designn System: Loading",
                    url: "https://carbondesignsystem.com/components/loading/usage/"
                }, 
            ]
        },
        {
            id: "c-modal",
            checklist: [
                "c-modal-composition",
                "c-modal-actions",
                "c-modal-close",
                "c-modal-positioning",
                "c-modal-sizes",
                "c-modal-a11y-focus",
                "c-modal-a11y-keyboard",
                "c-modal-a11y-labels", 
            ],
            resources: [
                {
                    title: "Reshaped: Modal",
                    url: "https://reshaped.so/docs/components/modal"
                },
                {
                    title: "Atlassian Design System: Modal Dialog",
                    url: "https://atlassian.design/components/modal-dialog/examples"
                },
                {
                    title: "React Spectrum: Dialog",
                    url: "https://react-spectrum.adobe.com/react-spectrum/Dialog.html"
                }, 
            ]
        },
        {
            id: "c-pagination",
            checklist: [
                "c-pagination-selected",
                "c-pagination-ranges",
                "c-pagination-amount",
                "c-pagination-indeterminate",
                "c-pagination-a11y-label",
                "c-pagination-a11y-state", 
            ],
            resources: [
                {
                    title: "MUI: Pagination",
                    url: "https://mui.com/material-ui/react-pagination/"
                },
                {
                    title: "Atlassian Design System: Pagination",
                    url: "https://atlassian.design/components/pagination/examples"
                },
                {
                    title: "Carbon Design System: Pagination",
                    url: "https://carbondesignsystem.com/components/pagination/usage/"
                }, 
            ]
        },
        {
            id: "c-progress",
            checklist: [
                "c-progress-label",
                "c-progress-sizes",
                "c-progress-duration",
                "c-progress-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Progress",
                    url: "https://reshaped.so/docs/components/progress"
                },
                {
                    title: "Atlassian Design System: Progress bar",
                    url: "https://atlassian.design/components/progress-bar/examples"
                },
                {
                    title: "Polaris: Progress bar",
                    url: "https://polaris.shopify.com/components/progress-bar"
                }, 
            ]
        },
        {
            id: "c-radio",
            checklist: [
                "c-radio-label",
                "c-radio-checked",
                "c-radio-error",
                "c-radio-group",
                "c-radio-a11y-keyboard", 
            ],
            resources: [
                {
                    title: "Reshaped: Radio",
                    url: "https://reshaped.so/docs/components/radio"
                },
                {
                    title: "Material: Radio button",
                    url: "https://m3.material.io/components/radio-button/overview"
                },
                {
                    title: "Polaris: Radio button",
                    url: "https://polaris.shopify.com/components/radio-button"
                }, 
            ]
        },
        {
            id: "c-select",
            checklist: [
                "c-select-label",
                "c-select-error",
                "c-select-disabled",
                "c-select-placeholder",
                "c-select-helper",
                "c-select-icon",
                "c-select-prefix",
                "c-select-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Select",
                    url: "https://reshaped.so/docs/components/select"
                },
                {
                    title: "Polaris: Select",
                    url: "https://polaris.shopify.com/components/select"
                },
                {
                    title: "Atlassian Design System: Select",
                    url: "https://atlassian.design/components/select/examples"
                }, 
            ]
        },
        {
            id: "c-skeleton",
            checklist: [
                "c-skeleton-sizes",
                "c-skeleton-shapes",
                "c-skeleton-composition",
                "c-skeleton-a11y-motion", 
            ],
            resources: [
                {
                    title: "Reshaped: Skeleton",
                    url: "https://reshaped.so/docs/components/skeleton"
                },
                {
                    title: "MUI: Skeleton",
                    url: "https://mui.com/material-ui/react-skeleton/"
                },
                {
                    title: "Chakra: Skeleton",
                    url: "https://chakra-ui.com/docs/components/skeleton/usage"
                }, 
            ]
        },
        {
            id: "c-switch",
            checklist: [
                "c-switch-label",
                "c-switch-checked",
                "c-switch-disabled",
                "c-switch-a11y-keyboard",
                "c-switch-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Switch",
                    url: "https://reshaped.so/docs/components/switch"
                },
                {
                    title: "Mantine: Switch",
                    url: "https://mantine.dev/core/switch/"
                },
                {
                    title: "Material: Switch",
                    url: "https://m3.material.io/components/switch/overview"
                }, 
            ]
        },
        {
            id: "c-tabs",
            checklist: [
                "c-tabs-composition",
                "c-tabs-variants",
                "c-tabs-selected",
                "c-tabs-disabled",
                "c-tabs-icon",
                "c-tabs-equal",
                "c-tabs-a11y-keyboard", 
            ],
            resources: [
                {
                    title: "Reshaped: Tabs",
                    url: "https://reshaped.so/docs/components/tabs"
                },
                {
                    title: "Atlassian Design System: Tabs",
                    url: "https://atlassian.design/components/tabs/examples"
                },
                {
                    title: "MUI: Tabs",
                    url: "https://mui.com/material-ui/react-tabs/"
                }, 
            ]
        },
        {
            id: "c-text-area",
            checklist: [
                "c-text-area-label",
                "c-text-area-error",
                "c-text-area-disabled",
                "c-text-area-placeholder",
                "c-text-area-helper",
                "c-text-area-sizes",
                "c-text-area-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Text area",
                    url: "https://reshaped.so/docs/components/text-area"
                },
                {
                    title: "Chakra: Text area",
                    url: "https://chakra-ui.com/docs/components/textarea"
                },
                {
                    title: "React Spectrum: Text area",
                    url: "https://react-spectrum.adobe.com/react-spectrum/TextArea.html"
                }, 
            ]
        },
        {
            id: "c-text-field",
            checklist: [
                "c-text-field-label",
                "c-text-field-error",
                "c-text-field-disabled",
                "c-text-field-placeholder",
                "c-text-field-helper",
                "c-text-field-icon",
                "c-text-field-affix",
                "c-text-field-sizes",
                "c-text-field-a11y-label", 
            ],
            resources: [
                {
                    title: "Reshaped: Text field",
                    url: "https://reshaped.so/docs/components/text-field"
                },
                {
                    title: "React Spectrum: Text field",
                    url: "https://react-spectrum.adobe.com/react-spectrum/TextField.html"
                },
                {
                    title: "Polaris: Text field",
                    url: "https://polaris.shopify.com/components/text-field"
                }, 
            ]
        },
        {
            id: "c-toast",
            checklist: [
                "c-toast-composition",
                "c-toast-colors",
                "c-toast-icon",
                "c-toast-timeout",
                "c-toast-stacking",
                "c-toast-action",
                "c-toast-a11y-focus",
                "c-toast-a11y-motion", 
            ],
            resources: [
                {
                    title: "Reshaped: Toast",
                    url: "https://reshaped.so/docs/components/toast"
                },
                {
                    title: "Polarish: Toast",
                    url: "https://polaris.shopify.com/components/toast"
                },
                {
                    title: "Material: Snackbar",
                    url: "https://m3.material.io/components/snackbar/overview"
                }, 
            ]
        },
        {
            id: "c-tooltip",
            checklist: [
                "c-tooltip-positioning",
                "c-tooltip-timeout",
                "c-tooltip-a11y-keyboard", 
            ],
            resources: [
                {
                    title: "Reshaped: Tooltip",
                    url: "https://reshaped.so/docs/components/tooltip"
                },
                {
                    title: "React Specturm: Tooltip",
                    url: "https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"
                },
                {
                    title: "Atlassian Design System: Tooltip",
                    url: "https://atlassian.design/components/tooltip/examples"
                }, 
            ]
        }, 
    ]
});

;// CONCATENATED MODULE: ./src/data/maintenance.js
/* harmony default export */ const maintenance = ({
    id: "maintenance",
    sections: [
        {
            id: "m-documentation",
            checklist: [
                "m-documentation-principles",
                "m-documentation-start",
                "m-documentation-design",
                "m-documentation-dev",
                "m-documentation-anatomy",
                "m-documentation-props",
                "m-documentation-composition",
                "m-documentation-sandbox",
                "m-documentation-env",
                "m-documentation-release", 
            ],
            resources: [
                {
                    title: "Reshaped: Core principles",
                    url: "https://reshaped.so/docs/getting-started/principles"
                },
                {
                    title: "Chakra: Design principles",
                    url: "https://chakra-ui.com/getting-started/principles"
                }, 
            ]
        },
        {
            id: "m-local",
            checklist: [
                "m-local-when",
                "m-local-types",
                "m-local-expectations",
                "m-local-release", 
            ],
            resources: [
                {
                    title: "Building a local design system",
                    url: "https://ux.shopify.com/building-a-local-design-system-b2810c6e01f2"
                },
                {
                    title: "Reimagining design systems at Spotify",
                    url: "https://spotify.design/article/reimagining-design-systems-at-spotify"
                }, 
            ]
        },
        {
            id: "m-process",
            checklist: [
                "m-process-log",
                "m-process-roadmap",
                "m-process-stakeholder",
                "m-process-analytics",
                "m-process-shifts",
                "m-process-sla", 
            ],
            resources: [
                {
                    title: "Opening up the data behind your design systems",
                    url: "https://www.figma.com/blog/introducing-design-system-analytics/"
                },
                {
                    title: "Measuring the Impact of a Design System",
                    url: "https://medium.com/@didoo/measuring-the-impact-of-a-design-system-7f925af090f7"
                }, 
            ]
        },
        {
            id: "m-community",
            checklist: [
                "m-community-channels",
                "m-community-template",
                "m-community-updates",
                "m-community-slots", 
            ]
        },
        {
            id: "m-contribution",
            checklist: [
                "m-contribution-rules",
                "m-contribution-guidelines",
                "m-contribution-template",
                "m-contribution-engagement", 
            ],
            resources: [
                {
                    title: "Polaris: Contribution guidelines",
                    url: "https://polaris.shopify.com/contributing"
                },
                {
                    title: "Chakra: Contributing",
                    url: "https://chakra-ui.com/getting-started/contributing"
                }, 
            ]
        }, 
    ]
});

;// CONCATENATED MODULE: ./src/data/index.js




/* harmony default export */ const data = ({
    "design-language": designLanguage,
    foundations: designFoundations,
    components: components,
    maintenance: maintenance
});


/***/ })

};
;