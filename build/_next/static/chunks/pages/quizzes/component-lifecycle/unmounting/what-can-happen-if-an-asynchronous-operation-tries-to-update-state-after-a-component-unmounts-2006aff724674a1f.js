(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58397],{87636:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/what-can-happen-if-an-asynchronous-operation-tries-to-update-state-after-a-component-unmounts",function(){return n(64860)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:a="auto",className:r,fullWidthResponsive:i="true"}=e,c=(0,s.useRef)(null),u=(0,s.useRef)(!1),[d,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[d]),d)?(0,o.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(r),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":a,"data-full-width-responsive":i}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},64860:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var o=n(85893),s=n(73903),a=n(25190),r=n(16833),i=!0;t.default=(0,a.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:8,totalQuestions:20,index:8,question:"What can happen if an asynchronous operation tries to update state after a component unmounts?",options:["Nothing, React silently ignores it","It throws a warning about memory leaks","It causes an error: 'Cannot perform a React state update on an unmounted component'","The component remounts automatically"],code:void 0,nextQuestionPath:"what-is-a-common-pattern-to-prevent-state-updates-on-unmounted-components",correctAnswer:3,explanation:"If an asynchronous operation tries to update state after a component unmounts, React will issue an error: 'Cannot perform a React state update on an unmounted component'. This indicates a potential memory leak as the component is trying to update state when it no longer exists, which is why proper cleanup of async operations is essential.",id:519,quizId:26},8)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=87636)}),_N_E=e.O()}]);