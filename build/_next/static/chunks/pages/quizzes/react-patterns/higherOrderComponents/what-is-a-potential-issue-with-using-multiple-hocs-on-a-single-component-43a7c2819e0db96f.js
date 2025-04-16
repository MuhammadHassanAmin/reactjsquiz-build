(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72300],{68796:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-is-a-potential-issue-with-using-multiple-hocs-on-a-single-component",function(){return t(51509)}])},16833:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var n=t(85893),o=t(67294),i=e=>{let{adClient:s="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:r="true",style:c={}}=e,l=(0,o.useRef)(null),d=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,n.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(a),style:{display:"block",...c},"data-ad-client":s,"data-ad-slot":t,"data-ad-format":i,"data-full-width-responsive":r}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})}),(0,n.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,n.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},51509:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return r}});var n=t(85893),o=t(73903),i=t(25190),a=t(16833),r=!0;s.default=(0,i.Z)((0,a.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"What is a potential issue with using multiple HOCs on a single component?",options:["Prop naming collisions","Excessive memory usage","Browser compatibility issues","Component unmounting problems"],code:void 0,nextQuestionPath:"what-happens-to-the-original-component-s-displayname-when-wrapped-with-an-hoc",correctAnswer:1,explanation:"Prop naming collisions can occur when multiple HOCs are applied to a single component. If different HOCs inject props with the same name, they may overwrite each other's values. This issue is sometimes called 'prop shadowing' and requires careful design of HOCs to avoid.",id:456,quizId:23},5)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=68796)}),_N_E=e.O()}]);