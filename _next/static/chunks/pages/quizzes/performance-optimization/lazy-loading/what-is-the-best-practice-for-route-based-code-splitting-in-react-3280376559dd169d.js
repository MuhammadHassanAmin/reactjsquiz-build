(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29345],{3677:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/lazy-loading/what-is-the-best-practice-for-route-based-code-splitting-in-react",function(){return n(96044)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:a}=e,i=(0,s.useRef)(null),r=(0,s.useRef)(!1),[c,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[c]),c)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},96044:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),s=n(73903),a=n(41354),i=n(16833),r=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:7,totalQuestions:30,index:7,question:"What is the best practice for route-based code splitting in React?",options:["Lazy load all components regardless of size","Lazy load components based on routes to load only what's needed for the current page","Avoid lazy loading entirely for route components","Lazy load only images and media content"],code:void 0,nextQuestionPath:"what-is-the-purpose-of-the-fallback-prop-in-react-suspense",correctAnswer:2,explanation:"The best practice for route-based code splitting in React is to lazy load components based on routes. This approach loads only what's needed for the current page the user is viewing. Since routes naturally correspond to separate pages in your application, they make ideal splitting points. Users only need the code for the current route, and you can preload the code for likely next routes. This creates a good balance between performance and user experience, as it reduces initial load time while maintaining smooth navigation.",id:558,quizId:28},7)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=3677)}),_N_E=e.O()}]);