"use strict";(()=>{var e={};e.id=42378,e.ids=[42378,30660],e.modules={36104:(e,t,n)=>{n.r(t),n.d(t,{config:()=>v,default:()=>f,getServerSideProps:()=>y,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>_});var s={};n.r(s),n.d(s,{default:()=>h,getStaticProps:()=>g});var r=n(87093),o=n(35244),a=n(1323),i=n(52899),u=n.n(i),l=n(49413),c=n(20997),d=n(55989),p=n(41354),m=n(16833);async function g(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How can you test if a component's unmounting cleanup works correctly?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:12,totalQuestions:20,index:12,question:"How can you test if a component's unmounting cleanup works correctly?",options:["You can't test unmounting behavior","Use React Testing Library's unmount() or cleanup() functions","Only through manual testing in the browser","Set component state to null"],nextQuestionPath:"what-happens-if-an-error-is-thrown-during-the-unmounting-phase",correctAnswer:2,explanation:"You can test unmounting behavior using testing libraries. React Testing Library provides an unmount() function that simulates component unmounting. After calling this function, you can verify that cleanup has occurred correctly, such as checking if timers were cleared or listeners removed. This allows automated testing of unmounting behavior.",id:523,quizId:26},12)})]}))),f=(0,a.l)(s,"default"),x=(0,a.l)(s,"getStaticProps"),b=(0,a.l)(s,"getStaticPaths"),y=(0,a.l)(s,"getServerSideProps"),v=(0,a.l)(s,"config"),S=(0,a.l)(s,"reportWebVitals"),_=(0,a.l)(s,"unstable_getStaticProps"),w=(0,a.l)(s,"unstable_getStaticPaths"),P=(0,a.l)(s,"unstable_getStaticParams"),j=(0,a.l)(s,"unstable_getServerProps"),q=(0,a.l)(s,"unstable_getServerSideProps"),k=new r.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/how-can-you-test-if-a-component-s-unmounting-cleanup-works-correctly",pathname:"/quizzes/component-lifecycle/unmounting/how-can-you-test-if-a-component-s-unmounting-cleanup-works-correctly",bundlePath:"",filename:""},components:{App:l.default,Document:u()},userland:s})},16833:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(20997),r=n(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let o=(0,r.useRef)(null);(0,r.useRef)(!1);let[a,i]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[a]),a)?s.jsx("ins",{ref:o,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>n(36104));module.exports=s})();