(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54139],{47153:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-s-the-difference-between-eager-loading-and-lazy-loading-in-react",function(){return a(58409)}])},16833:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(85893),i=a(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:a="6753219060",adFormat:o="auto",className:s,fullWidthResponsive:l="true",style:d={}}=e,r=(0,i.useRef)(null),c=(0,i.useRef)(!1),[u,g]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(g(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(s),style:{display:"block",...d},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":o,"data-full-width-responsive":l}):null};function s(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(o,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},58409:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return l}});var n=a(85893),i=a(73903),o=a(25190),s=a(16833),l=!0;t.default=(0,o.Z)((0,s.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(i.Y3,{activeQuestionIndex:21,totalQuestions:30,index:21,question:"What's the difference between eager loading and lazy loading in React?",options:["Eager loading uses React.eager() instead of React.lazy()","Eager loading loads all components at startup while lazy loading loads them on demand","Eager loading is for class components while lazy loading is for functional components","Eager loading is automated by React while lazy loading requires manual implementation"],code:void 0,nextQuestionPath:"how-does-react-s-concurrent-mode-relate-to-lazy-loading",correctAnswer:2,explanation:"The main difference is that eager loading loads all components during the initial application startup, resulting in a larger initial bundle but immediate availability of all features. Lazy loading, in contrast, loads components only when they're needed, resulting in a smaller initial bundle and faster startup time, but with potential delays when accessing features for the first time. By default, React uses eager loading (standard imports); lazy loading requires explicit implementation using React.lazy() and dynamic imports.",id:572,quizId:28},21)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=47153)}),_N_E=e.O()}]);