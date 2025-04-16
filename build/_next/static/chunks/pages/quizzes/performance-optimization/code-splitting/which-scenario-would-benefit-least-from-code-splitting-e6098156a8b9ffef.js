(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92347],{75022:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/which-scenario-would-benefit-least-from-code-splitting",function(){return i(83322)}])},16833:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(85893),o=i(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:i="6753219060",adFormat:s="auto",className:a,fullWidthResponsive:l="true"}=e,c=(0,o.useRef)(null),r=(0,o.useRef)(!1),[d,u]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[d]),d)?(0,n.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":i,"data-ad-format":s,"data-full-width-responsive":l}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(s,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},83322:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return l}});var n=i(85893),o=i(73903),s=i(25190),a=i(16833),l=!0;t.default=(0,s.Z)((0,a.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"Which scenario would benefit LEAST from code splitting?",options:["A complex dashboard with multiple data visualizations","A multi-step form with different sections","A small single-page application with minimal functionality","An e-commerce site with product categories and search"],code:void 0,nextQuestionPath:"what-is-the-magic-comments-feature-in-webpack-related-to-code-splitting",correctAnswer:3,explanation:"A small single-page application with minimal functionality would benefit least from code splitting. Code splitting provides the most benefit for larger applications where loading everything upfront would cause significant delays. For a small SPA with minimal functionality, the overhead of splitting and loading multiple chunks might outweigh the benefits, as the entire application might be small enough to load quickly as a single bundle. Always measure performance impact before and after implementing code splitting to ensure it's providing genuine benefits for your specific application.",id:597,quizId:29},16)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=75022)}),_N_E=e.O()}]);