"use strict";(()=>{var e={};e.id=83236,e.ids=[83236,30660],e.modules={37780:(e,t,s)=>{s.r(t),s.d(t,{config:()=>_,default:()=>g,getServerSideProps:()=>S,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>T,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>y});var r={};s.r(r),s.d(r,{default:()=>m,getStaticProps:()=>f});var a=s(87093),o=s(35244),i=s(1323),n=s(52899),l=s.n(n),d=s(49413),p=s(20997),c=s(55989),u=s(41354),h=s(16833);async function f(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is the purpose of the getSnapshotBeforeUpdate() lifecycle method?",description:"Test your knowledge of the updating phase in React component lifecycle with this comprehensive quiz."}}}let m=(0,u.Z)((0,h.Z)(()=>(0,p.jsxs)(p.Fragment,{children:[p.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),p.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:p.jsx(c.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"What is the purpose of the getSnapshotBeforeUpdate() lifecycle method?",options:["To update the component's state based on changes in props","To determine if the component should re-render","To capture information from the DOM before it potentially changes","To handle side effects after the component updates"],nextQuestionPath:"when-is-componentdidupdate-called-in-the-component-lifecycle",correctAnswer:3,explanation:"The getSnapshotBeforeUpdate() method is used to capture information from the DOM just before it potentially changes. This method is called right before the changes from the virtual DOM are reflected in the actual DOM. The return value from this method is passed as the third parameter to componentDidUpdate(). This is useful for cases like preserving scroll position during updates.",id:493,quizId:25},2)})]}))),g=(0,i.l)(r,"default"),x=(0,i.l)(r,"getStaticProps"),b=(0,i.l)(r,"getStaticPaths"),S=(0,i.l)(r,"getServerSideProps"),_=(0,i.l)(r,"config"),v=(0,i.l)(r,"reportWebVitals"),y=(0,i.l)(r,"unstable_getStaticProps"),P=(0,i.l)(r,"unstable_getStaticPaths"),j=(0,i.l)(r,"unstable_getStaticParams"),q=(0,i.l)(r,"unstable_getServerProps"),w=(0,i.l)(r,"unstable_getServerSideProps"),T=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/component-lifecycle/updating/what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",pathname:"/quizzes/component-lifecycle/updating/what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(20997),a=s(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let o=(0,a.useRef)(null);(0,a.useRef)(!1);let[i,n]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[i]),i)?r.jsx("ins",{ref:o,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,36132,41664,11163,25675,66531],()=>s(37780));module.exports=r})();