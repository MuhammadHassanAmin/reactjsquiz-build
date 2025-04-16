(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27935],{39805:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/what-is-a-common-performance-issue-related-to-the-mounting-phase",function(){return t(42601)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(85893),s=t(67294),i=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:c="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block",...r},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":i,"data-full-width-responsive":c}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},42601:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var o=t(85893),s=t(73903),i=t(25190),a=t(16833),c=!0;n.default=(0,i.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"What is a common performance issue related to the mounting phase?",options:["Too many components mounting simultaneously","Running expensive calculations in getDerivedStateFromProps","Setting state in componentDidMount causing double rendering","All of the above"],code:void 0,nextQuestionPath:"what-is-the-recommended-approach-for-fetching-data-in-a-functional-component-during-the-equivalent-of-the-mounting-phase",correctAnswer:4,explanation:"All of the mentioned issues can affect performance during mounting. Having too many components mount simultaneously can slow down the application; running expensive calculations in getDerivedStateFromProps can block rendering; and setting state in componentDidMount causes an additional render cycle (though it happens before the browser paints, it still takes processing time).",id:489,quizId:24},18)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=39805)}),_N_E=e.O()}]);