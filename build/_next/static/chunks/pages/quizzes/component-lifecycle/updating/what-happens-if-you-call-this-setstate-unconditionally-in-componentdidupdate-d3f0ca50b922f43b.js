(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58054],{57770:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-happens-if-you-call-this-setstate-unconditionally-in-componentdidupdate",function(){return n(67118)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(85893),a=n(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:o="auto",className:i,fullWidthResponsive:c="true",style:d={}}=e,l=(0,a.useRef)(null),r=(0,a.useRef)(!1),[u,p]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(i),style:{display:"block",...d},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":o,"data-full-width-responsive":c}):null};function i(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(o,{adSlot:"6208304795",className:"h-[336px]"})}),(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(o,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},67118:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var s=n(85893),a=n(73903),o=n(25190),i=n(16833),c=!0;t.default=(0,o.Z)((0,i.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(a.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"What happens if you call this.setState() unconditionally in componentDidUpdate()?",options:["It has no effect after the component has updated","It triggers an immediate re-render","It causes an infinite update loop","It batches the state update until the next render cycle"],code:void 0,nextQuestionPath:"",correctAnswer:3,explanation:"Calling this.setState() unconditionally in componentDidUpdate() causes an infinite update loop. When setState is called, it triggers the component's update lifecycle again, which will execute componentDidUpdate again, where setState gets called again, and so on. Always wrap setState calls in componentDidUpdate with a condition that checks if the relevant props or state have actually changed to avoid this issue.",id:510,quizId:25},19)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=57770)}),_N_E=e.O()}]);