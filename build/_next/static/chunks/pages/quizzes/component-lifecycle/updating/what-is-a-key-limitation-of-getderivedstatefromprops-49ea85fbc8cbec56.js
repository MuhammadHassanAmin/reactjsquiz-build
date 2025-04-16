(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59999],{32091:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-is-a-key-limitation-of-getderivedstatefromprops",function(){return n(41875)}])},16833:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var s=n(85893),o=n(67294),a=t=>{let{adClient:e="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true",style:d={}}=t,r=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let t=document.getElementById("__next");t&&t.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let t=document.createElement("script");t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",t.async=!0,t.crossOrigin="anonymous",document.body.appendChild(t),t.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(i),style:{display:"block",...d},"data-ad-client":e,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(t){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t,{...this.props})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(t){super(t)}}}},41875:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c}});var s=n(85893),o=n(73903),a=n(25190),i=n(16833),c=!0;e.default=(0,a.Z)((0,i.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"What is a key limitation of getDerivedStateFromProps?",options:["It cannot access component instances (no 'this' access)","It cannot return null","It only runs during mounting, not updating","It cannot manipulate the DOM"],code:void 0,nextQuestionPath:"what-can-cause-an-infinite-update-loop-during-the-updating-phase",correctAnswer:1,explanation:"A key limitation of getDerivedStateFromProps is that it cannot access component instances (no 'this' access). Being a static method, it doesn't have access to component instances, meaning you can't call this.setState() or access instance methods. It should be a pure function that returns an object to update state based on props, or null to indicate no state update is needed.",id:507,quizId:25},16)})]})))}},function(t){t.O(0,[41966,25675,29325,92888,49774,40179],function(){return t(t.s=32091)}),_N_E=t.O()}]);