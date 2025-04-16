(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87093],{74403:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/mounting/why-must-you-call-super-props-in-the-constructor-of-a-react-class-component",function(){return n(48478)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(85893),o=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:c,fullWidthResponsive:r="true",style:a={}}=e,l=(0,o.useRef)(null),d=(0,o.useRef)(!1),[u,p]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{l.current&&!d.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),d.current=!0)}}}},[u]),u)?(0,s.jsx)("ins",{ref:l,className:"adsbygoogle ".concat(c),style:{display:"block",...a},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":r}):null};function c(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,s.jsx)("div",{children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("div",{children:(0,s.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",width:"336px",height:"280px"}})})]})})}constructor(e){super(e)}}}},48478:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var s=n(85893),o=n(73903),i=n(25190),c=n(16833),r=!0;t.default=(0,i.Z)((0,c.Z)(()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),(0,s.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,s.jsx)(o.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"Why must you call super(props) in the constructor of a React class component?",options:["It's optional and not required","To enable state initialization","To initialize the parent class and enable this.props","To prevent memory leaks"],code:void 0,nextQuestionPath:"what-is-the-difference-between-mounting-in-server-side-rendering-and-client-side-rendering",correctAnswer:3,explanation:"You must call super(props) in the constructor of a React class component to initialize the parent class (Component) and ensure that this.props is defined and accessible within the constructor. If you don't call super(props), this.props will be undefined in the constructor, which can lead to bugs.",id:486,quizId:24},15)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=74403)}),_N_E=e.O()}]);