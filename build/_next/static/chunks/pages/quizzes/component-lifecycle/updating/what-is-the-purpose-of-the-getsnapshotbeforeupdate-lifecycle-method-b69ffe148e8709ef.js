(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83236],{22287:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",function(){return s(12299)}])},16833:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var o=s(85893),n=s(67294),a=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:s="6753219060",adFormat:a="auto",className:i,fullWidthResponsive:d="true",style:c={}}=e,r=(0,n.useRef)(null),l=(0,n.useRef)(!1),[u,p]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{r.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:r,className:"adsbygoogle ".concat(i),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":s,"data-ad-format":a,"data-full-width-responsive":d}):null};function i(e){return class extends n.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(a,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})}),(0,o.jsx)("div",{className:"max-h-[336] top-0 sticky",children:(0,o.jsx)(a,{adSlot:"6208304795",className:"h-[336px]",style:{display:"block",width:"100%",height:"336px"}})})]})]})})}constructor(e){super(e)}}}},12299:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return d}});var o=s(85893),n=s(73903),a=s(25190),i=s(16833),d=!0;t.default=(0,a.Z)((0,i.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(n.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"What is the purpose of the getSnapshotBeforeUpdate() lifecycle method?",options:["To update the component's state based on changes in props","To determine if the component should re-render","To capture information from the DOM before it potentially changes","To handle side effects after the component updates"],code:void 0,nextQuestionPath:"when-is-componentdidupdate-called-in-the-component-lifecycle",correctAnswer:3,explanation:"The getSnapshotBeforeUpdate() method is used to capture information from the DOM just before it potentially changes. This method is called right before the changes from the virtual DOM are reflected in the actual DOM. The return value from this method is passed as the third parameter to componentDidUpdate(). This is useful for cases like preserving scroll position during updates.",id:493,quizId:25},2)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=22287)}),_N_E=e.O()}]);