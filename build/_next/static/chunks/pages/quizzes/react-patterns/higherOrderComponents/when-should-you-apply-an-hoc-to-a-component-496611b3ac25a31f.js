(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65995],{18534:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/when-should-you-apply-an-hoc-to-a-component",function(){return t(60240)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(85893),s=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:r="auto",className:d,fullWidthResponsive:i="true",style:a={}}=e,c=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(d),style:{display:"block",...a},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":r,"data-full-width-responsive":i}):null};function d(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},60240:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var o=t(85893),s=t(73903),r=t(25190),d=t(16833),i=!0;n.default=(0,r.Z)((0,d.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"When should you apply an HOC to a component?",options:["Inside the render method","In a component's constructor","Outside the component definition","After the component has mounted"],code:void 0,nextQuestionPath:"which-pattern-can-be-used-as-an-alternative-to-hocs",correctAnswer:3,explanation:"HOCs should be applied outside the component definition, not inside render methods. Applying HOCs inside render can lead to component recreation on each render, causing unnecessary unmounting and remounting, state loss, and performance issues. Define wrapped components outside your component's render method.",id:464,quizId:23},13)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=18534)}),_N_E=e.O()}]);