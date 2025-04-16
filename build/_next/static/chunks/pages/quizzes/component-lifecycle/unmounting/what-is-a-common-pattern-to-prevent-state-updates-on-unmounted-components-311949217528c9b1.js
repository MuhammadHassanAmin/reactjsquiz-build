(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57913],{32344:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/what-is-a-common-pattern-to-prevent-state-updates-on-unmounted-components",function(){return n(38736)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:c,fullWidthResponsive:i="true",style:d={}}=e,l=(0,s.useRef)(null),u=(0,s.useRef)(!1),[r,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[r]),r)?(0,o.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(c),style:{display:"block",...d},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":i}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},38736:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),s=n(73903),a=n(25190),c=n(16833),i=!0;t.default=(0,a.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:9,totalQuestions:20,index:9,question:"What is a common pattern to prevent state updates on unmounted components?",options:["Use React.memo","Use a boolean flag to track if the component is mounted","Wrap all state updates in setTimeout","Use the useReducer hook instead of useState"],code:void 0,nextQuestionPath:"how-do-keys-in-react-lists-affect-component-unmounting",correctAnswer:2,explanation:"A common pattern is to use a boolean flag (often named 'isMounted') to track if the component is still mounted. This flag is set to true when the component mounts and false when it unmounts. Before updating state in async callbacks, the code checks this flag and only proceeds if the component is still mounted, preventing updates on unmounted components.",id:520,quizId:26},9)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=32344)}),_N_E=e.O()}]);