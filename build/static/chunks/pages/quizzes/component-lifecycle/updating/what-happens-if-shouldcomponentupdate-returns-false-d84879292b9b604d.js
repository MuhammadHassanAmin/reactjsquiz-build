(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79141],{31058:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-happens-if-shouldcomponentupdate-returns-false",function(){return t(95900)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(85893),s=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:r}=e,i=(0,s.useRef)(null),a=(0,s.useRef)(!1),[d,c]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(c(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0)}}}},[d]),d)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},95900:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var o=t(85893),s=t(55989),r=t(41354),i=t(16833),a=!0;n.default=(0,r.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:9,totalQuestions:20,index:9,question:"What happens if shouldComponentUpdate() returns false?",options:["The component still re-renders but skips componentDidUpdate","The component update process is completely skipped","The component will throw an error","The component will still update its DOM representation"],nextQuestionPath:"what-is-a-key-difference-between-shouldcomponentupdate-and-react-memo",correctAnswer:2,explanation:"If shouldComponentUpdate() returns false, the component update process is completely skipped. This means render(), getSnapshotBeforeUpdate(), and componentDidUpdate() will not be invoked, and neither the component nor any of its children will re-render. This is useful for performance optimization when you know a render is unnecessary.",id:500,quizId:25},9)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=31058)}),_N_E=e.O()}]);