(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96885],{52257:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/which-of-the-following-is-not-a-valid-use-case-for-usememo",function(){return o(21999)}])},16833:function(e,n,o){"use strict";o.d(n,{Z:function(){return c}});var t=o(85893),s=o(67294),i=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:o="6753219060",className:i}=e,c=(0,s.useRef)(null),a=(0,s.useRef)(!1),[r,u]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0)}}}},[r]),r)?(0,t.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":n,"data-ad-slot":o}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,t.jsx)("div",{children:(0,t.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,t.jsx)("div",{children:(0,t.jsx)(e,{...this.props})}),(0,t.jsx)("div",{children:(0,t.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},21999:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return a}});var t=o(85893),s=o(55989),i=o(41354),c=o(16833),a=!0;n.default=(0,i.Z)((0,c.Z)(()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,t.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,t.jsx)(s.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"Which of the following is NOT a valid use case for useMemo?",options:["Memoizing expensive calculations","Preventing unnecessary re-renders of child components","Memoizing event handler functions","Stabilizing values for dependency arrays in useEffect"],nextQuestionPath:"how-can-you-provide-a-custom-comparison-function-to-react-memo",correctAnswer:3,explanation:"Memoizing event handler functions is not a valid use case for useMemo - you should use useCallback for this purpose instead. useMemo is designed to memoize computed values, not functions. While technically you could use useMemo to memoize a function by returning the function, the proper hook for this purpose is useCallback, which has a more declarative API specifically designed for memoizing functions.",id:538,quizId:27},7)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=52257)}),_N_E=e.O()}]);