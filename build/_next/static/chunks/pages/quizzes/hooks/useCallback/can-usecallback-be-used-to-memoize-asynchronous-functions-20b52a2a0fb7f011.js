(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19409],{81818:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useCallback/can-usecallback-be-used-to-memoize-asynchronous-functions",function(){return s(40107)}])},16833:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var t=s(85893),o=s(67294),c=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:s="6753219060",adFormat:c="auto",className:i,fullWidthResponsive:a="true",style:u={}}=e,d=(0,o.useRef)(null),l=(0,o.useRef)(!1),[r,h]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[r]),r)?(0,t.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block",...u},"data-ad-client":n,"data-ad-slot":s,"data-ad-format":c,"data-full-width-responsive":a}):null};function i(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,t.jsx)("div",{children:(0,t.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,t.jsx)("div",{children:(0,t.jsx)(e,{...this.props})}),(0,t.jsx)("div",{children:(0,t.jsx)(c,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"100%",height:"280px"}})})]})})}constructor(e){super(e)}}}},40107:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return a}});var t=s(85893),o=s(73903),c=s(25190),i=s(16833),a=!0;n.default=(0,c.Z)((0,i.Z)(()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"useCallback"}),(0,t.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,t.jsx)(o.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"Can useCallback be used to memoize asynchronous functions?",options:["Yes, it can be used to memoize both synchronous and asynchronous functions","No, useCallback is only for synchronous functions","It depends on the specific use case","Asynchronous functions are automatically memoized in React"],code:void 0,nextQuestionPath:"what-is-the-main-benefit-of-memoizing-callback-functions-using-usecallback",correctAnswer:1,explanation:"Yes, useCallback can be used to memoize both synchronous and asynchronous functions. It memoizes the function reference and updates it only when one of the dependencies changes. However, it does not memoize the results of the function itself, so additional techniques like caching might be needed for result memoization.",id:159,quizId:9},7)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=81818)}),_N_E=e.O()}]);