(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47028],{42328:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/which-method-can-prevent-a-component-from-re-rendering-during-the-updating-phase",function(){return n(7090)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:r}=e,a=(0,s.useRef)(null),d=(0,s.useRef)(!1),[c,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[c]),c)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},7090:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var o=n(85893),s=n(55989),r=n(41354),a=n(16833),d=!0;t.default=(0,r.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:1,totalQuestions:20,index:1,question:"Which method can prevent a component from re-rendering during the updating phase?",options:["componentDidUpdate()","getDerivedStateFromProps()","shouldComponentUpdate()","getSnapshotBeforeUpdate()"],code:void 0,nextQuestionPath:"what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",correctAnswer:3,explanation:"The shouldComponentUpdate() method can prevent a component from re-rendering during the updating phase. It receives the next props and state as arguments and returns a boolean value. If it returns false, React will skip the rendering process for this component (and its children), which can improve performance for components that don't need to update based on certain prop or state changes.",id:492,quizId:25},1)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=42328)}),_N_E=e.O()}]);