(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6261],{9752:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/hooks/useEffect",function(){return n(4193)}])},6833:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(5893),o=n(7294);let a=e=>{let[t,n]=(0,o.useState)(window.matchMedia(e).matches);return(0,o.useEffect)(()=>{let t=window.matchMedia(e),s=()=>n(t.matches);return t.addEventListener("change",s),()=>{t.removeEventListener("change",s)}},[e]),t};var r=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:r="auto",fullWidthResponsive:d="true"}=e,i=(0,o.useRef)(null),c=(0,o.useRef)(!1),u=a("(min-width: 768px)"),[l,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style"),p(!1)}),[]),(0,o.useEffect)(()=>{if(l&&u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{i.current&&!c.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),c.current=!0)}}}},[l,u]),l&&u)?(0,s.jsx)("ins",{ref:i,className:"adsbygoogle",style:{display:"block"},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":r,"data-full-width-responsive":d}):null};function d(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"grid grid-cols-[0_100%_0]  md:grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(r,{adClient:"ca-pub-7544108447932228",adSlot:"6753219060",adFormat:"auto",fullWidthResponsive:"true"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsxs)("div",{children:[" ",(0,s.jsx)(r,{adSlot:"2871546317"})]})]})})}constructor(e){super(e)}}}},4193:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var s=n(5893),o=n(1354),a=n(1869),r=n(7294),d=n(6833),i=!0;t.default=(0,o.Z)((0,d.Z)(e=>{let{quizData:t}=e,[n,o]=(0,r.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"React useState() Hook Quiz"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:null==t?void 0:t.map((e,r)=>(0,s.jsx)(a.Y3,{activeQuestionIndex:n,setActiveQuestionIndex:o,totalQuestions:null==t?void 0:t.length,index:r,...e},r))})]})}))}},function(e){e.O(0,[1966,5675,11,2888,9774,179],function(){return e(e.s=9752)}),_N_E=e.O()}]);