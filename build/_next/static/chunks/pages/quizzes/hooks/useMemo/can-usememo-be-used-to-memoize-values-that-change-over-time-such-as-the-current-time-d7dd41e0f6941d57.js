(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3425],{87496:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useMemo/can-usememo-be-used-to-memoize-values-that-change-over-time-such-as-the-current-time",function(){return s(86294)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(85893),o=s(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",className:i}=e,a=(0,o.useRef)(null),r=(0,o.useRef)(!1),[c,u]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(u(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(c){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{a.current&&!r.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),r.current=!0)}}}},[c]),c)?(0,n.jsx)("ins",{ref:a,className:"adsbygoogle ".concat(i),style:{display:"block"},"data-ad-client":t,"data-ad-slot":s}):null};function a(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,n.jsx)("div",{children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("div",{children:(0,n.jsx)(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},86294:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return u}});var n=s(85893),o=s(41869),i=s(41354),a=s(16833),r=s(67294),c=s(11163),u=!0;t.default=(0,i.Z)((0,a.Z)(()=>{let e=(0,c.useRouter)();return(0,r.useEffect)(()=>{setTimeout(()=>{e.prefetch("/what-is-the-recommended-approach-for-determining-the-dependencies-array-in-usememo")},5e3)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Hooks - useMemo Quiz"}),(0,n.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,n.jsx)(o.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"Can useMemo be used to memoize values that change over time, such as the current time?",options:["Yes, useMemo effectively memoizes values that change over time","No, useMemo can only memoize static values","It depends on the specific implementation of the hook","Values that change over time cannot be memoized in React"],nextQuestionPath:"what-is-the-recommended-approach-for-determining-the-dependencies-array-in-usememo",correctAnswer:"2",explanation:"No, useMemo is primarily used to memoize values based on their dependencies, so it's not suitable for memoizing values that change over time, such as the current time.",id:"82"},12)})]})}))}},function(e){e.O(0,[1966,5675,11,2888,9774,179],function(){return e(e.s=87496)}),_N_E=e.O()}]);