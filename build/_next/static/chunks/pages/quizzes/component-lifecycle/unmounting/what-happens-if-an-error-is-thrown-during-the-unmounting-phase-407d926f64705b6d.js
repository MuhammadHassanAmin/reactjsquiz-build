(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42193],{30422:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/what-happens-if-an-error-is-thrown-during-the-unmounting-phase",function(){return t(90374)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(85893),o=t(67294),a=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:a="auto",className:r,fullWidthResponsive:i="true",style:c={}}=e,u=(0,o.useRef)(null),l=(0,o.useRef)(!1),[d,h]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))u.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{u.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[d]),d)?(0,s.jsx)("ins",{ref:u,className:"adsbygoogle ".concat(r),style:{display:"block",...c},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":a,"data-full-width-responsive":i}):null};function r(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},90374:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var s=t(85893),o=t(73903),a=t(25190),r=t(16833),i=!0;n.default=(0,a.Z)((0,r.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"What happens if an error is thrown during the unmounting phase?",options:["The component remains mounted","React's error boundaries can catch unmounting errors","The application always crashes","React automatically retries the unmounting"],code:void 0,nextQuestionPath:"why-should-unmounting-operations-be-fast",correctAnswer:2,explanation:"If an error occurs during the unmounting phase (in componentWillUnmount or a useEffect cleanup function), it can be caught by React's error boundaries. Error boundaries are special components that catch JavaScript errors in their child component tree. This allows graceful handling of errors during unmounting rather than crashing the entire application.",id:524,quizId:26},13)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=30422)}),_N_E=e.O()}]);