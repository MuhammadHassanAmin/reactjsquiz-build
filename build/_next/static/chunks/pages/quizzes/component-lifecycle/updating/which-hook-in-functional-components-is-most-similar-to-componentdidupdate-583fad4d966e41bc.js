(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30670],{89656:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/which-hook-in-functional-components-is-most-similar-to-componentdidupdate",function(){return n(53189)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(85893),s=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:c,fullWidthResponsive:d="true",style:a={}}=e,r=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(c),style:{display:"block",...a},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":d}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},53189:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var o=n(85893),s=n(73903),i=n(25190),c=n(16833),d=!0;t.default=(0,i.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:8,totalQuestions:20,index:8,question:"Which hook in functional components is most similar to componentDidUpdate?",options:["useState","useEffect with dependencies","useLayoutEffect","useReducer"],code:void 0,nextQuestionPath:"what-happens-if-shouldcomponentupdate-returns-false",correctAnswer:2,explanation:"The useEffect hook with dependencies is most similar to componentDidUpdate in class components. When you provide a dependency array to useEffect, the effect will run after every render where those dependencies have changed, similar to how componentDidUpdate runs after updates. However, useEffect is also called after the initial render, whereas componentDidUpdate is not called during mounting.",id:499,quizId:25},8)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=89656)}),_N_E=e.O()}]);