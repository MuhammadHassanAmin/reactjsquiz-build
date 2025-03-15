(()=>{var e={};e.id=6520,e.ids=[6520,2888,660],e.modules={63256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>y,default:()=>g,getServerSideProps:()=>j,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>v,routeModule:()=>P,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>C,unstable_getStaticProps:()=>w});var a={};s.r(a),s.d(a,{default:()=>h,getStaticProps:()=>p});var n=s(87093),r=s(35244),o=s(1323),i=s(52899),c=s.n(i),l=s(49413),d=s(20997),u=s(41354),m=s(96828),x=s(23862);async function p(e){let t=await s.e(8974).then(s.t.bind(s,28974,19)),a=await s.e(1317).then(s.t.bind(s,31317,19));return{props:{...t.default.find(e=>3===e.id),siteName:a.default.name,google_analytics_tracking_id:a.default.google_analytics_tracking_id,google_adsense_publisher_id:a.default.google_adsense_publisher_id}}}let h=(0,u.Z)(({title:e,date:t,categories:s,level:a})=>d.jsx(x.Z,{title:e,categories:s,level:a,date:t,children:(0,d.jsxs)("article",{className:"prose lg:prose-xl mx-auto p-6",children:[d.jsx("h1",{className:"text-3xl font-bold mb-4",children:"State Management in React: A Guide to useState, useReducer, and Context API"}),(0,d.jsxs)("p",{className:"mb-4",children:["State management is a crucial aspect of building dynamic React applications. Whether you're handling a simple counter or managing complex app-wide data, React provides a set of hooks and tools that make state management easier. In this guide, we'll explore three essential tools for managing state in React:"," ",d.jsx("code",{children:"useState"}),", ",d.jsx("code",{children:"useReducer"}),", and the Context API."]}),(0,d.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["1. Managing Simple State with ",d.jsx("code",{children:"useState"})]}),(0,d.jsxs)("p",{className:"mb-4",children:["The ",d.jsx("code",{children:"useState"})," hook is often the first state management tool React developers encounter. It's perfect for handling simple state, like toggling a modal or updating form inputs."]}),d.jsx(m.Z,{children:`import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Count: {count}</h1>
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;`}),(0,d.jsxs)("p",{className:"mb-4",children:["In this example, ",d.jsx("code",{children:"useState"})," initializes a"," ",d.jsx("code",{children:"count"})," variable and provides a ",d.jsx("code",{children:"setCount"})," ","function to update it. The component re-renders whenever"," ",d.jsx("code",{children:"setCount"})," is called, ensuring that the UI stays in sync with the state."]}),(0,d.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["2. Handling Complex State with ",d.jsx("code",{children:"useReducer"})]}),(0,d.jsxs)("p",{className:"mb-4",children:["While ",d.jsx("code",{children:"useState"})," is great for simple state, it can become cumbersome when dealing with more complex logic. That's where"," ",d.jsx("code",{children:"useReducer"})," comes in. It provides a way to manage state that involves multiple sub-values or when state transitions are more complex."]}),d.jsx(m.Z,{children:`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Count: {state.count}</h1>
            <button 
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </button>
            <button 
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>
        </div>
    );
}

export default CounterWithReducer;`}),(0,d.jsxs)("p",{className:"mb-4",children:["Here, ",d.jsx("code",{children:"useReducer"})," takes a reducer function and an initial state. The reducer function defines how the state should change in response to different actions. This approach is especially useful when managing more complex state logic, such as updating forms or handling nested data structures."]}),d.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"3. Sharing State Across Components with the Context API"}),d.jsx("p",{className:"mb-4",children:'When your app grows, you might find yourself passing props down through multiple levels of components. This is known as "prop drilling" and can make your code harder to maintain. The Context API helps you avoid prop drilling by allowing you to share state across your component tree without passing props explicitly.'}),d.jsx(m.Z,{children:`import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CounterProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

function CounterDisplay() {
    const { count } = useContext(CountContext);
    return <h1 className="text-2xl font-semibold">Count: {count}</h1>;
}

function CounterButtons() {
    const { setCount } = useContext(CountContext);
    return (
        <div>
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount(prevCount => prevCount + 1)}
            >
                Increment
            </button>
        </div>
    );
}

function App() {
    return (
        <CounterProvider>
            <CounterDisplay />
            <CounterButtons />
        </CounterProvider>
    );
}

export default App;`}),(0,d.jsxs)("p",{className:"mb-4",children:["In this example, the Context API is used to share the"," ",d.jsx("code",{children:"count"})," state across multiple components without the need for prop drilling. The ",d.jsx("code",{children:"CounterProvider"})," component wraps the entire app, making the ",d.jsx("code",{children:"count"})," and"," ",d.jsx("code",{children:"setCount"})," available to all child components via the"," ",d.jsx("code",{children:"CountContext"}),"."]}),(0,d.jsxs)("p",{className:"mb-4",children:["In conclusion, managing state in React can range from simple to complex, depending on your application's needs. By using"," ",d.jsx("code",{children:"useState"})," for basic state, ",d.jsx("code",{children:"useReducer"})," for more complex logic, and the Context API for sharing state across components, you can effectively manage state in any React application."]})]})})),g=(0,o.l)(a,"default"),f=(0,o.l)(a,"getStaticProps"),b=(0,o.l)(a,"getStaticPaths"),j=(0,o.l)(a,"getServerSideProps"),y=(0,o.l)(a,"config"),v=(0,o.l)(a,"reportWebVitals"),w=(0,o.l)(a,"unstable_getStaticProps"),C=(0,o.l)(a,"unstable_getStaticPaths"),N=(0,o.l)(a,"unstable_getStaticParams"),k=(0,o.l)(a,"unstable_getServerProps"),S=(0,o.l)(a,"unstable_getServerSideProps"),P=new n.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api",pathname:"/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api",bundlePath:"",filename:""},components:{App:l.default,Document:c()},userland:a})},23862:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(20997);let n=({title:e,categories:t,level:s,date:n,children:r})=>(0,a.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,a.jsxs)("header",{className:"mb-4",children:[a.jsx("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:e}),(0,a.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,a.jsxs)("span",{className:"block",children:["Category: ",t.join(", ")]}),(0,a.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",s]}),(0,a.jsxs)("span",{className:"block",children:["Published on: ",n]})]})]}),a.jsx("div",{className:"break-words",children:r})]})},96828:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(20997);let n=({children:e})=>a.jsx("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:a.jsx("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:a.jsx("code",{className:"whitespace-pre-wrap break-words",children:e})})})},27840:(e,t,s)=>{"use strict";s.d(t,{C:()=>r,P:()=>o});var a=s(20997),n=s(16689);let r=(0,n.createContext)(),o=({children:e})=>{let[t,s]=(0,n.useState)(""),[o,i]=(0,n.useState)({});return a.jsx(r.Provider,{value:{quizId:t,setQuizId:s,userAnswers:o,setUserAnswers:i},children:e})}},41354:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(20997),n=s(16689),r=s(59003),o=s.n(r),i=s(41664),c=s.n(i);let l=({link:e,title:t,className:s})=>a.jsx(c(),{passHref:!0,href:e,className:"flex mb-1",children:a.jsx("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:t})}),d=({siteName:e})=>{let[t,s]=(0,n.useState)(!1);return a.jsx("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[a.jsx(c(),{href:"/",passHref:!0,children:a.jsx("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:e})}),a.jsx("div",{className:"flex md:hidden",children:a.jsx("button",{type:"button",onClick:()=>{s(!t)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:a.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:a.jsx("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),a.jsx("div",{className:o()("w-full md:flex md:items-center md:justify-end",{block:t,hidden:!t}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[a.jsx(l,{link:"/",title:"Home",className:"w-full bg-black"}),a.jsx(l,{link:"/blog",title:"Blog"}),a.jsx(l,{link:"/privacy-policy",title:"Privacy Policy"}),a.jsx(l,{link:"/contact-us",title:"Contact Us"})]})})]})})};function u(e){return class extends n.Component{constructor(e){super(e)}componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("header",{className:"border-b",children:a.jsx(d,{siteName:this.props.siteName})}),a.jsx("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:a.jsx(e,{...this.props})}),a.jsx("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}}}},49413:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(20997),n=s(40968),r=s.n(n);s(30108);var o=s(27840);let i=function({Component:e,pageProps:t}){let{title:s,description:n}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[a.jsx("title",{children:s}),a.jsx("meta",{name:"google-adsense-account",content:"ca-pub-7544108447932228"}),a.jsx("meta",{name:"impact-site-verification",value:"a0e1a89a-390d-4f5b-97ae-da930b270628"}),a.jsx("meta",{name:"description",content:n}),a.jsx("meta",{httpEquiv:"content-language",content:"en-gb"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),(0,a.jsxs)(a.Fragment,{children:[a.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${t.google_analytics_tracking_id}`}),a.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${t.google_analytics_tracking_id}', {
              page_path: window.location.pathname,
            });
          `}})]}),a.jsx("script",{async:!0,src:`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${t.google_adsense_publisher_id}`,crossOrigin:"anonymous"})]}),a.jsx(o.P,{children:a.jsx(e,{...t})})]})}},30108:()=>{},59003:e=>{"use strict";e.exports=require("classnames")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},16689:e=>{"use strict";e.exports=require("react")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},71017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[2899,6132,1664],()=>s(63256));module.exports=a})();