(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18169],{17741:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/unmounting/in-what-order-do-unmounting-lifecycle-methods-execute-when-a-parent-and-child-component-both-unmount",function(){return t(46922)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(85893),s=t(67294),c=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:c}=e,r=(0,s.useRef)(null),a=(0,s.useRef)(!1),[i,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(i){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!a.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),a.current=!0)}}}},[i]),i)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(c),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function r(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(c,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},46922:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var o=t(85893),s=t(73903),c=t(41354),r=t(16833),a=!0;n.default=(0,c.Z)((0,r.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"In what order do unmounting lifecycle methods execute when a parent and child component both unmount?",options:["Parent componentWillUnmount first, then child","Child componentWillUnmount first, then parent","Both execute simultaneously","Order is not guaranteed by React"],code:void 0,nextQuestionPath:"what-can-happen-if-an-asynchronous-operation-tries-to-update-state-after-a-component-unmounts",correctAnswer:2,explanation:"When both parent and child components unmount, React follows a specific order: child components' unmounting lifecycle methods are called before their parent components'. This means the child's componentWillUnmount (or useEffect cleanup) runs first, followed by the parent's. This bottom-up approach ensures children can clean up before their parents.",id:518,quizId:26},7)})]})))}},function(e){e.O(0,[41966,25675,83169,92888,49774,40179],function(){return e(e.s=17741)}),_N_E=e.O()}]);