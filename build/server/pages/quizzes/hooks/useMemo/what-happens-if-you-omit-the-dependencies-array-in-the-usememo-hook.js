"use strict";(()=>{var e={};e.id=80423,e.ids=[80423,30660],e.modules={68045:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>x,getServerSideProps:()=>_,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>v,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>y});var r={};s.r(r),s.d(r,{default:()=>g,getStaticProps:()=>m});var o=s(87093),i=s(35244),n=s(1323),a=s(52899),l=s.n(a),u=s(49413),d=s(20997),c=s(55989),p=s(41354),h=s(16833);async function m(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What happens if you omit the dependencies array in the useMemo hook?",description:"Test your knowledge of the useMemo hook in React with this quiz."}}}let g=(0,p.Z)((0,h.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useMemo"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(c.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"What happens if you omit the dependencies array in the useMemo hook?",options:["The function will always be memoized","The function will never be memoized","The hook will throw an error","The behavior is undefined"],code:void 0,nextQuestionPath:"can-usememo-be-used-to-memoize-asynchronous-functions",correctAnswer:1,explanation:"If you omit the dependencies array in useMemo, the function will always be memoized, meaning it won't be recomputed on subsequent renders unless the component is re-rendered.",id:76,quizId:5},6)})]}))),x=(0,n.l)(r,"default"),f=(0,n.l)(r,"getStaticProps"),b=(0,n.l)(r,"getStaticPaths"),_=(0,n.l)(r,"getServerSideProps"),S=(0,n.l)(r,"config"),v=(0,n.l)(r,"reportWebVitals"),y=(0,n.l)(r,"unstable_getStaticProps"),P=(0,n.l)(r,"unstable_getStaticPaths"),w=(0,n.l)(r,"unstable_getStaticParams"),j=(0,n.l)(r,"unstable_getServerProps"),q=(0,n.l)(r,"unstable_getServerSideProps"),k=new o.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/hooks/useMemo/what-happens-if-you-omit-the-dependencies-array-in-the-usememo-hook",pathname:"/quizzes/hooks/useMemo/what-happens-if-you-omit-the-dependencies-array-in-the-usememo-hook",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(20997),o=s(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let i=(0,o.useRef)(null);(0,o.useRef)(!1);let[n,a]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{},[n]),n)?r.jsx("ins",{ref:i,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends o.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>s(68045));module.exports=r})();