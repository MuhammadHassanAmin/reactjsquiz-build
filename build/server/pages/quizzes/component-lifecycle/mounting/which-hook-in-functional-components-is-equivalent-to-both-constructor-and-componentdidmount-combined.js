"use strict";(()=>{var e={};e.id=81190,e.ids=[81190,30660],e.modules={44022:(e,t,n)=>{n.r(t),n.d(t,{config:()=>S,default:()=>g,getServerSideProps:()=>v,getStaticPaths:()=>b,getStaticProps:()=>x,reportWebVitals:()=>_,routeModule:()=>k,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>y});var o={};n.r(o),n.d(o,{default:()=>f,getStaticProps:()=>h});var s=n(87093),i=n(35244),r=n(1323),a=n(52899),c=n.n(a),l=n(49413),u=n(20997),d=n(55989),p=n(41354),m=n(16833);async function h(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"Which hook in functional components is equivalent to both constructor and componentDidMount combined?",description:"Test your knowledge of the mounting phase in React component lifecycle with this comprehensive quiz."}}}let f=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(d.Y3,{activeQuestionIndex:7,totalQuestions:20,index:7,question:"Which hook in functional components is equivalent to both constructor and componentDidMount combined?",options:["useEffect with an empty dependency array","useState","useReducer","useLayoutEffect"],code:void 0,nextQuestionPath:"what-is-a-key-difference-between-the-constructor-and-componentdidmount-methods",correctAnswer:1,explanation:"The useEffect hook with an empty dependency array ([]) is roughly equivalent to a combination of constructor and componentDidMount in class components. It runs once after the initial render, similar to how componentDidMount executes after the component mounts.",id:478,quizId:24},7)})]}))),g=(0,r.l)(o,"default"),x=(0,r.l)(o,"getStaticProps"),b=(0,r.l)(o,"getStaticPaths"),v=(0,r.l)(o,"getServerSideProps"),S=(0,r.l)(o,"config"),_=(0,r.l)(o,"reportWebVitals"),y=(0,r.l)(o,"unstable_getStaticProps"),q=(0,r.l)(o,"unstable_getStaticPaths"),P=(0,r.l)(o,"unstable_getStaticParams"),j=(0,r.l)(o,"unstable_getServerProps"),w=(0,r.l)(o,"unstable_getServerSideProps"),k=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/quizzes/component-lifecycle/mounting/which-hook-in-functional-components-is-equivalent-to-both-constructor-and-componentdidmount-combined",pathname:"/quizzes/component-lifecycle/mounting/which-hook-in-functional-components-is-equivalent-to-both-constructor-and-componentdidmount-combined",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:o})},16833:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(20997),s=n(16689);let i=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let i=(0,s.useRef)(null);(0,s.useRef)(!1);let[r,a]=(0,s.useState)(!1);return((0,s.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,s.useEffect)(()=>{},[r]),r)?o.jsx("ins",{ref:i,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function r(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return o.jsx(o.Fragment,{children:(0,o.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[o.jsx("div",{children:o.jsx(i,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),o.jsx("div",{children:o.jsx(e,{...this.props})}),o.jsx("div",{children:o.jsx(i,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[52899,58559,25675,11163,66531],()=>n(44022));module.exports=o})();