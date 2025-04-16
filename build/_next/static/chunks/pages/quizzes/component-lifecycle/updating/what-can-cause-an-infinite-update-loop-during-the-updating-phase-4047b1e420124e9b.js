(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18712],{24675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-can-cause-an-infinite-update-loop-during-the-updating-phase",function(){return n(42696)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(85893),s=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:o,fullWidthResponsive:d="true",style:r={}}=e,c=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,a.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(o),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":d}):null};function o(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,a.jsx)("div",{children:(0,a.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,a.jsx)("div",{children:(0,a.jsx)(e,{...this.props})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,a.jsx)(i,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,a.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,a.jsx)(i,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},42696:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var a=n(85893),s=n(73903),i=n(25190),o=n(16833),d=!0;t.default=(0,i.Z)((0,o.Z)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,a.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,a.jsx)(s.Y3,{activeQuestionIndex:17,totalQuestions:20,index:17,question:"What can cause an infinite update loop during the updating phase?",options:["Using shouldComponentUpdate correctly","Setting state in render","Using PureComponent","Capturing DOM information with getSnapshotBeforeUpdate"],code:void 0,nextQuestionPath:"which-updating-lifecycle-method-allows-you-to-cancel-an-in-progress-update",correctAnswer:2,explanation:"Setting state in the render method can cause an infinite update loop during the updating phase. When state changes, React triggers a re-render. If you set state in render, each render will change the state, triggering another render, and so on. This creates an infinite loop that will eventually crash your application with a maximum update depth exceeded error.",id:508,quizId:25},17)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=24675)}),_N_E=e.O()}]);