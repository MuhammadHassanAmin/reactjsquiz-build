(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75630],{13229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useEffect/how-do-you-handle-cleanup-for-a-subscription-in-useeffect",function(){return t(72349)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var s=t(85893),o=t(67294),c=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:c}=e,u=(0,o.useRef)(null),i=(0,o.useRef)(!1),[a,l]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(a){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))u.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{u.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[a]),a)?(0,s.jsx)("ins",{ref:u,className:"adsbygoogle ".concat(c),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function u(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(c,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},72349:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var s=t(85893),o=t(55989),c=t(41354),u=t(16833),i=!0;n.default=(0,c.Z)((0,u.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"useEffect"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:20,totalQuestions:22,index:20,question:"How do you handle cleanup for a subscription in useEffect?",options:["Define a cleanup function inside the useEffect return statement","Use the return statement to call the cleanup function","Manually unsubscribe in the component's componentWillUnmount","There's no need to handle cleanup for subscriptions in useEffect"],nextQuestionPath:"is-it-safe-to-perform-dom-manipulation-inside-the-useeffect-hook",correctAnswer:1,explanation:"To handle cleanup for a subscription in useEffect, you should define a cleanup function inside the return statement of the useEffect callback. React will automatically call this cleanup function when the component unmounts or before re-running the effect.",id:130,quizId:7},20)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=13229)}),_N_E=e.O()}]);