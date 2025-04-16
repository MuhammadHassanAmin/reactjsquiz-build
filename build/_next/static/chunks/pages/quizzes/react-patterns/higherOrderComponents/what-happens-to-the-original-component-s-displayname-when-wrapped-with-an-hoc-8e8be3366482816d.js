(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41228],{4894:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-happens-to-the-original-component-s-displayname-when-wrapped-with-an-hoc",function(){return n(938)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:r,fullWidthResponsive:d="true",style:i={}}=e,c=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(r),style:{display:"block",...i},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":d}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},938:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var o=n(85893),s=n(73903),a=n(25190),r=n(16833),d=!0;t.default=(0,a.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"What happens to the original component's displayName when wrapped with an HOC?",options:["It remains unchanged","It gets completely replaced by the HOC's name","It's lost and becomes 'Anonymous'","It should be manually preserved or enhanced for debugging"],code:void 0,nextQuestionPath:"how-should-hocs-handle-the-ref-prop",correctAnswer:4,explanation:"When a component is wrapped with an HOC, its displayName should be manually preserved or enhanced for debugging purposes. A good practice is to set the displayName of the wrapper component to reflect both the HOC name and the wrapped component's name (e.g., 'withAuth(UserProfile)').",id:457,quizId:23},6)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=4894)}),_N_E=e.O()}]);