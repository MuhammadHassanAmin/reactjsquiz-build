(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35497],{69879:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/why-should-unmounting-operations-be-fast",function(){return t(93862)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(85893),s=t(67294),a=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:a}=e,i=(0,s.useRef)(null),c=(0,s.useRef)(!1),[r,u]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[r]),r)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},93862:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var o=t(85893),s=t(55989),a=t(41354),i=t(16833),c=!0;n.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:14,totalQuestions:20,index:14,question:"Why should unmounting operations be fast?",options:["Because React has a timeout for unmounting operations","To improve the application's overall performance during navigation","Because unmounting happens synchronously and blocks the main thread","It's not important; unmounting speed doesn't affect user experience"],nextQuestionPath:"how-does-unmounting-a-component-affect-context-providers-and-consumers",correctAnswer:3,explanation:"Unmounting operations should be fast because they occur synchronously and block the main thread. Since componentWillUnmount and useEffect cleanup functions run synchronously, any slow operations can cause UI freezes or jank. This is particularly important during page transitions where components are unmounting as the user navigates away.",id:525,quizId:26},14)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=69879)}),_N_E=e.O()}]);