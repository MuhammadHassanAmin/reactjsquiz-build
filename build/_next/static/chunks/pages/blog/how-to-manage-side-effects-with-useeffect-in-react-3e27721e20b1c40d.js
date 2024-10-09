(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6037],{309:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/how-to-manage-side-effects-with-useeffect-in-react",function(){return n(3219)}])},3862:function(e,t,n){"use strict";var a=n(5893);t.Z=e=>{let{title:t,categories:n,level:s,date:i,children:r}=e;return(0,a.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,a.jsxs)("header",{className:"mb-4",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:t}),(0,a.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,a.jsxs)("span",{className:"block",children:["Category: ",n.join(", ")]}),(0,a.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",s]}),(0,a.jsxs)("span",{className:"block",children:["Published on: ",i]})]})]}),(0,a.jsx)("div",{className:"break-words",children:r})]})}},6828:function(e,t,n){"use strict";var a=n(5893);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:(0,a.jsx)("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:(0,a.jsx)("code",{className:"whitespace-pre-wrap break-words",children:t})})})}},1354:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(5893),s=n(7294),i=n(4184),r=n.n(i),o=n(1664),c=n.n(o);let l=e=>{let{link:t,title:n,className:s}=e;return(0,a.jsx)(c(),{passHref:!0,href:t,className:"flex mb-1",children:(0,a.jsx)("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:n})})};var d=()=>{let[e,t]=(0,s.useState)(!1);return(0,a.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,a.jsx)(c(),{href:"/",passHref:!0,children:(0,a.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:"React Js Quiz"})}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("button",{type:"button",onClick:()=>{t(!e)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,a.jsx)("div",{className:r()("w-full md:flex md:items-center md:justify-end",{block:e,hidden:!e}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[(0,a.jsx)(l,{link:"/",title:"Home",className:"w-full bg-black"}),(0,a.jsx)(l,{link:"/blog",title:"Blog"}),(0,a.jsx)(l,{link:"/privacy-policy",title:"Privacy Policy"}),(0,a.jsx)(l,{link:"/contact-us",title:"Contact Us"})]})})]})})};function u(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"border-b",children:(0,a.jsx)(d,{})}),(0,a.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center ",children:(0,a.jsx)(c(),{href:"/",rel:"noopener noreferrer",children:"Powered by React JS Quiz"})})]})}constructor(e){super(e)}}}},3219:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var a=n(5893),s=n(1354),i=n(6828),r=n(8974),o=n(3862);let{title:c,date:l,categories:d,level:u}=r.find(e=>9===e.id);var h=!0;t.default=(0,s.Z)(e=>{let{}=e;return(0,a.jsx)(o.Z,{title:c,categories:d,level:u,date:l,children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,a.jsxs)("p",{className:"mb-4",children:["Managing side effects is a crucial aspect of developing React applications. Side effects can include operations like data fetching, subscriptions, or manually changing the DOM. React provides the"," ",(0,a.jsx)("code",{children:"useEffect"})," hook to handle these side effects in functional components. In this article, we will explore how to use"," ",(0,a.jsx)("code",{children:"useEffect"})," effectively to manage side effects in your React applications."]}),(0,a.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["What is ",(0,a.jsx)("code",{children:"useEffect"}),"?"]}),(0,a.jsxs)("p",{className:"mb-4",children:["The ",(0,a.jsx)("code",{children:"useEffect"})," hook is used to perform side effects in functional components. It accepts two arguments: a function to run after the render, and an optional dependency array that determines when the effect should be re-run. This hook helps you manage operations such as data fetching, subscriptions, and manually manipulating the DOM in a controlled manner."]}),(0,a.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["Basic Usage of ",(0,a.jsx)("code",{children:"useEffect"})]}),(0,a.jsxs)("p",{className:"mb-4",children:["The simplest use of ",(0,a.jsx)("code",{children:"useEffect"})," involves providing a function that runs after every render. Here’s an example:"]}),(0,a.jsx)(i.Z,{children:"import React, { useEffect, useState } from 'react';\n\nfunction ExampleComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    // Fetch data when the component mounts\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []); // Empty dependency array means \n  this effect runs once after initial render\n\n  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>;\n}"}),(0,a.jsxs)("p",{className:"mb-4",children:["In this example, the ",(0,a.jsx)("code",{children:"useEffect"})," hook fetches data from an API when the component mounts. The empty dependency array (",(0,a.jsx)("code",{children:"[]"}),") ensures that this effect runs only once, similar to"," ",(0,a.jsx)("code",{children:"componentDidMount"})," in class components."]}),(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Dependencies and Cleanup"}),(0,a.jsxs)("p",{className:"mb-4",children:["The dependency array in ",(0,a.jsx)("code",{children:"useEffect"})," allows you to control when the effect should run. If you include variables in the dependency array, ",(0,a.jsx)("code",{children:"useEffect"})," will run the effect again whenever any of those variables change. Here’s an example:"]}),(0,a.jsx)(i.Z,{children:"import React, { useEffect, useState } from 'react';\n\nfunction ExampleComponent({ userId }) {\n  const [userData, setUserData] = useState(null);\n\n  useEffect(() => {\n    // Fetch user data whenever userId changes\n    fetch(`https://api.example.com/users/${userId}`)\n      .then(response => response.json())\n      .then(data => setUserData(data));\n  }, [userId]); // Effect depends on userId\n\n  return <div>{userData \n  ? <pre>{JSON.stringify(userData, null, 2)}</pre>\n   : 'Loading...'}</div>;\n}"}),(0,a.jsxs)("p",{className:"mb-4",children:["In this example, the ",(0,a.jsx)("code",{children:"useEffect"})," hook fetches user data whenever the ",(0,a.jsx)("code",{children:"userId"})," prop changes. The effect depends on"," ",(0,a.jsx)("code",{children:"userId"}),", so it will be re-run whenever ",(0,a.jsx)("code",{children:"userId"})," ","changes."]}),(0,a.jsx)("p",{className:"mb-4",children:"Additionally, you can perform cleanup by returning a function from the effect function. This cleanup function will be called before the component unmounts or before the effect runs again. For example:"}),(0,a.jsx)(i.Z,{children:"import React, { useEffect, useState } from 'react';\n\nfunction ExampleComponent() {\n  const [intervalId, setIntervalId] = useState(null);\n\n  useEffect(() => {\n    // Set up an interval\n    const id = setInterval(() => {\n      console.log('Interval running...');\n    }, 1000);\n    setIntervalId(id);\n\n    // Cleanup interval on component unmount\n    return () => clearInterval(id);\n  }, []); // Empty dependency array means this effect runs once\n\n  return <div>Check the console for interval logs.</div>;\n}"}),(0,a.jsxs)("p",{className:"mb-4",children:["In this example, an interval is set up when the component mounts, and it is cleaned up when the component unmounts by calling"," ",(0,a.jsx)("code",{children:"clearInterval"}),"."]}),(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Common Pitfalls and Best Practices"}),(0,a.jsxs)("p",{className:"mb-4",children:["Here are some common pitfalls and best practices when using"," ",(0,a.jsx)("code",{children:"useEffect"}),":"]}),(0,a.jsxs)("ul",{className:"list-disc pl-6 mb-4",children:[(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Missing Dependencies:"})," Ensure that all variables used inside ",(0,a.jsx)("code",{children:"useEffect"})," are listed in the dependency array. Failing to do so can lead to stale values or bugs."]}),(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Cleanup Functions:"})," Always include cleanup functions if you set up subscriptions or intervals to avoid memory leaks."]}),(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Multiple Effects:"})," Use multiple"," ",(0,a.jsx)("code",{children:"useEffect"})," hooks if you have different side effects. This keeps your code modular and easier to maintain."]})]}),(0,a.jsx)("p",{className:"mb-4",children:"By following these practices, you can effectively manage side effects in your React components and keep your application performant and bug-free."}),(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Conclusion"}),(0,a.jsxs)("p",{className:"mb-4",children:["The ",(0,a.jsx)("code",{children:"useEffect"})," hook is a powerful tool for managing side effects in React functional components. By understanding how to use it properly, you can optimize your components, manage asynchronous operations, and maintain a clean and efficient codebase. Remember to handle dependencies correctly and include cleanup functions when necessary to avoid common pitfalls."]})]})})})},8974:function(e){"use strict";e.exports=JSON.parse('[{"id":10,"title":"React DevTools: A Guide for Debugging Your React Apps","description":"Debugging is an essential part of developing React applications. React DevTools is a powerful browser extension that provides a set of tools to help you inspect and debug your React components. In this article, we\'ll explore the features of React DevTools and how you can use them to enhance your development workflow.","categories":["Interview","Concept","Debugging"],"date":"8 September 2024","path":"/blog/react-devtools-a-guide-for-debugging-your-react-apps","imageProps":{"alt":"laptop.svg","src":"/icons/laptop.svg"},"level":"Intermediate"},{"id":9,"title":"How to Manage Side Effects with useEffect in React","description":"Managing side effects is a crucial aspect of developing React applications. Side effects can include operations like data fetching, subscriptions, or manually changing the DOM.","categories":["Interview","Concept"],"date":"5 September 2024","path":"/blog/how-to-manage-side-effects-with-useeffect-in-react","imageProps":{"alt":"refresh.svg","src":"/icons/refresh.svg"},"level":"Beginner"},{"id":8,"title":"React Memoization Techniques: useMemo vs useCallback","description":"Memoization is a performance optimization technique used to avoid redundant calculations by storing the results of expensive function calls and reusing them when the same inputs occur again.","categories":["Interview","Concept"],"date":"1 September 2024","path":"/blog/react-memoization-techniques-usememo-vs-usecallback","imageProps":{"alt":"post-it.svg","src":"/icons/post-it.svg"},"level":"Intermediate"},{"id":7,"title":"Integrating Third-Party Libraries in React","description":" When building React applications, you’ll often need to integrate third-party libraries to enhance functionality. React’s flexibility allows seamless integration with various libraries, whether for UI, state management, or utility functions.","categories":["Interview","Concept"],"date":"25 August 2024","path":"/blog/integrating-third-party-libraries-in-react","imageProps":{"alt":"software-dvd.svg","src":"/icons/software-dvd.svg"},"level":"Beginner"},{"id":6,"title":"Understanding Refs in React and When to Use Them","description":"React is all about components and managing the state, but sometimes, you need direct access to DOM elements or a specific React component instance.","categories":["Interview","Concept"],"date":"20 August 2024","path":"/blog/understanding-refs-in-react-and-when-to-use-them","imageProps":{"alt":"model-builder-reference","src":"/icons/network.svg"},"level":"Intermediate"},{"id":5,"title":"Understanding Prop Drilling in React and How to Avoid It","description":"","categories":["Interview","Concept","Performance"],"date":"18 August 2024","path":"/blog/understanding-prop-drilling-in-react-and-how-to-avoid-it","imageProps":{"alt":"drilling-machine","src":"/icons/water-well-drilling.svg"},"level":"Intermediate"},{"id":4,"title":"React Performance Optimization Techniques","description":"Building efficient React applications is crucial for providing a smooth user experience. In this article, we’ll explore various techniques to optimize performance in React apps, ensuring that they run smoothly even as they scale.","categories":["Interview","Concept"],"date":"12 August 2024","path":"/blog/react-performance-optimization-techniques","imageProps":{"alt":"performance-svgrepo-com","src":"/icons/web-optimization.svg"},"level":"Advanced"},{"id":3,"title":"State Management in React: A Guide to useState, useReducer, and Context API","description":"State management is a crucial aspect of building dynamic React applications. Whether you\'re handling a simple counter or managing complex app-wide data, React provides a set of hooks and tools that make state management easier. In this guide, we\'ll explore three essential tools for managing state in React: useState, useReducer, and the Context API.","categories":["Interview","Concept"],"date":"11 August 2024","path":"/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api","imageProps":{"alt":"redux-svgrepo-com","src":"/icons/task-management.svg"},"level":"Beginner"},{"id":2,"title":"Understanding the Virtual DOM in React","description":"The Virtual DOM is one of the core concepts that sets React apart from other JavaScript libraries and frameworks. It plays a crucial role in how React updates the UI efficiently and ensures high performance.","categories":["Interview","Concept"],"date":"26 June 2024","path":"/blog/understanding-the-virtual-dom-in-react","imageProps":{"alt":"hierarchy","src":"/icons/obj.svg"},"level":"Beginner"},{"id":1,"title":"5 Fundamental React Hooks Every Developer Should Know","description":"React Hooks are an essential part of modern React development. If you\'re preparing for a job interview, it\'s crucial to understand at least the basic hooks. Here are five fundamental React Hooks you should know","categories":["Interview"],"date":"24 June 2024","path":"/blog/5-fundamental-react-hooks-every-developer-should-know","imageProps":{"alt":"Hook","src":"/icons/fishing-hook.svg"},"level":["Beginner"]}]')}},function(e){e.O(0,[1966,2888,9774,179],function(){return e(e.s=309)}),_N_E=e.O()}]);