"use strict";(()=>{var e={};e.id=81257,e.ids=[81257,30660],e.modules={33104:(e,t,o)=>{o.r(t),o.d(t,{config:()=>j,default:()=>x,getServerSideProps:()=>b,getStaticPaths:()=>v,getStaticProps:()=>f,reportWebVitals:()=>_,routeModule:()=>w,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>S});var a={};o.r(a),o.d(a,{default:()=>g,getStaticProps:()=>h});var n=o(87093),r=o(35244),s=o(1323),i=o(52899),c=o.n(i),l=o(49413),p=o(20997),u=o(55989),d=o(41354),m=o(16833);async function h(){let e=await o.e(31317).then(o.t.bind(o,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How can you memoize a child component that receives an object prop that changes on every parent render?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let g=(0,d.Z)((0,m.Z)(()=>(0,p.jsxs)(p.Fragment,{children:[p.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),p.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:p.jsx(u.Y3,{activeQuestionIndex:11,totalQuestions:20,index:11,question:"How can you memoize a child component that receives an object prop that changes on every parent render?",options:["Use React.PureComponent instead of React.memo","Implement shouldComponentUpdate in the child component","Use useMemo to memoize the object in the parent component","Avoid using objects as props"],nextQuestionPath:"what-is-the-potential-downside-of-over-using-memoization-in-react",correctAnswer:3,explanation:"To memoize a child component that receives an object prop, you should use useMemo to memoize the object in the parent component. This ensures the object has a stable reference across renders when its contents haven't changed. For example: `const memoizedObject = useMemo(() => ({ value: someValue }), [someValue]);`. Alternatively, you could use a custom comparison function with React.memo on the child component to deeply compare object props.",id:542,quizId:27},11)})]}))),x=(0,s.l)(a,"default"),f=(0,s.l)(a,"getStaticProps"),v=(0,s.l)(a,"getStaticPaths"),b=(0,s.l)(a,"getServerSideProps"),j=(0,s.l)(a,"config"),_=(0,s.l)(a,"reportWebVitals"),S=(0,s.l)(a,"unstable_getStaticProps"),z=(0,s.l)(a,"unstable_getStaticPaths"),P=(0,s.l)(a,"unstable_getStaticParams"),y=(0,s.l)(a,"unstable_getServerProps"),q=(0,s.l)(a,"unstable_getServerSideProps"),w=new n.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/performance-optimization/memoization/how-can-you-memoize-a-child-component-that-receives-an-object-prop-that-changes-on-every-parent-render",pathname:"/quizzes/performance-optimization/memoization/how-can-you-memoize-a-child-component-that-receives-an-object-prop-that-changes-on-every-parent-render",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:a})},16833:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(20997),n=o(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:o})=>{let r=(0,n.useRef)(null);(0,n.useRef)(!1);let[s,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[s]),s)?a.jsx("ins",{ref:r,className:`adsbygoogle ${o}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function s(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[a.jsx("div",{children:a.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),a.jsx("div",{children:a.jsx(e,{...this.props})}),a.jsx("div",{children:a.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),a=t.X(0,[52899,58559,25675,11163,66531],()=>o(33104));module.exports=a})();