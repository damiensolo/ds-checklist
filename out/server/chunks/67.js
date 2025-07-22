"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bw": () => (/* binding */ ChecklistsProvider),
/* harmony export */   "SD": () => (/* binding */ useCheckItem),
/* harmony export */   "v9": () => (/* binding */ useCheckedIds)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChecklistsContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
const ChecklistsProvider = (props)=>{
    const { children  } = props;
    const [checkedIds, setCheckedIds] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const load = ()=>{
        const data = localStorage.getItem("checked");
        if (!data) return;
        return data.split(",");
    };
    const save = (data)=>{
        setCheckedIds(data);
        localStorage.setItem("checked", data.join(","));
    };
    const add = (id)=>{
        save([
            ...checkedIds,
            id
        ]);
    };
    const set = (ids)=>{
        save(ids);
    };
    const remove = (id)=>{
        const nextIds = checkedIds.filter((checkedId)=>checkedId !== id);
        save(nextIds);
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const lsCheckedIds = load();
        if (!lsCheckedIds) return;
        setCheckedIds(lsCheckedIds);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChecklistsContext.Provider, {
        value: {
            add,
            remove,
            set,
            checkedIds
        },
        children: children
    });
};
const useCheckItem = (id)=>{
    const { add , remove , checkedIds  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ChecklistsContext);
    return {
        add,
        remove,
        checked: checkedIds.includes(id)
    };
};
const useCheckedIds = ()=>{
    const { checkedIds , set  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ChecklistsContext);
    return {
        checkedIds,
        setCheckedIds: set
    };
};


/***/ })

};
;