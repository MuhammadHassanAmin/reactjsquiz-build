(()=>{var e={};e.id=73408,e.ids=[73408,92888,30660],e.modules={71800:(e,s,t)=>{"use strict";t.r(s),t.d(s,{config:()=>y,default:()=>g,getServerSideProps:()=>j,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>v,routeModule:()=>S,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>z,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>N,unstable_getStaticProps:()=>w});var a={};t.r(a),t.d(a,{default:()=>u,getStaticProps:()=>x});var n=t(87093),i=t(35244),r=t(1323),l=t(52899),c=t.n(l),o=t(49413),d=t(20997),m=t(41354),p=t(96828),h=t(23862);async function x(e){let s=await t.e(28974).then(t.t.bind(t,28974,19)),a=await t.e(31317).then(t.t.bind(t,31317,19));return{props:{...s.default.find(e=>4===e.id),siteName:a.default.name,google_analytics_tracking_id:a.default.google_analytics_tracking_id,google_adsense_publisher_id:a.default.google_adsense_publisher_id}}}let u=(0,m.Z)(({title:e,date:s,categories:t,description:a,level:n})=>d.jsx(h.Z,{title:e,categories:t,level:n,date:s,children:(0,d.jsxs)("section",{className:"max-w-4xl mx-auto p-6",children:[d.jsx("header",{className:"mb-6",children:d.jsx("p",{className:" mt-2",children:"Building efficient React applications is crucial for providing a smooth user experience. In this article, we’ll explore various techniques to optimize performance in React apps, ensuring that they run smoothly even as they scale."})}),(0,d.jsxs)("article",{children:[(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"1. Using React.memo"}),(0,d.jsxs)("p",{className:" mb-4",children:["One of the simplest ways to optimize performance in React is by using ",d.jsx("code",{children:"React.memo"}),". This higher-order component prevents unnecessary re-renders by memoizing the output of a component. It works by comparing the props passed to the component and re-rendering it only if the props change."]}),d.jsx(p.Z,{children:"const MyComponent = React.memo((props) => { /* component code */ });"})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"2. Optimizing with useCallback and useMemo"}),(0,d.jsxs)("p",{className:" mb-4",children:["The ",d.jsx("code",{children:"useCallback"})," and ",d.jsx("code",{children:"useMemo"})," hooks help in optimizing functions and values, respectively."," ",d.jsx("code",{children:"useCallback"})," returns a memoized function, while"," ",d.jsx("code",{children:"useMemo"})," returns a memoized value. These hooks are particularly useful when passing callbacks or values to child components, as they prevent re-renders unless dependencies change."]}),d.jsx(p.Z,{children:"const memoizedCallback = useCallback(() => { /* function code */ }, [dependencies]);"})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"3. Lazy Loading Components"}),(0,d.jsxs)("p",{className:" mb-4",children:["Lazy loading is a technique where components are loaded only when they are needed. This is particularly useful for large applications where loading all components upfront can slow down the initial load time. You can achieve lazy loading in React using"," ",d.jsx("code",{children:"React.lazy"})," and ",d.jsx("code",{children:"Suspense"}),"."]}),d.jsx(p.Z,{children:"const LazyComponent = React.lazy(() => import('./LazyComponent'));"})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"4. Avoiding Inline Functions and Objects"}),(0,d.jsxs)("p",{className:" mb-4",children:["Defining functions or objects inside the render method can lead to performance issues, as new instances are created on every render. Instead, define functions outside the render method or use"," ",d.jsx("code",{children:"useCallback"})," to memoize them."]}),d.jsx(p.Z,{children:"const memoizedFunction = useCallback(() => { /* function code */ }, []);"})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"5. Virtualizing Long Lists"}),(0,d.jsxs)("p",{className:" mb-4",children:["Rendering large lists can be costly in React. Virtualization is a technique that renders only the visible items in the viewport and dynamically loads more as the user scrolls. Libraries like"," ",d.jsx("code",{children:"react-window"})," or ",d.jsx("code",{children:"react-virtualized"})," can help implement this technique efficiently."]}),d.jsx(p.Z,{children:"import { FixedSizeList as List } from 'react-window';"})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"6. Optimizing React’s Reconciliation Process"}),d.jsx("p",{className:" mb-4",children:"React's reconciliation process is responsible for updating the DOM. By keeping component structures simple and using keys correctly in lists, you can help React optimize this process. Avoid unnecessary nesting and deep hierarchies where possible."})]}),(0,d.jsxs)("section",{className:"mb-8",children:[d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Conclusion"}),d.jsx("p",{className:" mb-4",children:"Optimizing React performance is key to building fast and efficient applications. By implementing these techniques, you can improve your app's performance and provide a better user experience. Keep monitoring your app's performance and continue refining your optimization strategies as your app grows."})]})]})]})})),g=(0,r.l)(a,"default"),f=(0,r.l)(a,"getStaticProps"),b=(0,r.l)(a,"getStaticPaths"),j=(0,r.l)(a,"getServerSideProps"),y=(0,r.l)(a,"config"),v=(0,r.l)(a,"reportWebVitals"),w=(0,r.l)(a,"unstable_getStaticProps"),N=(0,r.l)(a,"unstable_getStaticPaths"),k=(0,r.l)(a,"unstable_getStaticParams"),_=(0,r.l)(a,"unstable_getServerProps"),z=(0,r.l)(a,"unstable_getServerSideProps"),S=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/blog/react-performance-optimization-techniques",pathname:"/blog/react-performance-optimization-techniques",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:a})},23862:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(20997);let n=({title:e,categories:s,level:t,date:n,children:i})=>(0,a.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,a.jsxs)("header",{className:"mb-4",children:[a.jsx("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:e}),(0,a.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,a.jsxs)("span",{className:"block",children:["Category: ",s.join(", ")]}),(0,a.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",t]}),(0,a.jsxs)("span",{className:"block",children:["Published on: ",n]})]})]}),a.jsx("div",{className:"break-words",children:i})]})},96828:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(20997);let n=({children:e})=>a.jsx("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:a.jsx("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:a.jsx("code",{className:"whitespace-pre-wrap break-words",children:e})})})},27840:(e,s,t)=>{"use strict";t.d(s,{C:()=>i,P:()=>r});var a=t(20997),n=t(16689);let i=(0,n.createContext)(),r=({children:e})=>{let[s,t]=(0,n.useState)(""),[r,l]=(0,n.useState)({});return a.jsx(i.Provider,{value:{quizId:s,setQuizId:t,userAnswers:r,setUserAnswers:l},children:e})}},41354:(e,s,t)=>{"use strict";t.d(s,{Z:()=>m});var a=t(20997),n=t(16689),i=t(59003),r=t.n(i),l=t(41664),c=t.n(l);let o=({link:e,title:s,className:t})=>a.jsx(c(),{passHref:!0,href:e,className:"flex mb-1",children:a.jsx("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:s})}),d=({siteName:e})=>{let[s,t]=(0,n.useState)(!1);return a.jsx("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[a.jsx(c(),{href:"/",passHref:!0,children:a.jsx("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:e})}),a.jsx("div",{className:"flex md:hidden",children:a.jsx("button",{type:"button",onClick:()=>{t(!s)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:a.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:a.jsx("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),a.jsx("div",{className:r()("w-full md:flex md:items-center md:justify-end",{block:s,hidden:!s}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[a.jsx(o,{link:"/",title:"Home",className:"w-full bg-black"}),a.jsx(o,{link:"/blog",title:"Blog"}),a.jsx(o,{link:"/privacy-policy",title:"Privacy Policy"}),a.jsx(o,{link:"/contact-us",title:"Contact Us"})]})})]})})};function m(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("header",{className:"border-b",children:a.jsx(d,{siteName:this.props.siteName})}),a.jsx("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:a.jsx(e,{...this.props})}),a.jsx("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}}}},49413:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var a=t(20997),n=t(40968),i=t.n(n);t(30108);var r=t(27840);let l=function({Component:e,pageProps:s}){let{title:t,description:n}=s;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7544108447932228"}),a.jsx("meta",{name:"impact-site-verification",value:"a0e1a89a-390d-4f5b-97ae-da930b270628"}),a.jsx("meta",{name:"description",content:n}),a.jsx("meta",{httpEquiv:"content-language",content:"en-gb"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsxs)(a.Fragment,{children:[a.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${s.google_analytics_tracking_id}`}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${s.google_analytics_tracking_id}', {
              page_path: window.location.pathname,
            });
          `}})]}),a.jsx("script",{async:!0,src:`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${s.google_adsense_publisher_id}`,crossOrigin:"anonymous"})]}),a.jsx(r.P,{children:a.jsx(e,{...s})})]})}},30108:()=>{},59003:e=>{"use strict";e.exports=require("classnames")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},16689:e=>{"use strict";e.exports=require("react")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},71017:e=>{"use strict";e.exports=require("path")}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[52899,58559],()=>t(71800));module.exports=a})();