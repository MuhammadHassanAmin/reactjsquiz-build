(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54484],{59460:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-happens-to-a-memoized-value-in-usememo-when-the-component-unmounts",function(){return n(45921)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,m]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(m(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},45921:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),a=n(25190),i=n(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"What happens to a memoized value in useMemo when the component unmounts?",options:["It's saved in localStorage","It persists in memory until garbage collection","It's immediately discarded","It's saved in the React cache for future instances"],code:void 0,nextQuestionPath:"in-which-case-would-you-need-to-memoize-the-dependency-array-of-useeffect",correctAnswer:3,explanation:"When a component unmounts, the memoized value from useMemo is immediately discarded. React cleans up all hooks and their associated data when components unmount. If the component remounts later, the memoized computation will start fresh, calculating the initial value again based on the current dependencies. This behavior ensures that memory is freed properly and prevents memory leaks.",id:546,quizId:27},15)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=59460)}),_N_E=e.O()}]);