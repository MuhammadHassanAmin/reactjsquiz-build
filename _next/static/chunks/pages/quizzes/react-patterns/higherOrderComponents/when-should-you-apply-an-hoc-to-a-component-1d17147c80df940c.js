(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65995],{18534:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/when-should-you-apply-an-hoc-to-a-component",function(){return t(60240)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(85893),s=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:r}=e,d=(0,s.useRef)(null),c=(0,s.useRef)(!1),[a,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(a){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[a]),a)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function d(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},60240:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var o=t(85893),s=t(73903),r=t(41354),d=t(16833),c=!0;n.default=(0,r.Z)((0,d.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"When should you apply an HOC to a component?",options:["Inside the render method","In a component's constructor","Outside the component definition","After the component has mounted"],code:void 0,nextQuestionPath:"which-pattern-can-be-used-as-an-alternative-to-hocs",correctAnswer:3,explanation:"HOCs should be applied outside the component definition, not inside render methods. Applying HOCs inside render can lead to component recreation on each render, causing unnecessary unmounting and remounting, state loss, and performance issues. Define wrapped components outside your component's render method.",id:464,quizId:23},13)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=18534)}),_N_E=e.O()}]);