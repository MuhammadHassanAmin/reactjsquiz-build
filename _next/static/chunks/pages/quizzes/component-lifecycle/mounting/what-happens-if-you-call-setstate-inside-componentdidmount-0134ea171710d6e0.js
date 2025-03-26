(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87906],{78462:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/what-happens-if-you-call-setstate-inside-componentdidmount",function(){return n(50473)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(85893),o=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:i}=e,a=(0,o.useRef)(null),r=(0,o.useRef)(!1),[c,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[c]),c)?(0,s.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},50473:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var s=n(85893),o=n(73903),i=n(41354),a=n(16833),r=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"What happens if you call setState() inside componentDidMount()?",options:["It causes an error because setState is not allowed in componentDidMount","It triggers a re-render before the browser updates the screen","It has no effect during the mounting phase","It waits until the next update cycle to apply changes"],code:void 0,nextQuestionPath:"what-is-the-correct-order-of-execution-for-the-mounting-phase-in-a-class-component",correctAnswer:2,explanation:"Calling setState() inside componentDidMount() is valid and will trigger an extra rendering, but it happens before the browser updates the screen. This means the user won't see the intermediate state, although the component will render twice in this cycle, potentially affecting performance.",id:476,quizId:24},5)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=78462)}),_N_E=e.O()}]);