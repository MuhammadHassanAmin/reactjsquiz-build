(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34028],{73699:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/which-of-the-following-is-not-a-reason-for-a-component-to-unmount",function(){return t(70105)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(85893),s=t(67294),c=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:c="auto",className:a,fullWidthResponsive:i="true",style:r={}}=e,d=(0,s.useRef)(null),u=(0,s.useRef)(!1),[l,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!u.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),u.current=!0)}}}},[l]),l)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block",...r},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":c,"data-full-width-responsive":i}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},70105:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var o=t(85893),s=t(73903),c=t(25190),a=t(16833),i=!0;n.default=(0,c.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"Which of the following is NOT a reason for a component to unmount?",options:["The component's state changes","The parent component re-renders","The user navigates away from a route","The component is conditionally rendered"],code:void 0,nextQuestionPath:"what-are-common-resources-to-clean-up-in-componentwillunmount-or-useeffect-cleanup",correctAnswer:1,explanation:"A component does not unmount simply because its state changes. Components can re-render with new state or props without being unmounted. Unmounting typically occurs when the parent component no longer renders the child component, when the user navigates away from a route that contained the component, or when the component is conditionally rendered and the condition changes.",id:515,quizId:26},4)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=73699)}),_N_E=e.O()}]);