(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16918],{9835:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-is-a-common-mistake-when-using-componentdidupdate",function(){return n(26155)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),i=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:s="auto",className:a,fullWidthResponsive:c="true",style:d={}}=e,r=(0,i.useRef)(null),l=(0,i.useRef)(!1),[u,p]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(a),style:{display:"block",...d},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":s,"data-full-width-responsive":c}):null};function a(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},26155:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),i=n(73903),s=n(25190),a=n(16833),c=!0;t.default=(0,s.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(i.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"What is a common mistake when using componentDidUpdate()?",options:["Forgetting to include a condition when calling setState()","Returning a value from the method","Not including the prevProps parameter","Calling it manually from other methods"],code:void 0,nextQuestionPath:"in-the-updating-phase-when-is-static-getderivedstatefromprops-called",correctAnswer:1,explanation:"A common mistake when using componentDidUpdate() is forgetting to include a condition when calling setState(). Without a condition (like comparing current props to previous props), setting state in componentDidUpdate() will trigger another update cycle, leading to an infinite loop and eventually a stack overflow error.",id:495,quizId:25},4)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=9835)}),_N_E=e.O()}]);