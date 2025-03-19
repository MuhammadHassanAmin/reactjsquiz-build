"use strict";(()=>{var e={};e.id=57913,e.ids=[57913,30660],e.modules={13500:(e,t,n)=>{n.r(t),n.d(t,{config:()=>_,default:()=>f,getServerSideProps:()=>S,getStaticPaths:()=>v,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>k,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>P});var s={};n.r(s),n.d(s,{default:()=>h,getStaticProps:()=>g});var o=n(87093),a=n(35244),r=n(1323),i=n(52899),l=n.n(i),u=n(49413),c=n(20997),d=n(55989),p=n(41354),m=n(16833);async function g(){let e=await n.e(31317).then(n.t.bind(n,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is a common pattern to prevent state updates on unmounted components?",description:"Test your knowledge of the unmounting phase in React component lifecycle with this comprehensive quiz."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"Component Lifecycle: Unmounting"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:9,totalQuestions:20,index:9,question:"What is a common pattern to prevent state updates on unmounted components?",options:["Use React.memo","Use a boolean flag to track if the component is mounted","Wrap all state updates in setTimeout","Use the useReducer hook instead of useState"],code:void 0,nextQuestionPath:"how-do-keys-in-react-lists-affect-component-unmounting",correctAnswer:2,explanation:"A common pattern is to use a boolean flag (often named 'isMounted') to track if the component is still mounted. This flag is set to true when the component mounts and false when it unmounts. Before updating state in async callbacks, the code checks this flag and only proceeds if the component is still mounted, preventing updates on unmounted components.",id:520,quizId:26},9)})]}))),f=(0,r.l)(s,"default"),x=(0,r.l)(s,"getStaticProps"),v=(0,r.l)(s,"getStaticPaths"),S=(0,r.l)(s,"getServerSideProps"),_=(0,r.l)(s,"config"),b=(0,r.l)(s,"reportWebVitals"),P=(0,r.l)(s,"unstable_getStaticProps"),j=(0,r.l)(s,"unstable_getStaticPaths"),y=(0,r.l)(s,"unstable_getStaticParams"),q=(0,r.l)(s,"unstable_getServerProps"),w=(0,r.l)(s,"unstable_getServerSideProps"),k=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/quizzes/component-lifecycle/unmounting/what-is-a-common-pattern-to-prevent-state-updates-on-unmounted-components",pathname:"/quizzes/component-lifecycle/unmounting/what-is-a-common-pattern-to-prevent-state-updates-on-unmounted-components",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:s})},16833:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(20997),o=n(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:n})=>{let a=(0,o.useRef)(null);(0,o.useRef)(!1);let[r,i]=(0,o.useState)(!1);return((0,o.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,o.useEffect)(()=>{},[r]),r)?s.jsx("ins",{ref:a,className:`adsbygoogle ${n}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function r(e){return class extends o.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[52899,58559,25675,11163,66531],()=>n(13500));module.exports=s})();