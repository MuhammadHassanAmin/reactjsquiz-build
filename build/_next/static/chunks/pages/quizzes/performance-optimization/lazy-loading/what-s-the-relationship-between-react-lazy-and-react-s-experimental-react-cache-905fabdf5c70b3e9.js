(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31439],{67634:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-s-the-relationship-between-react-lazy-and-react-s-experimental-react-cache",function(){return a(83013)}])},16833:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893),s=a(67294),c=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:a="6753219060",adFormat:c="auto",className:o,fullWidthResponsive:i="true",style:r={}}=e,d=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(o),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":c,"data-full-width-responsive":i}):null};function o(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(c,{adSlot:"6208304795",className:"h-[336px]"})}),(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(c,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},83013:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return i}});var n=a(85893),s=a(73903),c=a(25190),o=a(16833),i=!0;t.default=(0,c.Z)((0,o.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:26,totalQuestions:30,index:26,question:"What's the relationship between React.lazy and React's experimental React.cache?",options:["React.lazy is being deprecated in favor of React.cache","React.cache can be used to memoize results from React.lazy","React.cache is for data fetching while React.lazy is for component loading","They serve completely unrelated purposes"],code:void 0,nextQuestionPath:"what-is-a-loading-waterfall-in-the-context-of-lazy-loading-and-why-is-it-problematic",correctAnswer:3,explanation:"React.cache (an experimental feature) and React.lazy serve different but complementary purposes. React.lazy is specifically for component code splitting and loading components on demand. React.cache, on the other hand, is designed for data fetching and caching the results of expensive operations like API calls. While both relate to performance optimization, they target different aspects: React.lazy reduces initial bundle size by deferring code loading, while React.cache aims to reduce redundant data fetching and improve data access patterns.",id:577,quizId:28},26)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=67634)}),_N_E=e.O()}]);