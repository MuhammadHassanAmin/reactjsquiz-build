(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39339],{52497:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-does-the-usecallback-hook-do",function(){return n(13122)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true",style:l={}}=e,d=(0,s.useRef)(null),r=(0,s.useRef)(!1),[u,m]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(m(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block",...l},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},13122:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),a=n(25190),i=n(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"What does the useCallback hook do?",options:["Creates a memoized callback function","Optimizes component lifecycle methods","Creates a memoized component","Memoizes computed values"],code:void 0,nextQuestionPath:"what-is-the-difference-between-usememo-and-usecallback",correctAnswer:1,explanation:"The useCallback hook creates a memoized callback function that only changes if one of the dependencies in the dependency array changes. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. Unlike useMemo which memoizes values, useCallback memoizes the function itself.",id:535,quizId:27},4)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=52497)}),_N_E=e.O()}]);