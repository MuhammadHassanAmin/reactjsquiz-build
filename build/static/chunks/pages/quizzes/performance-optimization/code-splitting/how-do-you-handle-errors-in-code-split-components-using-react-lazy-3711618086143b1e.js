(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27901],{22561:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/how-do-you-handle-errors-in-code-split-components-using-react-lazy",function(){return n(16426)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),r=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:s}=e,a=(0,r.useRef)(null),i=(0,r.useRef)(!1),[c,d]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[c]),c)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(s),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends r.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},16426:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),r=n(55989),s=n(41354),a=n(16833),i=!0;t.default=(0,s.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(r.Y3,{activeQuestionIndex:14,totalQuestions:20,index:14,question:"How do you handle errors in code-split components using React.lazy?",options:["Use try/catch around the dynamic import","Use the onError prop on React.lazy","Wrap the Suspense component with an Error Boundary component","Errors in lazy-loaded components cannot be caught"],code:void 0,nextQuestionPath:"what-is-preloading-in-the-context-of-code-splitting",correctAnswer:3,explanation:"To handle errors in code-split components using React.lazy, you should wrap the Suspense component with an Error Boundary component. Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the component tree. This is particularly important for lazy-loaded components which might fail to load due to network issues or other runtime errors. Error boundaries provide a way to gracefully handle these failures without breaking the entire application.",id:595,quizId:29},14)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=22561)}),_N_E=e.O()}]);