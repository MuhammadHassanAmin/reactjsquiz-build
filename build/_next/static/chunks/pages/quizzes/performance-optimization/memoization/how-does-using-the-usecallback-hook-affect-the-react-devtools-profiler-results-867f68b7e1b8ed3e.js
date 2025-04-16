(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70154],{11752:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/how-does-using-the-usecallback-hook-affect-the-react-devtools-profiler-results",function(){return s(67464)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(85893),o=s(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:r="true",style:c={}}=e,l=(0,o.useRef)(null),d=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(i),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":s,"data-ad-format":a,"data-full-width-responsive":r}):null};function i(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[336px]"})}),(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},67464:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return r}});var n=s(85893),o=s(73903),a=s(25190),i=s(16833),r=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"How does using the useCallback hook affect the React DevTools Profiler results?",options:["It shows fewer component renders in the flame chart","It has no visible effect on the Profiler","It changes the component's display name","It adds warning markers for potential performance issues"],code:void 0,nextQuestionPath:"what-is-a-common-mistake-when-implementing-usecallback",correctAnswer:1,explanation:"Using the useCallback hook properly can lead to fewer component renders being displayed in the React DevTools Profiler flame chart. When callback functions are memoized with useCallback, child components that depend on these functions as props may skip unnecessary re-renders. The Profiler shows this optimization as fewer render operations in the visualization, with fewer components lighting up during updates, making it a useful tool to verify that your memoization strategy is working as expected.",id:549,quizId:27},18)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=11752)}),_N_E=e.O()}]);