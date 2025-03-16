"use strict";(()=>{var e={};e.id=65785,e.ids=[65785,30660],e.modules={16048:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>w,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>q,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>v});var s={};r.r(s),r.d(s,{default:()=>g,getStaticProps:()=>h});var o=r(87093),n=r(35244),a=r(1323),i=r(52899),l=r.n(i),c=r(49413),d=r(20997),p=r(55989),m=r(41354),u=r(16833);async function h(){let e=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"When does a memoized component with React.memo re-render?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let g=(0,m.Z)((0,u.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(p.Y3,{activeQuestionIndex:6,totalQuestions:20,index:6,question:"When does a memoized component with React.memo re-render?",options:["Only when its internal state changes","Only when its props change (by shallow comparison)","Only when its context changes","Only when its parent component forces it to using forceUpdate"],nextQuestionPath:"which-of-the-following-is-not-a-valid-use-case-for-usememo",correctAnswer:2,explanation:"A memoized component wrapped with React.memo re-renders when its props change based on a shallow comparison. By default, React.memo performs a shallow equality check on the component's props objects. If any prop has a different reference than in the previous render, the component will re-render. Additionally, the component will re-render if it uses its own internal state or context that changes, regardless of props.",id:537,quizId:27},6)})]}))),f=(0,a.l)(s,"default"),x=(0,a.l)(s,"getStaticProps"),w=(0,a.l)(s,"getStaticPaths"),b=(0,a.l)(s,"getServerSideProps"),_=(0,a.l)(s,"config"),S=(0,a.l)(s,"reportWebVitals"),v=(0,a.l)(s,"unstable_getStaticProps"),P=(0,a.l)(s,"unstable_getStaticPaths"),z=(0,a.l)(s,"unstable_getStaticParams"),y=(0,a.l)(s,"unstable_getServerProps"),j=(0,a.l)(s,"unstable_getServerSideProps"),q=new o.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/quizzes/performance-optimization/memoization/when-does-a-memoized-component-with-react-memo-re-render",pathname:"/quizzes/performance-optimization/memoization/when-does-a-memoized-component-with-react-memo-re-render",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:s})},16833:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(20997),o=r(16689);let n=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let n=(0,o.useRef)(null);(0,o.useRef)(!1);let[a,i]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{},[a]),a)?s.jsx("ins",{ref:n,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends o.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(n,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(n,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>r(16048));module.exports=s})();