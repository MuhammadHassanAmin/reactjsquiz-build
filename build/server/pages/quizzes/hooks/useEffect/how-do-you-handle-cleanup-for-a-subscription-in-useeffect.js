"use strict";(()=>{var e={};e.id=5630,e.ids=[5630,660],e.modules={32394:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>g,getServerSideProps:()=>_,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>P,routeModule:()=>E,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>v});var n={};s.r(n),s.d(n,{default:()=>m,getStaticProps:()=>h});var r=s(87093),a=s(35244),o=s(1323),i=s(52899),l=s.n(i),u=s(49413),c=s(20997),d=s(55989),p=s(41354),f=s(16833);async function h(){let e=await s.e(1317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How do you handle cleanup for a subscription in useEffect?",description:"Test your knowledge of the useEffect hook in React with this quiz."}}}let m=(0,p.Z)((0,f.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useEffect"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:20,totalQuestions:22,index:20,question:"How do you handle cleanup for a subscription in useEffect?",options:["Define a cleanup function inside the useEffect return statement","Use the return statement to call the cleanup function","Manually unsubscribe in the component's componentWillUnmount","There's no need to handle cleanup for subscriptions in useEffect"],nextQuestionPath:"is-it-safe-to-perform-dom-manipulation-inside-the-useeffect-hook",correctAnswer:1,explanation:"To handle cleanup for a subscription in useEffect, you should define a cleanup function inside the return statement of the useEffect callback. React will automatically call this cleanup function when the component unmounts or before re-running the effect.",id:130,quizId:7},20)})]}))),g=(0,o.l)(n,"default"),x=(0,o.l)(n,"getStaticProps"),b=(0,o.l)(n,"getStaticPaths"),_=(0,o.l)(n,"getServerSideProps"),S=(0,o.l)(n,"config"),P=(0,o.l)(n,"reportWebVitals"),v=(0,o.l)(n,"unstable_getStaticProps"),j=(0,o.l)(n,"unstable_getStaticPaths"),y=(0,o.l)(n,"unstable_getStaticParams"),q=(0,o.l)(n,"unstable_getServerProps"),w=(0,o.l)(n,"unstable_getServerSideProps"),E=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/hooks/useEffect/how-do-you-handle-cleanup-for-a-subscription-in-useeffect",pathname:"/quizzes/hooks/useEffect/how-do-you-handle-cleanup-for-a-subscription-in-useeffect",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:n})},16833:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(20997),r=s(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let a=(0,r.useRef)(null);(0,r.useRef)(!1);let[o,i]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[o]),o)?n.jsx("ins",{ref:a,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[2899,6132,1163,1664,5675,6531],()=>s(32394));module.exports=n})();