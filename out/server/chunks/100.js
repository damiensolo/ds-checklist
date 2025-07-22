"use strict";
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 6100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ zh_cn)
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/designLanguage.js
/* harmony default export */ const designLanguage = ({
    title: "设计语言",
    description: "像任何语言一样，设计语言是通过产品设计方法与您的受众进行沟通的有条理的方式。它是一致的客户体验的基石。",
    sections: {
        "dl-brand": {
            title: "品牌",
            description: "品牌在构建新产品或功能时驱动您做出的每一个决策。一个好的品牌远不止一个名称和标志。它是定义您独特身份和脱颖而出的价值观。",
            checklist: {
                "dl-brand-vision": {
                    title: "愿景",
                    description: "为什么存在，您的价值观是什么，以及它们如何帮助指导您产品的未来。"
                },
                "dl-brand-principles": {
                    title: "设计原则",
                    description: "指导您实践基础的考虑因素。它们概述了您如何从哲学上处理设计并帮助日常决策。"
                },
                "dl-brand-tone": {
                    title: "语气",
                    description: "清晰的语气定义了您在用户旅程的每一刻如何与您的受众交流，帮助他们到达他们想去的任何地方。"
                },
                "dl-brand-terminology": {
                    title: "术语",
                    description: "创建需要在整个用户体验中保持一致的标准术语和短语，加快设计过程并统一您的声音。"
                },
                "dl-brand-assets": {
                    title: "品牌资产",
                    description: "使用一组一致的品牌资产可以使您的产品和营销活动中的用户体验保持一致。这些资产包括您的标志、字体、图标、插图等。"
                }
            }
        },
        "dl-guidelines": {
            title: "指南",
            description: "了解如何处理常见的 UX 模式，将使您的组织在任何平台上建立一致的方法和用户体验。",
            checklist: {
                "dl-guidelines-a11y": {
                    title: "可访问性",
                    description: "指导您如何处理可访问性以及如何利用颜色、层次结构和辅助技术来帮助您的用户。"
                },
                "dl-guidelines-writing": {
                    title: "写作指南",
                    description: "每个一致的体验都需要严格的写作。早期建立您的风格基础可以保持一致的语法、风格选择和以行动为导向的语言，以帮助您的设计。"
                },
                "dl-guidelines-microcopy": {
                    title: "微型文本指南",
                    description: "编写设计系统中组件的标准方法。这些考虑了平台惯例和编写的最佳实践。"
                },
                "dl-guidelines-terminology": {
                    title: "术语",
                    description: "创建需要在整个用户体验中保持一致的标准术语和短语，加快设计过程并统一您的声音。"
                },
                "dl-guidelines-i18n": {
                    title: "国际化",
                    description: "定义处理产品支持的各种语言翻译内容的标准。它包括处理翻译边缘情况和内容双向性。"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/designFoundations.js
/* harmony default export */ const designFoundations = ({
    title: "基础",
    description: "设计资产和令牌，存储设计系统基础层（如颜色和排版）的值。它们用于组件，因此在此级别进行更改将在整个系统中产生共鸣。",
    sections: {
        "df-color": {
            title: "颜色",
            description: "颜色不仅是展示品牌的有效方式，也是与用户沟通的有效方式。具有目的性的颜色调色板可以通过为界面添加含义来帮助您开发直观的设计模式。",
            checklist: {
                "df-color-a11y": {
                    title: "可访问性",
                    description: "确保您的调色板中的主要颜色之间具有可访问的配对。更重要的是，确保您的背景和文本颜色具有至少AA标准的对比度比。"
                },
                "df-color-semantic": {
                    title: "语义颜色",
                    description: "除了品牌颜色之外，还要确保为禁用状态、背景、操作和高对比度文本等功能定义并制作颜色变量。"
                },
                "df-color-dark-mode": {
                    title: "深色模式",
                    description: "准备深色模式版本的调色板将使您的设计系统适应用户的操作系统颜色偏好。"
                },
                "df-color-guidelines": {
                    title: "指南",
                    description: "提供有关如何使用调色板中的颜色、在使用它们时要注意什么以及如何不使用它们的指南。"
                }
            }
        },
        "df-layout": {
            title: "布局",
            description: "精心设计的布局可以带来很长的路程。一致使用网格和间距可以使用户更轻松地扫描用户界面并掌握内容。",
            checklist: {
                "df-layout-units": {
                    title: "单位",
                    description: "单位是布局的最粒度构建块。定义一组具有一致增量（例如4、8、12和16的4点系统）的值将为设计网格和间距值提供基础。"
                },
                "df-layout-grid": {
                    title: "网格",
                    description: "每个布局都应该坐落在网格上，这为界面带来秩序和层次结构。为移动设备、平板电脑和台式机设备分别定义网格，包括列、间距和边距，以便您的界面可以快速适应任何平台。"
                },
                "df-layout-breakpoints": {
                    title: "断点",
                    description: "预定义网格将适应的屏幕大小和方向。"
                },
                "df-layout-spacing": {
                    title: "间距",
                    description: "水平和垂直节奏对于布局起着重要作用。您应该提供简单直接的方法来添加界面元素之间的空间，而不受网格的影响。"
                }
            }
        },
        "df-typography": {
            title: "排版",
            description: "排版是产品中展示内容的主要方式之一。排版比例中的清晰层次和对比样式将使阅读更容易，并有助于产品的整体结构。这也是一个展示品牌特征和存在的机会。",
            checklist: {
                "df-typography-mobile": {
                    title: "响应式",
                    description: "与移动设备相比，桌面设备通常可以承受更大的字体大小。创建一个适应视口大小的排版比例将有助于更有意义的层次结构和布局。"
                },
                "df-typography-grid": {
                    title: "网格关系",
                    description: "字体大小和行距应与您的网格匹配，以允许更好的文本和其他UI元素之间的配对。一个很好的例子是文本与带有边界框的图标配对。"
                },
                "df-typography-readability": {
                    title: "可读性",
                    description: "优化排版比例的字母间距（跟踪）、行高（行距）和行长将有助于文本的可读性。"
                },
                "df-typography-performance": {
                    title: "性能",
                    description: "自定义字体在显示之前需要下载，特别是在Web上。确保您具有合理的后备和快速的排版资产加载时间。使用系统字体可以解决这个性能问题。"
                },
                "df-typography-guidelines": {
                    title: "指南",
                    description: "提供有关何时以及如何使用排版比例中的配对，以及在使用它们时要注意什么以及如何不使用它们的指南。"
                }
            }
        },
        "df-elevation": {
            title: "高度",
            description: "高度控制沿z轴两个表面之间的相对距离。在浅色模式下，它通常通过应用于表面的阴影值进行突出显示，而在深色模式下，则使用背景颜色值进行通信。",
            checklist: {
                "df-elevation-shadows": {
                    title: "阴影",
                    description: "根据支持的高度级别提供多个阴影值。大多数情况下，您的产品将需要3到4个高度级别。"
                },
                "df-elevation-background": {
                    title: "背景颜色",
                    description: "每个阴影值都应具有链接的背景颜色。在浅色模式下，这些颜色可能都会解决白色颜色，因为它与阴影一起使用。在深色模式下，它们将代替阴影以传达表面的z轴距离。"
                },
                "df-elevation-z": {
                    title: "Z-index",
                    description: "定义一系列Z-index值来控制哪些元素具有优先权以在其他元素上呈现。"
                }
            }
        },
        "df-motion": {
            title: "动画",
            description: "共享动画值提供更一致的用户体验，并更好地与品牌对齐。",
            checklist: {
                "df-motion-easing": {
                    title: "缓动",
                    description: "为组件转换提供系统使用的标准缓动函数。作为起点，可以使用标准、加速和减速函数，应涵盖常见的组件用例。"
                },
                "df-motion-duration": {
                    title: "持续时间",
                    description: "定义多个动画持续时间值，以使组件转换在整个产品中保持一致"
                },
                "df-motion-a11y": {
                    title: "可访问性",
                    description: "注意用户减少运动偏好，并使动画不那么显眼或完全删除。"
                }
            }
        },
        "df-iconography": {
            title: "图标设计",
            description: "图标是代表功能或内容的符号。它们在用户界面中尤其易于识别和有用，因为它们的含义可以一眼看出。虽然它们可以仅用于装饰，但只有在它们被有意义和一致地使用时，它们的全部潜力才能得到实现。",
            checklist: {
                "df-iconography-a11y": {
                    title: "可访问性",
                    description: "对于传达含义或提供功能的图标，请提供默认的可访问名称，以表达相同的含义或功能。屏幕阅读器和其他辅助技术可能使用此名称来为用户定位界面。对于纯装饰图标，不需要名称。如果您的设计系统导出前端代码，请确保包括图标名称，例如使用aria-label。"
                },
                "df-iconography-style": {
                    title: "样式",
                    description: "确保您的图标系列在视觉上是有意义的整体。选择轮廓或填充样式并坚持使用它将导致更好的视觉一致性和可预测性。"
                },
                "df-iconography-naming": {
                    title: "命名",
                    description: "根据其传达的目的而不是外观来命名您的图标。例如，三角形媒体播放器播放按钮图标应命名为“play”，而不是“triangle”。您仍然可以添加相关关键字以提高可发现性。"
                },
                "df-iconography-grid": {
                    title: "与网格的关系",
                    description: "在与您的网格相配合的边界框中绘制图标。这将使其与其他UI元素更好地配对。一个很好的例子是带有边界框的图标与文本配对。"
                },
                "df-iconography-keywords": {
                    title: "关键字",
                    description: "添加关键字将提高每个图标的可发现性，并为使用您的系统的任何人提供更好的用户体验。"
                },
                "df-iconography-reserved": {
                    title: "保留图标",
                    description: "保留代表常见操作的图标将防止它们在任何其他上下文中使用。导航或添加和删除的系统图标是很好的例子。这会导致更直观的用户体验。"
                },
                "df-iconography-guidelines": {
                    title: "指南",
                    description: "提供有关如何以及何时使用图标、在处理图标时要注意什么以及如何不使用它们的指南。"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/components.js
/* harmony default export */ const components = ({
    title: "核心组件",
    description: "组件是用户界面的主要构建块。构建可重用的组件库通过减少设计和技术债务以及加快流程来增强产品开发工作流程。核心组件不能被分解为细粒度的部分而不失去它们的含义。",
    sections: {
        "c-accordion": {
            title: "手风琴",
            description: "当按下触发元素时，手风琴切换内容区域的可见性。",
            checklist: {
                "c-accordion-active": {
                    title: "活动状态",
                    description: "手风琴有两种状态来切换其内容的可见性。如果手风琴触发器显示图标，则应在状态之间视觉上有所区别。"
                },
                "c-accordion-composition": {
                    title: "构成",
                    description: "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。"
                },
                "c-accordion-transition": {
                    title: "切换过渡",
                    description: "添加微妙的动画以帮助用户理解和遵循组件行为，在状态之间切换。"
                },
                "c-accordion-a11y-relation": {
                    title: "内容和触发器关系",
                    description: "使用辅助技术聚焦内容区域时，应从触发元素中宣布额外的上下文。"
                }
            }
        },
        "c-alert": {
            title: "警告",
            description: "警告显示有关整个页面或其特定区域的重要消息。",
            checklist: {
                "c-alert-colors": {
                    title: "颜色",
                    description: "根据其角色区分警报的视觉外观至关重要。如果您使用背景颜色进行角色区分，请确保其与警报内显示的内容具有足够的对比度。"
                },
                "c-alert-title": {
                    title: "标题支持",
                    description: "支持标题可以帮助用户更快地了解长时间警报消息的上下文。"
                },
                "c-alert-icon": {
                    title: "图标支持",
                    description: "图标说明了警报的角色，并为色盲人士提供了有关警报的额外提示。"
                },
                "c-alert-actions": {
                    title: "补充操作",
                    description: "警报中的操作应与其文本相关，并提供一种对发送给用户的消息做出反应的方式。"
                },
                "c-alert-responsive": {
                    title: "响应式",
                    description: "警报可以适应视口大小，通常在移动设备上变为全宽，以节省一些空间。"
                },
                "c-alert-a11y-roles": {
                    title: "辅助功能角色",
                    description: "使用辅助技术时，警报应正确地宣布其辅助功能角色。"
                }
            }
        },
        "c-avatar": {
            title: "头像",
            description: "用户照片、组织或其他类型内容的可视化表示缩略图。",
            checklist: {
                "c-avatar-image": {
                    title: "图片",
                    description: "头像应将图片掩盖成它们的形状，并适用于任何图片大小，因为它们可能从未知的数据源获取此图片。"
                },
                "c-avatar-image-fallback": {
                    title: "图片备用方案",
                    description: "当未传递图像或存在图像加载错误时，头像应能够显示具有不同图像、图标或文本缩写的备用方案。"
                },
                "c-avatar-sizes": {
                    title: "尺寸",
                    description: "有许多上下文可使用头像，需要不同的组件尺寸。对于普通项目，请使用至少2-3种不同的尺寸，并确保至少有一个小尺寸可用。"
                },
                "c-avatar-colors": {
                    title: "颜色",
                    description: "在没有图像的情况下使用头像形状时，应用背景颜色。确保图标和文本与背景根据WCAG AA标准具有足够的对比度。"
                },
                "c-avatar-shape": {
                    title: "形状",
                    description: "根据使用的区域，头像可能支持多种形状，如正方形或圆形。"
                },
                "c-avatar-group": {
                    title: "头像组",
                    description: "多个头像可以堆叠在一起，以表示一组用户。"
                },
                "c-avatar-a11y-label": {
                    title: "辅助功能标签",
                    description: "当用于非装饰性图像并且没有文本表示其内容时，头像应提供辅助功能标签。"
                }
            }
        },
        "c-badge": {
            title: "徽章",
            description: "紧凑元素，表示对象或用户输入的状态。",
            checklist: {
                "c-badge-colors": {
                    title: "颜色",
                    description: "徽章在您的产品中可能扮演各种角色，为每个角色定义预定义的颜色应帮助用户理解它们的含义。更改颜色时，请确保文本根据WCAG AA标准与背景具有足够的对比度。"
                },
                "c-badge-variants": {
                    title: "变体",
                    description: "基于徽章在产品中呈现的位置，您可能支持多个组件变体。例如，您可以使用一个淡化的背景来避免过多吸引注意力。"
                },
                "c-badge-sizes": {
                    title: "尺寸",
                    description: "徽章可以有多种尺寸，具体取决于徽章的使用位置。例如，您可以在营销页面上使用大尺寸。"
                },
                "c-badge-icon-support": {
                    title: "图标支持",
                    description: "为了更好地说明徽章的含义，您可以在文本旁边显示图标。请确保对于小徽章，图标内容仍然可识别。"
                },
                "c-badge-dismiss": {
                    title: "可消除操作",
                    description: "徽章可以用作动态显示选定值的方式，并且应该有一种方法来解除它们。"
                },
                "c-badge-empty": {
                    title: "空状态",
                    description: "徽章可以在没有任何文本内容的情况下使用。那通常 需要更改它们的样式以保持正确的形状。"
                },
                "c-badge-positioning": {
                    title: "定位",
                    description: "当用作状态徽章（例如通知指示器）时，您应该能够将其相对于这些元素定位。"
                }
            }
        },
        "c-button": {
            title: "按钮",
            description: "用于单步操作的交互元素。",
            checklist: {
                "c-button-colors": {
                    title: "颜色",
                    description: "按钮在您的产品中可能扮演各种角色，为每个角色定义预定义的颜色应帮助用户理解它们的含义。更改颜色时，请确保文本根据WCAG AA标准与背景具有足够的对比度。"
                },
                "c-button-variants": {
                    title: "变体",
                    description: "使用多个按钮时，应有一种方法来区分主要和次要操作。按钮可能为用户扮演不同的角色或用于各种表面，并且它们必须改变外观。"
                },
                "c-button-sizes": {
                    title: "尺寸",
                    description: "根据将使用按钮的位置，它可以有多种尺寸。例如，您可以在应用程序的密集区域使用小尺寸。"
                },
                "c-button-icon": {
                    title: "图标支持",
                    description: "当与其标签一起使用时，图标可以轻松传达按钮的目的，或者在空间不足时可以不使用文本。仅使用图标时，请确保提供辅助功能标签。"
                },
                "c-button-hover": {
                    title: "悬停状态",
                    description: "当使用鼠标指针悬停在按钮上时，清晰地显示它是交互式的。"
                },
                "c-button-active": {
                    title: "活动状态",
                    description: "在按钮被按下、用于选择值或切换页面上的其他元素时，提供视觉提示。"
                },
                "c-button-loading": {
                    title: "加载状态",
                    description: "在按下按钮后，指示用户必须等待其操作结果的时间。如果使用旋转器显示此状态，请 确保它不会更改原始按钮的宽度或高度。"
                },
                "c-button-disabled": {
                    title: "禁用状态",
                    description: "视觉上显示按钮不可交互，并限制其无法被按下。"
                },
                "c-button-a11y-role": {
                    title: "辅助功能角色",
                    description: "按钮应正确宣布按钮或链接的辅助功能角色，并根据传递给它的属性自动解决它。"
                },
                "c-button-a11y-focus": {
                    title: "焦点指示器",
                    description: "当使用键盘或辅助技术聚焦按钮时，按钮应具有可见的焦点指示器。"
                }
            }
        },
        "c-breadcrumbs": {
            title: "面包屑导航",
            description: "顶级产品导航，帮助用户了解当前页面的位置并导航回其父级。",
            checklist: {
                "c-breadcrumbs-icon": {
                    title: "图标支持",
                    description: "图标有助于传达面包屑项链接的页面的角色。大多数情况下，您需要确保它们被一致地使用，而不仅仅是在列表中的随机项。"
                },
                "c-breadcrumbs-disabled": {
                    title: "禁用状态",
                    description: "列表中的每个项目都可以单独禁用，以防止用户导航到该页面。"
                },
                "c-breadcrumbs-collapsed": {
                    title: "折叠状态",
                    description: "如果面包屑项不适合父容器，则列表应支持仅折叠项，以使相关项对用户可见。"
                },
                "c-breadcrumbs-separator": {
                    title: "自定义分隔符",
                    description: "根据使用上下文，面包屑列表中的项目可以使用不同的分隔符样式。"
                }
            }
        },
        "c-calendar": {
            title: "日历",
            description: "显示一个或多个月中的日期的网格，并允许用户选择单个日期或日期范围。",
            checklist: {
                "c-calendar-modes": {
                    title: "显示模式",
                    description: "日历可能在各种产品区域和视口中使用。确保支持不同的显示模式，以渲染一个以上的月份或垂直布局。"
                },
                "c-calendar-selected": {
                    title: "选定状态",
                    description: "日历应支持单个日期和选择范围。选定的日期应该在视觉上突出显示，并且所选日期之间的范围应该对用户可见。"
                },
                "c-calendar-month-selection": {
                    title: "月份选择",
                    description: "为了帮助用户导航更长的日期范围，日历应提供一种轻松切换显示月份的方法。"
                },
                "c-calendar-day-names": {
                    title: "星期几名称",
                    description: "除了日期数字之外，为星期几名称提供简短的标签，以便让用户更轻松地导航日期选择。"
                },
                "c-calendar-i18n": {
                    title: "国际化",
                    description: "日历应针对产品支持的所有国家/地区进行本地化。这包括日期格式和正确的星期几排序。"
                },
                "c-calendar-a11y-keyboard": {
                    title: "键盘导航",
                    description: "日历日期应该可以使用键盘和辅助技术进行聚焦。进一步的日期导航应该使用键盘箭头或屏幕阅读器导航进行，并支持通过导航出列或行来切换月份。"
                },
                "c-calendar-a11y-state": {
                    title: "状态通告",
                    description: "当所选日期获得焦点时，辅助技术应该通告所选日期。"
                }
            }
        },
        "c-card": {
            title: "卡片",
            description: "用于分组主题信息及其相关操作的容器。",
            checklist: {
                "c-card-composition": {
                    title: "内容组成",
                    description: "内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。"
                },
                "c-card-media-sections": {
                    title: "媒体区域",
                    description: "卡片通常与媒体内容一起使用。最受欢迎的选项是在内容上方有一个全宽区域或在卡片的一侧有一个区域。"
                },
                "c-card-actions": {
                    title: "附加操作",
                    description: "卡片可以与通常放置在卡片底部的操作一起使用，或者卡片本身可以是可点击的并代表一个操作。"
                },
                "c-card-responsive": {
                    title: "响应式设计",
                    description: "在移动视口上，卡片通常是全宽的，以节省内容空间。"
                },
                "c-card-groups": {
                    title: "卡片组",
                    description: "多个卡片可以组合成单个内容区域列表。"
                }
            }
        },
        "c-carousel": {
            title: "走马灯",
            description: "用于显示分组内容的水平可滚动区域。",
            checklist: {
                "c-carousel-navigation": {
                    title: "导航控件",
                    description: "走马灯应该对使用鼠标而不是触摸事件的设备上的内容进行导航。"
                },
                "c-carousel-composition": {
                    title: "内容组成",
                    description: "走马灯项的内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。"
                },
                "c-carousel-item-size": {
                    title: "项大小",
                    description: "项的布局应具有足够的灵活性，以支持不同类型的内容。对于移动设备，请确保显示未适合视口的走马灯项的一部分，以指示可滚动区域。"
                },
                "c-carousel-touch": {
                    title: "触摸导航",
                    description: "走马灯内容应呈现在可滚动区域内，以支持触摸事件。"
                },
                "c-carousel-responsive": {
                    title: "响应式设计",
                    description: "走马灯项的布局可能需要根据可用空间进行调整。"
                },
                "c-carousel-a11y-keyboard-navigation": {
                    title: "键盘导航",
                    description: "键盘和辅助技术用户应该能够在不单击导航控件的情况下导航走马灯内容。"
                }
            }
        },
        "c-checkbox": {
            title: "复选框",
            description: "用于从列表中选择一个或多个值的表单字段。",
            checklist: {
                "c-checkbox-label": {
                    title: "标签",
                    description: "应该有一个与复选框字段相关联的文本标签。单击标签也应触发复选框选择。如果标签没有在页面上呈现，则辅助技术仍应该宣布它。"
                },
                "c-checkbox-checked": {
                    title: "选中状态",
                    description: "在复选框被选中并用于表单提交时显示。"
                },
                "c-checkbox-error": {
                    title: "错误状态",
                    description: "当错误与复选框字段相关时，使用错误状态进行表单验证。始终使用文本错误以及不同的字段颜色。"
                },
                "c-checkbox-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态来防止复选框交互并从提交的表单值中删除其值。"
                },
                "c-checkbox-indeterminate": {
                    title: "不定状态",
                    description: "在复选框具有可选择子元素且仅有一些被选中时，以视觉方式显示。"
                },
                "c-checkbox-group": {
                    title: "复选框组",
                    description: "复选框可以分组以同时处理多个值。"
                },
                "c-checkbox-a11y-keyboard": {
                    title: "键盘支持",
                    description: "应该使用键盘触发复选框选择。使用本机元素应自动提供此类交互。"
                }
            }
        },
        "c-divider": {
            title: "分隔线",
            description: "用于视觉内容分隔的元素。",
            checklist: {
                "c-divider-direction": {
                    title: "方向",
                    description: "分隔线应分隔水平和垂直内容列表。"
                },
                "c-divider-a11y-role": {
                    title: "无障碍角色",
                    description: "如果分隔线在布局中发挥非装饰性角色，则应由辅助技术宣布其角色。"
                }
            }
        },
        "c-dropdown": {
            title: "下拉菜单",
            description: "用户可以触发的上下文操作列表。",
            checklist: {
                "c-dropdown-composition": {
                    title: "内容组成",
                    description: "下拉菜单可用于上下文菜单、产品导航和其他用途。它们的内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。"
                },
                "c-dropdown-hover": {
                    title: "悬停触发",
                    description: "下拉菜单应支持在悬停事件上显示其内容。一旦其触发器获得焦点，键盘用户应该有相同的行为。"
                },
                "c-dropdown-positioning": {
                    title: "动态定位",
                    description: "下拉菜单内容应基于屏幕上触发元素的当前位置显示，并始终对用户可见。"
                },
                "c-dropdown-responsive": {
                    title: "响应式设计",
                    description: "如果下拉菜单在移动设备上与桌面设备上不同，则应调整下拉菜单内容。"
                },
                "c-dropdown-a11y-focus": {
                    title: "焦点捕获",
                    description: "一旦打开下拉菜单内容，焦点环应移动到其内容区域内，并在关闭时返回到触发元素。"
                },
                "c-dropdown-a11y-keyboard": {
                    title: "键盘导航",
                    description: "下拉菜单应该对键盘和辅助技术进行可访问。用户应该能够使用单独的关闭操作关闭下拉菜单，或者一旦他们在内容区域之外按Tab键。"
                }
            }
        },
        "c-icon": {
            title: "图标",
            description: "用于控制SVG资源外观的包装器。",
            checklist: {
                "c-icon-colors": {
                    title: "颜色",
                    description: "图标应支持设计系统令牌中可用的颜色值。此外，支持从其父元素继承颜色是一个好的实践。"
                },
                "c-icon-sizes": {
                    title: "尺寸",
                    description: "图标应具有几个预定义的尺寸，以提供整体的产品体验。可以使用排版配对来为这些大小值提供文本大小对齐。"
                },
                "c-icon-a11y-decoration": {
                    title: "交互性",
                    description: "大多数情况下，图标用作装饰元素。如果图标需要交互 - 应该使用按钮、链接或其他交互式组件包含该功能。"
                }
            }
        },
        "c-image": {
            title: "图片",
            description: "用于显示图像并控制其行为的实用程序。",
            checklist: {
                "c-image-sizes": {
                    title: "尺寸",
                    description: "图像应该在支持的尺寸方面具有灵活性。除了仅支持宽度和高度之外，还应支持纵横比，以根据父元素动态缩放其比例。"
                },
                "c-image-fallback": {
                    title: "图像备用方案",
                    description: "当图像URL不正确或未定义时，应显示备用方案。这可以是具有背景的空框，图标或静态占位符图像。"
                },
                "c-image-density": {
                    title: "屏幕密度支持",
                    description: "根据屏幕密度，您应该支持加载多个不同尺寸的图像资源，并向用户提供相关的图像。"
                },
                "c-image-a11y-alt": {
                    title: "Alt文本",
                    description: "当图像是非装饰性的时，应提供描述图片内容的Alt文本。"
                }
            }
        },
        "c-link": {
            title: "链接",
            description: "交互式文本元素，用于在文本段落中进行导航。",
            checklist: {
                "c-link-icon": {
                    title: "图标支持",
                    description: "可以在链接旁边使用图标来传达链接的目的。不应在没有文本标签的情况下在链接内使用图标。"
                },
                "c-link-colors": {
                    title: "颜色",
                    description: "链接在您的产品中可能扮演各种角色，为每个角色定义预定义颜色应有助于用户理解它们的含义。由于链接是文本元素，因此它应该能够自动继承由其父元素定义的颜色，就像其他文本内容一样。"
                },
                "c-link-disabled": {
                    title: "禁用状态",
                    description: "直观地显示链接不可交互，并限制其被按下。"
                },
                "c-link-font-inheritance": {
                    title: "字体继承",
                    description: "链接应能够在作为文本元素的一部分使用时继承排版样式。"
                },
                "c-link-multiline": {
                    title: "多行显示",
                    description: "在文本段落中使用时，链接应支持多行显示，而不会破坏文本流。"
                },
                "c-link-a11y-role": {
                    title: "可访问性角色",
                    description: "链接应正确地宣布按钮或链接可访问性角色，并根据传递给它的属性自动解决它。"
                }
            }
        },
        "c-list": {
            title: "列表",
            description: "列表用于显示项目列表。",
            checklist: {
                "c-list-order": {
                    title: "排序",
                    description: "列表项可以使用项目符号、编号和其他样式和类型的排序。"
                },
                "c-list-composition": {
                    title: "内容组成",
                    description: "列表项内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。"
                },
                "c-list-a11y-role": {
                    title: "可访问性角色",
                    description: "辅助技术应正确宣布列表的角色和显示的项目数。"
                }
            }
        },
        "c-loading-indicator": {
            title: "加载指示器",
            description: "动画元素，用于传达进度，而不告诉进程需要多长时间。",
            checklist: {
                "c-loading-indicator-colors": {
                    title: "颜色",
                    description: "加载指示器可能会在具有各种角色的元素内使用，并遵循其颜色方案。"
                },
                "c-loading-indicators-sizes": {
                    title: "尺寸",
                    description: "根据加载指示器呈现的区域的大小，加载指示器可能提供多个尺寸。"
                },
                "c-loading-indicator-time": {
                    title: "加载持续时间",
                    description: "在某些情况下，无法确定等待时间。应在加载完成或出现错误之前显示加载指示器。在其他情况下，最好指示剩余的加载时间。"
                },
                "c-loading-indicator-a11y-reduced-motion": {
                    title: "减少动态效果",
                    description: "加载指示器应与系统动态设置同步，并在打开减少动态设置时减少其动画速度。"
                },
                "c-loading-indicator-a11y-label": {
                    title: "可访问性标签",
                    description: "如果加载指示器是独立的，请为其正在加载的内容区域提供可访问性标签。"
                }
            }
        },
        "c-modal": {
            title: "对话框",
            description: "出现在主内容前面的容器，以提供关键信息或可操作内容。",
            checklist: {
                "c-modal-composition": {
                    title: "内容组成",
                    description: "主内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。"
                },
                "c-modal-actions": {
                    title: "辅助操作",
                    description: "由于对话框中的内容可能是可操作的，因此需要一个操作元素区域。该区域通常位于对话框容器的底部。"
                },
                "c-modal-close": {
                    title: "关闭操作",
                    description: "对话框应提供一种简单的关闭方式，因为它们在打开时会阻止内容。这可以是单独的关闭按钮或其中一个辅助操作。"
                },
                "c-modal-positioning": {
                    title: "定位",
                    description: "对话框可以位于屏幕中央，也可以显示为屏幕两侧的滑动工作表。"
                },
                "c-modal-sizes": {
                    title: "尺寸",
                    description: "支持根据您显示的内容更改对话框的高度和宽度。"
                },
                "c-modal-a11y-focus": {
                    title: "焦点捕获",
                    description: "当打开对话框时，用户焦点应移动到第一个可聚焦元素并保持在其中。关闭对话框时，焦点应返回到上一个活动元素。"
                },
                "c-modal-a11y-keyboard": {
                    title: "键盘导航",
                    description: "可以通过按Esc键关闭对话框，并且对话框容器内的所有可聚焦元素都应可通过键盘导航访问。"
                },
                "c-modal-a11y-labels": {
                    title: "标题和副标题标签",
                    description: "对话框应使用正确的可访问性角色，并应由标题和副标题元素标记。如果没有可见的标题或副标题，则可以使用可访问性标签。"
                }
            }
        },
        "c-pagination": {
            title: "分页",
            description: "分页允许从一系列页面中进行选择。",
            checklist: {
                "c-pagination-selected": {
                    title: "选定页面状态",
                    description: "在列表中视觉上突出显示所选页面，并使其无法交互。"
                },
                "c-pagination-ranges": {
                    title: "页面显示范围",
                    description: "定义所选页面周围呈现的页面范围。它有助于仅呈现有限数量的页面，但使用户比一次移动一页更快地导航。"
                },
                "c-pagination-amount": {
                    title: "每页项目数量",
                    description: "提供选择在页面上显示的分页项目数量的选项。"
                },
                "c-pagination-indeterminate": {
                    title: "不确定的页面数量",
                    description: "当您事先不知道可用页面的总数时，请使用不同的显示模式单独导航页面。"
                },
                "c-pagination-a11y-label": {
                    title: "完整页面标签公告",
                    description: "分页应为辅助技术提供每个页面的清晰、动态标签，而不仅仅是在没有上下文的情况下宣布数字。"
                },
                "c-pagination-a11y-state": {
                    title: "状态公告",
                    description: "分页应在焦点选中所选页面时宣布。"
                }
            }
        },
        "c-progress": {
            title: "进度条",
            description: "显示需要很长时间或由多个步骤组成的任务的进度。",
            checklist: {
                "c-progress-label": {
                    title: "标签",
                    description: "支持可视化显示标签，以解释进度条负责的内容。"
                },
                "c-progress-sizes": {
                    title: "尺寸",
                    description: "根据加载指示器呈现的区域的大小，加载指示器可能提供多个尺寸。"
                },
                "c-progress-duration": {
                    title: "持续时间",
                    description: "在某些情况下，无法确定等待时间。应在加载完成或出现错误之前显示加载指示器。在其他情况下，最好指示剩余的加载时间。"
                },
                "c-progress-a11y-label": {
                    title: "可访问性标签",
                    description: "如果无法在界面中显示标签，请支持添加可访问性标签。"
                }
            }
        },
        "c-radio": {
            title: "单选框",
            description: "单选框是用于从列表中选择一个选项的表单元素。",
            checklist: {
                "c-radio-label": {
                    title: "标签",
                    description: "应该有一个与单选框字段相关联的文本标签。单击标签也应触发复选框选择。如果标签未在页面上呈现，则辅助技术仍应宣布它。"
                },
                "c-radio-checked": {
                    title: "选中状态",
                    description: "显示单选框被选中并用于表单提交的状态。"
                },
                "c-radio-error": {
                    title: "错误状态",
                    description: "当错误与单选框字段相关时，使用错误状态进行表单验证。始终使用文本错误以及不同的字段颜色。"
                },
                "c-radio-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态防止单选框交互，并从提交的表单值中删除其值。"
                },
                "c-radio-group": {
                    title: "单选框组",
                    description: "单选按钮始终作为一组使用，以避免在选中其中一个单选按钮后锁定选择。"
                },
                "c-radio-a11y-keyboard": {
                    title: "键盘支持",
                    description: "应使用键盘触发单选框选择。使用本机元素应自动提供此类交互。"
                }
            }
        },
        "c-select": {
            title: "选择框",
            description: "选择框允许您从选项列表中选择单个值。",
            checklist: {
                "c-select-label": {
                    title: "标签",
                    description: "与选择框字段相关联的文本标签可以为用户提供附加上下文。单击标签也应触发选择下拉菜单。"
                },
                "c-select-error": {
                    title: "错误状态",
                    description: "当错误仅涉及选择时，请使用错误状态进行表单验证。为了更好的可访问性，显示额外的错误图标。"
                },
                "c-select-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态防止选择交互，并从提交的表单值中删除其值。"
                },
                "c-select-placeholder": {
                    title: "占位符",
                    description: "当未选择任何值时，请显示占位符值。您可以使用相同的占位符值将选择值重置回默认值。"
                },
                "c-select-helper": {
                    title: "辅助文本",
                    description: "为用户提供有关选择目的和选择要求的附加上下文。"
                },
                "c-select-icon": {
                    title: "图标支持",
                    description: "添加一个区域，以在字段开始处显示图标，以传达选择作为组件或所选值的目的。"
                },
                "c-select-prefix": {
                    title: "前缀",
                    description: "添加一个区域以自定义内容，使选择对用户更具上下文。例如，您可以在国家代码选择中显示国旗。"
                },
                "c-select-sizes": {
                    title: "尺寸",
                    description: "根据选择框将要使用的位置，它可以具有多个尺寸。例如，您可以在应用程序的密集区域中使用小尺寸。"
                },
                "c-select-a11y-label": {
                    title: "可访问性标签",
                    description: "如果您没有为选择提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。"
                }
            }
        },
        "c-skeleton": {
            title: "骨架屏",
            description: "在数据加载时替换页面元素的占位符。",
            checklist: {
                "c-skeleton-sizes": {
                    title: "尺寸",
                    description: "骨架屏应该能够匹配您设计系统中可用的各种尺寸的组件，以避免数据加载后不必要的布局移位。"
                },
                "c-skeleton-shapes": {
                    title: "形状",
                    description: "骨架屏应该能够匹配您设计系统中可用的各种形状的组件，以使加载状态与实际组件的布局保持一致。"
                },
                "c-skeleton-composition": {
                    title: "组成",
                    description: "您可以将简单的骨架屏组合成更高级的布局。您不必将应用程序界面与骨架屏进行1:1映射。"
                },
                "c-skeleton-a11y-motion": {
                    title: "降低动画",
                    description: "为了适应降低动画的用户偏好，减少或完全删除动画。"
                }
            }
        },
        "c-switch": {
            title: "开关",
            description: "用于立即更改单个项目状态的切换。",
            checklist: {
                "c-switch-label": {
                    title: "标签",
                    description: "应该有一个与开关相关联的文本标签。单击标签也应触发开关选择。如果标签未在页面上呈现，则辅助技术仍应宣布它。"
                },
                "c-switch-checked": {
                    title: "选中状态",
                    description: "当选择开关并激活底层功能时，请显示。通常，开关用于在选择后立即更新数据。"
                },
                "c-switch-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态防止开关交互。"
                },
                "c-switch-a11y-keyboard": {
                    title: "键盘导航",
                    description: "应使用键盘触发开关选择。使用本机元素应自动提供此类交互。"
                },
                "c-switch-a11y-label": {
                    title: "可访问性标签",
                    description: "如果您没有为开关提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。"
                }
            }
        },
        "c-tabs": {
            title: "选项卡",
            description: "在多个页面或内容部分之间导航。",
            checklist: {
                "c-tabs-composition": {
                    title: "内容组成",
                    description: "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。"
                },
                "c-tabs-variants": {
                    title: "变体",
                    description: "为了支持不同的渲染上下文，选项卡可能支持多个变体。例如，当直接在页面上使用时，它们可能呈现为药片，而在卡中呈现选项卡时则使用下划线变体。"
                },
                "c-tabs-selected": {
                    title: "选中状态",
                    description: "由于选项卡始终显示其面板中的内容，因此应始终选择其中一个选项卡触发器并在视觉上突出显示。"
                },
                "c-tabs-disabled": {
                    title: "禁用状态",
                    description: "可以禁用选项卡触发器，以防止用户切换到特定的选项卡面板。"
                },
                "c-tabs-icon": {
                    title: "图标支持",
                    description: "为了更好地说明每个选项卡的含义，您可以在选项卡触发器文本旁边显示图标。"
                },
                "c-tabs-equal": {
                    title: "等宽布局",
                    description: "当用于占用父容器的整个宽度时，选项卡触发器可以被拉伸以占用相等的水平空间。"
                },
                "c-tabs-a11y-keyboard": {
                    title: "键盘支持",
                    description: "当使用键盘与选项卡交互时，它们应支持箭头导航以在前一个和下一个面板之间切换。Home和End按钮也应将选择移动到第一个和最后一个面板。"
                }
            }
        },
        "c-text-area": {
            title: "文本区域",
            description: "用于输入和编辑多行文本的表单字段。",
            checklist: {
                "c-text-area-label": {
                    title: "标签",
                    description: "与文本区域相关联的文本标签可以为用户提供附加上下文。单击标签应将焦点移动到字段。"
                },
                "c-text-area-error": {
                    title: "错误状态",
                    description: "当错误仅与文本区域有关时，请使用错误状态进行表单验证。"
                },
                "c-text-area-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态防止文本区域交互，并从提交的表单值中删除其值。"
                },
                "c-text-area-placeholder": {
                    title: "占位符",
                    description: "当文本区域值为空时，请显示占位符值。确保它不是标签的替代品。"
                },
                "c-text-area-helper": {
                    title: "辅助文本",
                    description: "为用户提供有关文本区域目的和期望值要求的附加上下文。"
                },
                "c-text-area-sizes": {
                    title: "尺寸",
                    description: "根据文本区域将在哪里使用，它可以有多个尺寸。例如，您可以在营销页面上的表单中使用大尺寸。"
                },
                "c-text-area-a11y-label": {
                    title: "可访问性标签",
                    description: "如果您没有为文本区域提供视觉文本标签，请确保仍提供描述组 件目的的可访问性标签。"
                }
            }
        },
        "c-text-field": {
            title: "文本字段",
            description: "用于输入和编辑单行文本的表单字段。",
            checklist: {
                "c-text-field-label": {
                    title: "标签",
                    description: "与文本字段相关联的文本标签可以为用户提供附加上下文。单击标签应将焦点移动到字段。"
                },
                "c-text-field-error": {
                    title: "错误状态",
                    description: "当错误仅与文本字段有关时，请使用错误状态进行表单验证。"
                },
                "c-text-field-disabled": {
                    title: "禁用状态",
                    description: "使用禁用状态防止文本字段交互，并从提交的表单值中删除其值。"
                },
                "c-text-field-placeholder": {
                    title: "占位符",
                    description: "当文本字段值为空时，请显示占位符值。确保它不是标签的替代品。"
                },
                "c-text-field-helper": {
                    title: "辅助文本",
                    description: "为用户提供有关文本字段目的和期望值要求的附加上下文。"
                },
                "c-text-field-icon": {
                    title: "图标支持",
                    description: "添加一个用于在字段开头显示图标的区域，以传达文本字段作为组件或字段值的目的。"
                },
                "c-text-field-affix": {
                    title: "前缀/后缀",
                    description: "添加一个用于自定义内容的区域，使用户更具上下文感知。例如，您可以在信用卡号码的文本字段中显示支付提供商。"
                },
                "c-text-field-sizes": {
                    title: "尺寸",
                    description: " 根据文本字段将在哪里使用，它可以有多个尺寸。例如，您可以在营销页面上的表单中使用大尺寸。"
                },
                "c-text-field-a11y-label": {
                    title: "可访问性标签",
                    description: "如果您没有为文本字段提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。"
                }
            }
        },
        "c-toast": {
            title: "通知",
            description: "显示在页面内容上方的通知消息或信息。",
            checklist: {
                "c-toast-composition": {
                    title: "内容组成",
                    description: "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。"
                },
                "c-toast-colors": {
                    title: "颜色",
                    description: "根据通知在通知中显示的作用，它可以有多种颜色。例如，可以将其涂成红色以进行错误通知。"
                },
                "c-toast-icon": {
                    title: "图标支持",
                    description: "添加一个用于在通知开始处显示图标的区域，以传达通知的目的。"
                },
                "c-toast-timeout": {
                    title: "超时",
                    description: "通知通常在超时后被解除。请确保提供足够长的超时时间，以便让用户阅读消息。如果没有超时，则提供一个按钮来关闭通知。"
                },
                "c-toast-stacking": {
                    title: "堆叠",
                    description: "当触发了多个通知时，请将它们堆叠在彼此上方，以避免屏幕混乱。"
                },
                "c-toast-action": {
                    title: "补充操作",
                    description: "通知中的操作应与通知目的相关。例如，如果您通知用户删除内容，则操作元素可以帮助他们撤消此操作。"
                },
                "c-toast-a11y-focus": {
                    title: "焦点管理",
                    description: "当通知有操作时，它们应该可以从键盘上聚焦以触发它们。当焦点在通知容器内部时，超时应该被禁用。"
                },
                "c-toast-a11y-motion": {
                    title: "减少动画",
                    description: "为了满足减少动画的用户偏好，减少或完全删除动画。"
                }
            }
        },
        "c-tooltip": {
            title: "工具提示",
            description: "在元素悬停或聚焦时显示上下文文本信息。",
            checklist: {
                "c-tooltip-positioning": {
                    title: "定位",
                    description: "当工具提示的默认位置无法适应视口时，请确保动态将其位置切换到另一个值。"
                },
                "c-tooltip-timeout": {
                    title: "超时",
                    description: "在打开工具提示之前，请稍等片刻，以确保它们不会在用户在屏幕上移动其光标时打开。"
                },
                "c-tooltip-a11y-keyboard": {
                    title: "键盘支持",
                    description: "工具提示不仅应在鼠标悬停时可访问，还应在触发元素聚焦时可访问。"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/maintenance.js
/* harmony default export */ const maintenance = ({
    title: "维护",
    description: "设计系统与您的团队可能承担的任何其他项目没有区别。为了成功地构建和维护一个设计系统，您需要一个清晰的战略，每天都要执行得很好，并且您需要创造机会让您的同事提供反馈，以帮助共享您的设计系统。",
    sections: {
        "m-documentation": {
            title: "文档",
            description: "文档资源是任何设计系统的核心部分，因为它为团队和所有使用设计系统的人节省了时间和精力。它使人们能够学习绳索并找到最常问的问题的答案，而无需联系团队。",
            checklist: {
                "m-documentation-principles": {
                    title: "设计系统原则",
                    description: "列出您在构建设计系统时的核心原则，让设计师和开发人员了解您的价值观以及哪些是您团队决策的主要因素。"
                },
                "m-documentation-start": {
                    title: "入门指南",
                    description: "指导他人完成设置和使用您的设计系统的第一步，这可以帮助他们构建他们的第一个功能或产品，而无需直接联系您。"
                },
                "m-documentation-design": {
                    title: "设计最佳实践",
                    description: "分享如何以可扩展的方式使用设计系统设计产品的技巧，避免常见陷阱，并充分利用您的设计工具。"
                },
                "m-documentation-dev": {
                    title: "开发最佳实践",
                    description: "分享使用设计系统开发产品的技巧、推荐的技术依赖项以及避免常见陷阱。"
                },
                "m-documentation-anatomy": {
                    title: "组件解剖",
                    description: "提供组件设计解剖的概述，以帮助每个人了解组件布局的限制以及哪些部分是可自定义的。"
                },
                "m-documentation-props": {
                    title: "组件属性",
                    description: "记录组件在设计和代码中支持的属性。我们建议在各个平台上对它们进行大部分 的对齐，以便更顺畅地进行设计移交流程。"
                },
                "m-documentation-composition": {
                    title: "组件组合示例",
                    description: "在构建支持插入其他内容的低级组件时，提供如何使用它们创建更高级组合的示例。"
                },
                "m-documentation-sandbox": {
                    title: "沙盒产品示例",
                    description: "如果您没有自己在产品中测试组件的方法，可以构建一个简单的应用程序，模拟实际产品布局，以测试您的组件在实际情况下的行为，并在发布新的设计系统功能之前尝试它们。"
                },
                "m-documentation-env": {
                    title: "浏览器/操作系统支持",
                    description: "定义您为各种操作系统和浏览器提供的支持级别，并确保您在这个主题上与产品保持一致。"
                },
                "m-documentation-release": {
                    title: "发布周期",
                    description: "为包含破坏性更改的主要版本建立和记录可预测的发布周期。这样，产品团队就可以计划他们的迁移。"
                }
            }
        },
        "m-local": {
            title: "本地库",
            description: "设计系统的范围通常是构建核心重复模式，以增加产品团队的速度。这意味着您不会自己实现所有 UI 元素。产品团队仍将使用设计系统构建本地组件，以解决其特定场景。",
            checklist: {
                "m-local-when": {
                    title: "何时构建",
                    description: "分享您的期望，即产品团队何时应构建自定义组件，而不是请求设计系统中的新功能或使用现有组件。"
                },
                "m-local-types": {
                    title: "水平和垂直库",
                    description: "概述用于多个产品的水平库和仅由构建它的团队使用的垂直库之间的区别。"
                },
                "m-local-expectations": {
                    title: "库期望",
                    description: "记录发布本地库的最低要求。描述您对库质量、文档和维护的期望。"
                },
                "m-local-release": {
                    title: "发布周期对齐",
                    description: "确保本地库与设计系统的发布周期同步。它们应支持您最新发布的系统主要版本，以避免阻止产品进行更新。"
                }
            }
        },
        "m-process": {
            title: "团队流程",
            description: "所有成功扩展其设计系统的团队都是通过建立与利益相关者和社区合作的强大流程来实现的。随着您不断开发系统，它们将为您节省无数时间，并避免重复回答相同的问题。",
            checklist: {
                "m-process-log": {
                    title: "决策日志",
                    description: "对于您必须重复处理的主题，记录您如何做出这些决策的日志。您不会错过任何上下文要求，并避免额外的对齐会议。"
                },
                "m-process-roadmap": {
                    title: "路线图",
                    description: "尝试规划您的长期工作，并仅分配部分时间用于社区支持。这将帮助您随着时间的推移发展系统，而不仅仅是专注于较小的错误修复和功能请求。"
                },
                "m-process-stakeholder": {
                    title: "利益相关者映射",
                    description: "列出您支持的所有产品中的主要利益相关者。这些人可能是在开发和设计方面工作的人，但也不要错过可以帮助您增加采用率的领导人。"
                },
                "m-process-analytics": {
                    title: "分析",
                    description: "定义一种跟踪您提供的库和工具的使用和价值的方式。您可以从易于设置的指标开始，例如文档网站的分析、反馈调查或设计工具中组件使用情况的分析。"
                },
                "m-process-shifts": {
                    title: '持续支持"轮班"',
                    description: "如果多个人在同一平台上工作，请分配和计划他们的社区支持工作。这将使团队成员专注于计划的工作，而不是被请求和问题分散注意力。"
                },
                "m-process-sla": {
                    title: "服务级别协议",
                    description: "定义处理传入请求和错误报告所需的时间表，以帮助产品团队了解他们是否应等待您的发布或寻找临时解决方案。"
                }
            }
        },
        "m-community": {
            title: "社区支持",
            description: "帮助产品设计师和开发人员更有效地使用设计系统，修复他们在产品中发现的错误并解决他们的需求至关重要。为了确保您获得反馈，您的目标是使每个人都能轻松安全地分享他们的发现。",
            checklist: {
                "m-community-channels": {
                    title: "支持渠道",
                    description: "在您用于通信的工具中创建支持渠道。将它们分开以使每个人都可以舒适地分享其问题的平台特定细节是个好主意。"
                },
                "m-community-template": {
                    title: "模板",
                    description: "准备用于创建功能请求和错误报告的模板。使用它们来要求复制链接、设计提案和其他您需要的上下文信息，而不是手动查找这些信息。"
                },
                "m-community-updates": {
                    title: "定期更新",
                    description: "如果您只专注于实施而从不与社区讨论，您将冒着新功能采用的风险。为更新定义一个节奏有助于建立习惯，让产品团队来检查系统中的新内容以及他们如何利用它。"
                },
                "m-community-slots": {
                    title: "开放时间",
                    description: "有些问题无法在单个工单或聊天中解决。为其他团队保留一些可预订的日历时间，以便他们获得咨询或与您的团队讨论其功能实现。"
                }
            }
        },
        "m-contribution": {
            title: "贡献",
            description: "构建设计系统是一个团队游戏。确保在旅程中包括产品团队，帮助他们为系统做出贡献，并让他们在公司内推广它。",
            checklist: {
                "m-contribution-rules": {
                    title: "系统的内部规则",
                    description: "向产品团队解释您的设计和开发流程的工作方式。设计系统团队通常比产品团队移动得更慢，因为在影响整个产品的组件中做出可扩展的决策更加负责。"
                },
                "m-contribution-guidelines": {
                    title: "贡献指南",
                    description: "解释贡献者需要设置什么来准备他们的设计和开发环境，以添加和测试新功能。"
                },
                "m-contribution-template": {
                    title: "功能提案模板",
                    description: "为启动新功能的工作准备一个标准模板。此模板应确保所提出的更改将应用于所有平台，并且不会破坏产品中现有的组件使用。"
                },
                "m-contribution-engagement": {
                    title: "参与度",
                    description: "在宣布新功能时确保突出和奖励贡献者的工作，并在他们做出贡献时帮助他们获得他们的经理支持。"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/core.js
/* harmony default export */ const core = ({
    heroTitle: "构建更好的设计系统",
    heroSubtitle: "一份帮助您计划、建立和发展您的设计系统的检查清单。",
    heroAction: "开始使用",
    about: "关于",
    share: "分享",
    contribute: "贡献",
    previous: "上一页",
    next: "下一页",
    completed: "完成",
    exportTitle: "传播信息",
    exportSubtitle: "设计系统的建立越全面越好。这是我们制作这个可供分享并且可能包括您已经检查过的条目的设计系统检查清单的初衷。与您的团队分享进度，共同保持对项目的追踪。",
    exportAction: "分享您的进度",
    exportComplete: "拷贝链接",
    footerTitle: "",
    footerText: "",
    footerAction: "了解更多"
});

;// CONCATENATED MODULE: ./src/translations/zh-cn/index.js





/* harmony default export */ const zh_cn = ({
    "design-language": designLanguage,
    foundations: designFoundations,
    components: components,
    maintenance: maintenance,
    core: core
});


/***/ })

};
;