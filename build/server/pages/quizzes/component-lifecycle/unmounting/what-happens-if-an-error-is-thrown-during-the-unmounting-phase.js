"use strict";(()=>{var e={};e.id=42193,e.ids=[42193,30660],e.modules={6673:(e,t,n)=>{n.r(t),n.d(t,{config:()=>_,default:()=>f,getServerSideProps:()=>S,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>P});var r={};n.r(r),n.d(r,{default:()=>m,getStaticProps:()=>g});var s=n(87093),a=n(35244),i=n(1323),o=n(52899),l=n.n(o),u=n(49413),c=n(20997),d=n(55989),p=n(41354),h=n(16833);async function g(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What happens if an error is thrown during the unmounting phase?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let m=(0,p.Z)((0,h.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"What happens if an error is thrown during the unmounting phase?",options:["The component remains mounted","React's error boundaries can catch unmounting errors","The application always crashes","React automatically retries the unmounting"],code:void 0,nextQuestionPath:"why-should-unmounting-operations-be-fast",correctAnswer:2,explanation:"If an error occurs during the unmounting phase (in componentWillUnmount or a useEffect cleanup function), it can be caught by React's error boundaries. Error boundaries are special components that catch JavaScript errors in their child component tree. This allows graceful handling of errors during unmounting rather than crashing the entire application.",id:524,quizId:26},13)})]}))),f=(0,i.l)(r,"default"),x=(0,i.l)(r,"getStaticProps"),b=(0,i.l)(r,"getStaticPaths"),S=(0,i.l)(r,"getServerSideProps"),_=(0,i.l)(r,"config"),v=(0,i.l)(r,"reportWebVitals"),P=(0,i.l)(r,"unstable_getStaticProps"),w=(0,i.l)(r,"unstable_getStaticPaths"),y=(0,i.l)(r,"unstable_getStaticParams"),j=(0,i.l)(r,"unstable_getServerProps"),q=(0,i.l)(r,"unstable_getServerSideProps"),k=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/what-happens-if-an-error-is-thrown-during-the-unmounting-phase",pathname:"/quizzes/component-lifecycle/unmounting/what-happens-if-an-error-is-thrown-during-the-unmounting-phase",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:r})},16833:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(20997),s=n(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let a=(0,s.useRef)(null);(0,s.useRef)(!1);let[i,o]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{},[i]),i)?r.jsx("ins",{ref:a,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>n(6673));module.exports=r})();