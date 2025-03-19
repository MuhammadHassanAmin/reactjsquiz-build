"use strict";(()=>{var e={};e.id=54139,e.ids=[54139,30660],e.modules={86923:(e,t,a)=>{a.r(t),a.d(t,{config:()=>z,default:()=>h,getServerSideProps:()=>b,getStaticPaths:()=>y,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>j,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>_});var i={};a.r(i),a.d(i,{default:()=>f,getStaticProps:()=>m});var n=a(87093),r=a(35244),s=a(1323),l=a(52899),o=a.n(l),d=a(49413),c=a(20997),u=a(55989),g=a(41354),p=a(16833);async function m(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What's the difference between eager loading and lazy loading in React?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let f=(0,g.Z)((0,p.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:21,totalQuestions:30,index:21,question:"What's the difference between eager loading and lazy loading in React?",options:["Eager loading uses React.eager() instead of React.lazy()","Eager loading loads all components at startup while lazy loading loads them on demand","Eager loading is for class components while lazy loading is for functional components","Eager loading is automated by React while lazy loading requires manual implementation"],code:void 0,nextQuestionPath:"how-does-react-s-concurrent-mode-relate-to-lazy-loading",correctAnswer:2,explanation:"The main difference is that eager loading loads all components during the initial application startup, resulting in a larger initial bundle but immediate availability of all features. Lazy loading, in contrast, loads components only when they're needed, resulting in a smaller initial bundle and faster startup time, but with potential delays when accessing features for the first time. By default, React uses eager loading (standard imports); lazy loading requires explicit implementation using React.lazy() and dynamic imports.",id:572,quizId:28},21)})]}))),h=(0,s.l)(i,"default"),x=(0,s.l)(i,"getStaticProps"),y=(0,s.l)(i,"getStaticPaths"),b=(0,s.l)(i,"getServerSideProps"),z=(0,s.l)(i,"config"),S=(0,s.l)(i,"reportWebVitals"),_=(0,s.l)(i,"unstable_getStaticProps"),v=(0,s.l)(i,"unstable_getStaticPaths"),w=(0,s.l)(i,"unstable_getStaticParams"),P=(0,s.l)(i,"unstable_getServerProps"),q=(0,s.l)(i,"unstable_getServerSideProps"),j=new n.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/what-s-the-difference-between-eager-loading-and-lazy-loading-in-react",pathname:"/quizzes/performance-optimization/lazy-loading/what-s-the-difference-between-eager-loading-and-lazy-loading-in-react",bundlePath:"",filename:""},components:{App:d.default,Document:o()},userland:i})},16833:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(20997),n=a(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let r=(0,n.useRef)(null);(0,n.useRef)(!1);let[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(l(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[s]),s)?i.jsx("ins",{ref:r,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function s(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[52899,58559,25675,11163,66531],()=>a(86923));module.exports=i})();