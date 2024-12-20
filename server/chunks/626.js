exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 2449:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__Ennsq",
	"main": "Home_main__EtNt2",
	"footer": "Home_footer__7dKhS",
	"title": "Home_title__FX7xZ",
	"description": "Home_description__Qwq1f",
	"code": "Home_code__aGV0U",
	"grid": "Home_grid__c_g6N",
	"card": "Home_card__7oz7W",
	"logo": "Home_logo__80mSr"
};


/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ components_ListItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ListItem.js


const ListItem = ({ title , caption , className , path  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full text-lg font-semibold",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full",
                                    children: caption
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            "aria-hidden": "true",
                            className: "ml-3 w-6 h-6",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                })
            })
        })
    })
;
/* harmony default export */ const components_ListItem = (ListItem);

;// CONCATENATED MODULE: ./src/components/index.js




/***/ })

};
;