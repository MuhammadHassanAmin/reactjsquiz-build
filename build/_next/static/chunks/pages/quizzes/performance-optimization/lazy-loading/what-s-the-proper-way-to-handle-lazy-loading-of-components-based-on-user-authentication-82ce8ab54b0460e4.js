(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92079],{30755:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-s-the-proper-way-to-handle-lazy-loading-of-components-based-on-user-authentication",function(){return n(45071)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),a=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:s="auto",className:i,fullWidthResponsive:d="true",style:r={}}=e,c=(0,a.useRef)(null),l=(0,a.useRef)(!1),[u,p]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":d}):null};function i(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},45071:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var o=n(85893),a=n(73903),s=n(25190),i=n(16833),d=!0;t.default=(0,s.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(a.Y3,{activeQuestionIndex:10,totalQuestions:30,index:10,question:"What's the proper way to handle lazy loading of components based on user authentication?",options:["Use React.lazy() conditionally in the render method","Define separate lazy components outside the component and render them conditionally","Use different app entry points for authenticated and non-authenticated users","Avoid lazy loading for authentication-dependent components"],code:void 0,nextQuestionPath:"what-happens-if-you-try-to-use-react-lazy-inside-a-component-function-instead-of-at-the-module-level",correctAnswer:2,explanation:"The proper way to handle lazy loading of components based on user authentication is to define separate lazy components outside the component and render them conditionally. React.lazy() calls should not be used inside render methods or hooks as this can lead to unexpected behavior. Instead, define your lazy components at the module level (outside any component) and then conditionally render them based on the authentication state. This approach ensures the code splitting works as expected while still allowing conditional rendering based on user authentication.",id:561,quizId:28},10)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=30755)}),_N_E=e.O()}]);