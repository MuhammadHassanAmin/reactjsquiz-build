(()=>{var e={};e.id=48455,e.ids=[48455,92888,30660],e.modules={13921:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>b,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>p,getStaticProps:()=>x,reportWebVitals:()=>y,routeModule:()=>_,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var a={};r.r(a),r.d(a,{default:()=>m,getStaticProps:()=>g});var s=r(87093),i=r(35244),n=r(1323),l=r(52899),o=r.n(l),c=r(49413),d=r(20997);async function g(e){let t=await r.e(31317).then(r.t.bind(r,31317,19));return{props:{title:"Contact Us",description:`Contact the ${t.name} team by submitting our contact us form.`,google_analytics_tracking_id:t.google_analytics_tracking_id,google_adsense_publisher_id:t.google_adsense_publisher_id,contact_us_form_action:t.contact_us_form_action,siteName:t.name}}}let m=(0,r(41354).Z)(({contact_us_form_action:e})=>d.jsx("section",{className:"bg-white dark:bg-gray-900 rounded-lg p-5",children:(0,d.jsxs)("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[d.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white",children:"Contact Us"}),d.jsx("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"Got a technical issue? Want to send feedback about? Let us know."}),(0,d.jsxs)("form",{action:e,method:"POST",className:"space-y-8",children:[(0,d.jsxs)("div",{children:[d.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your email"}),d.jsx("input",{type:"email",name:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"name@gmail.com",required:!0})]}),(0,d.jsxs)("div",{children:[d.jsx("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Subject"}),d.jsx("input",{type:"text",id:"subject",name:"subject",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Let us know how we can help you",required:!0})]}),(0,d.jsxs)("div",{className:"sm:col-span-2",children:[d.jsx("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Your message"}),d.jsx("textarea",{id:"message",name:"message",rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a comment..."})]}),d.jsx("button",{className:" mt-8 inline-flex justify-center items-center py-2 px-3 text-lg w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"submit",children:"Submit"})]})]})})),u=(0,n.l)(a,"default"),x=(0,n.l)(a,"getStaticProps"),p=(0,n.l)(a,"getStaticPaths"),h=(0,n.l)(a,"getServerSideProps"),b=(0,n.l)(a,"config"),y=(0,n.l)(a,"reportWebVitals"),f=(0,n.l)(a,"unstable_getStaticProps"),j=(0,n.l)(a,"unstable_getStaticPaths"),k=(0,n.l)(a,"unstable_getStaticParams"),w=(0,n.l)(a,"unstable_getServerProps"),v=(0,n.l)(a,"unstable_getServerSideProps"),_=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/contact-us",pathname:"/contact-us",bundlePath:"",filename:""},components:{App:c.default,Document:o()},userland:a})},27840:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,P:()=>n});var a=r(20997),s=r(16689);let i=(0,s.createContext)(),n=({children:e})=>{let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)({});return a.jsx(i.Provider,{value:{quizId:t,setQuizId:r,userAnswers:n,setUserAnswers:l},children:e})}},41354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var a=r(20997),s=r(16689),i=r(59003),n=r.n(i),l=r(41664),o=r.n(l);let c=({link:e,title:t,className:r})=>a.jsx(o(),{passHref:!0,href:e,className:"flex mb-1",children:a.jsx("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:t})}),d=({siteName:e})=>{let[t,r]=(0,s.useState)(!1);return a.jsx("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[a.jsx(o(),{href:"/",passHref:!0,children:a.jsx("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:e})}),a.jsx("div",{className:"flex md:hidden",children:a.jsx("button",{type:"button",onClick:()=>{r(!t)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:a.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:a.jsx("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),a.jsx("div",{className:n()("w-full md:flex md:items-center md:justify-end",{block:t,hidden:!t}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[a.jsx(c,{link:"/",title:"Home",className:"w-full bg-black"}),a.jsx(c,{link:"/blog",title:"Blog"}),a.jsx(c,{link:"/privacy-policy",title:"Privacy Policy"}),a.jsx(c,{link:"/contact-us",title:"Contact Us"})]})})]})})};function g(e){return class extends s.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("header",{className:"border-b",children:a.jsx(d,{siteName:this.props.siteName})}),a.jsx("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:a.jsx(e,{...this.props})}),a.jsx("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}}}},49413:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(20997),s=r(40968),i=r.n(s);r(30108);var n=r(27840);let l=function({Component:e,pageProps:t}){let{title:r,description:s}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[a.jsx("title",{children:r}),a.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7544108447932228"}),a.jsx("meta",{name:"impact-site-verification",value:"a0e1a89a-390d-4f5b-97ae-da930b270628"}),a.jsx("meta",{name:"description",content:s}),a.jsx("meta",{httpEquiv:"content-language",content:"en-gb"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsxs)(a.Fragment,{children:[a.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${t.google_analytics_tracking_id}`}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${t.google_analytics_tracking_id}', {
              page_path: window.location.pathname,
            });
          `}})]}),a.jsx("script",{async:!0,src:`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${t.google_adsense_publisher_id}`,crossOrigin:"anonymous"})]}),a.jsx(n.P,{children:a.jsx(e,{...t})})]})}},30108:()=>{},59003:e=>{"use strict";e.exports=require("classnames")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},16689:e=>{"use strict";e.exports=require("react")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},71017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[52899,36132,41664],()=>r(13921));module.exports=a})();