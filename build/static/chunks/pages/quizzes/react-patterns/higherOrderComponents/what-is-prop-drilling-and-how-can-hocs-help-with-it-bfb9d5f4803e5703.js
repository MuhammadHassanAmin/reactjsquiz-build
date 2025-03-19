(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77389],{50804:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-is-prop-drilling-and-how-can-hocs-help-with-it",function(){return n(59264)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(85893),o=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:i}=e,r=(0,o.useRef)(null),c=(0,o.useRef)(!1),[a,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(a){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[a]),a)?(0,s.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function r(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},59264:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var s=n(85893),o=n(55989),i=n(41354),r=n(16833),c=!0;t.default=(0,i.Z)((0,r.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"What is 'prop drilling' and how can HOCs help with it?",options:["A technique for optimizing props, HOCs can't help with it","The process of passing props through intermediate components, HOCs can help by providing context","A security vulnerability in props, HOCs can patch it","The act of inspecting prop types, HOCs can automate it"],code:void 0,nextQuestionPath:"what-is-the-primary-concern-with-hocs-in-terms-of-component-hierarchy",correctAnswer:2,explanation:"Prop drilling is the process of passing props through multiple levels of component hierarchy to reach deeply nested components. HOCs can help with this by using React's Context API or state management to provide data directly to nested components without having to pass props through each intermediate component.",id:466,quizId:23},15)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=50804)}),_N_E=e.O()}]);