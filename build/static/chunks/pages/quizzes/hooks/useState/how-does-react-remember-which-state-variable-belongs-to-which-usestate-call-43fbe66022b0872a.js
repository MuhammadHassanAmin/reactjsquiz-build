(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71823],{63752:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useState/how-does-react-remember-which-state-variable-belongs-to-which-usestate-call",function(){return n(68058)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(85893),o=n(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",className:a}=e,r=(0,o.useRef)(null),c=(0,o.useRef)(!1),[l,d]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(d(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(l){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[l]),l)?(0,s.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":t,"data-ad-slot":n}):null};function r(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},68058:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var s=n(85893),o=n(55989),a=n(41354),r=n(16833),c=!0;t.default=(0,a.Z)((0,r.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"useState"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:3,totalQuestions:10,index:3,question:"How does React remember which state variable belongs to which useState call?",options:["It makes a lookup table","It remembers the calling order","It traverses the calls again, whenever needed","None of the above"],code:void 0,nextQuestionPath:"how-many-calls-can-we-make-to-usestate-or-useeffect-in-a-single-component",correctAnswer:2,explanation:"React relies on the order in which the useState (and other hooks) are called. It keeps track of the hooks based on the order they are called within the component during each render.",id:23,quizId:2},3)})]})))}},function(e){e.O(0,[41966,25675,7426,92888,49774,40179],function(){return e(e.s=63752)}),_N_E=e.O()}]);