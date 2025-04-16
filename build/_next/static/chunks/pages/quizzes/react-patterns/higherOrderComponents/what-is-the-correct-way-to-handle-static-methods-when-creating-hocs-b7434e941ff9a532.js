(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13602],{32864:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-is-the-correct-way-to-handle-static-methods-when-creating-hocs",function(){return n(26574)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(85893),o=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true",style:r={}}=e,d=(0,o.useRef)(null),l=(0,o.useRef)(!1),[u,h]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(h(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(i),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},26574:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var s=n(85893),o=n(73903),a=n(25190),i=n(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"What is the correct way to handle static methods when creating HOCs?",options:["Static methods are automatically copied to the resulting component","Using a library like hoist-non-react-statics","Manually copying each static method","Static methods should be converted to instance methods"],code:void 0,nextQuestionPath:"when-should-you-apply-an-hoc-to-a-component",correctAnswer:2,explanation:"Using a library like hoist-non-react-statics is the recommended way to handle static methods in HOCs. This library automatically copies all non-React static methods from the wrapped component to the resulting component, ensuring that important static methods (like getDefaultProps or propTypes) are preserved.",id:463,quizId:23},12)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=32864)}),_N_E=e.O()}]);