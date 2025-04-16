(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21995],{27244:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-must-be-used-together-with-react-lazy-for-handling-the-loading-state",function(){return n(31928)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(85893),o=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:s="auto",className:d,fullWidthResponsive:i="true"}=e,r=(0,o.useRef)(null),l=(0,o.useRef)(!1),[c,u]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[c]),c)?(0,a.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(d),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":i}):null};function d(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,a.jsx)("div",{children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("div",{children:(0,a.jsx)(s,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},31928:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var a=n(85893),o=n(73903),s=n(25190),d=n(16833),i=!0;t.default=(0,s.Z)((0,d.Z)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,a.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,a.jsx)(o.Y3,{activeQuestionIndex:3,totalQuestions:30,index:3,question:"What must be used together with React.lazy() for handling the loading state?",options:["React.Fragment","React.Suspense","React.ErrorBoundary","React.AsyncComponent"],code:void 0,nextQuestionPath:"what-happens-if-a-lazy-loaded-component-throws-an-error-during-loading",correctAnswer:2,explanation:"React.Suspense must be used together with React.lazy() for handling the loading state. When a lazy-loaded component is being loaded, there might be a delay before it becomes available. Suspense allows you to specify a fallback UI (like a loading indicator) that will be shown during this loading period. The Suspense component wraps lazy-loaded components and handles their loading states gracefully.",id:554,quizId:28},3)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=27244)}),_N_E=e.O()}]);