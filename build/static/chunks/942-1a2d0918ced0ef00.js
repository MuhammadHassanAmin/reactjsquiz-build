(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,u=e.priority,c=void 0!==u&&u,y=e.loading,m=e.lazyRoot,A=void 0===m?null:m,I=e.lazyBoundary,k=void 0===I?"200px":I,R=e.className,L=e.quality,C=e.width,P=e.height,M=e.style,_=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,U=(e.onError,e.placeholder),D=void 0===U?"empty":U,B=e.blurDataURL,W=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),T=s.useContext(g.ImageConfigContext),H=s.useMemo((function(){var e=v||T||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:r})}),[T]),F=W,V=r?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var K=E;if("loader"in F){if(F.loader){var $=F.loader;K=function(e){e.config;var t=b(e,["config"]);return $(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var J=j(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(P=P||J.height,C=C||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var Q=z(C),X=z(P),Y=z(L),Z=!c&&("lazy"===y||"undefined"===typeof y);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(s.useState(!1),2),re=te[0],ne=te[1],ie=o(p.useIntersection({rootRef:A,rootMargin:k,disabled:!Z}),3),oe=ie[0],ae=ie[1],le=ie[2],ue=!Z||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:q};0;0;var pe=Object.assign({},M,"raw"===V?{aspectRatio:"".concat(Q," / ").concat(X)}:de),ge="blur"!==D||re?{}:{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof X){var ye=X/Q,me=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===V?(ce.display="block",ce.position="relative",fe=!0,se.paddingTop=me):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=X)}else 0;var he={src:S,srcSet:void 0,sizes:void 0};ue&&(he=O({config:H,src:t,unoptimized:l,layout:V,width:Q,quality:Y,sizes:r,loader:K}));var be=t;0;var ve,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var Ae=(i(ve={},we,he.srcSet),i(ve,Se,he.sizes),ve),je=s.default.useLayoutEffect,Oe=s.useRef(N),ze=s.useRef(t);s.useEffect((function(){Oe.current=N}),[N]),je((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Ee=h({isLazy:Z,imgAttributes:he,heightInt:X,widthInt:Q,qualityInt:Y,layout:V,className:R,imgStyle:pe,blurStyle:ge,loading:y,config:H,unoptimized:l,placeholder:D,loader:K,srcString:be,onLoadingCompleteRef:Oe,setBlurComplete:ne,setIntersection:oe,isVisible:ue},F);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(x,Object.assign({},Ee)):s.default.createElement("span",{style:ce},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(x,Object.assign({},Ee))),c?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},Ae))):null)};var u,c,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),f=(u=r(3121))&&u.__esModule?u:{default:u},d=r(139),p=r(9246),g=r(8730),y=(r(670),r(2700));function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var A=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(y.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(k(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(k(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(k(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function O(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,l=e.quality,u=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(n);l)c.push(parseInt(l[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,a(c));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,u),f=s.widths,d=s.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,n){return"".concat(c({config:t,src:r,quality:l,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({config:t,src:r,quality:l,width:f[p]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=A.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(r))}function I(e,t,r,n,i,o){e&&e.src!==S&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===n&&o(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:a})}})))}var x=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,u=e.blurStyle,c=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,y=e.unoptimized,m=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,A=e.onError,j=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},j,t,"raw"!==o||t.sizes?{}:{height:r,width:n},{decoding:"async","data-nimg":o,className:a,style:h({},l,u),ref:s.useCallback((function(e){S(e),(null===e||void 0===e?void 0:e.complete)&&I(e,p,0,f,v,w)}),[S,p,o,f,v,w]),onLoad:function(e){I(e.currentTarget,p,0,f,v,w)},onError:function(e){"blur"===f&&w(!0),A&&A(e)}})),(c||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},j,O({config:g,src:p,unoptimized:y,layout:o,width:n,quality:i,sizes:t.sizes,loader:m}),"raw"!==o||t.sizes?{}:{height:r,width:n},{decoding:"async","data-nimg":o,style:l,className:a,loading:d||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(1003),u=r(880),c=r(9246);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,g=a.default.useRef(d),y=a.default.useRef(p),m=e.children,h=e.replace,b=e.shallow,v=e.scroll,w=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var S=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,A=i(c.useIntersection({rootMargin:"200px"}),3),j=A[0],O=A[1],z=A[2],E=a.default.useCallback((function(e){y.current===p&&g.current===d||(z(),y.current=p,g.current=d),j(e),S&&("function"===typeof S?S(e):"object"===typeof S&&(S.current=e))}),[p,S,d,z,j]);a.default.useEffect((function(){var e=O&&r&&l.isLocalURL(d),t="undefined"!==typeof w?w:n&&n.locale,i=s[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(n,d,p,{locale:t})}),[p,d,O,w,r,n]);var I={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:u,scroll:a}))}(e,n,d,p,h,b,v,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof w?w:n&&n.locale,k=n&&n.isLocaleDomain&&l.getDomainLocale(p,x,n&&n.locales,n&&n.domainLocales);I.href=k||l.addBasePath(l.addLocale(p,x,n&&n.defaultLocale))}return a.default.cloneElement(t,I)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],p=f[1],g=i(o.useState(t?t.current:null),2),y=g[0],m=g[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[h,d,b]};var o=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}}]);