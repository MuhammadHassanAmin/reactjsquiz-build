(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50388],{28948:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-is-a-key-difference-between-shouldcomponentupdate-and-react-memo",function(){return n(19894)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:c,fullWidthResponsive:d="true"}=e,r=(0,s.useRef)(null),i=(0,s.useRef)(!1),[l,u]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(c),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":d}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},19894:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var o=n(85893),s=n(73903),a=n(25190),c=n(16833),d=!0;t.default=(0,a.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:10,totalQuestions:20,index:10,question:"What is a key difference between shouldComponentUpdate and React.memo?",options:["React.memo works for class components while shouldComponentUpdate is for functional components","shouldComponentUpdate gives more control over the comparison logic","React.memo can only compare props, not state","shouldComponentUpdate is deprecated in favor of React.memo"],code:void 0,nextQuestionPath:"in-react-s-updating-phase-what-s-the-purpose-of-the-render-method",correctAnswer:3,explanation:"A key difference is that React.memo can only compare props, not state, because it's designed for functional components which don't have their own state in the same way class components do. shouldComponentUpdate, on the other hand, allows class components to compare both next props and next state to current props and state to determine if re-rendering is necessary.",id:501,quizId:25},10)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=28948)}),_N_E=e.O()}]);