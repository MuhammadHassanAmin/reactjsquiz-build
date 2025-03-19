(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13815],{67487:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-would-be-a-good-candidate-for-lazy-loading-in-a-typical-react-application",function(){return t(14794)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(85893),i=t(67294),o=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:o}=e,s=(0,i.useRef)(null),c=(0,i.useRef)(!1),[l,r]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(r(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))s.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{s.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[l]),l)?(0,a.jsx)("ins",{ref:s,className:"adsbygoogle ".concat(o),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function s(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,a.jsx)("div",{children:(0,a.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,a.jsx)("div",{children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},14794:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var a=t(85893),i=t(55989),o=t(41354),s=t(16833),c=!0;n.default=(0,o.Z)((0,s.Z)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,a.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,a.jsx)(i.Y3,{activeQuestionIndex:14,totalQuestions:30,index:14,question:"What would be a good candidate for lazy loading in a typical React application?",options:["The main navigation component","Authentication forms","A complex, heavy chart library used only on a specific analytics page","The application's Redux store"],code:void 0,nextQuestionPath:"how-does-lazy-loading-relate-to-the-concept-of-time-to-interactive-in-web-performance",correctAnswer:3,explanation:"A complex, heavy chart library used only on a specific analytics page is an excellent candidate for lazy loading. Chart libraries often include substantial code and may have large dependencies, but are only used in specific sections of an application. By lazy loading this library, you avoid including it in the initial bundle, significantly reducing the load time for users who might never access the analytics page. This is a perfect example of the intended use case for lazy loading: large, non-critical components that aren't needed for the initial rendering of your application.",id:565,quizId:28},14)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=67487)}),_N_E=e.O()}]);