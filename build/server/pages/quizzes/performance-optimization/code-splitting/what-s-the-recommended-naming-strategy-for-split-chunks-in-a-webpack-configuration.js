"use strict";(()=>{var e={};e.id=72530,e.ids=[72530,30660],e.modules={54111:(e,t,s)=>{s.r(t),s.d(t,{config:()=>k,default:()=>f,getServerSideProps:()=>v,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>w,routeModule:()=>q,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>S});var a={};s.r(a),s.d(a,{default:()=>g,getStaticProps:()=>m});var n=s(87093),i=s(35244),r=s(1323),o=s(52899),l=s.n(o),c=s(49413),d=s(20997),u=s(55989),p=s(41354),h=s(16833);async function m(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What's the recommended naming strategy for split chunks in a webpack configuration?",description:"Test your knowledge of React code splitting techniques for performance optimization with this comprehensive quiz covering dynamic imports, bundle analysis, and advanced splitting strategies."}}}let g=(0,p.Z)((0,h.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Code Splitting"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(u.Y3,{activeQuestionIndex:13,totalQuestions:20,index:13,question:"What's the recommended naming strategy for split chunks in a webpack configuration?",options:["Use sequential numbers like chunk1.js, chunk2.js","Use descriptive names related to the content","Let webpack generate hashed names automatically","All chunks should share the same name but different extensions"],nextQuestionPath:"how-do-you-handle-errors-in-code-split-components-using-react-lazy",correctAnswer:3,explanation:"The recommended naming strategy for split chunks is to let webpack generate hashed names automatically. This approach ensures proper cache invalidation when the content changes. When you configure webpack's output with something like `filename: '[name].[contenthash].js'`, webpack will generate unique filenames based on the content hash. This means returning users only need to download chunks that have actually changed since their last visit, while unchanged chunks can be served from browser cache, optimizing both initial and subsequent load times.",id:594,quizId:29},13)})]}))),f=(0,r.l)(a,"default"),x=(0,r.l)(a,"getStaticProps"),b=(0,r.l)(a,"getStaticPaths"),v=(0,r.l)(a,"getServerSideProps"),k=(0,r.l)(a,"config"),w=(0,r.l)(a,"reportWebVitals"),S=(0,r.l)(a,"unstable_getStaticProps"),_=(0,r.l)(a,"unstable_getStaticPaths"),y=(0,r.l)(a,"unstable_getStaticParams"),P=(0,r.l)(a,"unstable_getServerProps"),j=(0,r.l)(a,"unstable_getServerSideProps"),q=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/performance-optimization/code-splitting/what-s-the-recommended-naming-strategy-for-split-chunks-in-a-webpack-configuration",pathname:"/quizzes/performance-optimization/code-splitting/what-s-the-recommended-naming-strategy-for-split-chunks-in-a-webpack-configuration",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:a})},16833:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(20997),n=s(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let i=(0,n.useRef)(null);(0,n.useRef)(!1);let[r,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[r]),r)?a.jsx("ins",{ref:i,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function r(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[a.jsx("div",{children:a.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),a.jsx("div",{children:a.jsx(e,{...this.props})}),a.jsx("div",{children:a.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[52899,58559,25675,11163,66531],()=>s(54111));module.exports=a})();