(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4498],{99093:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useCallback/what-happens-if-you-omit-the-dependencies-array-in-the-usecallback-hook",function(){return t(3314)}])},16833:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(85893),o=t(67294),a=e=>{let{adClient:n="ca-pub-7544108447932228",adSlot:t="6753219060",className:a}=e,c=(0,o.useRef)(null),i=(0,o.useRef)(!1),[r,l]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(r){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{c.current&&!i.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),i.current=!0)}}}},[r]),r)?(0,s.jsx)("ins",{ref:c,className:"adsbygoogle ".concat(a),style:{display:"block"},"data-ad-client":n,"data-ad-slot":t}):null};function c(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}constructor(e){super(e)}}}},3314:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l}});var s=t(85893),o=t(41869),a=t(41354),c=t(16833),i=t(67294),r=t(11163),l=!0;n.default=(0,a.Z)((0,c.Z)(()=>{let e=(0,r.useRouter)();return(0,i.useEffect)(()=>{setTimeout(()=>{e.prefetch("/can-usecallback-be-used-to-memoize-asynchronous-functions")},5e3)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React Hooks - useCallback Quiz"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"What happens if you omit the dependencies array in the useCallback hook?",options:["The function will always be memoized","The function will never be memoized","The hook will throw an error","The behavior is undefined"],nextQuestionPath:"can-usecallback-be-used-to-memoize-asynchronous-functions",correctAnswer:"1",explanation:"If you omit the dependencies array in useCallback, the function will always be memoized, meaning it won't change between renders.",id:"158"},6)})]})}))}},function(e){e.O(0,[1966,5675,11,2888,9774,179],function(){return e(e.s=99093)}),_N_E=e.O()}]);