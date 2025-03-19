(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38389],{47626:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/which-problem-does-passing-a-new-object-to-a-memoized-child-component-on-every-render-create",function(){return n(73216)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:a}=e,c=(0,s.useRef)(null),i=(0,s.useRef)(!1),[r,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[r]),r)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},73216:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),s=n(55989),a=n(41354),c=n(16833),i=!0;t.default=(0,a.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:10,totalQuestions:20,index:10,question:"Which problem does passing a new object to a memoized child component on every render create?",options:["It causes memory leaks","It bypasses memoization since the object reference changes","It creates conflicts with React's reconciliation algorithm","It makes the application slower than not using memoization"],code:void 0,nextQuestionPath:"how-can-you-memoize-a-child-component-that-receives-an-object-prop-that-changes-on-every-parent-render",correctAnswer:2,explanation:"Passing a new object to a memoized child component on every render bypasses memoization because the object reference changes each time. Even if the contents of the object are identical, a new object reference is created, and shallow comparison (used by React.memo by default) will determine they're different. This causes the memoized component to re-render anyway, defeating the purpose of memoization.",id:541,quizId:27},10)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=47626)}),_N_E=e.O()}]);