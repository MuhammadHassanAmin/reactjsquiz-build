"use strict";(()=>{var e={};e.id=47028,e.ids=[47028,30660],e.modules={833:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>f,getServerSideProps:()=>S,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>k,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var n={};r.r(n),r.d(n,{default:()=>m,getStaticProps:()=>g});var a=r(87093),s=r(35244),o=r(1323),i=r(52899),d=r.n(i),l=r(49413),p=r(20997),c=r(55989),u=r(41354),h=r(16833);async function g(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"Which method can prevent a component from re-rendering during the updating phase?",description:"Test your knowledge of the updating phase in React component lifecycle with this comprehensive quiz."}}}let m=(0,u.Z)((0,h.Z)(()=>(0,p.jsxs)(p.Fragment,{children:[p.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Updating"}),p.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:p.jsx(c.Y3,{activeQuestionIndex:1,totalQuestions:20,index:1,question:"Which method can prevent a component from re-rendering during the updating phase?",options:["componentDidUpdate()","getDerivedStateFromProps()","shouldComponentUpdate()","getSnapshotBeforeUpdate()"],nextQuestionPath:"what-is-the-purpose-of-the-getsnapshotbeforeupdate-lifecycle-method",correctAnswer:3,explanation:"The shouldComponentUpdate() method can prevent a component from re-rendering during the updating phase. It receives the next props and state as arguments and returns a boolean value. If it returns false, React will skip the rendering process for this component (and its children), which can improve performance for components that don't need to update based on certain prop or state changes.",id:492,quizId:25},1)})]}))),f=(0,o.l)(n,"default"),x=(0,o.l)(n,"getStaticProps"),v=(0,o.l)(n,"getStaticPaths"),S=(0,o.l)(n,"getServerSideProps"),_=(0,o.l)(n,"config"),b=(0,o.l)(n,"reportWebVitals"),P=(0,o.l)(n,"unstable_getStaticProps"),j=(0,o.l)(n,"unstable_getStaticPaths"),q=(0,o.l)(n,"unstable_getStaticParams"),y=(0,o.l)(n,"unstable_getServerProps"),w=(0,o.l)(n,"unstable_getServerSideProps"),k=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/quizzes/component-lifecycle/updating/which-method-can-prevent-a-component-from-re-rendering-during-the-updating-phase",pathname:"/quizzes/component-lifecycle/updating/which-method-can-prevent-a-component-from-re-rendering-during-the-updating-phase",bundlePath:"",filename:""},components:{App:l.default,Document:d()},userland:n})},16833:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(20997),a=r(16689);let s=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let s=(0,a.useRef)(null);(0,a.useRef)(!1);let[o,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,a.useEffect)(()=>{},[o]),o)?n.jsx("ins",{ref:s,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[52899,36132,41664,11163,25675,66531],()=>r(833));module.exports=n})();