(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57947],{76726:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/when-should-you-not-use-react-memo",function(){return n(85553)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:r="auto",className:a,fullWidthResponsive:c="true"}=e,i=(0,s.useRef)(null),d=(0,s.useRef)(!1),[u,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":r,"data-full-width-responsive":c}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},85553:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),r=n(25190),a=n(16833),c=!0;t.default=(0,r.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"When should you NOT use React.memo?",options:["For components that rarely re-render","For components where the props change frequently","For components with many children","For components with complex rendering logic"],code:void 0,nextQuestionPath:"what-s-the-primary-purpose-of-the-usememo-hook",correctAnswer:2,explanation:"You should not use React.memo for components where the props change frequently with almost every render. In such cases, the overhead of prop comparison might exceed the performance benefit of skipping re-renders. React.memo is most beneficial for pure components that render the same result given the same props and don't rely on external state or context that changes frequently.",id:533,quizId:27},2)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=76726)}),_N_E=e.O()}]);