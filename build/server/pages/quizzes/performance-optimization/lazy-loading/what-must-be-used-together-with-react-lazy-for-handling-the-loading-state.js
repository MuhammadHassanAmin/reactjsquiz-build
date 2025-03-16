"use strict";(()=>{var e={};e.id=21995,e.ids=[21995,30660],e.modules={72081:(e,t,a)=>{a.r(t),a.d(t,{config:()=>y,default:()=>f,getServerSideProps:()=>S,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>q,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>z});var s={};a.r(s),a.d(s,{default:()=>m,getStaticProps:()=>h});var r=a(87093),i=a(35244),n=a(1323),o=a(52899),l=a.n(o),d=a(49413),u=a(20997),c=a(55989),p=a(41354),g=a(16833);async function h(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What must be used together with React.lazy() for handling the loading state?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let m=(0,p.Z)((0,g.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:3,totalQuestions:30,index:3,question:"What must be used together with React.lazy() for handling the loading state?",options:["React.Fragment","React.Suspense","React.ErrorBoundary","React.AsyncComponent"],nextQuestionPath:"what-happens-if-a-lazy-loaded-component-throws-an-error-during-loading",correctAnswer:2,explanation:"React.Suspense must be used together with React.lazy() for handling the loading state. When a lazy-loaded component is being loaded, there might be a delay before it becomes available. Suspense allows you to specify a fallback UI (like a loading indicator) that will be shown during this loading period. The Suspense component wraps lazy-loaded components and handles their loading states gracefully.",id:554,quizId:28},3)})]}))),f=(0,n.l)(s,"default"),x=(0,n.l)(s,"getStaticProps"),b=(0,n.l)(s,"getStaticPaths"),S=(0,n.l)(s,"getServerSideProps"),y=(0,n.l)(s,"config"),_=(0,n.l)(s,"reportWebVitals"),z=(0,n.l)(s,"unstable_getStaticProps"),v=(0,n.l)(s,"unstable_getStaticPaths"),w=(0,n.l)(s,"unstable_getStaticParams"),P=(0,n.l)(s,"unstable_getServerProps"),j=(0,n.l)(s,"unstable_getServerSideProps"),q=new r.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/what-must-be-used-together-with-react-lazy-for-handling-the-loading-state",pathname:"/quizzes/performance-optimization/lazy-loading/what-must-be-used-together-with-react-lazy-for-handling-the-loading-state",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:s})},16833:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(20997),r=a(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let i=(0,r.useRef)(null);(0,r.useRef)(!1);let[n,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[n]),n)?s.jsx("ins",{ref:i,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>a(72081));module.exports=s})();