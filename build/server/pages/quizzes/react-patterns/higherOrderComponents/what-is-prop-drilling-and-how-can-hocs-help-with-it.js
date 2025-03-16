"use strict";(()=>{var e={};e.id=77389,e.ids=[77389,30660],e.modules={76642:(e,t,s)=>{s.r(t),s.d(t,{config:()=>b,default:()=>x,getServerSideProps:()=>_,getStaticPaths:()=>v,getStaticProps:()=>f,reportWebVitals:()=>S,routeModule:()=>C,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>w});var r={};s.r(r),s.d(r,{default:()=>m,getStaticProps:()=>g});var i=s(87093),n=s(35244),a=s(1323),o=s(52899),l=s.n(o),p=s(49413),c=s(20997),d=s(55989),u=s(41354),h=s(16833);async function g(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is 'prop drilling' and how can HOCs help with it?",description:"Test your knowledge of Higher-Order Components (HOCs) in React with this comprehensive quiz."}}}let m=(0,u.Z)((0,h.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"What is 'prop drilling' and how can HOCs help with it?",options:["A technique for optimizing props, HOCs can't help with it","The process of passing props through intermediate components, HOCs can help by providing context","A security vulnerability in props, HOCs can patch it","The act of inspecting prop types, HOCs can automate it"],nextQuestionPath:"what-is-the-primary-concern-with-hocs-in-terms-of-component-hierarchy",correctAnswer:2,explanation:"Prop drilling is the process of passing props through multiple levels of component hierarchy to reach deeply nested components. HOCs can help with this by using React's Context API or state management to provide data directly to nested components without having to pass props through each intermediate component.",id:466,quizId:23},15)})]}))),x=(0,a.l)(r,"default"),f=(0,a.l)(r,"getStaticProps"),v=(0,a.l)(r,"getStaticPaths"),_=(0,a.l)(r,"getServerSideProps"),b=(0,a.l)(r,"config"),S=(0,a.l)(r,"reportWebVitals"),w=(0,a.l)(r,"unstable_getStaticProps"),P=(0,a.l)(r,"unstable_getStaticPaths"),y=(0,a.l)(r,"unstable_getStaticParams"),j=(0,a.l)(r,"unstable_getServerProps"),q=(0,a.l)(r,"unstable_getServerSideProps"),C=new i.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/quizzes/react-patterns/higherOrderComponents/what-is-prop-drilling-and-how-can-hocs-help-with-it",pathname:"/quizzes/react-patterns/higherOrderComponents/what-is-prop-drilling-and-how-can-hocs-help-with-it",bundlePath:"",filename:""},components:{App:p.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(20997),i=s(16689);let n=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let n=(0,i.useRef)(null);(0,i.useRef)(!1);let[a,o]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{},[a]),a)?r.jsx("ins",{ref:n,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends i.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(n,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(n,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>s(76642));module.exports=r})();