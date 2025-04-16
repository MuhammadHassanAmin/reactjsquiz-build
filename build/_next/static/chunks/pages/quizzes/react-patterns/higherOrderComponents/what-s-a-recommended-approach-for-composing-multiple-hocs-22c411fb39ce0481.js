(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97194],{26822:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/react-patterns/higherOrderComponents/what-s-a-recommended-approach-for-composing-multiple-hocs",function(){return o(55150)}])},16833:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var s=o(85893),n=o(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:o="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:c="true",style:r={}}=e,l=(0,n.useRef)(null),d=(0,n.useRef)(!1),[u,p]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(a),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":o,"data-ad-format":i,"data-full-width-responsive":c}):null};function a(e){return class extends n.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})}),(0,s.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},55150:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return c}});var s=o(85893),n=o(73903),i=o(25190),a=o(16833),c=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(n.Y3,{activeQuestionIndex:9,totalQuestions:20,index:9,question:"What's a recommended approach for composing multiple HOCs?",options:["Nesting HOC calls manually","Using a composition utility like compose","Using the spread operator on components","Combining all HOCs into a single one"],code:void 0,nextQuestionPath:"which-of-the-following-is-a-best-practice-when-creating-hocs",correctAnswer:2,explanation:"Using a composition utility like compose (from libraries like Redux or Recompose) is a recommended approach for composing multiple HOCs. This avoids deeply nested function calls and makes the code more readable. For example: compose(withAuth, withStyles, withRouter)(Component) is cleaner than withAuth(withStyles(withRouter(Component))).",id:460,quizId:23},9)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=26822)}),_N_E=e.O()}]);