"use strict";(()=>{var e={};e.id=22674,e.ids=[22674,30660],e.modules={92738:(e,t,a)=>{a.r(t),a.d(t,{config:()=>S,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>y,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>q,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>v});var r={};a.r(r),a.d(r,{default:()=>h,getStaticProps:()=>g});var s=a(87093),n=a(35244),i=a(1323),o=a(52899),l=a.n(o),d=a(49413),c=a(20997),u=a(55989),p=a(41354),m=a(16833);async function g(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is React.lazy() used for?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:2,totalQuestions:30,index:2,question:"What is React.lazy() used for?",options:["To create a component that renders slowly for transition effects","To create a component that doesn't re-render often","To dynamically import a component as a regular component","To delay the rendering of low-priority components"],code:void 0,nextQuestionPath:"what-must-be-used-together-with-react-lazy-for-handling-the-loading-state",correctAnswer:3,explanation:"React.lazy() is used to dynamically import a component as a regular component. It takes a function that must call a dynamic import() (which returns a Promise), and returns a component that can be rendered like any other component. The lazy component will only be loaded when it's rendered for the first time, enabling code splitting without affecting the component's usage in your application. This helps reduce the initial bundle size and improves application performance.",id:553,quizId:28},2)})]}))),f=(0,i.l)(r,"default"),x=(0,i.l)(r,"getStaticProps"),y=(0,i.l)(r,"getStaticPaths"),b=(0,i.l)(r,"getServerSideProps"),S=(0,i.l)(r,"config"),_=(0,i.l)(r,"reportWebVitals"),v=(0,i.l)(r,"unstable_getStaticProps"),z=(0,i.l)(r,"unstable_getStaticPaths"),P=(0,i.l)(r,"unstable_getStaticParams"),w=(0,i.l)(r,"unstable_getServerProps"),j=(0,i.l)(r,"unstable_getServerSideProps"),q=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/what-is-react-lazy-used-for",pathname:"/quizzes/performance-optimization/lazy-loading/what-is-react-lazy-used-for",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:r})},16833:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(20997),s=a(16689);let n=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let n=(0,s.useRef)(null);(0,s.useRef)(!1);let[i,o]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(o(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{},[i]),i)?r.jsx("ins",{ref:n,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(n,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(n,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>a(92738));module.exports=r})();