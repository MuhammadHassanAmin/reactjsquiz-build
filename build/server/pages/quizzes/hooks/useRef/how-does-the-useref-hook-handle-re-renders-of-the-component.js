"use strict";(()=>{var e={};e.id=94564,e.ids=[94564,30660],e.modules={44843:(e,t,s)=>{s.r(t),s.d(t,{config:()=>b,default:()=>f,getServerSideProps:()=>S,getStaticPaths:()=>_,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>y,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var r={};s.r(r),s.d(r,{default:()=>g,getStaticProps:()=>m});var o=s(87093),n=s(35244),a=s(1323),i=s(52899),l=s.n(i),d=s(49413),u=s(20997),c=s(55989),p=s(41354),h=s(16833);async function m(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How does the useRef hook handle re-renders of the component?",description:"Test your knowledge of the useRef hook in React with this quiz."}}}let g=(0,p.Z)((0,h.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useRef"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:14,totalQuestions:20,index:14,question:"How does the useRef hook handle re-renders of the component?",options:["It triggers a re-render of the component","It updates the component's state","It preserves the reference to the DOM element","It throws an error"],nextQuestionPath:"can-the-useref-hook-be-used-to-store-and-update-component-props",correctAnswer:3,explanation:"The useRef hook preserves the reference to the DOM element across re-renders, allowing you to access and manipulate it without causing unnecessary updates to the component.",id:44,quizId:3},14)})]}))),f=(0,a.l)(r,"default"),x=(0,a.l)(r,"getStaticProps"),_=(0,a.l)(r,"getStaticPaths"),S=(0,a.l)(r,"getServerSideProps"),b=(0,a.l)(r,"config"),v=(0,a.l)(r,"reportWebVitals"),P=(0,a.l)(r,"unstable_getStaticProps"),j=(0,a.l)(r,"unstable_getStaticPaths"),k=(0,a.l)(r,"unstable_getStaticParams"),q=(0,a.l)(r,"unstable_getServerProps"),w=(0,a.l)(r,"unstable_getServerSideProps"),y=new o.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/quizzes/hooks/useRef/how-does-the-useref-hook-handle-re-renders-of-the-component",pathname:"/quizzes/hooks/useRef/how-does-the-useref-hook-handle-re-renders-of-the-component",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(20997),o=s(16689);let n=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let n=(0,o.useRef)(null);(0,o.useRef)(!1);let[a,i]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{},[a]),a)?r.jsx("ins",{ref:n,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends o.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(n,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(n,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>s(44843));module.exports=r})();