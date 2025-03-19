"use strict";(()=>{var e={};e.id=15131,e.ids=[15131,30660],e.modules={97963:(e,t,r)=>{r.r(t),r.d(t,{config:()=>S,default:()=>f,getServerSideProps:()=>v,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>k,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var s={};r.r(s),r.d(s,{default:()=>h,getStaticProps:()=>g});var n=r(87093),o=r(35244),i=r(1323),a=r(52899),l=r.n(a),d=r(49413),u=r(20997),c=r(55989),p=r(41354),m=r(16833);async function g(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"When is the static getDerivedStateFromProps() method called during mounting?",description:"Test your knowledge of the mounting phase in React component lifecycle with this comprehensive quiz."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"When is the static getDerivedStateFromProps() method called during mounting?",options:["Before the constructor","After the constructor but before render","After render but before componentDidMount","After componentDidMount"],code:void 0,nextQuestionPath:"what-is-the-purpose-of-the-componentdidmount-lifecycle-method",correctAnswer:2,explanation:"The static getDerivedStateFromProps() method is called after the constructor but before the render method during the mounting phase. It's a static method that receives props and state as parameters and returns an object to update the state or null to indicate no state update is necessary.",id:473,quizId:24},2)})]}))),f=(0,i.l)(s,"default"),x=(0,i.l)(s,"getStaticProps"),b=(0,i.l)(s,"getStaticPaths"),v=(0,i.l)(s,"getServerSideProps"),S=(0,i.l)(s,"config"),_=(0,i.l)(s,"reportWebVitals"),P=(0,i.l)(s,"unstable_getStaticProps"),j=(0,i.l)(s,"unstable_getStaticPaths"),q=(0,i.l)(s,"unstable_getStaticParams"),y=(0,i.l)(s,"unstable_getServerProps"),w=(0,i.l)(s,"unstable_getServerSideProps"),k=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/component-lifecycle/mounting/when-is-the-static-getderivedstatefromprops-method-called-during-mounting",pathname:"/quizzes/component-lifecycle/mounting/when-is-the-static-getderivedstatefromprops-method-called-during-mounting",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:s})},16833:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(20997),n=r(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let o=(0,n.useRef)(null);(0,n.useRef)(!1);let[i,a]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[i]),i)?s.jsx("ins",{ref:o,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>r(97963));module.exports=s})();