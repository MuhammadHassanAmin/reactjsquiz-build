(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50063],{65193:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/what-s-the-difference-between-a-component-being-unmounted-versus-suspended",function(){return t(8723)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(85893),s=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:r="auto",className:c,fullWidthResponsive:i="true"}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[a,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(a){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[a]),a)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(c),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":r,"data-full-width-responsive":i}):null};function c(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},8723:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var o=t(85893),s=t(73903),r=t(25190),c=t(16833),i=!0;n.default=(0,r.Z)((0,c.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:11,totalQuestions:20,index:11,question:"What's the difference between a component being unmounted versus suspended?",options:["They are different terms for the same concept","Unmounted components are removed from the DOM; suspended components are hidden but remain in the DOM","Suspended components have their lifecycle methods paused; unmounted components are completely removed","Unmounting is for class components; suspension is for functional components"],code:void 0,nextQuestionPath:"how-can-you-test-if-a-component-s-unmounting-cleanup-works-correctly",correctAnswer:3,explanation:"Unmounting means the component is completely removed from the React component tree and DOM, triggering cleanup. Suspension (as in React's Suspense feature) pauses rendering of a component while waiting for something (like data or code), but doesn't unmount it. The component's state is preserved during suspension, unlike unmounting where state is destroyed.",id:522,quizId:26},11)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=65193)}),_N_E=e.O()}]);