"use strict";(()=>{var e={};e.id=21869,e.ids=[21869,30660],e.modules={96021:(e,t,o)=>{o.r(t),o.d(t,{config:()=>S,default:()=>f,getServerSideProps:()=>_,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>P,routeModule:()=>z,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>b});var a={};o.r(a),o.d(a,{default:()=>g,getStaticProps:()=>h});var r=o(87093),s=o(35244),n=o(1323),i=o(52899),l=o.n(i),c=o(49413),u=o(20997),d=o(55989),p=o(41354),m=o(16833);async function h(){let e=await o.e(31317).then(o.t.bind(o,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How can you provide a custom comparison function to React.memo?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let g=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(d.Y3,{activeQuestionIndex:8,totalQuestions:20,index:8,question:"How can you provide a custom comparison function to React.memo?",options:["Pass it as a second argument to React.memo","Use the shouldComponentUpdate lifecycle method","Use the useMemo hook alongside React.memo","Pass it as a prop to the memoized component"],code:void 0,nextQuestionPath:"what-happens-if-you-don-t-provide-a-dependency-array-to-usememo",correctAnswer:1,explanation:"You can provide a custom comparison function as the second argument to React.memo. This function takes two parameters: the previous props and the next props. It should return true if the props are equal (meaning the component should not re-render), or false if the props are not equal (meaning the component should re-render). This allows for more complex comparison logic than the default shallow comparison.",id:539,quizId:27},8)})]}))),f=(0,n.l)(a,"default"),x=(0,n.l)(a,"getStaticProps"),v=(0,n.l)(a,"getStaticPaths"),_=(0,n.l)(a,"getServerSideProps"),S=(0,n.l)(a,"config"),P=(0,n.l)(a,"reportWebVitals"),b=(0,n.l)(a,"unstable_getStaticProps"),q=(0,n.l)(a,"unstable_getStaticPaths"),y=(0,n.l)(a,"unstable_getStaticParams"),j=(0,n.l)(a,"unstable_getServerProps"),w=(0,n.l)(a,"unstable_getServerSideProps"),z=new r.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/quizzes/performance-optimization/memoization/how-can-you-provide-a-custom-comparison-function-to-react-memo",pathname:"/quizzes/performance-optimization/memoization/how-can-you-provide-a-custom-comparison-function-to-react-memo",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:a})},16833:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(20997),r=o(16689);let s=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:o})=>{let s=(0,r.useRef)(null);(0,r.useRef)(!1);let[n,i]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[n]),n)?a.jsx("ins",{ref:s,className:`adsbygoogle ${o}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function n(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[a.jsx("div",{children:a.jsx(s,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),a.jsx("div",{children:a.jsx(e,{...this.props})}),a.jsx("div",{children:a.jsx(s,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),a=t.X(0,[52899,58559,25675,11163,66531],()=>o(96021));module.exports=a})();