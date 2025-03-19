"use strict";(()=>{var e={};e.id=88335,e.ids=[88335,30660],e.modules={21144:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>k,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>q});var i={};s.r(i),s.d(i,{default:()=>m,getStaticProps:()=>h});var a=s(87093),r=s(35244),o=s(1323),n=s(52899),l=s.n(n),d=s(49413),c=s(20997),u=s(55989),p=s(41354),g=s(16833);async function h(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is a potential downside of excessive code splitting?",description:"Test your knowledge of React code splitting techniques for performance optimization with this comprehensive quiz covering dynamic imports, bundle analysis, and advanced splitting strategies."}}}let m=(0,p.Z)((0,g.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"What is a potential downside of excessive code splitting?",options:["Increased total bundle size","Too many network requests could harm performance","Reduced browser compatibility","Higher server costs"],code:void 0,nextQuestionPath:"how-can-you-implement-code-splitting-for-react-router-routes",correctAnswer:2,explanation:"A potential downside of excessive code splitting is that it can lead to too many network requests, which may harm performance rather than improve it. Each split chunk requires a separate HTTP request when needed, and there's overhead associated with each request. If you split your code into too many small chunks, the latency from multiple requests can outweigh the benefits of loading smaller files. Finding the right balance is key - chunks should be meaningful groupings of related functionality that are large enough to justify the overhead of a separate request.",id:588,quizId:29},7)})]}))),f=(0,o.l)(i,"default"),x=(0,o.l)(i,"getStaticProps"),v=(0,o.l)(i,"getStaticPaths"),b=(0,o.l)(i,"getServerSideProps"),S=(0,o.l)(i,"config"),_=(0,o.l)(i,"reportWebVitals"),q=(0,o.l)(i,"unstable_getStaticProps"),w=(0,o.l)(i,"unstable_getStaticPaths"),y=(0,o.l)(i,"unstable_getStaticParams"),P=(0,o.l)(i,"unstable_getServerProps"),j=(0,o.l)(i,"unstable_getServerSideProps"),k=new a.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/performance-optimization/code-splitting/what-is-a-potential-downside-of-excessive-code-splitting",pathname:"/quizzes/performance-optimization/code-splitting/what-is-a-potential-downside-of-excessive-code-splitting",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:i})},16833:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(20997),a=s(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let r=(0,a.useRef)(null);(0,a.useRef)(!1);let[o,n]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[o]),o)?i.jsx("ins",{ref:r,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[52899,58559,25675,11163,66531],()=>s(21144));module.exports=i})();