(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20603],{71106:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useImperativeHandle/how-does-the-useimperativehandle-hook-handle-the-cleanup-of-exposed-methods",function(){return n(53940)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:d,fullWidthResponsive:r="true",style:u={}}=e,c=(0,s.useRef)(null),i=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(d),style:{display:"block",...u},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":r}):null};function d(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},53940:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),s=n(73903),a=n(25190),d=n(16833),r=!0;t.default=(0,a.Z)((0,d.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"useImperativeHandle"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"How does the useImperativeHandle hook handle the cleanup of exposed methods?",options:["It automatically cleans up exposed methods on component unmount","It requires manual cleanup of exposed methods","It retains exposed methods even after component unmount","It throws an error if exposed methods are not cleaned up"],code:void 0,nextQuestionPath:"what-is-the-main-difference-between-useimperativehandle-and-useref",correctAnswer:1,explanation:"The useImperativeHandle hook does not inherently clean up exposed methods because they are part of the component's functionality. However, the cleanup of effects within the component, if needed, should be handled using the cleanup function returned by useEffect.",id:105,quizId:6},15)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=71106)}),_N_E=e.O()}]);