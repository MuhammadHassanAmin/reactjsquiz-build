(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70154],{11752:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/how-does-using-the-usecallback-hook-affect-the-react-devtools-profiler-results",function(){return n(67464)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:r="true",style:c={}}=e,l=(0,s.useRef)(null),d=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(a),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":r}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"100%",height:"280px"}})})]})})}constructor(e){super(e)}}}},67464:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),s=n(73903),i=n(25190),a=n(16833),r=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"How does using the useCallback hook affect the React DevTools Profiler results?",options:["It shows fewer component renders in the flame chart","It has no visible effect on the Profiler","It changes the component's display name","It adds warning markers for potential performance issues"],code:void 0,nextQuestionPath:"what-is-a-common-mistake-when-implementing-usecallback",correctAnswer:1,explanation:"Using the useCallback hook properly can lead to fewer component renders being displayed in the React DevTools Profiler flame chart. When callback functions are memoized with useCallback, child components that depend on these functions as props may skip unnecessary re-renders. The Profiler shows this optimization as fewer render operations in the visualization, with fewer components lighting up during updates, making it a useful tool to verify that your memoization strategy is working as expected.",id:549,quizId:27},18)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=11752)}),_N_E=e.O()}]);