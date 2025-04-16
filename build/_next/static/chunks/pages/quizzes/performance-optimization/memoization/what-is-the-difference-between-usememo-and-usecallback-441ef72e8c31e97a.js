(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54881],{4900:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/what-is-the-difference-between-usememo-and-usecallback",function(){return s(55880)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(85893),o=s(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:c="true"}=e,u=(0,o.useRef)(null),l=(0,o.useRef)(!1),[r,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))u.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{u.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[r]),r)?(0,n.jsx)("ins",{ref:u,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":s,"data-ad-format":a,"data-full-width-responsive":c}):null};function i(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},55880:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c}});var n=s(85893),o=s(73903),a=s(25190),i=s(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"What is the difference between useMemo and useCallback?",options:["useMemo is for class components, useCallback is for functional components","useMemo works with useEffect, useCallback doesn't","useMemo memoizes returned values, useCallback memoizes functions","useMemo is faster than useCallback"],code:void 0,nextQuestionPath:"when-does-a-memoized-component-with-react-memo-re-render",correctAnswer:3,explanation:"The key difference is that useMemo memoizes returned values while useCallback memoizes functions. useMemo is used to memoize the result of a computation (like `useMemo(() => computeExpensiveValue(a, b), [a, b])`), whereas useCallback is used to memoize a function definition itself (like `useCallback(() => { doSomething(a, b) }, [a, b])`). useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",id:536,quizId:27},5)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=4900)}),_N_E=e.O()}]);