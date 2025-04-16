(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49463],{7325:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-is-the-impact-of-lazy-loading-on-users-with-slow-internet-connections",function(){return n(59727)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(85893),i=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:s,fullWidthResponsive:r="true",style:c={}}=e,l=(0,i.useRef)(null),d=(0,i.useRef)(!1),[u,p]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(s),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":r}):null};function s(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},59727:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),i=n(73903),a=n(25190),s=n(16833),r=!0;t.default=(0,a.Z)((0,s.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(i.Y3,{activeQuestionIndex:29,totalQuestions:30,index:29,question:"What is the impact of lazy loading on users with slow internet connections?",options:["It always provides a worse experience than eager loading","It provides a faster initial load but potential delays when accessing features","It has no significant impact compared to eager loading","It requires a connection speed detector to be effective"],code:void 0,nextQuestionPath:"",correctAnswer:2,explanation:"For users with slow internet connections, lazy loading provides a tradeoff: a faster initial load (which is crucial) but potential delays when accessing certain features for the first time. This is generally beneficial because it allows users to start using the core functionality sooner rather than waiting for the entire application to load. To optimize for slow connections, you should combine lazy loading with thoughtful UX (clear loading indicators, predictive preloading), and potentially implement network-aware loading strategies that adjust based on connection quality.",id:580,quizId:28},29)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=7325)}),_N_E=e.O()}]);