(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86386],{59076:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/what-is-a-key-difference-between-static-imports-and-dynamic-imports",function(){return n(53994)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(85893),a=n(67294),o=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:o="auto",className:s,fullWidthResponsive:d="true"}=e,c=(0,a.useRef)(null),r=(0,a.useRef)(!1),[l,p]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[l]),l)?(0,i.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(s),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":o,"data-full-width-responsive":d}):null};function s(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,i.jsx)("div",{children:(0,i.jsx)(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,i.jsx)("div",{children:(0,i.jsx)(e,{...this.props})}),(0,i.jsx)("div",{children:(0,i.jsx)(o,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},53994:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var i=n(85893),a=n(73903),o=n(25190),s=n(16833),d=!0;t.default=(0,o.Z)((0,s.Z)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,i.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,i.jsx)(a.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"What is a key difference between static imports and dynamic imports?",options:["Static imports are faster to execute than dynamic imports","Static imports are loaded at compile time, dynamic imports can be loaded at runtime","Static imports are only available in TypeScript","Dynamic imports don't support named exports"],code:void 0,nextQuestionPath:"how-does-code-splitting-relate-to-the-concept-of-progressive-web-applications",correctAnswer:2,explanation:"The key difference is that static imports (using the import statement) are loaded and evaluated at compile time and are always included in the initial bundle, while dynamic imports (using the import() function) can be loaded at runtime when needed. With dynamic imports, the imported code is split into a separate chunk that's only fetched when the import() function is called. This on-demand loading capability is what enables effective code splitting in modern JavaScript applications.",id:583,quizId:29},2)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=59076)}),_N_E=e.O()}]);