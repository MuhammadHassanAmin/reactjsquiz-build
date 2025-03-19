"use strict";(()=>{var e={};e.id=19459,e.ids=[19459,30660],e.modules={17623:(e,t,s)=>{s.r(t),s.d(t,{config:()=>_,default:()=>g,getServerSideProps:()=>v,getStaticPaths:()=>m,getStaticProps:()=>b,reportWebVitals:()=>S,routeModule:()=>w,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>R,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var r={};s.r(r),s.d(r,{default:()=>x,getStaticProps:()=>f});var a=s(87093),o=s(35244),n=s(1323),i=s(52899),l=s.n(i),d=s(49413),u=s(20997),c=s(55989),p=s(41354),h=s(16833);async function f(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"Can the useRef hook be used to create persistent variables across re-renders?",description:"Test your knowledge of the useRef hook in React with this quiz."}}}let x=(0,p.Z)((0,h.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useRef"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"Can the useRef hook be used to create persistent variables across re-renders?",options:["Yes, useRef creates persistent variables","No, useRef variables are reset on each render","It depends on the specific use case","Persistent variables cannot be created in React"],code:void 0,nextQuestionPath:"how-does-the-useref-hook-handle-re-renders-of-the-component",correctAnswer:1,explanation:"Yes, the useRef hook can be used to create persistent variables across re-renders, as the ref object retains its value between renders.",id:43,quizId:3},13)})]}))),g=(0,n.l)(r,"default"),b=(0,n.l)(r,"getStaticProps"),m=(0,n.l)(r,"getStaticPaths"),v=(0,n.l)(r,"getServerSideProps"),_=(0,n.l)(r,"config"),S=(0,n.l)(r,"reportWebVitals"),P=(0,n.l)(r,"unstable_getStaticProps"),j=(0,n.l)(r,"unstable_getStaticPaths"),k=(0,n.l)(r,"unstable_getStaticParams"),q=(0,n.l)(r,"unstable_getServerProps"),R=(0,n.l)(r,"unstable_getServerSideProps"),w=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/hooks/useRef/can-the-useref-hook-be-used-to-create-persistent-variables-across-re-renders",pathname:"/quizzes/hooks/useRef/can-the-useref-hook-be-used-to-create-persistent-variables-across-re-renders",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(20997),a=s(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let o=(0,a.useRef)(null);(0,a.useRef)(!1);let[n,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[n]),n)?r.jsx("ins",{ref:o,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>s(17623));module.exports=r})();