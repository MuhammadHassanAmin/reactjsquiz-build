(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2371],{76717:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useRef/can-the-useref-hook-be-used-to-store-and-maintain-mutable-values-between-renders",function(){return s(69980)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(85893),o=s(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",className:r}=e,a=(0,o.useRef)(null),u=(0,o.useRef)(!1),[c,i]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[c]),c)?(0,n.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":s}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},69980:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return i}});var n=s(85893),o=s(41869),r=s(41354),a=s(16833),u=s(67294),c=s(11163),i=!0;t.default=(0,r.Z)((0,a.Z)(()=>{let e=(0,c.useRouter)();return(0,u.useEffect)(()=>{setTimeout(()=>{e.prefetch("/")},5e3)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Hooks - useRef Quiz"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"Can the useRef hook be used to store and maintain mutable values between renders?",options:["Yes, useRef is suitable for storing mutable values","No, useRef is only for referencing DOM elements","It depends on the specific use case","Mutable values cannot be stored using useRef"],nextQuestionPath:"",correctAnswer:"1",explanation:"Yes, the useRef hook can be used to store and maintain mutable values between renders, as it creates a mutable ref object that persists across re-renders of the component.",id:"49"},19)})]})}))}},function(e){e.O(0,[1966,5675,11,2888,9774,179],function(){return e(e.s=76717)}),_N_E=e.O()}]);