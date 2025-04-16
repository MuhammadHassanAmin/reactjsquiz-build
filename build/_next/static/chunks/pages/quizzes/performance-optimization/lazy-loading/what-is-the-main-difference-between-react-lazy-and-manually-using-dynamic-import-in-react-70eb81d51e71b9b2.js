(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9353],{84982:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-is-the-main-difference-between-react-lazy-and-manually-using-dynamic-import-in-react",function(){return n(53876)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(85893),i=n(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:o="auto",className:s,fullWidthResponsive:r="true",style:c={}}=e,d=(0,i.useRef)(null),l=(0,i.useRef)(!1),[u,m]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(m(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,a.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(s),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":o,"data-full-width-responsive":r}):null};function s(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,a.jsx)("div",{children:(0,a.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,a.jsx)("div",{children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},53876:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var a=n(85893),i=n(73903),o=n(25190),s=n(16833),r=!0;t.default=(0,o.Z)((0,s.Z)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,a.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,a.jsx)(i.Y3,{activeQuestionIndex:13,totalQuestions:30,index:13,question:"What is the main difference between React.lazy and manually using dynamic import() in React?",options:["React.lazy has built-in error handling","Dynamic import() works with server-side rendering but React.lazy doesn't","React.lazy integrates with React's component model while dynamic import() just returns a Promise","Dynamic import() is deprecated in favor of React.lazy"],code:void 0,nextQuestionPath:"what-would-be-a-good-candidate-for-lazy-loading-in-a-typical-react-application",correctAnswer:3,explanation:"The main difference between React.lazy and manually using dynamic import() is that React.lazy integrates with React's component model while dynamic import() just returns a Promise. React.lazy converts the Promise returned by dynamic import() into a React component that can be directly used in JSX. It also integrates with Suspense for loading states. With manual dynamic import(), you would need to handle the Promise resolution yourself, manage component state for loading/error conditions, and implement your own rendering logic, which is more complex and error-prone.",id:564,quizId:28},13)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=84982)}),_N_E=e.O()}]);