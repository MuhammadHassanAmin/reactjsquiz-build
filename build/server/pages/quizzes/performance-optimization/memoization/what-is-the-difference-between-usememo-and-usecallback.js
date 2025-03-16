"use strict";(()=>{var e={};e.id=54881,e.ids=[54881,30660],e.modules={97932:(e,t,s)=>{s.r(t),s.d(t,{config:()=>S,default:()=>b,getServerSideProps:()=>v,getStaticPaths:()=>x,getStaticProps:()=>g,reportWebVitals:()=>_,routeModule:()=>j,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>k});var a={};s.r(a),s.d(a,{default:()=>h,getStaticProps:()=>f});var i=s(87093),r=s(35244),o=s(1323),n=s(52899),l=s.n(n),u=s(49413),c=s(20997),d=s(55989),m=s(41354),p=s(16833);async function f(){let e=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"What is the difference between useMemo and useCallback?",description:"Test your knowledge of React memoization techniques for performance optimization with this comprehensive quiz covering React.memo, useMemo, and useCallback."}}}let h=(0,m.Z)((0,p.Z)(()=>(0,c.jsxs)(c.Fragment,{children:[c.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Memoization"}),c.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:c.jsx(d.Y3,{activeQuestionIndex:5,totalQuestions:20,index:5,question:"What is the difference between useMemo and useCallback?",options:["useMemo is for class components, useCallback is for functional components","useMemo works with useEffect, useCallback doesn't","useMemo memoizes returned values, useCallback memoizes functions","useMemo is faster than useCallback"],nextQuestionPath:"when-does-a-memoized-component-with-react-memo-re-render",correctAnswer:3,explanation:"The key difference is that useMemo memoizes returned values while useCallback memoizes functions. useMemo is used to memoize the result of a computation (like `useMemo(() => computeExpensiveValue(a, b), [a, b])`), whereas useCallback is used to memoize a function definition itself (like `useCallback(() => { doSomething(a, b) }, [a, b])`). useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",id:536,quizId:27},5)})]}))),b=(0,o.l)(a,"default"),g=(0,o.l)(a,"getStaticProps"),x=(0,o.l)(a,"getStaticPaths"),v=(0,o.l)(a,"getServerSideProps"),S=(0,o.l)(a,"config"),_=(0,o.l)(a,"reportWebVitals"),k=(0,o.l)(a,"unstable_getStaticProps"),z=(0,o.l)(a,"unstable_getStaticPaths"),P=(0,o.l)(a,"unstable_getStaticParams"),w=(0,o.l)(a,"unstable_getServerProps"),q=(0,o.l)(a,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/quizzes/performance-optimization/memoization/what-is-the-difference-between-usememo-and-usecallback",pathname:"/quizzes/performance-optimization/memoization/what-is-the-difference-between-usememo-and-usecallback",bundlePath:"",filename:""},components:{App:u.default,Document:l()},userland:a})},16833:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(20997),i=s(16689);let r=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:s})=>{let r=(0,i.useRef)(null);(0,i.useRef)(!1);let[o,n]=(0,i.useState)(!1);return((0,i.useEffect)(()=>(n(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,i.useEffect)(()=>{},[o]),o)?a.jsx("ins",{ref:r,className:`adsbygoogle ${s}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function o(e){return class extends i.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[a.jsx("div",{children:a.jsx(r,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),a.jsx("div",{children:a.jsx(e,{...this.props})}),a.jsx("div",{children:a.jsx(r,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[52899,58559,25675,11163,66531],()=>s(97932));module.exports=a})();