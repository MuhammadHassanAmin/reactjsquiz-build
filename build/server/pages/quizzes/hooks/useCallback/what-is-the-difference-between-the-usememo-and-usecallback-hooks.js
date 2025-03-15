"use strict";(()=>{var e={};e.id=80,e.ids=[80,660],e.modules={19269:(e,t,s)=>{s.r(t),s.d(t,{config:()=>_,default:()=>g,getServerSideProps:()=>k,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>v});var r={};s.r(r),s.d(r,{default:()=>f,getStaticProps:()=>h});var a=s(87093),i=s(35244),n=s(1323),o=s(52899),l=s.n(o),u=s(49413),c=s(20997),d=s(55989),m=s(41354),p=s(16833);async function h(){let e=await s.e(1317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is the difference between the useMemo and useCallback hooks?",description:"Test your knowledge of the useCallback hook in React with this quiz."}}}let f=(0,m.Z)((0,p.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useCallback"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:19,totalQuestions:20,index:19,question:"What is the difference between the useMemo and useCallback hooks?",options:["useMemo is used for memoizing function results, while useCallback is used for memoizing functions themselves","useMemo is used for memoizing functions, while useCallback is used for memoizing function results","Both hooks are used interchangeably for memoizing function results","There is no difference between useMemo and useCallback"],nextQuestionPath:"",correctAnswer:1,explanation:"UseMemo is primarily used for memoizing function results, ensuring that expensive computations are only performed when necessary, while useCallback is specifically designed for memoizing functions themselves, preventing unnecessary function recreations between renders.",id:171,quizId:9},19)})]}))),g=(0,n.l)(r,"default"),x=(0,n.l)(r,"getStaticProps"),b=(0,n.l)(r,"getStaticPaths"),k=(0,n.l)(r,"getServerSideProps"),_=(0,n.l)(r,"config"),S=(0,n.l)(r,"reportWebVitals"),v=(0,n.l)(r,"unstable_getStaticProps"),w=(0,n.l)(r,"unstable_getStaticPaths"),P=(0,n.l)(r,"unstable_getStaticParams"),j=(0,n.l)(r,"unstable_getServerProps"),q=(0,n.l)(r,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/hooks/useCallback/what-is-the-difference-between-the-usememo-and-usecallback-hooks",pathname:"/quizzes/hooks/useCallback/what-is-the-difference-between-the-usememo-and-usecallback-hooks",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(20997),a=s(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let i=(0,a.useRef)(null);(0,a.useRef)(!1);let[n,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[n]),n)?r.jsx("ins",{ref:i,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2899,6132,1163,1664,5675,6531],()=>s(19269));module.exports=r})();