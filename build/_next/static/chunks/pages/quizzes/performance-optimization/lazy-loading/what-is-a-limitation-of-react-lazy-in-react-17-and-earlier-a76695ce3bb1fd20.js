(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51694],{6190:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-is-a-limitation-of-react-lazy-in-react-17-and-earlier",function(){return n(42316)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(85893),o=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:s="auto",className:i,fullWidthResponsive:d="true",style:r={}}=e,c=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,a.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":d}):null};function i(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,a.jsx)("div",{children:(0,a.jsx)(e,{...this.props})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,a.jsx)(s,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,a.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,a.jsx)(s,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},42316:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var a=n(85893),o=n(73903),s=n(25190),i=n(16833),d=!0;t.default=(0,s.Z)((0,i.Z)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,a.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,a.jsx)(o.Y3,{activeQuestionIndex:6,totalQuestions:30,index:6,question:"What is a limitation of React.lazy() in React 17 and earlier?",options:["It cannot be used with named exports","It only works with class components","It cannot be used inside a function","It does not support server-side rendering"],code:void 0,nextQuestionPath:"what-is-the-best-practice-for-route-based-code-splitting-in-react",correctAnswer:1,explanation:"A significant limitation of React.lazy() in React 17 and earlier is that it cannot be used with named exports. It only works with default exports. This means if your lazy-loaded component uses named exports, you need to create an intermediate module that re-exports it as the default export. For example, instead of `React.lazy(() => import('./Component').then(module => ({ default: module.NamedComponent })))`. React 18 introduced improved support for handling named exports more elegantly.",id:557,quizId:28},6)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=6190)}),_N_E=e.O()}]);