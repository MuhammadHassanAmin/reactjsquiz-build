(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93647],{4134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/when-is-componentdidupdate-called-in-the-component-lifecycle",function(){return n(47829)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:a}=e,d=(0,s.useRef)(null),c=(0,s.useRef)(!1),[i,r]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(r(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(i){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[i]),i)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function d(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},47829:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),a=n(41354),d=n(16833),c=!0;t.default=(0,a.Z)((0,d.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:3,totalQuestions:20,index:3,question:"When is componentDidUpdate() called in the component lifecycle?",options:["Before the component updates","Immediately after rendering","After the update has been committed to the DOM","Only when shouldComponentUpdate returns true"],code:void 0,nextQuestionPath:"what-is-a-common-mistake-when-using-componentdidupdate",correctAnswer:3,explanation:"The componentDidUpdate() method is called after the update has been committed to the DOM. This means the component has re-rendered and the changes have been applied to the actual DOM. It's the ideal place to perform side effects based on the new state or props, such as network requests or DOM manipulations, as long as they're wrapped in a condition to prevent infinite loops.",id:494,quizId:25},3)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=4134)}),_N_E=e.O()}]);