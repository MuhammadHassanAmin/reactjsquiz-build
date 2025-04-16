(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15991],{10152:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/what-is-the-recommended-approach-for-fetching-data-in-a-functional-component-during-the-equivalent-of-the-mounting-phase",function(){return n(25694)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,h]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]"})}),(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},25694:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),a=n(25190),i=n(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"What is the recommended approach for fetching data in a functional component during the equivalent of the mounting phase?",options:["Using the useState hook with an initial API call","Using the useEffect hook with an empty dependency array","Using the useLayoutEffect hook for synchronous data fetching","Using a custom useMountingEffect hook"],code:void 0,nextQuestionPath:"",correctAnswer:2,explanation:"The recommended approach for fetching data in a functional component during what would be the mounting phase is using the useEffect hook with an empty dependency array ([]). This ensures the effect runs only once after the initial render, similar to componentDidMount in class components.",id:490,quizId:24},19)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=10152)}),_N_E=e.O()}]);