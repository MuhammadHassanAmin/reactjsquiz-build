(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81257],{87473:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/performance-optimization/memoization/how-can-you-memoize-a-child-component-that-receives-an-object-prop-that-changes-on-every-parent-render",function(){return o(35761)}])},16833:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(85893),s=o(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:o="6753219060",adFormat:a="auto",className:c,fullWidthResponsive:i="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,m]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(m(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,n.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(c),style:{display:"block",...r},"data-ad-client":t,"data-ad-slot":o,"data-ad-format":a,"data-full-width-responsive":i}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(a,{adSlot:"6208304795",className:"h-[100px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},35761:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return i}});var n=o(85893),s=o(73903),a=o(25190),c=o(16833),i=!0;t.default=(0,a.Z)((0,c.Z)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(s.Y3,{activeQuestionIndex:11,totalQuestions:20,index:11,question:"How can you memoize a child component that receives an object prop that changes on every parent render?",options:["Use React.PureComponent instead of React.memo","Implement shouldComponentUpdate in the child component","Use useMemo to memoize the object in the parent component","Avoid using objects as props"],code:void 0,nextQuestionPath:"what-is-the-potential-downside-of-over-using-memoization-in-react",correctAnswer:3,explanation:"To memoize a child component that receives an object prop, you should use useMemo to memoize the object in the parent component. This ensures the object has a stable reference across renders when its contents haven't changed. For example: `const memoizedObject = useMemo(() => ({ value: someValue }), [someValue]);`. Alternatively, you could use a custom comparison function with React.memo on the child component to deeply compare object props.",id:542,quizId:27},11)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=87473)}),_N_E=e.O()}]);