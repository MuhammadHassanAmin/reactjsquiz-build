(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32647],{9464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/in-which-lifecycle-method-should-you-avoid-setting-state-directly-in-class-components",function(){return n(25916)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(85893),o=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:c,fullWidthResponsive:d="true",style:a={}}=e,r=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(c),style:{display:"block",...a},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":d}):null};function c(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})}),(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},25916:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var s=n(85893),o=n(73903),i=n(25190),c=n(16833),d=!0;t.default=(0,i.Z)((0,c.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"In which lifecycle method should you avoid setting state directly in class components?",options:["constructor()","componentDidMount()","render()","getDerivedStateFromProps()"],code:void 0,nextQuestionPath:"what-happens-if-you-call-setstate-inside-componentdidmount",correctAnswer:3,explanation:"You should avoid setting state directly in the render() method. The render method should be pure, meaning it should not modify the component's state. Setting state in render would cause an infinite loop of re-rendering since changing state triggers another render cycle.",id:475,quizId:24},4)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=9464)}),_N_E=e.O()}]);