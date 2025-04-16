(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88335],{42893:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/what-is-a-potential-downside-of-excessive-code-splitting",function(){return s(43479)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(85893),o=s(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:r="true",style:c={}}=e,d=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,h]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":s,"data-ad-format":i,"data-full-width-responsive":r}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(i,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(i,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},43479:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return r}});var n=s(85893),o=s(73903),i=s(25190),a=s(16833),r=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"What is a potential downside of excessive code splitting?",options:["Increased total bundle size","Too many network requests could harm performance","Reduced browser compatibility","Higher server costs"],code:void 0,nextQuestionPath:"how-can-you-implement-code-splitting-for-react-router-routes",correctAnswer:2,explanation:"A potential downside of excessive code splitting is that it can lead to too many network requests, which may harm performance rather than improve it. Each split chunk requires a separate HTTP request when needed, and there's overhead associated with each request. If you split your code into too many small chunks, the latency from multiple requests can outweigh the benefits of loading smaller files. Finding the right balance is key - chunks should be meaningful groupings of related functionality that are large enough to justify the overhead of a separate request.",id:588,quizId:29},7)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=42893)}),_N_E=e.O()}]);