"use strict";
exports.id = 435;
exports.ids = [435];
exports.modules = {

/***/ 1435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ cards_IconTextCard),
  "Y": () => (/* reexport */ cards_QuizCard)
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
;// CONCATENATED MODULE: ./src/components/cards/IconTextCard.js




const IconTextCard = ({ title , path ="#" , description , icon , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: external_classnames_default()("flex flex-col items-center p-3 max-w-sm bg-white text-center  rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700", className),
            children: [
                icon,
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "mt-2 text-2xl tracking-tight text-gray-900 dark:text-white",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "font-normal text-gray-700 dark:text-gray-400",
                    children: description
                })
            ]
        })
    });
};
/* harmony default export */ const cards_IconTextCard = (IconTextCard);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/buttons/ReportButton.js


const ReportButton = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center text-white cursor-pointer",
        ...props,
        type: "button",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "Report this question",
                src: "../icons/report.svg",
                width: 20,
                height: 20
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-sm pl-2",
                children: "Report this question"
            })
        ]
    });
};
/* harmony default export */ const buttons_ReportButton = (ReportButton);

;// CONCATENATED MODULE: ./src/components/buttons/index.js



;// CONCATENATED MODULE: ./src/components/modals/ReportQuestionModal.js

const ReportQuestionModal = ({ showModal , setShowModal , questionId  })=>{
    return showModal ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-auto my-6 mx-auto max-w-3xl w-1/3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-600 text-white outline-none focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-3xl font-semibold",
                                        children: "Submit your report!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                        onClick: ()=>setShowModal(false)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-white h-6 w-6 text-2xl block outline-none focus:outline-none",
                                            children: "\xd7"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative p-6 flex-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "https://formspree.io/f/xaykqbga",
                                    method: "POST",
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "email",
                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                    children: "Your email"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "email",
                                                    name: "email",
                                                    id: "email",
                                                    className: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                                                    placeholder: "name@gmail.com",
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "subject",
                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                    children: "Subject"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "subject",
                                                    name: "subject",
                                                    className: "block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                                                    placeholder: "Let us know how we can help you",
                                                    required: true,
                                                    value: `Reporting question with id: ${questionId}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "message",
                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                                                    children: "Your message"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    rows: "6",
                                                    className: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                                    placeholder: "Leave a comment..."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-end pt-5 border-t border-solid border-blueGray-200 rounded-b",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                    type: "button",
                                                    onClick: ()=>setShowModal(false)
                                                    ,
                                                    children: "Close"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                    type: "submit",
                                                    children: "Submit"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-25 fixed inset-0 z-40 bg-black"
            })
        ]
    }) : null;
};
/* harmony default export */ const modals_ReportQuestionModal = (ReportQuestionModal);

;// CONCATENATED MODULE: ./src/components/cards/QuizCard.js






const OptionsList = ({ options , questionIndex , setIsAnswerSelected , correctAnswer , explanation ,  })=>{
    const { 0: selectedOption , 1: setSelectedOption  } = (0,external_react_.useState)();
    const { 0: isShowExplanationSelected , 1: setIsShowExplanationSelected  } = (0,external_react_.useState)(false);
    const toggleExplanation = ()=>setIsShowExplanationSelected(!isShowExplanationSelected)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "grid w-full md:grid-cols-1 gap-5 ",
            children: options.map((value, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                onChange: (e)=>{
                                    setSelectedOption(e.currentTarget.value);
                                    setIsAnswerSelected(true);
                                },
                                type: "radio",
                                id: `${questionIndex}${index}`,
                                name: "option",
                                value: index + 1,
                                className: "hidden peer",
                                required: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: `${questionIndex}${index}`,
                                className: external_classnames_default()("  dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700", {
                                    "dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600": selectedOption === correctAnswer,
                                    "border border-green-600 dark:text-green-500  text-green-600  ": selectedOption && index + 1 == correctAnswer,
                                    "rounded-b-none border-b-0": isShowExplanationSelected && selectedOption && index + 1 == correctAnswer,
                                    "border border-gray-200 dark:border-gray-700": !selectedOption,
                                    "border border-gray-200 dark:border-gray-700 ": selectedOption && index + 1 != correctAnswer
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: " text-lg font-semibold",
                                            children: value
                                        }),
                                        explanation && index + 1 == correctAnswer && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: toggleExplanation,
                                            className: external_classnames_default()("", {
                                                hidden: !selectedOption
                                            }),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "text-gray-400",
                                                children: isShowExplanationSelected ? "Hide Explanation" : "Show Explanation"
                                            })
                                        })
                                    ]
                                })
                            }),
                            index + 1 == correctAnswer && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_classnames_default()("border border-green-600 dark:text-green-500  border-t-0 rounded rounded-t-none ", {
                                    hidden: !selectedOption,
                                    hidden: !isShowExplanationSelected,
                                    flex: index + 1 == correctAnswer
                                }),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "p-5 font-light border rounded rounded-t-none border-b-0 w-full border-gray-200 dark:border-gray-700 dark:bg-gray-900",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 text-gray-500 dark:text-gray-200",
                                        children: explanation
                                    })
                                })
                            })
                        ]
                    }, index)
                })
            )
        })
    });
};
const QuizCard = ({ question , totalQuestions , activeQuestionIndex , options , correctAnswer , setActiveQuestionIndex , index , explanation , id ,  })=>{
    const router = (0,router_.useRouter)();
    const { 0: isLastQuestion , 1: setIsLastQuestion  } = (0,external_react_.useState)(false);
    const { 0: isAnswerSelected , 1: setIsAnswerSelected  } = (0,external_react_.useState)(false);
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (totalQuestions === index + 1) setIsLastQuestion(true);
    }, [
        totalQuestions,
        index
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("p-6 md:px-10  md:w-6/12 w-full bg-white dark:bg-gray-800 ", {
            hidden: index !== activeQuestionIndex
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-start justify-between ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white ",
                    children: question
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end my-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(buttons_ReportButton, {
                    onClick: ()=>setShowModal(true)
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OptionsList, {
                setIsAnswerSelected: setIsAnswerSelected,
                questionIndex: index,
                options: options,
                explanation: explanation,
                correctAnswer: correctAnswer
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                disabled: !isAnswerSelected,
                onClick: ()=>isLastQuestion ? router.back() : setActiveQuestionIndex(index + 1)
                ,
                className: "disabled:opacity-50 mt-8 inline-flex justify-center items-center py-2 px-3 text-lg w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                children: [
                    `${isLastQuestion ? "Complete" : `Next Question (${index + 1}/${totalQuestions})`}`,
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        "aria-hidden": "true",
                        className: "ml-2 -mr-1 w-4 h-4",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modals_ReportQuestionModal, {
                questionId: id,
                showModal: showModal,
                setShowModal: setShowModal
            })
        ]
    });
};
/* harmony default export */ const cards_QuizCard = (QuizCard);

;// CONCATENATED MODULE: ./src/components/cards/index.js





/***/ })

};
;