"use strict";(()=>{var e={};e.id=9353,e.ids=[9353,30660],e.modules={6653:(e,t,a)=>{a.r(t),a.d(t,{config:()=>w,default:()=>y,getServerSideProps:()=>b,getStaticPaths:()=>x,getStaticProps:()=>f,reportWebVitals:()=>z,routeModule:()=>j,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>R,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>S});var i={};a.r(i),a.d(i,{default:()=>h,getStaticProps:()=>g});var n=a(87093),r=a(35244),s=a(1323),o=a(52899),l=a.n(o),d=a(49413),c=a(20997),u=a(55989),m=a(41354),p=a(16833);async function g(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is the main difference between React.lazy and manually using dynamic import() in React?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let h=(0,m.Z)((0,p.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:13,totalQuestions:30,index:13,question:"What is the main difference between React.lazy and manually using dynamic import() in React?",options:["React.lazy has built-in error handling","Dynamic import() works with server-side rendering but React.lazy doesn't","React.lazy integrates with React's component model while dynamic import() just returns a Promise","Dynamic import() is deprecated in favor of React.lazy"],code:void 0,nextQuestionPath:"what-would-be-a-good-candidate-for-lazy-loading-in-a-typical-react-application",correctAnswer:3,explanation:"The main difference between React.lazy and manually using dynamic import() is that React.lazy integrates with React's component model while dynamic import() just returns a Promise. React.lazy converts the Promise returned by dynamic import() into a React component that can be directly used in JSX. It also integrates with Suspense for loading states. With manual dynamic import(), you would need to handle the Promise resolution yourself, manage component state for loading/error conditions, and implement your own rendering logic, which is more complex and error-prone.",id:564,quizId:28},13)})]}))),y=(0,s.l)(i,"default"),f=(0,s.l)(i,"getStaticProps"),x=(0,s.l)(i,"getStaticPaths"),b=(0,s.l)(i,"getServerSideProps"),w=(0,s.l)(i,"config"),z=(0,s.l)(i,"reportWebVitals"),S=(0,s.l)(i,"unstable_getStaticProps"),v=(0,s.l)(i,"unstable_getStaticPaths"),P=(0,s.l)(i,"unstable_getStaticParams"),_=(0,s.l)(i,"unstable_getServerProps"),R=(0,s.l)(i,"unstable_getServerSideProps"),j=new n.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/what-is-the-main-difference-between-react-lazy-and-manually-using-dynamic-import-in-react",pathname:"/quizzes/performance-optimization/lazy-loading/what-is-the-main-difference-between-react-lazy-and-manually-using-dynamic-import-in-react",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:i})},16833:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(20997),n=a(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let r=(0,n.useRef)(null);(0,n.useRef)(!1);let[s,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[s]),s)?i.jsx("ins",{ref:r,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function s(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[i.jsx("div",{children:i.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),i.jsx("div",{children:i.jsx(e,{...this.props})}),i.jsx("div",{children:i.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[52899,58559,25675,11163,66531],()=>a(6653));module.exports=i})();