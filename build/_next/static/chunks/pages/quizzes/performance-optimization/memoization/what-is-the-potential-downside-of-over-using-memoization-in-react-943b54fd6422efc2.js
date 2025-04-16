(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75014],{84230:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-is-the-potential-downside-of-over-using-memoization-in-react",function(){return o(41658)}])},16833:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(85893),s=o(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:o="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:r="true"}=e,c=(0,s.useRef)(null),d=(0,s.useRef)(!1),[l,u]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[l]),l)?(0,n.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":o,"data-ad-format":a,"data-full-width-responsive":r}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},41658:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return r}});var n=o(85893),s=o(73903),a=o(25190),i=o(16833),r=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"What is the potential downside of over-using memoization in React?",options:["It can lead to more bugs due to stale closures","It increases the bundle size significantly","It can add overhead that outweighs the performance benefits","It makes the code harder to test"],code:void 0,nextQuestionPath:"which-scenario-would-benefit-most-from-using-react-memo",correctAnswer:3,explanation:"A potential downside of over-using memoization is that it can add overhead that outweighs the performance benefits. Memoization itself has a cost: memory to store cached values and CPU time to perform comparisons. For simple components or operations that are already fast, the overhead of managing the cache and comparing dependencies might exceed the performance gained by avoiding re-renders or recalculations. Memoization should be applied judiciously where there's a measurable performance benefit.",id:543,quizId:27},12)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=84230)}),_N_E=e.O()}]);