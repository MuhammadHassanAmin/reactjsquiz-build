(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83236],{22287:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quizzes/component-lifecycle/updating/what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",function(){return n(12299)}])},16833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893),s=n(67294),i=e=>{let{adClient:t="ca-pub-7544108447932228",adSlot:n="6753219060",adFormat:i="auto",className:a,fullWidthResponsive:r="true",style:c={}}=e,d=(0,s.useRef)(null),l=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(p(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{if(u){if(document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'))d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0);else{let e=document.createElement("script");e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7544108447932228",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e),e.onload=()=>{d.current&&!l.current&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),l.current=!0)}}}},[u]),u)?(0,o.jsx)("ins",{ref:d,className:"adsbygoogle ".concat(a),style:{display:"block",...c},"data-ad-client":t,"data-ad-slot":n,"data-ad-format":i,"data-full-width-responsive":r}):null};function a(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6753219060",className:"h-[100px] md:h-full top-0 sticky"})}),(0,o.jsx)("div",{children:(0,o.jsx)(e,{...this.props})}),(0,o.jsx)("div",{children:(0,o.jsx)(i,{adSlot:"6208304795",className:"h-[336px] top-0 sticky",style:{display:"inline-block",height:"280px"}})})]})})}constructor(e){super(e)}}}},12299:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var o=n(85893),s=n(73903),i=n(25190),a=n(16833),r=!0;t.default=(0,i.Z)((0,a.Z)(()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),(0,o.jsx)("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:(0,o.jsx)(s.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"What is the purpose of the getSnapshotBeforeUpdate() lifecycle method?",options:["To update the component's state based on changes in props","To determine if the component should re-render","To capture information from the DOM before it potentially changes","To handle side effects after the component updates"],code:void 0,nextQuestionPath:"when-is-componentdidupdate-called-in-the-component-lifecycle",correctAnswer:3,explanation:"The getSnapshotBeforeUpdate() method is used to capture information from the DOM just before it potentially changes. This method is called right before the changes from the virtual DOM are reflected in the actual DOM. The return value from this method is passed as the third parameter to componentDidUpdate(). This is useful for cases like preserving scroll position during updates.",id:493,quizId:25},2)})]})))}},function(e){e.O(0,[41966,25675,29325,92888,49774,40179],function(){return e(e.s=22287)}),_N_E=e.O()}]);