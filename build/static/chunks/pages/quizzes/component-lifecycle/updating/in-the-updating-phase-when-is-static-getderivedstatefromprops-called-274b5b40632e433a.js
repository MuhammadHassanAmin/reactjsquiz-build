(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18534],{94740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/in-the-updating-phase-when-is-static-getderivedstatefromprops-called",function(){return n(47839)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),d=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:d}=e,a=(0,s.useRef)(null),r=(0,s.useRef)(!1),[i,c]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(c(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(i){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[i]),i)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(d),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(d,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(d,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},47839:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),s=n(55989),d=n(41354),a=n(16833),r=!0;t.default=(0,d.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"In the updating phase, when is static getDerivedStateFromProps() called?",options:["Before shouldComponentUpdate()","After shouldComponentUpdate() but before render()","After render() but before componentDidUpdate()","After componentDidUpdate()"],code:void 0,nextQuestionPath:"what-parameters-does-componentdidupdate-receive",correctAnswer:1,explanation:"During the updating phase, static getDerivedStateFromProps() is called before shouldComponentUpdate(). This method is invoked on every render, regardless of the cause, and allows a component to update its state based on changes in props. It receives the new props and current state, and returns an object to update state or null to indicate no update is needed.",id:496,quizId:25},5)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=94740)}),_N_E=e.O()}]);