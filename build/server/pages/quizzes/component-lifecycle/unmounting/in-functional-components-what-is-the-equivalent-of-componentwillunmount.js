"use strict";(()=>{var e={};e.id=78715,e.ids=[78715,30660],e.modules={62217:(e,t,n)=>{n.r(t),n.d(t,{config:()=>S,default:()=>g,getServerSideProps:()=>b,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>k,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>y});var o={};n.r(o),n.d(o,{default:()=>h,getStaticProps:()=>f});var s=n(87093),i=n(35244),r=n(1323),a=n(52899),l=n.n(a),u=n(49413),c=n(20997),p=n(55989),d=n(41354),m=n(16833);async function f(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"In functional components, what is the equivalent of componentWillUnmount?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let h=(0,d.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(p.Y3,{activeQuestionIndex:2,totalQuestions:20,index:2,question:"In functional components, what is the equivalent of componentWillUnmount?",options:["A separate useUnmount hook","The cleanup function returned by useEffect","The second parameter of useState","The useLayoutEffect hook"],code:void 0,nextQuestionPath:"what-happens-if-you-forget-to-clean-up-subscriptions-in-the-unmounting-phase",correctAnswer:2,explanation:"In functional components, the cleanup function returned by useEffect is the equivalent of componentWillUnmount. When you return a function from useEffect, React will call this function when the component unmounts. This gives you the opportunity to clean up resources like subscriptions or timers to prevent memory leaks.",id:513,quizId:26},2)})]}))),g=(0,r.l)(o,"default"),x=(0,r.l)(o,"getStaticProps"),v=(0,r.l)(o,"getStaticPaths"),b=(0,r.l)(o,"getServerSideProps"),S=(0,r.l)(o,"config"),_=(0,r.l)(o,"reportWebVitals"),y=(0,r.l)(o,"unstable_getStaticProps"),q=(0,r.l)(o,"unstable_getStaticPaths"),P=(0,r.l)(o,"unstable_getStaticParams"),w=(0,r.l)(o,"unstable_getServerProps"),j=(0,r.l)(o,"unstable_getServerSideProps"),k=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/in-functional-components-what-is-the-equivalent-of-componentwillunmount",pathname:"/quizzes/component-lifecycle/unmounting/in-functional-components-what-is-the-equivalent-of-componentwillunmount",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:o})},16833:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(20997),s=n(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let i=(0,s.useRef)(null);(0,s.useRef)(!1);let[r,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{},[r]),r)?o.jsx("ins",{ref:i,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function r(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[o.jsx("div",{children:o.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),o.jsx("div",{children:o.jsx(e,{...this.props})}),o.jsx("div",{children:o.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[52899,58559,25675,11163,66531],()=>n(62217));module.exports=o})();