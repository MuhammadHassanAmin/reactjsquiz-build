"use strict";(()=>{var e={};e.id=16918,e.ids=[16918,30660],e.modules={12553:(e,t,n)=>{n.r(t),n.d(t,{config:()=>_,default:()=>x,getServerSideProps:()=>S,getStaticPaths:()=>v,getStaticProps:()=>f,reportWebVitals:()=>b,routeModule:()=>k,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>P});var i={};n.r(i),n.d(i,{default:()=>h,getStaticProps:()=>g});var a=n(87093),s=n(35244),r=n(1323),o=n(52899),l=n.n(o),d=n(49413),c=n(20997),u=n(55989),p=n(41354),m=n(16833);async function g(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is a common mistake when using componentDidUpdate()?",description:"Test your knowledge of the updating phase in React component lifecycle with this comprehensive quiz."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"What is a common mistake when using componentDidUpdate()?",options:["Forgetting to include a condition when calling setState()","Returning a value from the method","Not including the prevProps parameter","Calling it manually from other methods"],nextQuestionPath:"in-the-updating-phase-when-is-static-getderivedstatefromprops-called",correctAnswer:1,explanation:"A common mistake when using componentDidUpdate() is forgetting to include a condition when calling setState(). Without a condition (like comparing current props to previous props), setting state in componentDidUpdate() will trigger another update cycle, leading to an infinite loop and eventually a stack overflow error.",id:495,quizId:25},4)})]}))),x=(0,r.l)(i,"default"),f=(0,r.l)(i,"getStaticProps"),v=(0,r.l)(i,"getStaticPaths"),S=(0,r.l)(i,"getServerSideProps"),_=(0,r.l)(i,"config"),b=(0,r.l)(i,"reportWebVitals"),P=(0,r.l)(i,"unstable_getStaticProps"),w=(0,r.l)(i,"unstable_getStaticPaths"),j=(0,r.l)(i,"unstable_getStaticParams"),y=(0,r.l)(i,"unstable_getServerProps"),q=(0,r.l)(i,"unstable_getServerSideProps"),k=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/quizzes/component-lifecycle/updating/what-is-a-common-mistake-when-using-componentdidupdate",pathname:"/quizzes/component-lifecycle/updating/what-is-a-common-mistake-when-using-componentdidupdate",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:i})},16833:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(20997),a=n(16689);let s=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let s=(0,a.useRef)(null);(0,a.useRef)(!1);let[r,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[r]),r)?i.jsx("ins",{ref:s,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function r(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[52899,36132,41664,11163,25675,66531],()=>n(12553));module.exports=i})();