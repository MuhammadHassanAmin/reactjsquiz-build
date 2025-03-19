(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42378],{81759:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/how-can-you-test-if-a-component-s-unmounting-cleanup-works-correctly",function(){return t(97883)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(85893),s=t(67294),i=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:i}=e,c=(0,s.useRef)(null),r=(0,s.useRef)(!1),[u,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},97883:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r}});var o=t(85893),s=t(55989),i=t(41354),c=t(16833),r=!0;n.default=(0,i.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"How can you test if a component's unmounting cleanup works correctly?",options:["You can't test unmounting behavior","Use React Testing Library's unmount() or cleanup() functions","Only through manual testing in the browser","Set component state to null"],code:void 0,nextQuestionPath:"what-happens-if-an-error-is-thrown-during-the-unmounting-phase",correctAnswer:2,explanation:"You can test unmounting behavior using testing libraries. React Testing Library provides an unmount() function that simulates component unmounting. After calling this function, you can verify that cleanup has occurred correctly, such as checking if timers were cleared or listeners removed. This allows automated testing of unmounting behavior.",id:523,quizId:26},12)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=81759)}),_N_E=e.O()}]);