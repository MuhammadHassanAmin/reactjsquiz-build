"use strict";(()=>{var e={};e.id=17469,e.ids=[17469,30660],e.modules={61715:(e,t,a)=>{a.r(t),a.d(t,{config:()=>v,default:()=>y,getServerSideProps:()=>b,getStaticPaths:()=>x,getStaticProps:()=>f,reportWebVitals:()=>S,routeModule:()=>j,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>_});var n={};a.r(n),a.d(n,{default:()=>g,getStaticProps:()=>h});var r=a(87093),o=a(35244),i=a(1323),s=a(52899),l=a.n(s),c=a(49413),d=a(20997),p=a(55989),u=a(41354),m=a(16833);async function h(){let e=await a.e(31317).then(a.t.bind(a,31317,19));return{props:{siteName:e.default.name,google_analytics_tracking_id:e.default.google_analytics_tracking_id,google_adsense_publisher_id:e.default.google_adsense_publisher_id,title:"How can you prefetch a lazy-loaded component in React before it's actually needed?",description:"Test your knowledge of React lazy loading techniques for performance optimization with this comprehensive quiz covering React.lazy, Suspense, and code splitting."}}}let g=(0,u.Z)((0,m.Z)(()=>(0,d.jsxs)(d.Fragment,{children:[d.jsx("h1",{className:"text-2xl dark:text-white text-center",children:"React Performance Optimization: Lazy Loading"}),d.jsx("div",{className:"flex justify-center w-full p-5 md:p-0 pt-0",children:d.jsx(p.Y3,{activeQuestionIndex:12,totalQuestions:30,index:12,question:"How can you prefetch a lazy-loaded component in React before it's actually needed?",options:["Use React.prefetch() API","Use the preload attribute on the component","Import the component in a hidden component","Manually trigger the dynamic import early but don't render the component yet"],nextQuestionPath:"what-is-the-main-difference-between-react-lazy-and-manually-using-dynamic-import-in-react",correctAnswer:4,explanation:"You can prefetch a lazy-loaded component in React by manually triggering the dynamic import early but not rendering the component yet. For example, you might import the component when hovering over a button that will show it, or when navigating to a page that might need it soon. This can be done by simply calling the same dynamic import that React.lazy() uses: `import('./MyComponent')`. Webpack will load the chunk but won't execute it until it's needed. This approach can improve perceived performance by preparing resources before they're actually required.",id:563,quizId:28},12)})]}))),y=(0,i.l)(n,"default"),f=(0,i.l)(n,"getStaticProps"),x=(0,i.l)(n,"getStaticPaths"),b=(0,i.l)(n,"getServerSideProps"),v=(0,i.l)(n,"config"),S=(0,i.l)(n,"reportWebVitals"),_=(0,i.l)(n,"unstable_getStaticProps"),z=(0,i.l)(n,"unstable_getStaticPaths"),P=(0,i.l)(n,"unstable_getStaticParams"),w=(0,i.l)(n,"unstable_getServerProps"),q=(0,i.l)(n,"unstable_getServerSideProps"),j=new r.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/quizzes/performance-optimization/lazy-loading/how-can-you-prefetch-a-lazy-loaded-component-in-react-before-it-s-actually-needed",pathname:"/quizzes/performance-optimization/lazy-loading/how-can-you-prefetch-a-lazy-loaded-component-in-react-before-it-s-actually-needed",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:n})},16833:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(20997),r=a(16689);let o=({adClient:e="ca-pub-7544108447932228",adSlot:t="6753219060",className:a})=>{let o=(0,r.useRef)(null);(0,r.useRef)(!1);let[i,s]=(0,r.useState)(!1);return((0,r.useEffect)(()=>(s(!0),()=>{let e=document.getElementById("__next");e&&e.removeAttribute("style")}),[]),(0,r.useEffect)(()=>{},[i]),i)?n.jsx("ins",{ref:o,className:`adsbygoogle ${a}`,style:{display:"block"},"data-ad-client":e,"data-ad-slot":t}):null};function i(e){return class extends r.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return n.jsx(n.Fragment,{children:(0,n.jsxs)("div",{className:" md:grid grid-cols-[20%_60%_20%]  w-[95%] ",children:[n.jsx("div",{children:n.jsx(o,{adSlot:"6753219060",className:"h-[100px] md:h-full"})}),n.jsx("div",{children:n.jsx(e,{...this.props})}),n.jsx("div",{children:n.jsx(o,{adSlot:"2871546317",className:"h-[300px] md:h-full"})})]})})}}}},59003:e=>{e.exports=require("classnames")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},20997:e=>{e.exports=require("react/jsx-runtime")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[52899,58559,25675,11163,66531],()=>a(61715));module.exports=n})();