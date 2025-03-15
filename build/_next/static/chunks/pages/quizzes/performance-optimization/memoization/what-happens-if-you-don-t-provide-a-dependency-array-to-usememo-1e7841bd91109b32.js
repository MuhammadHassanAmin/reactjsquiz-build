(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84100],{70401:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-happens-if-you-don-t-provide-a-dependency-array-to-usememo",function(){return n(85947)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),a=n(67294),s=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:s}=e,i=(0,a.useRef)(null),r=(0,a.useRef)(!1),[d,c]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(c(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[d]),d)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(s),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function i(e){return class extends a.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},85947:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),a=n(55989),s=n(41354),i=n(16833),r=!0;t.default=(0,s.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(a.Y3,{activeQuestionIndex:9,totalQuestions:20,index:9,question:"What happens if you don't provide a dependency array to useMemo?",options:["The memoized value will never update","The function will be memoized indefinitely","The memoized value will be recalculated on every render","React will throw an error"],nextQuestionPath:"which-problem-does-passing-a-new-object-to-a-memoized-child-component-on-every-render-create",correctAnswer:3,explanation:"If you don't provide a dependency array to useMemo, the memoized value will be recalculated on every render, effectively negating the purpose of memoization. It's similar to calling the function directly without useMemo. To properly use useMemo, you should always provide a dependency array that includes all values from the component scope that are used in the computation.",id:540,quizId:27},9)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=70401)}),_N_E=e.O()}]);