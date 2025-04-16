(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32937],{57988:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/which-of-the-following-is-not-a-good-use-case-for-lazy-loading",function(){return a(97413)}])},16833:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(85893),o=a(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:a="6753219060",adFormat:i="auto",className:s,fullWidthResponsive:l="true",style:d={}}=e,r=(0,o.useRef)(null),c=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(s),style:{display:"block",...d},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":i,"data-full-width-responsive":l}):null};function s(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},97413:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return l}});var n=a(85893),o=a(73903),i=a(25190),s=a(16833),l=!0;t.default=(0,i.Z)((0,s.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:25,totalQuestions:30,index:25,question:"Which of the following is NOT a good use case for lazy loading?",options:["Modal dialogs that appear infrequently","Content below the fold on long pages","Features used only by authenticated users","The main navigation menu of an application"],code:void 0,nextQuestionPath:"what-s-the-relationship-between-react-lazy-and-react-s-experimental-react-cache",correctAnswer:4,explanation:"The main navigation menu is not a good candidate for lazy loading because it's a critical UI element that users expect to be immediately available. Lazy loading the navigation would create a poor user experience with visible loading delays for a fundamental interaction point. Good lazy loading candidates are components that aren't immediately needed (like modal dialogs), are outside the initial viewport (below the fold), or represent features that only certain users will access (admin panels, authenticated features).",id:576,quizId:28},25)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=57988)}),_N_E=e.O()}]);