"use strict";(()=>{var e={};e.id=30296,e.ids=[30296,30660],e.modules={82581:(e,t,n)=>{n.r(t),n.d(t,{config:()=>v,default:()=>f,getServerSideProps:()=>_,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>w});var s={};n.r(s),n.d(s,{default:()=>g,getStaticProps:()=>h});var r=n(87093),a=n(35244),o=n(1323),i=n(52899),l=n.n(i),u=n(49413),c=n(20997),p=n(55989),d=n(41354),m=n(16833);async function h(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What happens to refs when a component unmounts?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let g=(0,d.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(p.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"What happens to refs when a component unmounts?",options:["Refs automatically become null","Refs persist until manually cleared","Refs throw exceptions if accessed after unmounting","Refs become undefined but don't need cleanup"],nextQuestionPath:"how-does-unmounting-work-with-react-portals",correctAnswer:1,explanation:"When a component unmounts, React automatically sets its refs to null. This happens as part of React's internal cleanup. However, if you've stored a ref value elsewhere (like in a closure or parent component), that reference might still exist and should be properly handled to prevent memory leaks or attempts to interact with unmounted components.",id:527,quizId:26},16)})]}))),f=(0,o.l)(s,"default"),x=(0,o.l)(s,"getStaticProps"),b=(0,o.l)(s,"getStaticPaths"),_=(0,o.l)(s,"getServerSideProps"),v=(0,o.l)(s,"config"),S=(0,o.l)(s,"reportWebVitals"),w=(0,o.l)(s,"unstable_getStaticProps"),P=(0,o.l)(s,"unstable_getStaticPaths"),y=(0,o.l)(s,"unstable_getStaticParams"),j=(0,o.l)(s,"unstable_getServerProps"),q=(0,o.l)(s,"unstable_getServerSideProps"),k=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/what-happens-to-refs-when-a-component-unmounts",pathname:"/quizzes/component-lifecycle/unmounting/what-happens-to-refs-when-a-component-unmounts",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:s})},16833:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(20997),r=n(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let a=(0,r.useRef)(null);(0,r.useRef)(!1);let[o,i]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[o]),o)?s.jsx("ins",{ref:a,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>n(82581));module.exports=s})();