(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73691],{54364:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-is-the-recommended-way-to-lazy-load-components-in-a-server-side-rendered-react-application",function(){return n(59578)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),a=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:s="auto",className:i,fullWidthResponsive:r="true"}=e,d=(0,a.useRef)(null),c=(0,a.useRef)(!1),[l,p]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":r}):null};function i(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},59578:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),a=n(73903),s=n(25190),i=n(16833),r=!0;t.default=(0,s.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(a.Y3,{activeQuestionIndex:16,totalQuestions:30,index:16,question:"What is the recommended way to lazy load components in a server-side rendered React application?",options:["Use React.lazy and Suspense just like in client-side applications","Avoid lazy loading completely in SSR applications","Use a third-party library like loadable-components","Use dynamic imports but render placeholders server-side"],code:void 0,nextQuestionPath:"what-additional-technique-can-complement-lazy-loading-to-further-optimize-performance-in-react",correctAnswer:3,explanation:"For server-side rendered React applications, the recommended way to lazy load components is to use a third-party library like loadable-components or @loadable/component. These libraries support code splitting with server-side rendering, unlike React.lazy which does not support SSR (prior to React 18). They provide a consistent API that works on both server and client, handle the complexity of loading chunks on the server, and ensure proper hydration on the client side without content flickering or mismatches that could occur with other approaches.",id:567,quizId:28},16)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=54364)}),_N_E=e.O()}]);