"use strict";(()=>{var e={};e.id=91559,e.ids=[91559,30660],e.modules={1883:(e,t,a)=>{a.r(t),a.d(t,{config:()=>w,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>y,getStaticProps:()=>x,reportWebVitals:()=>z,routeModule:()=>j,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>v});var i={};a.r(i),a.d(i,{default:()=>m,getStaticProps:()=>g});var n=a(87093),o=a(35244),s=a(1323),l=a(52899),r=a.n(l),d=a(49413),c=a(20997),u=a(55989),p=a(41354),h=a(16833);async function g(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is a loading waterfall in the context of lazy loading, and why is it problematic?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let m=(0,p.Z)((0,h.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:27,totalQuestions:30,index:27,question:"What is a loading waterfall in the context of lazy loading, and why is it problematic?",options:["A UI pattern showing multiple loading indicators in sequence","A situation where lazy components wait to load until they're in the viewport","A sequential chain of dependent lazy-loaded modules that block each other","A technique for gradually revealing content as it loads"],code:void 0,nextQuestionPath:"how-can-you-measure-the-effectiveness-of-your-lazy-loading-implementation",correctAnswer:3,explanation:"A loading waterfall in lazy loading is a sequential chain of dependent lazy-loaded modules that block each other. This occurs when one lazy-loaded component imports another lazy-loaded component, which perhaps imports yet another, creating a cascade of sequential network requests. This is problematic because each request must complete before the next one starts, significantly increasing the total loading time. To avoid waterfalls, you should structure your code to allow parallel loading of independent chunks and carefully manage dependencies between lazy-loaded components.",id:578,quizId:28},27)})]}))),f=(0,s.l)(i,"default"),x=(0,s.l)(i,"getStaticProps"),y=(0,s.l)(i,"getStaticPaths"),b=(0,s.l)(i,"getServerSideProps"),w=(0,s.l)(i,"config"),z=(0,s.l)(i,"reportWebVitals"),v=(0,s.l)(i,"unstable_getStaticProps"),S=(0,s.l)(i,"unstable_getStaticPaths"),_=(0,s.l)(i,"unstable_getStaticParams"),q=(0,s.l)(i,"unstable_getServerProps"),P=(0,s.l)(i,"unstable_getServerSideProps"),j=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/what-is-a-loading-waterfall-in-the-context-of-lazy-loading-and-why-is-it-problematic",pathname:"/quizzes/performance-optimization/lazy-loading/what-is-a-loading-waterfall-in-the-context-of-lazy-loading-and-why-is-it-problematic",bundlePath:"",filename:""},components:{App:d.default,Document:r()},userland:i})},16833:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(20997),n=a(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let o=(0,n.useRef)(null);(0,n.useRef)(!1);let[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[s]),s)?i.jsx("ins",{ref:o,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function s(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[52899,58559,25675,11163,66531],()=>a(1883));module.exports=i})();