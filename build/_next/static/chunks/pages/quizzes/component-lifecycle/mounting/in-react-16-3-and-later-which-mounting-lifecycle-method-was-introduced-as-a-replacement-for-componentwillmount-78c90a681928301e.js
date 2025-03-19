(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62244],{16778:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/in-react-16-3-and-later-which-mounting-lifecycle-method-was-introduced-as-a-replacement-for-componentwillmount",function(){return n(38108)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:r}=e,a=(0,s.useRef)(null),c=(0,s.useRef)(!1),[i,d]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(i){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[i]),i)?(0,o.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},38108:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(55989),r=n(41354),a=n(16833),c=!0;t.default=(0,r.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"In React 16.3 and later, which mounting lifecycle method was introduced as a replacement for componentWillMount?",options:["getDerivedStateFromProps","getSnapshotBeforeUpdate","shouldComponentUpdate","componentDidCatch"],code:void 0,nextQuestionPath:"what-is-the-primary-purpose-of-the-constructor-in-a-react-class-component",correctAnswer:1,explanation:"In React 16.3 and later, the static getDerivedStateFromProps method was introduced as a safer alternative to the deprecated componentWillMount. Unlike componentWillMount, getDerivedStateFromProps is called before every render (not just mounting) and is designed to derive state from props in a more predictable way that works better with async rendering.",id:484,quizId:24},13)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=16778)}),_N_E=e.O()}]);