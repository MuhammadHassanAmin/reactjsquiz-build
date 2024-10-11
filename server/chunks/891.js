"use strict";
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 5891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WithLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/header/navbar.js




const NavLink = ({ link , title  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",
            children: title
        })
    })
;
const Navbar = ()=>{
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-white shadow dark:bg-gray-800",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container px-6 py-3 mx-auto md:flex ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-between w-full ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
                                children: "React Js Quiz"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex md:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    setIsMenuOpen(!isMenuOpen);
                                },
                                className: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400",
                                "aria-label": "toggle menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "w-6 h-6 fill-current",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()("w-full md:flex md:items-center md:justify-end", {
                        block: isMenuOpen,
                        hidden: !isMenuOpen
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                link: "/",
                                title: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                link: "/privacy-policy",
                                title: "Privacy Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                link: "/contact-us",
                                title: "Contact Us"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./src/layout/header/index.js



;// CONCATENATED MODULE: ./src/layout/index.js



function WithLayout(PageComponent) {
    return class LayoutWrapped extends external_react_.Component {
        constructor(props){
            super(props);
        }
        componentDidMount() {
            console.log("Wrapped Component");
        }
        render() {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "border-b",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(navbar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: " flex flex-col justify-center items-center py-5 h-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageComponent, {
                            ...this.props
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                        className: "bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2 flex flex-col justify-center items-center ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            rel: "noopener noreferrer",
                            children: "Powered by React JS Quiz"
                        })
                    })
                ]
            });
        }
    };
};


/***/ })

};
;