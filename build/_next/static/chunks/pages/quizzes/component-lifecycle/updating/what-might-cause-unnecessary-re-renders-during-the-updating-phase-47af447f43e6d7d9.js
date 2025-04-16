(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61896],{30221:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-might-cause-unnecessary-re-renders-during-the-updating-phase",function(){return t(13565)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(85893),o=t(67294),r=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",adFormat:r="auto",className:a,fullWidthResponsive:c="true"}=e,d=(0,o.useRef)(null),i=(0,o.useRef)(!1),[u,l]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t,"data-ad-format":r,"data-full-width-responsive":c}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(r,{adSlot:"6208304795",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},13565:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var s=t(85893),o=t(73903),r=t(25190),a=t(16833),c=!0;n.default=(0,r.Z)((0,a.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"What might cause unnecessary re-renders during the updating phase?",options:["Using PureComponent instead of Component","Implementing shouldComponentUpdate","Creating new objects or functions in the render method","Using functional components with React.memo"],code:void 0,nextQuestionPath:"how-does-purecomponent-differ-from-component-during-the-updating-phase",correctAnswer:3,explanation:"Creating new objects or functions in the render method can cause unnecessary re-renders during the updating phase. When parent components re-render, they pass these newly created objects or functions as props to child components. Since references to these objects/functions change on every render (even if their contents are identical), child components will see them as new props and re-render unnecessarily, unless they're wrapped in React.memo or have shouldComponentUpdate implemented.",id:503,quizId:25},12)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=30221)}),_N_E=e.O()}]);