(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94093],{25129:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/code-splitting/what-is-preloading-in-the-context-of-code-splitting",function(){return n(79012)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(85893),s=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:i}=e,r=(0,s.useRef)(null),l=(0,s.useRef)(!1),[c,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[c]),c)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},79012:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var o=n(85893),s=n(55989),i=n(41354),r=n(16833),l=!0;t.default=(0,i.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"What is 'preloading' in the context of code splitting?",options:["Loading all possible code chunks when the application starts","Telling the browser to load resources that will be needed soon","Pre-rendering components before they're visible","Compressing code before it's sent to the browser"],code:void 0,nextQuestionPath:"which-scenario-would-benefit-least-from-code-splitting",correctAnswer:2,explanation:'In the context of code splitting, preloading is a technique that tells the browser to load resources that will be needed soon, but not immediately. For example, you might preload a code chunk when a user hovers over a button that will require that chunk when clicked. This can be implemented by triggering the dynamic import early but not using the result yet, or through resource hints like <link rel="preload">. Preloading improves perceived performance by starting to load resources before they\'re explicitly needed, making interactions feel more responsive.',id:596,quizId:29},15)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=25129)}),_N_E=e.O()}]);