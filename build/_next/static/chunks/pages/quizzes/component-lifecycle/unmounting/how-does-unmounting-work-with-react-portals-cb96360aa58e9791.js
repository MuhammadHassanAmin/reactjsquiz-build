(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67416],{28394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/how-does-unmounting-work-with-react-portals",function(){return n(24269)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:r="auto",className:a,fullWidthResponsive:c="true",style:i={}}=e,d=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block",...i},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":r,"data-full-width-responsive":c}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[336px]"})}),(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(r,{adSlot:"6208304795",className:"h-[336px]"})})]})]})})}constructor(e){super(e)}}}},24269:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(73903),r=n(25190),a=n(16833),c=!0;t.default=(0,r.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:17,totalQuestions:20,index:17,question:"How does unmounting work with React Portals?",options:["Portals don't support unmounting","The portal content unmounts when the parent component unmounts, even if rendered elsewhere in the DOM","Portals must be manually unmounted separately","Portal content stays mounted until the target DOM element is removed"],code:void 0,nextQuestionPath:"how-does-react-strictmode-affect-component-unmounting",correctAnswer:2,explanation:"Even though React Portals render children into a different part of the DOM tree, their lifecycle is tied to the parent component that created them. When the parent component unmounts, the portal content also unmounts, triggering appropriate unmounting lifecycle methods, regardless of where in the DOM the portal content was rendered.",id:528,quizId:26},17)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=28394)}),_N_E=e.O()}]);