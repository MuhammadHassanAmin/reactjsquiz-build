(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},9718:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return r(4514)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),c=r(880),u=r(9246);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,y=l.default.useRef(d),m=l.default.useRef(p),h=e.children,b=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var j=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,k=o(u.useIntersection({rootMargin:"200px"}),3),w=k[0],N=k[1],O=k[2],_=l.default.useCallback((function(e){m.current===p&&y.current===d||(O(),m.current=p,y.current=d),w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,O,w]);l.default.useEffect((function(){var e=N&&r&&i.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,N,v,r,n]);var S={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,b,g,x,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:n&&n.locale,P=n&&n.isLocaleDomain&&i.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);S.href=P||i.addBasePath(i.addLocale(p,E,n&&n.defaultLocale))}return l.default.cloneElement(t,S)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],y=o(a.useState(t?t.current:null),2),m=y[0],h=y[1],b=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[b,d,g]};var a=r(7294),l=r(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5891:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(5893),o=r(7294),a=r(4184),l=r.n(a),i=r(1664),c=r.n(i),u=function(e){var t=e.link,r=e.title;return(0,n.jsx)(c(),{href:t,children:(0,n.jsx)("a",{className:"px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:r})})},s=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1];return(0,n.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,n.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full ",children:[(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("a",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:"React Js Quiz"})}),(0,n.jsx)("div",{className:"flex md:hidden",children:(0,n.jsx)("button",{type:"button",onClick:function(){r(!t)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,n.jsx)("div",{className:l()("w-full md:flex md:items-center md:justify-end",{block:t,hidden:!t}),children:(0,n.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0",children:[(0,n.jsx)(u,{link:"/",title:"Home"}),(0,n.jsx)(u,{link:"/privacy-policy",title:"Privacy Policy"}),(0,n.jsx)(u,{link:"/contact-us",title:"Contact Us"})]})})]})})};function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function m(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function x(e){return function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,t);var r,o,a,l=g(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l.call(this,e)}return r=i,(o=[{key:"componentDidMount",value:function(){console.log("Wrapped Component")}},{key:"render",value:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:"border-b",children:(0,n.jsx)(s,{})}),(0,n.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,n.jsx)(e,y({},this.props))}),(0,n.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2 flex flex-col justify-center items-center ",children:(0,n.jsx)("a",{href:"/",rel:"noopener noreferrer",children:"Powered by React JS Quiz"})})]})}}])&&f(r.prototype,o),a&&f(r,a),i}(o.Component)}},4514:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a}});var n=r(5893),o=r(5891),a=!0;t.default=(0,o.Z)((function(){return(0,n.jsx)("section",{className:"bg-white dark:bg-gray-900 rounded-lg p-5",children:(0,n.jsxs)("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[(0,n.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white",children:"Contact Us"}),(0,n.jsx)("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"Got a technical issue? Want to send feedback about? Let us know."}),(0,n.jsxs)("form",{action:"https://formspree.io/f/xaykqbga",method:"POST",className:"space-y-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your email"}),(0,n.jsx)("input",{type:"email",name:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"name@gmail.com",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Subject"}),(0,n.jsx)("input",{type:"text",id:"subject",name:"subject",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Let us know how we can help you",required:!0})]}),(0,n.jsxs)("div",{className:"sm:col-span-2",children:[(0,n.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Your message"}),(0,n.jsx)("textarea",{id:"message",name:"message",rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a comment..."})]}),(0,n.jsx)("button",{className:" mt-8 inline-flex justify-center items-center py-2 px-3 text-lg w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"submit",children:"Submit"})]})]})})}))},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=9718,e(e.s=t);var t}));var t=e.O();_N_E=t}]);