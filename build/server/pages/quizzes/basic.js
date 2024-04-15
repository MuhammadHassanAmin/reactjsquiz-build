"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 6239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ basic),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/cards/index.js + 5 modules
var cards = __webpack_require__(1435);
;// CONCATENATED MODULE: ./src/consts/quizzes/basic.json
const basic_namespaceObject = JSON.parse('[{"id":"1","question":"React is a JavaScript library for building ___.","options":["Database","Connectivity","User interface","Design Platform"],"correctAnswer":"3","explanation":"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components."},{"id":"2","question":"User interface developed with React is made of small and isolated pieces of code called ___.","options":["Hook","Component","Function","Snippet"],"correctAnswer":"2"},{"id":"3","question":"How many kinds of component\'s does react has? ","options":["2","3","5","6"],"correctAnswer":"1","explanation":"React has two types of components Class based and functional"},{"id":"4","question":"A React component takes in parameters called ___?","options":["Attributes","Events","Props","Children"],"correctAnswer":"3"},{"id":"5","question":"To write HTML in react we make use of ___?","options":["React.CreateElement()","HTTP","XML","JSX"],"correctAnswer":"4"},{"id":"6","question":"JSX Stands for ___?","options":["JavaScript Extension","JavaScript Extreme","JavaScript XML","JavaScript XScript"],"correctAnswer":"3"},{"id":"7","question":"React DOM uses ___ case property naming convention?","options":["Camel","Pascal"," Snake","Kebab"],"correctAnswer":"1"},{"id":"8","question":"___ are the smallest building blocks of React apps.","options":["Components","Tags","Elements","JSX"],"correctAnswer":"3","explanation":"Elements are the smallest building blocks of React apps. A component is made up of multiple elements."},{"id":"9","question":"Can we update the React elements once they are rendered?","options":["Yes","No"],"correctAnswer":"2","explanation":"React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time."},{"id":"10","question":"Applications built with just React usually have a single ___?","options":["Root DOM node","Parent Node","Component","Constructor"],"correctAnswer":"1"},{"id":"11","question":"A component names must start with a ___ letter","options":["Lowercase","Capital"],"correctAnswer":"2","explanation":"React treats components starting with lowercase letters as DOM tags so a component must start with a capital letter"},{"id":"12","question":"Can we render a react component from an other component?","options":["Yes","No"],"correctAnswer":"1","explanation":"Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components."},{"id":"13","question":"Can a component modify its own props?","options":["Yes","No"],"correctAnswer":"2","explanation":"Its a React rule that components must act like pure functions with respect to their props. A “pure” function is the one which do not attempt to change their inputs."},{"id":"14","question":"Which component lifecycle method runs after the component output has been rendered to the DOM.","options":["componentMounted()","componentWillUnmount()","componentDidMount()","componentDidRendered()"],"correctAnswer":"3"},{"id":"15","question":"Which component lifecycle method is used to perform the cleanup when the component in removed from the DOM","options":["componentUnmounted()","componentWillUnmount()","componentDidUnMount()","componentDidRendered()"],"correctAnswer":"2"},{"id":"16","question":"State of a component are often called ___ data?","options":["public","protected","private","local or encapsulated"],"correctAnswer":"4","explanation":"Neither parent nor child components can know if a certain component is stateful or stateless. This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it."},{"id":"17","question":"In react data flows in ___?","options":["top-down or unidirectional ","bottom up","bi-directional","two-way"],"correctAnswer":"1","explanation":"Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree."},{"id":"18","question":"In order to prevent component from rendering it should return ___? ","options":["undefined","false","null","empty string"],"correctAnswer":"3","explanation":"In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output."},{"id":"19","question":"If a component returns null then it\'s lifecycle methods are not fired?","options":["yes","no"],"correctAnswer":"2","explanation":"Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called."}]');
// EXTERNAL MODULE: ./src/layout/index.js + 2 modules
var layout = __webpack_require__(5891);
;// CONCATENATED MODULE: ./src/pages/quizzes/basic.js





const Basic = ({ quizData: quizData1  })=>{
    const { 0: activeQuestionIndex , 1: setActiveQuestionIndex  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl dark:text-white",
                children: "React Basic Quiz"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center w-full p-5 md:p-0 pt-0",
                children: quizData1 === null || quizData1 === void 0 ? void 0 : quizData1.map((data, index)=>{
                    /*#__PURE__*/ return jsx_runtime_.jsx(cards/* QuizCard */.Y, {
                        activeQuestionIndex: activeQuestionIndex,
                        setActiveQuestionIndex: setActiveQuestionIndex,
                        totalQuestions: quizData1 === null || quizData1 === void 0 ? void 0 : quizData1.length,
                        index: index,
                        ...data
                    }, index);
                })
            })
        ]
    });
};
async function getStaticProps() {
    return {
        props: {
            quizData: basic_namespaceObject,
            title: `Basic React Js Quiz`,
            description: "Take a basic react js quiz consist of multiple choice questions."
        }
    };
}
/* harmony default export */ const basic = ((0,layout/* default */.Z)(Basic));


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,891,435], () => (__webpack_exec__(6239)));
module.exports = __webpack_exports__;

})();