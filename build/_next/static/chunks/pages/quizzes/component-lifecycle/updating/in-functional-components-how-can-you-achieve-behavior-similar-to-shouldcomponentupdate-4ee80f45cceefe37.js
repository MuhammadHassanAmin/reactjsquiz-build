(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21939],{90773:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/in-functional-components-how-can-you-achieve-behavior-similar-to-shouldcomponentupdate",function(){return t(34172)}])},16833:function(e,o,t){"use strict";t.d(o,{Z:function(){return c}});var n=t(85893),s=t(67294),a=e=>{let{adClient:o="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:a="auto",className:c,fullWidthResponsive:i="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,n.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(c),style:{display:"block",...r},"data-ad-client":o,"data-ad-slot":t,"data-ad-format":a,"data-full-width-responsive":i}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},34172:function(e,o,t){"use strict";t.r(o),t.d(o,{__N_SSG:function(){return i}});var n=t(85893),s=t(73903),a=t(25190),c=t(16833),i=!0;o.default=(0,a.Z)((0,c.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:14,totalQuestions:20,index:14,question:"In functional components, how can you achieve behavior similar to shouldComponentUpdate?",options:["Using the useUpdateEffect hook","Wrapping the component with React.memo","Implementing a custom shouldUpdate function","Using the useMemo hook for the entire component"],code:void 0,nextQuestionPath:"what-is-the-most-common-use-case-for-getsnapshotbeforeupdate",correctAnswer:2,explanation:"In functional components, you can achieve behavior similar to shouldComponentUpdate by wrapping the component with React.memo. This higher-order component performs a shallow comparison of props and only re-renders the component if the props have changed. For more control, you can provide a custom comparison function as the second argument to React.memo.",id:505,quizId:25},14)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=90773)}),_N_E=e.O()}]);