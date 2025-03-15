"use strict";(()=>{var e={};e.id=11006,e.ids=[11006,30660],e.modules={98677:(e,t,s)=>{s.r(t),s.d(t,{config:()=>_,default:()=>m,getServerSideProps:()=>v,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>k,routeModule:()=>w,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>S});var a={};s.r(a),s.d(a,{default:()=>x,getStaticProps:()=>g});var r=s(87093),o=s(35244),i=s(1323),n=s(52899),l=s.n(n),u=s(49413),d=s(20997),c=s(55989),h=s(41354),p=s(16833);async function g(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"When should you avoid using the useCallback hook?",description:"Test your knowledge of the useCallback hook in React with this quiz."}}}let x=(0,h.Z)((0,p.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useCallback"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(c.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"When should you avoid using the useCallback hook?",options:["When the function doesn't have any dependencies","When the function is rarely used","When the function involves complex logic","When the function is not passed to child components"],nextQuestionPath:"what-happens-if-you-omit-the-dependencies-array-in-the-usecallback-hook",correctAnswer:2,explanation:"Avoid using useCallback for functions that are rarely used, as the memoization overhead may not provide significant benefits in such cases.",id:157,quizId:9},5)})]}))),m=(0,i.l)(a,"default"),f=(0,i.l)(a,"getStaticProps"),b=(0,i.l)(a,"getStaticPaths"),v=(0,i.l)(a,"getServerSideProps"),_=(0,i.l)(a,"config"),k=(0,i.l)(a,"reportWebVitals"),S=(0,i.l)(a,"unstable_getStaticProps"),P=(0,i.l)(a,"unstable_getStaticPaths"),y=(0,i.l)(a,"unstable_getStaticParams"),j=(0,i.l)(a,"unstable_getServerProps"),q=(0,i.l)(a,"unstable_getServerSideProps"),w=new r.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/hooks/useCallback/when-should-you-avoid-using-the-usecallback-hook",pathname:"/quizzes/hooks/useCallback/when-should-you-avoid-using-the-usecallback-hook",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:a})},16833:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(20997),r=s(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let o=(0,r.useRef)(null);(0,r.useRef)(!1);let[i,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[i]),i)?a.jsx("ins",{ref:o,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[a.jsx("div",{children:a.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),a.jsx("div",{children:a.jsx(e,{...this.props})}),a.jsx("div",{children:a.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[52899,36132,41664,11163,25675,66531],()=>s(98677));module.exports=a})();