"use strict";(()=>{var e={};e.id=31104,e.ids=[31104,30660],e.modules={78223:(e,t,s)=>{s.r(t),s.d(t,{config:()=>_,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>P});var i={};s.r(i),s.d(i,{default:()=>g,getStaticProps:()=>h});var r=s(87093),n=s(35244),a=s(1323),o=s(52899),l=s.n(o),d=s(49413),u=s(20997),c=s(55989),p=s(41354),m=s(16833);async function h(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"In what scenarios might useMemo not provide significant performance benefits?",description:"Test your knowledge of the useMemo hook in React with this quiz."}}}let g=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useMemo"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:10,totalQuestions:20,index:10,question:"In what scenarios might useMemo not provide significant performance benefits?",options:["When dealing with deeply nested components","When using primitive values as dependencies","When the function result is frequently updated","When optimizing server-side rendering"],nextQuestionPath:"how-does-usememo-handle-values-passed-as-props-to-child-components",correctAnswer:3,explanation:"UseMemo may not provide significant performance benefits when the function result is frequently updated, as the overhead of memoization may outweigh the benefits in such scenarios.",id:80,quizId:5},10)})]}))),f=(0,a.l)(i,"default"),x=(0,a.l)(i,"getStaticProps"),v=(0,a.l)(i,"getStaticPaths"),b=(0,a.l)(i,"getServerSideProps"),_=(0,a.l)(i,"config"),S=(0,a.l)(i,"reportWebVitals"),P=(0,a.l)(i,"unstable_getStaticProps"),q=(0,a.l)(i,"unstable_getStaticPaths"),j=(0,a.l)(i,"unstable_getStaticParams"),w=(0,a.l)(i,"unstable_getServerProps"),y=(0,a.l)(i,"unstable_getServerSideProps"),k=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/quizzes/hooks/useMemo/in-what-scenarios-might-usememo-not-provide-significant-performance-benefits",pathname:"/quizzes/hooks/useMemo/in-what-scenarios-might-usememo-not-provide-significant-performance-benefits",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:i})},16833:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(20997),r=s(16689);let n=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let n=(0,r.useRef)(null);(0,r.useRef)(!1);let[a,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[a]),a)?i.jsx("ins",{ref:n,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(n,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(n,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[52899,36132,41664,11163,25675,66531],()=>s(78223));module.exports=i})();