(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3825],{11654:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/how-does-react-strictmode-affect-component-unmounting",function(){return t(90842)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(85893),s=t(67294),c=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:c="auto",className:i,fullWidthResponsive:a="true"}=e,u=(0,s.useRef)(null),d=(0,s.useRef)(!1),[r,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))u.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{u.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[r]),r)?(0,o.jsx)("ins",{ref:u,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":c,"data-full-width-responsive":a}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6208304795",className:"h-[300px] md:h-full top-0 sticky"})})]})})}constructor(e){super(e)}}}},90842:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var o=t(85893),s=t(73903),c=t(25190),i=t(16833),a=!0;n.default=(0,c.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"How does React StrictMode affect component unmounting?",options:["It has no effect on unmounting","It prevents components from unmounting","It double-invokes unmounting callbacks to help detect side effects","It skips unmounting to improve performance"],code:void 0,nextQuestionPath:"what-s-a-recommended-pattern-for-managing-async-operations-when-components-might-unmount",correctAnswer:3,explanation:"React StrictMode deliberately double-invokes certain functions, including component unmounting callbacks (componentWillUnmount and useEffect cleanup functions), to help detect unexpected side effects. This means in development mode with StrictMode enabled, your cleanup functions might run more times than expected, which helps identify issues like improper cleanup that might only appear in certain conditions.",id:529,quizId:26},18)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=11654)}),_N_E=e.O()}]);