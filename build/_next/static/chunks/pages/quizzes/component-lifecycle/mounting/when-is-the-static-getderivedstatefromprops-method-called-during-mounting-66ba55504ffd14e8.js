(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15131],{85826:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/when-is-the-static-getderivedstatefromprops-method-called-during-mounting",function(){return n(37880)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(85893),s=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:r="auto",className:d,fullWidthResponsive:c="true"}=e,a=(0,s.useRef)(null),i=(0,s.useRef)(!1),[u,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(d),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":r,"data-full-width-responsive":c}):null};function d(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},37880:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),r=n(25190),d=n(16833),c=!0;t.default=(0,r.Z)((0,d.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"When is the static getDerivedStateFromProps() method called during mounting?",options:["Before the constructor","After the constructor but before render","After render but before componentDidMount","After componentDidMount"],code:void 0,nextQuestionPath:"what-is-the-purpose-of-the-componentdidmount-lifecycle-method",correctAnswer:2,explanation:"The static getDerivedStateFromProps() method is called after the constructor but before the render method during the mounting phase. It's a static method that receives props and state as parameters and returns an object to update the state or null to indicate no state update is necessary.",id:473,quizId:24},2)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=85826)}),_N_E=e.O()}]);