(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98143],{89542:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/how-does-lazy-loading-relate-to-the-concept-of-time-to-interactive-in-web-performance",function(){return n(92157)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(85893),a=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:r,fullWidthResponsive:s="true"}=e,c=(0,a.useRef)(null),d=(0,a.useRef)(!1),[l,u]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":s}):null};function r(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},92157:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var o=n(85893),a=n(73903),i=n(25190),r=n(16833),s=!0;t.default=(0,i.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(a.Y3,{activeQuestionIndex:15,totalQuestions:30,index:15,question:"How does lazy loading relate to the concept of 'Time to Interactive' in web performance?",options:["Lazy loading always improves Time to Interactive","Lazy loading generally improves Time to Interactive by reducing initial JavaScript load","Lazy loading worsens Time to Interactive but improves perceived performance","Lazy loading has no effect on Time to Interactive"],code:void 0,nextQuestionPath:"what-is-the-recommended-way-to-lazy-load-components-in-a-server-side-rendered-react-application",correctAnswer:2,explanation:"Lazy loading generally improves Time to Interactive (TTI) by reducing the amount of JavaScript that needs to be loaded, parsed, and executed before the application becomes interactive. By deferring non-critical components until they're needed, the browser can process less code initially, allowing the main functionality to become interactive faster. This is particularly important for mobile devices or slower connections where processing large JavaScript bundles can significantly delay interactivity. However, the specific impact depends on implementation details and should be measured for your particular application.",id:566,quizId:28},15)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=89542)}),_N_E=e.O()}]);