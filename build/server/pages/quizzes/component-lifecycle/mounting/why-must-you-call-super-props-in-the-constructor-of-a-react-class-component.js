"use strict";(()=>{var e={};e.id=87093,e.ids=[87093,30660],e.modules={82383:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>x,getServerSideProps:()=>_,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>v,routeModule:()=>z,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>y});var r={};s.r(r),s.d(r,{default:()=>g,getStaticProps:()=>h});var n=s(87093),o=s(35244),a=s(1323),i=s(52899),l=s.n(i),c=s(49413),u=s(20997),p=s(55989),d=s(41354),m=s(16833);async function h(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"Why must you call super(props) in the constructor of a React class component?",description:"Test your knowledge of the mounting phase in React component lifecycle with this comprehensive quiz."}}}let g=(0,d.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Mounting"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(p.Y3,{activeQuestionIndex:15,totalQuestions:20,index:15,question:"Why must you call super(props) in the constructor of a React class component?",options:["It's optional and not required","To enable state initialization","To initialize the parent class and enable this.props","To prevent memory leaks"],code:void 0,nextQuestionPath:"what-is-the-difference-between-mounting-in-server-side-rendering-and-client-side-rendering",correctAnswer:3,explanation:"You must call super(props) in the constructor of a React class component to initialize the parent class (Component) and ensure that this.props is defined and accessible within the constructor. If you don't call super(props), this.props will be undefined in the constructor, which can lead to bugs.",id:486,quizId:24},15)})]}))),x=(0,a.l)(r,"default"),f=(0,a.l)(r,"getStaticProps"),b=(0,a.l)(r,"getStaticPaths"),_=(0,a.l)(r,"getServerSideProps"),S=(0,a.l)(r,"config"),v=(0,a.l)(r,"reportWebVitals"),y=(0,a.l)(r,"unstable_getStaticProps"),P=(0,a.l)(r,"unstable_getStaticPaths"),j=(0,a.l)(r,"unstable_getStaticParams"),q=(0,a.l)(r,"unstable_getServerProps"),w=(0,a.l)(r,"unstable_getServerSideProps"),z=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/component-lifecycle/mounting/why-must-you-call-super-props-in-the-constructor-of-a-react-class-component",pathname:"/quizzes/component-lifecycle/mounting/why-must-you-call-super-props-in-the-constructor-of-a-react-class-component",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:r})},16833:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(20997),n=s(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let o=(0,n.useRef)(null);(0,n.useRef)(!1);let[a,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[a]),a)?r.jsx("ins",{ref:o,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function a(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[r.jsx("div",{children:r.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),r.jsx("div",{children:r.jsx(e,{...this.props})}),r.jsx("div",{children:r.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[52899,58559,25675,11163,66531],()=>s(82383));module.exports=r})();