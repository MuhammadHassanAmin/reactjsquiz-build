(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4567],{29399:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/5-fundamental-react-hooks-every-developer-should-know",function(){return n(24348)}])},23862:function(e,t,n){"use strict";var s=n(85893);t.Z=e=>{let{title:t,categories:n,level:o,date:r,children:a}=e;return(0,s.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,s.jsxs)("header",{className:"mb-4",children:[(0,s.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:t}),(0,s.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,s.jsxs)("span",{className:"block",children:["Category: ",n.join(", ")]}),(0,s.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",o]}),(0,s.jsxs)("span",{className:"block",children:["Published on: ",r]})]})]}),(0,s.jsx)("div",{className:"break-words",children:a})]})}},96828:function(e,t,n){"use strict";var s=n(85893);t.Z=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:(0,s.jsx)("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:(0,s.jsx)("code",{className:"whitespace-pre-wrap break-words",children:t})})})}},41354:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(85893),o=n(67294),r=n(94184),a=n.n(r),c=n(41664),l=n.n(c);let i=e=>{let{link:t,title:n,className:o}=e;return(0,s.jsx)(l(),{passHref:!0,href:t,className:"flex mb-1",children:(0,s.jsx)("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:n})})};var d=e=>{let{siteName:t}=e,[n,r]=(0,o.useState)(!1);return(0,s.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,s.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,s.jsx)(l(),{href:"/",passHref:!0,children:(0,s.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:t})}),(0,s.jsx)("div",{className:"flex md:hidden",children:(0,s.jsx)("button",{type:"button",onClick:()=>{r(!n)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,s.jsx)("div",{className:a()("w-full md:flex md:items-center md:justify-end",{block:n,hidden:!n}),children:(0,s.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[(0,s.jsx)(i,{link:"/",title:"Home",className:"w-full bg-black"}),(0,s.jsx)(i,{link:"/blog",title:"Blog"}),(0,s.jsx)(i,{link:"/privacy-policy",title:"Privacy Policy"}),(0,s.jsx)(i,{link:"/contact-us",title:"Contact Us"})]})})]})})};function u(e){return class extends o.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{className:"border-b",children:(0,s.jsx)(d,{siteName:this.props.siteName})}),(0,s.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,s.jsx)(e,{...this.props})}),(0,s.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}constructor(e){super(e)}}}},24348:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var s=n(85893),o=n(41354),r=n(96828),a=n(23862),c=!0;t.default=(0,o.Z)(e=>{let{title:t,date:n,categories:o,level:c,description:l}=e;return(0,s.jsxs)(a.Z,{title:t,categories:o,level:c,date:n,children:[(0,s.jsxs)("section",{className:"mb-6",children:[(0,s.jsx)("p",{className:"",children:"React Hooks are an essential part of modern React development. If you're preparing for a job interview, it's crucial to understand at least the basic hooks. Here are five fundamental React Hooks you should know."}),(0,s.jsx)("h2",{className:"text-xl font-semibold  mb-2",children:"1. useState"}),(0,s.jsxs)("p",{className:"mb-4",children:["The ",(0,s.jsx)("code",{children:"useState"})," hook is used to manage state in functional components. It lets you add state variables to your component without converting it into a class."]}),(0,s.jsx)(r.Z,{children:"import React, { useState } from 'react';\n  \n  function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n  }"})]}),(0,s.jsxs)("section",{className:"mb-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold  mb-2",children:"2. useEffect"}),(0,s.jsxs)("p",{className:"mb-4",children:["The ",(0,s.jsx)("code",{children:"useEffect"})," hook allows you to perform side effects in your components, such as fetching data, directly manipulating the DOM, or setting up subscriptions. It runs after the component renders."]}),(0,s.jsx)(r.Z,{children:"import React, { useState, useEffect } from 'react';\n  \n  function Example() {\n    const [count, setCount] = useState(0);\n  \n    useEffect(() => {\n      document.title = `You clicked ${count} times`;\n    }, [count]);\n  \n    return (\n      <div>\n        <p>You clicked {count} times</p>\n        <button onClick={() => setCount(count + 1)}>\n          Click me\n        </button>\n      </div>\n    );\n  }"})]}),(0,s.jsxs)("section",{className:"mb-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold  mb-2",children:"3. useContext"}),(0,s.jsxs)("p",{className:"mb-4",children:["The ",(0,s.jsx)("code",{children:"useContext"})," hook lets you subscribe to React context without introducing nesting. It's useful for passing data through the component tree without having to pass props down manually at every level."]}),(0,s.jsx)(r.Z,{children:"import React, { useContext } from 'react';\n  \n  const ThemeContext = React.createContext('light');\n  \n  function ThemedButton() {\n    const theme = useContext(ThemeContext);\n    return <button className={theme}>I am styled by theme context!</button>;\n  }"})]}),(0,s.jsxs)("section",{className:"mb-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold  mb-2",children:"4. useRef"}),(0,s.jsxs)("p",{className:"mb-4",children:["The ",(0,s.jsx)("code",{children:"useRef"})," hook allows you to create a mutable object that persists across renders. It’s often used to reference a DOM element or store a value that doesn’t trigger a re-render when updated."]}),(0,s.jsx)(r.Z,{children:"import React, { useRef } from 'react';\n  \n  function TextInputWithFocusButton() {\n    const inputEl = useRef(null);\n    \n    const onButtonClick = () => {\n      inputEl.current.focus();\n    };\n  \n    return (\n      <div>\n        <input ref={inputEl} type=\"text\" />\n        <button onClick={onButtonClick}>Focus the input</button>\n      </div>\n    );\n  }"})]}),(0,s.jsxs)("section",{className:"mb-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold  mb-2",children:"5. useImperativeHandle"}),(0,s.jsxs)("p",{className:"mb-4",children:["The ",(0,s.jsx)("code",{children:"useImperativeHandle"})," hook customizes the instance value that is exposed to parent components when using ",(0,s.jsx)("code",{children:"ref"}),". It’s useful for defining functions that the parent component can call on the child component."]}),(0,s.jsx)(r.Z,{children:"import React, { useRef, useImperativeHandle, forwardRef } from 'react';\n  \n  const FancyInput = forwardRef((props, ref) => {\n    const inputRef = useRef();\n  \n    useImperativeHandle(ref, () => ({\n      focus: () => {\n        inputRef.current.focus();\n      }\n    }));\n  \n    return <input ref={inputRef} />;\n  });\n  \n  function App() {\n    const inputRef = useRef();\n  \n    return (\n      <div>\n        <FancyInput ref={inputRef} />\n        <button onClick={() => inputRef.current.focus()}>Focus the input</button>\n      </div>\n    );\n  }"})]}),(0,s.jsxs)("footer",{className:"mt-6 ",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold  mb-2",children:"Conclusion"}),(0,s.jsxs)("p",{className:"",children:["Understanding these five React hooks \xa0",(0,s.jsx)("code",{children:"useState"}),", ",(0,s.jsx)("code",{children:"useEffect"}),", ",(0,s.jsx)("code",{children:"useContext"}),", ",(0,s.jsx)("code",{children:"useRef"}),", ",(0,s.jsx)("code",{children:"useImperativeHandle"}),"\xa0 will give you a solid foundation for your React job interview. Each hook has a specific purpose and makes managing state and side effects in functional components much easier.",(0,s.jsx)("br",{})," Happy coding, and good luck with your interview!"]})]})]})})}},function(e){e.O(0,[1966,2888,9774,179],function(){return e(e.s=29399)}),_N_E=e.O()}]);