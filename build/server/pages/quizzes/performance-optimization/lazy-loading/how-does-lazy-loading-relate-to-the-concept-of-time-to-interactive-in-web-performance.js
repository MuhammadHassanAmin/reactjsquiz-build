"use strict";(()=>{var e={};e.id=98143,e.ids=[98143,30660],e.modules={33523:(e,t,a)=>{a.r(t),a.d(t,{config:()=>b,default:()=>h,getServerSideProps:()=>y,getStaticPaths:()=>x,getStaticProps:()=>v,reportWebVitals:()=>S,routeModule:()=>q,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>w});var i={};a.r(i),a.d(i,{default:()=>f,getStaticProps:()=>g});var r=a(87093),o=a(35244),n=a(1323),s=a(52899),l=a.n(s),c=a(49413),d=a(20997),p=a(55989),u=a(41354),m=a(16833);async function g(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How does lazy loading relate to the concept of 'Time to Interactive' in web performance?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let f=(0,u.Z)((0,m.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(p.Y3,{activeQuestionIndex:15,totalQuestions:30,index:15,question:"How does lazy loading relate to the concept of 'Time to Interactive' in web performance?",options:["Lazy loading always improves Time to Interactive","Lazy loading generally improves Time to Interactive by reducing initial JavaScript load","Lazy loading worsens Time to Interactive but improves perceived performance","Lazy loading has no effect on Time to Interactive"],nextQuestionPath:"what-is-the-recommended-way-to-lazy-load-components-in-a-server-side-rendered-react-application",correctAnswer:2,explanation:"Lazy loading generally improves Time to Interactive (TTI) by reducing the amount of JavaScript that needs to be loaded, parsed, and executed before the application becomes interactive. By deferring non-critical components until they're needed, the browser can process less code initially, allowing the main functionality to become interactive faster. This is particularly important for mobile devices or slower connections where processing large JavaScript bundles can significantly delay interactivity. However, the specific impact depends on implementation details and should be measured for your particular application.",id:566,quizId:28},15)})]}))),h=(0,n.l)(i,"default"),v=(0,n.l)(i,"getStaticProps"),x=(0,n.l)(i,"getStaticPaths"),y=(0,n.l)(i,"getServerSideProps"),b=(0,n.l)(i,"config"),S=(0,n.l)(i,"reportWebVitals"),w=(0,n.l)(i,"unstable_getStaticProps"),z=(0,n.l)(i,"unstable_getStaticPaths"),_=(0,n.l)(i,"unstable_getStaticParams"),P=(0,n.l)(i,"unstable_getServerProps"),j=(0,n.l)(i,"unstable_getServerSideProps"),q=new r.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/how-does-lazy-loading-relate-to-the-concept-of-time-to-interactive-in-web-performance",pathname:"/quizzes/performance-optimization/lazy-loading/how-does-lazy-loading-relate-to-the-concept-of-time-to-interactive-in-web-performance",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:i})},16833:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(20997),r=a(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let o=(0,r.useRef)(null);(0,r.useRef)(!1);let[n,s]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(s(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[n]),n)?i.jsx("ins",{ref:o,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[52899,58559,25675,11163,66531],()=>a(33523));module.exports=i})();