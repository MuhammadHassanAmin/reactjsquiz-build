"use strict";(()=>{var e={};e.id=781,e.ids=[781,660],e.modules={82042:(e,t,r)=>{r.r(t),r.d(t,{config:()=>v,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>S,getStaticProps:()=>g,reportWebVitals:()=>P,routeModule:()=>N,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>j});var s={};r.r(s),r.d(s,{default:()=>h,getStaticProps:()=>x});var n=r(87093),a=r(35244),o=r(1323),i=r(52899),l=r.n(i),c=r(49413),u=r(20997);r(16689);var d=r(55989),p=r(41354),m=r(16833);async function x(){return{props:{title:"Can we render a React component from another component?",description:"Test your knowledge of React basics with this quiz."}}}let h=(0,p.Z)((0,m.Z)(()=>(0,u.jsxs)(u.Fragment,{children:[u.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Basics Quiz"}),u.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:u.jsx(d.Y3,{activeQuestionIndex:11,totalQuestions:19,index:11,question:"Can we render a React component from another component?",options:["Yes","No"],nextQuestionPath:"can-a-component-modify-its-own-props",correctAnswer:"1",explanation:"Yes, components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.",id:"12"},11)})]}))),f=(0,o.l)(s,"default"),g=(0,o.l)(s,"getStaticProps"),S=(0,o.l)(s,"getStaticPaths"),b=(0,o.l)(s,"getServerSideProps"),v=(0,o.l)(s,"config"),P=(0,o.l)(s,"reportWebVitals"),j=(0,o.l)(s,"unstable_getStaticProps"),_=(0,o.l)(s,"unstable_getStaticPaths"),q=(0,o.l)(s,"unstable_getStaticParams"),w=(0,o.l)(s,"unstable_getServerProps"),y=(0,o.l)(s,"unstable_getServerSideProps"),N=new n.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/basic/can-we-render-a-react-component-from-another-component",pathname:"/basic/can-we-render-a-react-component-from-another-component",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:s})},16833:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(20997),n=r(16689);let a=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:r})=>{let a=(0,n.useRef)(null);(0,n.useRef)(!1);let[o,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>(i(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,n.useEffect)(()=>{},[o]),o)?s.jsx("ins",{ref:a,className:`adsbygoogle ${r}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[s.jsx("div",{children:s.jsx(a,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),s.jsx("div",{children:s.jsx(e,{...this.props})}),s.jsx("div",{children:s.jsx(a,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[2899,6132,1163,1664,5675,6531],()=>r(82042));module.exports=s})();