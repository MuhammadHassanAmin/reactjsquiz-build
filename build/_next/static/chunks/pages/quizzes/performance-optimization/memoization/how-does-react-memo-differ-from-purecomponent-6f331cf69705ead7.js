(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84299],{47438:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/how-does-react-memo-differ-from-purecomponent",function(){return t(37352)}])},16833:function(e,o,t){"use strict";t.d(o,{Z:function(){return r}});var n=t(85893),s=t(67294),a=e=>{let{adClient:o="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:a="auto",className:r,fullWidthResponsive:c="true"}=e,i=(0,s.useRef)(null),l=(0,s.useRef)(!1),[m,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(m){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[m]),m)?(0,n.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":o,"data-ad-slot":t,"data-ad-format":a,"data-full-width-responsive":c}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},37352:function(e,o,t){"use strict";t.r(o),t.d(o,{__N_SSG:function(){return c}});var n=t(85893),s=t(73903),a=t(25190),r=t(16833),c=!0;o.default=(0,a.Z)((0,r.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:14,totalQuestions:20,index:14,question:"How does React.memo differ from PureComponent?",options:["React.memo works with functional components, PureComponent is for class components","React.memo performs deep comparison, PureComponent performs shallow comparison","React.memo affects only props, PureComponent affects both props and state","React.memo is for higher-order components only, PureComponent is for regular components"],code:void 0,nextQuestionPath:"what-happens-to-a-memoized-value-in-usememo-when-the-component-unmounts",correctAnswer:1,explanation:"React.memo works with functional components while PureComponent is for class components. Both implement shallow comparison of props by default to determine if a re-render is necessary. The key difference is in their targets: React.memo is a higher-order component that wraps functional components, while PureComponent is a base class that class components can extend. Additionally, PureComponent also performs shallow comparison on state changes, while functional components with React.memo manage state separately through hooks.",id:545,quizId:27},14)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=47438)}),_N_E=e.O()}]);