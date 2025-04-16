(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3031],{78605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/how-does-unmounting-a-component-affect-context-providers-and-consumers",function(){return n(23086)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:c,fullWidthResponsive:i="true",style:r={}}=e,l=(0,s.useRef)(null),u=(0,s.useRef)(!1),[d,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[d]),d)?(0,o.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(c),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":i}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",height:"280px"}})})]})})}constructor(e){super(e)}}}},23086:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),s=n(73903),a=n(25190),c=n(16833),i=!0;t.default=(0,a.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"How does unmounting a component affect Context providers and consumers?",options:["Context values persist even after provider unmounting","When a provider unmounts, all its consumers lose access to the context values","Context values are cached even after unmounting","Consumers automatically connect to the next available provider of the same type"],code:void 0,nextQuestionPath:"what-happens-to-refs-when-a-component-unmounts",correctAnswer:2,explanation:"When a Context provider component unmounts, all its consumers lose access to the provided context values. If there are no ancestor providers of the same Context type available, consumers will fall back to the default value specified when creating the Context. This is why it's important to consider the lifecycle of providers when designing component hierarchies.",id:526,quizId:26},15)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=78605)}),_N_E=e.O()}]);