(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13815],{67487:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-would-be-a-good-candidate-for-lazy-loading-in-a-typical-react-application",function(){return a(14794)}])},16833:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(85893),i=a(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:a="6753219060",adFormat:o="auto",className:s,fullWidthResponsive:c="true",style:l={}}=e,d=(0,i.useRef)(null),r=(0,i.useRef)(!1),[u,p]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(s),style:{display:"block",...l},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":o,"data-full-width-responsive":c}):null};function s(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(o,{adSlot:"6208304795",className:"h-[336px]"})}),(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(o,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},14794:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return c}});var n=a(85893),i=a(73903),o=a(25190),s=a(16833),c=!0;t.default=(0,o.Z)((0,s.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(i.Y3,{activeQuestionIndex:14,totalQuestions:30,index:14,question:"What would be a good candidate for lazy loading in a typical React application?",options:["The main navigation component","Authentication forms","A complex, heavy chart library used only on a specific analytics page","The application's Redux store"],code:void 0,nextQuestionPath:"how-does-lazy-loading-relate-to-the-concept-of-time-to-interactive-in-web-performance",correctAnswer:3,explanation:"A complex, heavy chart library used only on a specific analytics page is an excellent candidate for lazy loading. Chart libraries often include substantial code and may have large dependencies, but are only used in specific sections of an application. By lazy loading this library, you avoid including it in the initial bundle, significantly reducing the load time for users who might never access the analytics page. This is a perfect example of the intended use case for lazy loading: large, non-critical components that aren't needed for the initial rendering of your application.",id:565,quizId:28},14)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=67487)}),_N_E=e.O()}]);