(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62312],{46205:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/what-is-a-key-difference-between-the-constructor-and-componentdidmount-methods",function(){return n(25722)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(85893),s=n(67294),c=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:c="auto",className:r,fullWidthResponsive:i="true",style:a={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(r),style:{display:"block",...a},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":c,"data-full-width-responsive":i}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},25722:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),s=n(73903),c=n(25190),r=n(16833),i=!0;t.default=(0,c.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:8,totalQuestions:20,index:8,question:"What is a key difference between the constructor and componentDidMount methods?",options:["The constructor can access props while componentDidMount cannot","The constructor runs on every update while componentDidMount runs only once","The constructor runs before the component is mounted while componentDidMount runs after mounting","The constructor cannot initialize state while componentDidMount can"],code:void 0,nextQuestionPath:"why-is-componentdidmount-a-good-place-to-make-api-calls",correctAnswer:3,explanation:"A key difference is that the constructor runs before the component is mounted to the DOM, while componentDidMount runs after the component has been mounted. This means componentDidMount has access to the DOM and can perform operations like measurements, subscriptions, or direct DOM manipulations that require the component to be rendered first.",id:479,quizId:24},8)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=46205)}),_N_E=e.O()}]);