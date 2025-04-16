(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35168],{42865:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/which-of-the-following-is-true-about-suspense-boundaries-when-using-react-lazy",function(){return t(83617)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(85893),s=t(67294),a=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true"}=e,r=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},83617:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var o=t(85893),s=t(73903),a=t(25190),i=t(16833),c=!0;n.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:23,totalQuestions:30,index:23,question:"Which of the following is true about suspense boundaries when using React.lazy?",options:["You need exactly one Suspense component per lazy component","You can wrap multiple lazy components with a single Suspense boundary","Suspense can only be used at the root of your application","Each route must have its own Suspense boundary"],code:void 0,nextQuestionPath:"what-s-the-recommended-way-to-handle-seo-concerns-with-lazy-loaded-content",correctAnswer:2,explanation:"You can wrap multiple lazy components with a single Suspense boundary. This is actually a best practice in many cases. When multiple lazy components share a Suspense boundary, React will show the fallback UI until all of them have loaded. This prevents UI flickering that might occur if each component had its own loading indicator. You can also nest Suspense boundaries to create more granular loading experiences where appropriate.",id:574,quizId:28},23)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=42865)}),_N_E=e.O()}]);