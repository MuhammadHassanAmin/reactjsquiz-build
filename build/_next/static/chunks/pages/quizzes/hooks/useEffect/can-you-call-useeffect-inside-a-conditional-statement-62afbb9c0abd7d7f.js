(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5268],{60126:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useEffect/can-you-call-useeffect-inside-a-conditional-statement",function(){return n(12983)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(85893),o=n(67294),c=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:c}=e,a=(0,o.useRef)(null),i=(0,o.useRef)(!1),[l,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[l]),l)?(0,s.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(c),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(c,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},12983:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var s=n(85893),o=n(55989),c=n(41354),a=n(16833),i=!0;t.default=(0,c.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Hooks - useEffect Quiz"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:15,totalQuestions:22,index:15,question:"Can you call useEffect inside a conditional statement?",options:["Yes, but it's not recommended","No, useEffect should always be called at the top level of the component","It depends on the specific use case","Conditional statements should be avoided in functional components"],nextQuestionPath:"what-is-the-purpose-of-returning-a-cleanup-function-in-useeffect",correctAnswer:2,explanation:"No, you cannot call useEffect inside a conditional statement. React's rules of hooks require that hooks must always be called at the top level of the component. This ensures the order of hooks is consistent between renders, avoiding bugs.",id:125,quizId:7},15)})]})))}},function(e){e.O(0,[1966,5675,7426,2888,9774,179],function(){return e(e.s=60126)}),_N_E=e.O()}]);