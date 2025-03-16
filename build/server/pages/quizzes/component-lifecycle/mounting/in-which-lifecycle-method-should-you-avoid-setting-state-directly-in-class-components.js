"use strict";(()=>{var e={};e.id=32647,e.ids=[32647,30660],e.modules={60091:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>x,getServerSideProps:()=>v,getStaticPaths:()=>y,getStaticProps:()=>f,reportWebVitals:()=>_,routeModule:()=>k,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>b});var n={};s.r(n),s.d(n,{default:()=>g,getStaticProps:()=>m});var i=s(87093),r=s(35244),o=s(1323),a=s(52899),l=s.n(a),d=s(49413),c=s(20997),u=s(55989),p=s(41354),h=s(16833);async function m(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"In which lifecycle method should you avoid setting state directly in class components?",description:"Test your knowledge of the mounting phase in React component lifecycle with this comprehensive quiz."}}}let g=(0,p.Z)((0,h.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(u.Y3,{activeQuestionIndex:4,totalQuestions:20,index:4,question:"In which lifecycle method should you avoid setting state directly in class components?",options:["constructor()","componentDidMount()","render()","getDerivedStateFromProps()"],nextQuestionPath:"what-happens-if-you-call-setstate-inside-componentdidmount",correctAnswer:3,explanation:"You should avoid setting state directly in the render() method. The render method should be pure, meaning it should not modify the component's state. Setting state in render would cause an infinite loop of re-rendering since changing state triggers another render cycle.",id:475,quizId:24},4)})]}))),x=(0,o.l)(n,"default"),f=(0,o.l)(n,"getStaticProps"),y=(0,o.l)(n,"getStaticPaths"),v=(0,o.l)(n,"getServerSideProps"),S=(0,o.l)(n,"config"),_=(0,o.l)(n,"reportWebVitals"),b=(0,o.l)(n,"unstable_getStaticProps"),P=(0,o.l)(n,"unstable_getStaticPaths"),j=(0,o.l)(n,"unstable_getStaticParams"),q=(0,o.l)(n,"unstable_getServerProps"),w=(0,o.l)(n,"unstable_getServerSideProps"),k=new i.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/component-lifecycle/mounting/in-which-lifecycle-method-should-you-avoid-setting-state-directly-in-class-components",pathname:"/quizzes/component-lifecycle/mounting/in-which-lifecycle-method-should-you-avoid-setting-state-directly-in-class-components",bundlePath:"",filename:""},components:{App:d.default,Document:l()},userland:n})},16833:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(20997),i=s(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let r=(0,i.useRef)(null);(0,i.useRef)(!1);let[o,a]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(a(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{},[o]),o)?n.jsx("ins",{ref:r,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends i.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[52899,58559,25675,11163,66531],()=>s(60091));module.exports=n})();