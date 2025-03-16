"use strict";(()=>{var e={};e.id=30279,e.ids=[30279,30660],e.modules={99206:(e,t,n)=>{n.r(t),n.d(t,{config:()=>_,default:()=>g,getServerSideProps:()=>b,getStaticPaths:()=>y,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>v});var r={};n.r(r),n.d(r,{default:()=>m,getStaticProps:()=>f});var s=n(87093),a=n(35244),o=n(1323),i=n(52899),l=n.n(i),u=n(49413),c=n(20997),d=n(55989),p=n(41354),h=n(16833);async function f(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How does the dependency array in useEffect relate to cleanup?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let m=(0,p.Z)((0,h.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"How does the dependency array in useEffect relate to cleanup?",options:["It has no effect on cleanup functions","Cleanup functions only run when the component unmounts, regardless of dependencies","Cleanup functions run before every re-render if dependencies change, and when unmounting","Dependencies determine if the effect should run, but don't affect cleanup"],nextQuestionPath:"in-what-order-do-unmounting-lifecycle-methods-execute-when-a-parent-and-child-component-both-unmount",correctAnswer:3,explanation:"When dependencies in a useEffect's dependency array change, React runs the cleanup function from the previous render before executing the effect again. Additionally, the cleanup function will run when the component unmounts. This ensures proper resource management when dependencies change and when the component is removed from the DOM.",id:517,quizId:26},6)})]}))),g=(0,o.l)(r,"default"),x=(0,o.l)(r,"getStaticProps"),y=(0,o.l)(r,"getStaticPaths"),b=(0,o.l)(r,"getServerSideProps"),_=(0,o.l)(r,"config"),S=(0,o.l)(r,"reportWebVitals"),v=(0,o.l)(r,"unstable_getStaticProps"),w=(0,o.l)(r,"unstable_getStaticPaths"),P=(0,o.l)(r,"unstable_getStaticParams"),j=(0,o.l)(r,"unstable_getServerProps"),q=(0,o.l)(r,"unstable_getServerSideProps"),k=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/how-does-the-dependency-array-in-useeffect-relate-to-cleanup",pathname:"/quizzes/component-lifecycle/unmounting/how-does-the-dependency-array-in-useeffect-relate-to-cleanup",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:r})},16833:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(20997),s=n(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let a=(0,s.useRef)(null);(0,s.useRef)(!1);let[o,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{},[o]),o)?r.jsx("ins",{ref:a,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>n(99206));module.exports=r})();