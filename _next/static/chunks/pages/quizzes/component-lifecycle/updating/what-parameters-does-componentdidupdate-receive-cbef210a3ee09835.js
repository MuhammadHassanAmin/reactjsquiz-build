(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93466],{70898:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-parameters-does-componentdidupdate-receive",function(){return n(1706)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(85893),o=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:r}=e,a=(0,o.useRef)(null),d=(0,o.useRef)(!1),[c,i]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[c]),c)?(0,s.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},1706:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var s=n(85893),o=n(73903),r=n(41354),a=n(16833),d=!0;t.default=(0,r.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"What parameters does componentDidUpdate() receive?",options:["prevProps only","prevProps and prevState","prevProps, prevState, and snapshot","nextProps and nextState"],code:void 0,nextQuestionPath:"what-is-the-correct-order-of-lifecycle-methods-during-the-updating-phase",correctAnswer:3,explanation:"The componentDidUpdate() method receives three parameters: prevProps, prevState, and the snapshot value returned by getSnapshotBeforeUpdate() (if that method is used, otherwise it's undefined). These parameters allow the component to compare the previous values with the current ones (this.props and this.state) to determine what has changed and respond accordingly.",id:497,quizId:25},6)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=70898)}),_N_E=e.O()}]);