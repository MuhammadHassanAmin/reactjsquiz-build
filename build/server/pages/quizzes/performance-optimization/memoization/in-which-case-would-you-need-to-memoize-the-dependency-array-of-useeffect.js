"use strict";(()=>{var e={};e.id=88265,e.ids=[88265,30660],e.modules={5434:(e,t,r)=>{r.r(t),r.d(t,{config:()=>b,default:()=>g,getServerSideProps:()=>v,getStaticPaths:()=>y,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>q,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>w});var n={};r.r(n),r.d(n,{default:()=>f,getStaticProps:()=>h});var a=r(87093),s=r(35244),o=r(1323),i=r(52899),c=r.n(i),l=r(49413),u=r(20997),d=r(55989),p=r(41354),m=r(16833);async function h(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"In which case would you need to memoize the dependency array of useEffect?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let f=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(d.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"In which case would you need to memoize the dependency array of useEffect?",options:["When the dependency array contains primitive values","When the useEffect hook runs expensive operations","When the dependency array contains object or array references created during render","When the useEffect needs to run only once"],nextQuestionPath:"what-s-the-most-appropriate-way-to-memoize-a-component-that-receives-many-props",correctAnswer:3,explanation:"You would need to memoize the dependency array of useEffect when it contains object or array references created during render. Without memoization, these objects or arrays would have new references on every render, causing the effect to run more often than necessary. By using useMemo to stabilize these references (e.g., `const stableObj = useMemo(() => ({ key: value }), [value])`), you ensure the effect only runs when the actual data changes, not just when the references change.",id:547,quizId:27},16)})]}))),g=(0,o.l)(n,"default"),x=(0,o.l)(n,"getStaticProps"),y=(0,o.l)(n,"getStaticPaths"),v=(0,o.l)(n,"getServerSideProps"),b=(0,o.l)(n,"config"),_=(0,o.l)(n,"reportWebVitals"),w=(0,o.l)(n,"unstable_getStaticProps"),S=(0,o.l)(n,"unstable_getStaticPaths"),z=(0,o.l)(n,"unstable_getStaticParams"),j=(0,o.l)(n,"unstable_getServerProps"),P=(0,o.l)(n,"unstable_getServerSideProps"),q=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/quizzes/performance-optimization/memoization/in-which-case-would-you-need-to-memoize-the-dependency-array-of-useeffect",pathname:"/quizzes/performance-optimization/memoization/in-which-case-would-you-need-to-memoize-the-dependency-array-of-useeffect",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:n})},16833:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(20997),a=r(16689);let s=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let s=(0,a.useRef)(null);(0,a.useRef)(!1);let[o,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[o]),o)?n.jsx("ins",{ref:s,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[52899,36132,41664,11163,25675,66531],()=>r(5434));module.exports=n})();