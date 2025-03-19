"use strict";(()=>{var e={};e.id=38564,e.ids=[38564,30660],e.modules={86623:(e,t,r)=>{r.r(t),r.d(t,{config:()=>b,default:()=>x,getServerSideProps:()=>_,getStaticPaths:()=>v,getStaticProps:()=>f,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>P});var s={};r.r(s),r.d(s,{default:()=>g,getStaticProps:()=>h});var o=r(87093),a=r(35244),i=r(1323),n=r(52899),l=r.n(n),u=r(49413),d=r(20997),p=r(55989),c=r(41354),m=r(16833);async function h(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What's the primary purpose of the useMemo hook?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let g=(0,c.Z)((0,m.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(p.Y3,{activeQuestionIndex:3,totalQuestions:20,index:3,question:"What's the primary purpose of the useMemo hook?",options:["To memoize entire component renders","To memoize computed values","To memoize event handlers","To optimize state updates"],code:void 0,nextQuestionPath:"what-does-the-usecallback-hook-do",correctAnswer:2,explanation:"The primary purpose of the useMemo hook is to memoize computed values. It takes a function and a dependency array, and only recomputes the memoized value when one of the dependencies has changed. This is useful for expensive calculations that would otherwise be recomputed on every render, such as complex data transformations, filtering large arrays, or heavy mathematical operations.",id:534,quizId:27},3)})]}))),x=(0,i.l)(s,"default"),f=(0,i.l)(s,"getStaticProps"),v=(0,i.l)(s,"getStaticPaths"),_=(0,i.l)(s,"getServerSideProps"),b=(0,i.l)(s,"config"),S=(0,i.l)(s,"reportWebVitals"),P=(0,i.l)(s,"unstable_getStaticProps"),y=(0,i.l)(s,"unstable_getStaticPaths"),z=(0,i.l)(s,"unstable_getStaticParams"),j=(0,i.l)(s,"unstable_getServerProps"),q=(0,i.l)(s,"unstable_getServerSideProps"),k=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/performance-optimization/memoization/what-s-the-primary-purpose-of-the-usememo-hook",pathname:"/quizzes/performance-optimization/memoization/what-s-the-primary-purpose-of-the-usememo-hook",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:s})},16833:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(20997),o=r(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let a=(0,o.useRef)(null);(0,o.useRef)(!1);let[i,n]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{},[i]),i)?s.jsx("ins",{ref:a,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends o.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>r(86623));module.exports=s})();