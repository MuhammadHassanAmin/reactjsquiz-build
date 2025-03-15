(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30266],{29721:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/how-does-http-2-affect-the-performance-benefits-of-code-splitting",function(){return n(26154)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(85893),i=n(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:o}=e,r=(0,i.useRef)(null),a=(0,i.useRef)(!1),[c,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0)}}}},[c]),c)?(0,s.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(o),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function r(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},26154:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var s=n(85893),i=n(55989),o=n(41354),r=n(16833),a=!0;t.default=(0,o.Z)((0,r.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(i.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"How does HTTP/2 affect the performance benefits of code splitting?",options:["HTTP/2 makes code splitting unnecessary","HTTP/2 reduces the overhead of multiple requests, making more granular splitting viable","HTTP/2 is incompatible with code splitting","HTTP/2 requires more aggressive code splitting to be effective"],nextQuestionPath:"what-is-the-main-purpose-of-webpack-s-splitchunksplugin-in-code-splitting",correctAnswer:2,explanation:"HTTP/2 reduces the overhead of multiple requests through features like multiplexing and server push, making more granular code splitting viable. With HTTP/1.1, each request had significant overhead, limiting how many chunks an application could practically use. HTTP/2 removes much of this limitation, allowing applications to split into more, smaller chunks without the performance penalty of multiple requests. This enables more targeted code loading strategies where users download only the specific features they use, further improving performance.",id:599,quizId:29},18)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=29721)}),_N_E=e.O()}]);