"use strict";(()=>{var e={};e.id=81634,e.ids=[81634,30660],e.modules={97456:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>x,getServerSideProps:()=>P,getStaticPaths:()=>f,getStaticProps:()=>b,reportWebVitals:()=>S,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>C,unstable_getStaticProps:()=>v});var n={};r.r(n),r.d(n,{default:()=>g,getStaticProps:()=>m});var a=r(87093),s=r(35244),i=r(1323),o=r(52899),l=r.n(o),d=r(49413),p=r(20997),c=r(55989),u=r(41354),h=r(16833);async function m(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What's the relationship between HOCs and the Container/Presentational pattern?",description:"Test your knowledge of Higher-Order Components (HOCs) in React with this comprehensive quiz."}}}let g=(0,u.Z)((0,h.Z)(()=>(0,p.jsxs)(p.Fragment,{children:[p.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Higher-Order Components"}),p.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:p.jsx(c.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"What's the relationship between HOCs and the Container/Presentational pattern?",options:["They are completely unrelated patterns","HOCs can be used to implement the Container/Presentational pattern","Container/Presentational has replaced HOCs in modern React","HOCs are only used with Presentational components"],nextQuestionPath:"",correctAnswer:2,explanation:"HOCs can be used to implement the Container/Presentational pattern. An HOC can serve as a container component that provides data and behavior, while the wrapped component acts as a presentational component focused on rendering UI. This separation of concerns allows for better reusability and testability of components.",id:470,quizId:23},19)})]}))),x=(0,i.l)(n,"default"),b=(0,i.l)(n,"getStaticProps"),f=(0,i.l)(n,"getStaticPaths"),P=(0,i.l)(n,"getServerSideProps"),_=(0,i.l)(n,"config"),S=(0,i.l)(n,"reportWebVitals"),v=(0,i.l)(n,"unstable_getStaticProps"),C=(0,i.l)(n,"unstable_getStaticPaths"),w=(0,i.l)(n,"unstable_getStaticParams"),j=(0,i.l)(n,"unstable_getServerProps"),q=(0,i.l)(n,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/quizzes/react-patterns/higherOrderComponents/what-s-the-relationship-between-hocs-and-the-container-presentational-pattern",pathname:"/quizzes/react-patterns/higherOrderComponents/what-s-the-relationship-between-hocs-and-the-container-presentational-pattern",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:n})},16833:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(20997),a=r(16689);let s=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let s=(0,a.useRef)(null);(0,a.useRef)(!1);let[i,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[i]),i)?n.jsx("ins",{ref:s,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[52899,58559,25675,11163,66531],()=>r(97456));module.exports=n})();