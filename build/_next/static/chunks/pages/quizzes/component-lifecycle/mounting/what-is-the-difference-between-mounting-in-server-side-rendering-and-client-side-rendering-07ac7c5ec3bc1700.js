(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74417],{32264:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/what-is-the-difference-between-mounting-in-server-side-rendering-and-client-side-rendering",function(){return t(53251)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(85893),o=t(67294),i=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:i="auto",className:r,fullWidthResponsive:d="true",style:c={}}=e,a=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,h]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block",...c},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":i,"data-full-width-responsive":d}):null};function r(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},53251:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d}});var s=t(85893),o=t(73903),i=t(25190),r=t(16833),d=!0;n.default=(0,i.Z)((0,r.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"What is the difference between mounting in server-side rendering and client-side rendering?",options:["There is no mounting phase in server-side rendering","In server-side rendering, componentDidMount is not called","In server-side rendering, render is called twice","Server-side rendering doesn't support class components"],code:void 0,nextQuestionPath:"which-of-these-statements-about-the-mounting-phase-is-false",correctAnswer:2,explanation:"In server-side rendering (SSR), the componentDidMount lifecycle method is not called on the server. The component is rendered to HTML on the server, but the componentDidMount method only executes when the JavaScript loads and the component 'hydrates' on the client. This is because componentDidMount is specifically for interacting with the browser DOM, which doesn't exist on the server.",id:487,quizId:24},16)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=32264)}),_N_E=e.O()}]);