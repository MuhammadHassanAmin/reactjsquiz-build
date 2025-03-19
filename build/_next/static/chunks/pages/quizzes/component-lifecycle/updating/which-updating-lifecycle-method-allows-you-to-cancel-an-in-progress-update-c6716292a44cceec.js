(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63605],{62601:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/which-updating-lifecycle-method-allows-you-to-cancel-an-in-progress-update",function(){return n(62420)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(85893),s=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:a}=e,i=(0,s.useRef)(null),c=(0,s.useRef)(!1),[d,l]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(d){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[d]),d)?(0,o.jsx)("ins",{ref:i,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function i(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},62420:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var o=n(85893),s=n(55989),a=n(41354),i=n(16833),c=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:18,totalQuestions:20,index:18,question:"Which updating lifecycle method allows you to cancel an in-progress update?",options:["componentDidUpdate","shouldComponentUpdate","getDerivedStateFromProps","getSnapshotBeforeUpdate"],code:void 0,nextQuestionPath:"what-happens-if-you-call-this-setstate-unconditionally-in-componentdidupdate",correctAnswer:2,explanation:"The shouldComponentUpdate method allows you to cancel an in-progress update by returning false. When this happens, React will skip the rest of the updating lifecycle (render, getSnapshotBeforeUpdate, and componentDidUpdate) for this particular update cycle. This is useful for performance optimization when you know an update would result in the same UI output.",id:509,quizId:25},18)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=62601)}),_N_E=e.O()}]);