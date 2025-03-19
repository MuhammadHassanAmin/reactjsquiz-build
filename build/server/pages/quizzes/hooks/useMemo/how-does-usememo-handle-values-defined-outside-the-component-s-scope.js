"use strict";(()=>{var e={};e.id=42609,e.ids=[42609,30660],e.modules={69271:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>g,getServerSideProps:()=>_,getStaticPaths:()=>v,getStaticProps:()=>f,reportWebVitals:()=>b,routeModule:()=>z,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>P});var o={};s.r(o),s.d(o,{default:()=>x,getStaticProps:()=>h});var r=s(87093),a=s(35244),i=s(1323),n=s(52899),l=s.n(n),d=s(49413),u=s(20997),c=s(55989),p=s(41354),m=s(16833);async function h(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How does useMemo handle values defined outside the component's scope?",description:"Test your knowledge of the useMemo hook in React with this quiz."}}}let x=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"useMemo"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(c.Y3,{activeQuestionIndex:16,totalQuestions:20,index:16,question:"How does useMemo handle values defined outside the component's scope?",options:["It automatically memoizes all external values","It ignores external values","It memoizes external values only if explicitly specified","It throws an error"],code:void 0,nextQuestionPath:"what-is-the-main-disadvantage-of-using-usememo",correctAnswer:3,explanation:"UseMemo memoizes values defined outside the component's scope only if explicitly specified, ensuring that they are memoized properly to prevent unnecessary re-renders.",id:86,quizId:5},16)})]}))),g=(0,i.l)(o,"default"),f=(0,i.l)(o,"getStaticProps"),v=(0,i.l)(o,"getStaticPaths"),_=(0,i.l)(o,"getServerSideProps"),S=(0,i.l)(o,"config"),b=(0,i.l)(o,"reportWebVitals"),P=(0,i.l)(o,"unstable_getStaticProps"),y=(0,i.l)(o,"unstable_getStaticPaths"),j=(0,i.l)(o,"unstable_getStaticParams"),q=(0,i.l)(o,"unstable_getServerProps"),w=(0,i.l)(o,"unstable_getServerSideProps"),z=new r.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/hooks/useMemo/how-does-usememo-handle-values-defined-outside-the-component-s-scope",pathname:"/quizzes/hooks/useMemo/how-does-usememo-handle-values-defined-outside-the-component-s-scope",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:o})},16833:(e,t,s)=>{s.d(t,{Z:()=>i});var o=s(20997),r=s(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let a=(0,r.useRef)(null);(0,r.useRef)(!1);let[i,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[i]),i)?o.jsx("ins",{ref:a,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[o.jsx("div",{children:o.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),o.jsx("div",{children:o.jsx(e,{...this.props})}),o.jsx("div",{children:o.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[52899,58559,25675,11163,66531],()=>s(69271));module.exports=o})();