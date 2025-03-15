(()=>{var e={};e.id=84567,e.ids=[84567,92888,30660],e.modules={73747:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>v,default:()=>f,getServerSideProps:()=>b,getStaticPaths:()=>j,getStaticProps:()=>g,reportWebVitals:()=>y,routeModule:()=>C,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>k});var n={};s.r(n),s.d(n,{default:()=>p,getStaticProps:()=>h});var a=s(87093),r=s(35244),o=s(1323),i=s(52899),c=s.n(i),l=s(49413),d=s(20997),u=s(41354),m=s(96828),x=s(23862);async function h(e){let t=await s.e(28974).then(s.t.bind(s,28974,19)),n=await s.e(31317).then(s.t.bind(s,31317,19));return{props:{...t.default.find(e=>1===e.id),siteName:n.default.name,google_analytics_tracking_id:n.default.google_analytics_tracking_id,google_adsense_publisher_id:n.default.google_adsense_publisher_id}}}let p=(0,u.Z)(({title:e,date:t,categories:s,level:n,description:a})=>(0,d.jsxs)(x.Z,{title:e,categories:s,level:n,date:t,children:[(0,d.jsxs)("section",{className:"mb-6",children:[d.jsx("p",{className:"",children:"React Hooks are an essential part of modern React development. If you're preparing for a job interview, it's crucial to understand at least the basic hooks. Here are five fundamental React Hooks you should know."}),d.jsx("h2",{className:"text-xl font-semibold  mb-2",children:"1. useState"}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useState"})," hook is used to manage state in functional components. It lets you add state variables to your component without converting it into a class."]}),d.jsx(m.Z,{children:`import React, { useState } from 'react';
  
  function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
  }`})]}),(0,d.jsxs)("section",{className:"mb-6",children:[d.jsx("h2",{className:"text-xl font-semibold  mb-2",children:"2. useEffect"}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useEffect"})," hook allows you to perform side effects in your components, such as fetching data, directly manipulating the DOM, or setting up subscriptions. It runs after the component renders."]}),d.jsx(m.Z,{children:`import React, { useState, useEffect } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = \`You clicked \${count} times\`;
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }`})]}),(0,d.jsxs)("section",{className:"mb-6",children:[d.jsx("h2",{className:"text-xl font-semibold  mb-2",children:"3. useContext"}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useContext"})," hook lets you subscribe to React context without introducing nesting. It's useful for passing data through the component tree without having to pass props down manually at every level."]}),d.jsx(m.Z,{children:`import React, { useContext } from 'react';
  
  const ThemeContext = React.createContext('light');
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>I am styled by theme context!</button>;
  }`})]}),(0,d.jsxs)("section",{className:"mb-6",children:[d.jsx("h2",{className:"text-xl font-semibold  mb-2",children:"4. useRef"}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useRef"})," hook allows you to create a mutable object that persists across renders. It’s often used to reference a DOM element or store a value that doesn’t trigger a re-render when updated."]}),d.jsx(m.Z,{children:`import React, { useRef } from 'react';
  
  function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    
    const onButtonClick = () => {
      inputEl.current.focus();
    };
  
    return (
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );
  }`})]}),(0,d.jsxs)("section",{className:"mb-6",children:[d.jsx("h2",{className:"text-xl font-semibold  mb-2",children:"5. useImperativeHandle"}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useImperativeHandle"})," hook customizes the instance value that is exposed to parent components when using ",d.jsx("code",{children:"ref"}),". It’s useful for defining functions that the parent component can call on the child component."]}),d.jsx(m.Z,{children:`import React, { useRef, useImperativeHandle, forwardRef } from 'react';
  
  const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef();
  
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
  
    return <input ref={inputRef} />;
  });
  
  function App() {
    const inputRef = useRef();
  
    return (
      <div>
        <FancyInput ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus the input</button>
      </div>
    );
  }`})]}),(0,d.jsxs)("footer",{className:"mt-6 ",children:[d.jsx("h2",{className:"text-lg font-semibold  mb-2",children:"Conclusion"}),(0,d.jsxs)("p",{className:"",children:["Understanding these five React hooks \xa0",d.jsx("code",{children:"useState"}),", ",d.jsx("code",{children:"useEffect"}),", ",d.jsx("code",{children:"useContext"}),", ",d.jsx("code",{children:"useRef"}),", ",d.jsx("code",{children:"useImperativeHandle"}),"\xa0 will give you a solid foundation for your React job interview. Each hook has a specific purpose and makes managing state and side effects in functional components much easier.",d.jsx("br",{})," Happy coding, and good luck with your interview!"]})]})]})),f=(0,o.l)(n,"default"),g=(0,o.l)(n,"getStaticProps"),j=(0,o.l)(n,"getStaticPaths"),b=(0,o.l)(n,"getServerSideProps"),v=(0,o.l)(n,"config"),y=(0,o.l)(n,"reportWebVitals"),k=(0,o.l)(n,"unstable_getStaticProps"),w=(0,o.l)(n,"unstable_getStaticPaths"),N=(0,o.l)(n,"unstable_getStaticParams"),_=(0,o.l)(n,"unstable_getServerProps"),S=(0,o.l)(n,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/blog/5-fundamental-react-hooks-every-developer-should-know",pathname:"/blog/5-fundamental-react-hooks-every-developer-should-know",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:n})},23862:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var n=s(20997);let a=({title:e,categories:t,level:s,date:a,children:r})=>(0,n.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,n.jsxs)("header",{className:"mb-4",children:[n.jsx("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:e}),(0,n.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,n.jsxs)("span",{className:"block",children:["Category: ",t.join(", ")]}),(0,n.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",s]}),(0,n.jsxs)("span",{className:"block",children:["Published on: ",a]})]})]}),n.jsx("div",{className:"break-words",children:r})]})},96828:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var n=s(20997);let a=({children:e})=>n.jsx("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:n.jsx("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:n.jsx("code",{className:"whitespace-pre-wrap break-words",children:e})})})},27840:(e,t,s)=>{"use strict";s.d(t,{C:()=>r,P:()=>o});var n=s(20997),a=s(16689);let r=(0,a.createContext)(),o=({children:e})=>{let[t,s]=(0,a.useState)(""),[o,i]=(0,a.useState)({});return n.jsx(r.Provider,{value:{quizId:t,setQuizId:s,userAnswers:o,setUserAnswers:i},children:e})}},41354:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var n=s(20997),a=s(16689),r=s(59003),o=s.n(r),i=s(41664),c=s.n(i);let l=({link:e,title:t,className:s})=>n.jsx(c(),{passHref:!0,href:e,className:"flex mb-1",children:n.jsx("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:t})}),d=({siteName:e})=>{let[t,s]=(0,a.useState)(!1);return n.jsx("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,n.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[n.jsx(c(),{href:"/",passHref:!0,children:n.jsx("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:e})}),n.jsx("div",{className:"flex md:hidden",children:n.jsx("button",{type:"button",onClick:()=>{s(!t)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:n.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:n.jsx("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),n.jsx("div",{className:o()("w-full md:flex md:items-center md:justify-end",{block:t,hidden:!t}),children:(0,n.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[n.jsx(l,{link:"/",title:"Home",className:"w-full bg-black"}),n.jsx(l,{link:"/blog",title:"Blog"}),n.jsx(l,{link:"/privacy-policy",title:"Privacy Policy"}),n.jsx(l,{link:"/contact-us",title:"Contact Us"})]})})]})})};function u(e){return class extends a.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("header",{className:"border-b",children:n.jsx(d,{siteName:this.props.siteName})}),n.jsx("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:n.jsx(e,{...this.props})}),n.jsx("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}}}},49413:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var n=s(20997),a=s(40968),r=s.n(a);s(30108);var o=s(27840);let i=function({Component:e,pageProps:t}){let{title:s,description:a}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[n.jsx("title",{children:s}),n.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7544108447932228"}),n.jsx("meta",{name:"impact-site-verification",value:"a0e1a89a-390d-4f5b-97ae-da930b270628"}),n.jsx("meta",{name:"description",content:a}),n.jsx("meta",{httpEquiv:"content-language",content:"en-gb"}),n.jsx("link",{rel:"icon",href:"/favicon.ico"}),n.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),(0,n.jsxs)(n.Fragment,{children:[n.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${t.google_analytics_tracking_id}`}),n.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${t.google_analytics_tracking_id}', {
              page_path: window.location.pathname,
            });
          `}})]}),n.jsx("script",{async:!0,src:`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${t.google_adsense_publisher_id}`,crossOrigin:"anonymous"})]}),n.jsx(o.P,{children:n.jsx(e,{...t})})]})}},30108:()=>{},59003:e=>{"use strict";e.exports=require("classnames")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},16689:e=>{"use strict";e.exports=require("react")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},71017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[52899,36132,41664],()=>s(73747));module.exports=n})();