(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72300],{68796:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-is-a-potential-issue-with-using-multiple-hocs-on-a-single-component",function(){return n(51509)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(85893),o=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:r="true",style:c={}}=e,l=(0,o.useRef)(null),d=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(a),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":r}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},51509:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var s=n(85893),o=n(73903),i=n(25190),a=n(16833),r=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"What is a potential issue with using multiple HOCs on a single component?",options:["Prop naming collisions","Excessive memory usage","Browser compatibility issues","Component unmounting problems"],code:void 0,nextQuestionPath:"what-happens-to-the-original-component-s-displayname-when-wrapped-with-an-hoc",correctAnswer:1,explanation:"Prop naming collisions can occur when multiple HOCs are applied to a single component. If different HOCs inject props with the same name, they may overwrite each other's values. This issue is sometimes called 'prop shadowing' and requires careful design of HOCs to avoid.",id:456,quizId:23},5)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=68796)}),_N_E=e.O()}]);