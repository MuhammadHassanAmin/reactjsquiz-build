(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15959],{21563:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/what-s-a-recommended-pattern-for-managing-async-operations-when-components-might-unmount",function(){return t(53187)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(85893),s=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:r}=e,a=(0,s.useRef)(null),c=(0,s.useRef)(!1),[i,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(i){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[i]),i)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},53187:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var o=t(85893),s=t(55989),r=t(41354),a=t(16833),c=!0;n.default=(0,r.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"What's a recommended pattern for managing async operations when components might unmount?",options:["Always use setTimeout to delay operations","Implement a cancellation mechanism like AbortController for fetch requests","Avoid async operations entirely in React components","Use Redux for all asynchronous operations"],nextQuestionPath:"",correctAnswer:2,explanation:"A recommended pattern for managing async operations is implementing proper cancellation mechanisms. For network requests, the AbortController API lets you cancel in-flight requests when a component unmounts. Similarly, for other async operations, using cancellable promises or tracking mount status allows cleanup of pending operations to prevent memory leaks and errors from updating state on unmounted components.",id:530,quizId:26},19)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=21563)}),_N_E=e.O()}]);