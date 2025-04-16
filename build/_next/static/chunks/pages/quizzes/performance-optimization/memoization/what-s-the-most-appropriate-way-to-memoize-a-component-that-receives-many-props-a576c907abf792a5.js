(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86543],{52428:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-s-the-most-appropriate-way-to-memoize-a-component-that-receives-many-props",function(){return o(90458)}])},16833:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(85893),s=o(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:o="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:r="true"}=e,c=(0,s.useRef)(null),l=(0,s.useRef)(!1),[d,u]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[d]),d)?(0,n.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":o,"data-ad-format":a,"data-full-width-responsive":r}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},90458:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return r}});var n=o(85893),s=o(73903),a=o(25190),i=o(16833),r=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:17,totalQuestions:20,index:17,question:"What's the most appropriate way to memoize a component that receives many props?",options:["Use individual useMemo calls for each prop","Use React.memo with a custom comparison function","Create smaller child components that each receive fewer props","Use React.useMemoComponent (a fictional API)"],code:void 0,nextQuestionPath:"how-does-using-the-usecallback-hook-affect-the-react-devtools-profiler-results",correctAnswer:2,explanation:"For a component that receives many props, the most appropriate approach is often to use React.memo with a custom comparison function. This allows you to precisely control which prop changes should trigger re-renders. Alternatively, breaking down the component into smaller components (option C) is also a good strategy as it allows more granular memoization and can improve maintainability. The choice depends on the specific scenario, but using a custom comparison function gives you the most control.",id:548,quizId:27},17)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=52428)}),_N_E=e.O()}]);