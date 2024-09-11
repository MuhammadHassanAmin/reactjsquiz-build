(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6520],{5054:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api",function(){return n(3615)}])},3862:function(e,t,n){"use strict";var a=n(5893);t.Z=e=>{let{title:t,categories:n,level:s,date:o,children:i}=e;return(0,a.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,a.jsxs)("header",{className:"mb-4",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:t}),(0,a.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,a.jsxs)("span",{className:"block",children:["Category: ",n.join(", ")]}),(0,a.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",s]}),(0,a.jsxs)("span",{className:"block",children:["Published on: ",o]})]})]}),(0,a.jsx)("div",{className:"break-words",children:i})]})}},6828:function(e,t,n){"use strict";var a=n(5893);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:(0,a.jsx)("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:(0,a.jsx)("code",{className:"whitespace-pre-wrap break-words",children:t})})})}},1354:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(5893),s=n(7294),o=n(4184),i=n.n(o),r=n(1664),c=n.n(r);let l=e=>{let{link:t,title:n}=e;return(0,a.jsx)(c(),{href:t,children:(0,a.jsx)("span",{className:"px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:n})})};var d=()=>{let[e,t]=(0,s.useState)(!1);return(0,a.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:"React Js Quiz"})}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("button",{type:"button",onClick:()=>{t(!e)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,a.jsx)("div",{className:i()("w-full md:flex md:items-center md:justify-end",{block:e,hidden:!e}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0",children:[(0,a.jsx)(l,{link:"/",title:"Home"}),(0,a.jsx)(l,{link:"/blog",title:"Blog"}),(0,a.jsx)(l,{link:"/privacy-policy",title:"Privacy Policy"}),(0,a.jsx)(l,{link:"/contact-us",title:"Contact Us"})]})})]})})};function u(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"border-b",children:(0,a.jsx)(d,{})}),(0,a.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center ",children:(0,a.jsx)(c(),{href:"/",rel:"noopener noreferrer",children:"Powered by React JS Quiz"})})]})}constructor(e){super(e)}}}},3615:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(1354),o=n(6828),i=n(8974),r=n(3862);let{title:c,date:l,categories:d,level:u}=i.find(e=>3===e.id);t.default=(0,s.Z)(e=>{let{}=e;return(0,a.jsx)(r.Z,{title:c,categories:d,level:u,date:l,children:(0,a.jsxs)("article",{className:"prose lg:prose-xl mx-auto p-6",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"State Management in React: A Guide to useState, useReducer, and Context API"}),(0,a.jsxs)("p",{className:"mb-4",children:["State management is a crucial aspect of building dynamic React applications. Whether you're handling a simple counter or managing complex app-wide data, React provides a set of hooks and tools that make state management easier. In this guide, we'll explore three essential tools for managing state in React:"," ",(0,a.jsx)("code",{children:"useState"}),", ",(0,a.jsx)("code",{children:"useReducer"}),", and the Context API."]}),(0,a.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["1. Managing Simple State with ",(0,a.jsx)("code",{children:"useState"})]}),(0,a.jsxs)("p",{className:"mb-4",children:["The ",(0,a.jsx)("code",{children:"useState"})," hook is often the first state management tool React developers encounter. It's perfect for handling simple state, like toggling a modal or updating form inputs."]}),(0,a.jsx)(o.Z,{children:'import React, { useState } from \'react\';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n\n    return (\n        <div className="p-4">\n            <h1 className="text-2xl font-semibold">Count: {count}</h1>\n            <button \n                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"\n                onClick={() => setCount(count + 1)}\n            >\n                Increment\n            </button>\n        </div>\n    );\n}\n\nexport default Counter;'}),(0,a.jsxs)("p",{className:"mb-4",children:["In this example, ",(0,a.jsx)("code",{children:"useState"})," initializes a"," ",(0,a.jsx)("code",{children:"count"})," variable and provides a ",(0,a.jsx)("code",{children:"setCount"})," ","function to update it. The component re-renders whenever"," ",(0,a.jsx)("code",{children:"setCount"})," is called, ensuring that the UI stays in sync with the state."]}),(0,a.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["2. Handling Complex State with ",(0,a.jsx)("code",{children:"useReducer"})]}),(0,a.jsxs)("p",{className:"mb-4",children:["While ",(0,a.jsx)("code",{children:"useState"})," is great for simple state, it can become cumbersome when dealing with more complex logic. That's where"," ",(0,a.jsx)("code",{children:"useReducer"})," comes in. It provides a way to manage state that involves multiple sub-values or when state transitions are more complex."]}),(0,a.jsx)(o.Z,{children:"import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n    switch (action.type) {\n        case 'increment':\n            return { count: state.count + 1 };\n        case 'decrement':\n            return { count: state.count - 1 };\n        default:\n            throw new Error();\n    }\n}\n\nfunction CounterWithReducer() {\n    const [state, dispatch] = useReducer(reducer, initialState);\n\n    return (\n        <div className=\"p-4\">\n            <h1 className=\"text-2xl font-semibold\">Count: {state.count}</h1>\n            <button \n                className=\"mt-4 px-4 py-2 bg-green-500 text-white rounded\"\n                onClick={() => dispatch({ type: 'increment' })}\n            >\n                Increment\n            </button>\n            <button \n                className=\"mt-4 px-4 py-2 bg-red-500 text-white rounded\"\n                onClick={() => dispatch({ type: 'decrement' })}\n            >\n                Decrement\n            </button>\n        </div>\n    );\n}\n\nexport default CounterWithReducer;"}),(0,a.jsxs)("p",{className:"mb-4",children:["Here, ",(0,a.jsx)("code",{children:"useReducer"})," takes a reducer function and an initial state. The reducer function defines how the state should change in response to different actions. This approach is especially useful when managing more complex state logic, such as updating forms or handling nested data structures."]}),(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"3. Sharing State Across Components with the Context API"}),(0,a.jsx)("p",{className:"mb-4",children:'When your app grows, you might find yourself passing props down through multiple levels of components. This is known as "prop drilling" and can make your code harder to maintain. The Context API helps you avoid prop drilling by allowing you to share state across your component tree without passing props explicitly.'}),(0,a.jsx)(o.Z,{children:'import React, { createContext, useContext, useState } from \'react\';\n\nconst CountContext = createContext();\n\nfunction CounterProvider({ children }) {\n    const [count, setCount] = useState(0);\n\n    return (\n        <CountContext.Provider value={{ count, setCount }}>\n            {children}\n        </CountContext.Provider>\n    );\n}\n\nfunction CounterDisplay() {\n    const { count } = useContext(CountContext);\n    return <h1 className="text-2xl font-semibold">Count: {count}</h1>;\n}\n\nfunction CounterButtons() {\n    const { setCount } = useContext(CountContext);\n    return (\n        <div>\n            <button \n                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"\n                onClick={() => setCount(prevCount => prevCount + 1)}\n            >\n                Increment\n            </button>\n        </div>\n    );\n}\n\nfunction App() {\n    return (\n        <CounterProvider>\n            <CounterDisplay />\n            <CounterButtons />\n        </CounterProvider>\n    );\n}\n\nexport default App;'}),(0,a.jsxs)("p",{className:"mb-4",children:["In this example, the Context API is used to share the"," ",(0,a.jsx)("code",{children:"count"})," state across multiple components without the need for prop drilling. The ",(0,a.jsx)("code",{children:"CounterProvider"})," component wraps the entire app, making the ",(0,a.jsx)("code",{children:"count"})," and"," ",(0,a.jsx)("code",{children:"setCount"})," available to all child components via the"," ",(0,a.jsx)("code",{children:"CountContext"}),"."]}),(0,a.jsxs)("p",{className:"mb-4",children:["In conclusion, managing state in React can range from simple to complex, depending on your application's needs. By using"," ",(0,a.jsx)("code",{children:"useState"})," for basic state, ",(0,a.jsx)("code",{children:"useReducer"})," for more complex logic, and the Context API for sharing state across components, you can effectively manage state in any React application."]})]})})})},8974:function(e){"use strict";e.exports=JSON.parse('[{"id":10,"title":"React DevTools: A Guide for Debugging Your React Apps","description":"Debugging is an essential part of developing React applications. React DevTools is a powerful browser extension that provides a set of tools to help you inspect and debug your React components. In this article, we\'ll explore the features of React DevTools and how you can use them to enhance your development workflow.","categories":["Interview","Concept","Debugging"],"date":"8 September 2024","path":"/blog/react-devtools-a-guide-for-debugging-your-react-apps","imageProps":{"alt":"devtools","src":"/icons/devtools.svg"},"level":"Intermediate"},{"id":9,"title":"How to Manage Side Effects with useEffect in React","description":"Managing side effects is a crucial aspect of developing React applications. Side effects can include operations like data fetching, subscriptions, or manually changing the DOM.","categories":["Interview","Concept"],"date":"5 September 2024","path":"/blog/how-to-manage-side-effects-with-useeffect-in-react","imageProps":{"alt":"arrow-repeat","src":"/icons/arrow-repeat.svg"},"level":"Beginner"},{"id":8,"title":"React Memoization Techniques: useMemo vs useCallback","description":"Memoization is a performance optimization technique used to avoid redundant calculations by storing the results of expensive function calls and reusing them when the same inputs occur again.","categories":["Interview","Concept"],"date":"1 September 2024","path":"/blog/react-memoization-techniques-usememo-vs-usecallback","imageProps":{"alt":"memory","src":"/icons/memory.svg"},"level":"Intermediate"},{"id":7,"title":"Integrating Third-Party Libraries in React","description":" When building React applications, you’ll often need to integrate third-party libraries to enhance functionality. React’s flexibility allows seamless integration with various libraries, whether for UI, state management, or utility functions.","categories":["Interview","Concept"],"date":"25 August 2024","path":"/blog/integrating-third-party-libraries-in-react","imageProps":{"alt":"integration","src":"/icons/integration.svg"},"level":"Beginner"},{"id":6,"title":"Understanding Refs in React and When to Use Them","description":"React is all about components and managing the state, but sometimes, you need direct access to DOM elements or a specific React component instance.","categories":["Interview","Concept"],"date":"20 August 2024","path":"/blog/understanding-refs-in-react-and-when-to-use-them","imageProps":{"alt":"model-builder-reference","src":"/icons/model-builder-reference.svg"},"level":"Intermediate"},{"id":5,"title":"Understanding Prop Drilling in React and How to Avoid It","description":"","categories":["Interview","Concept","Performance"],"date":"18 August 2024","path":"/blog/understanding-prop-drilling-in-react-and-how-to-avoid-it","imageProps":{"alt":"drilling-machine","src":"/icons/drilling-machine.svg"},"level":"Intermediate"},{"id":4,"title":"React Performance Optimization Techniques","description":"Building efficient React applications is crucial for providing a smooth user experience. In this article, we’ll explore various techniques to optimize performance in React apps, ensuring that they run smoothly even as they scale.","categories":["Interview","Concept"],"date":"12 August 2024","path":"/blog/react-performance-optimization-techniques","imageProps":{"alt":"performance-svgrepo-com","src":"/icons/performance-svgrepo-com.svg"},"level":"Advanced"},{"id":3,"title":"State Management in React: A Guide to useState, useReducer, and Context API","description":"State management is a crucial aspect of building dynamic React applications. Whether you\'re handling a simple counter or managing complex app-wide data, React provides a set of hooks and tools that make state management easier. In this guide, we\'ll explore three essential tools for managing state in React: useState, useReducer, and the Context API.","categories":["Interview","Concept"],"date":"11 August 2024","path":"/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api","imageProps":{"alt":"redux-svgrepo-com","src":"/icons/redux-svgrepo-com.svg"},"level":"Beginner"},{"id":2,"title":"Understanding the Virtual DOM in React","description":"The Virtual DOM is one of the core concepts that sets React apart from other JavaScript libraries and frameworks. It plays a crucial role in how React updates the UI efficiently and ensures high performance.","categories":["Interview","Concept"],"date":"26 June 2024","path":"/blog/understanding-the-virtual-dom-in-react","imageProps":{"alt":"hierarchy","src":"/icons/hierarchy.svg"},"level":"Beginner"},{"id":1,"title":"5 Fundamental React Hooks Every Developer Should Know","description":"React Hooks are an essential part of modern React development. If you\'re preparing for a job interview, it\'s crucial to understand at least the basic hooks. Here are five fundamental React Hooks you should know","categories":["Interview"],"date":"24 June 2024","path":"/blog/5-fundamental-react-hooks-every-developer-should-know","imageProps":{"alt":"Hook","src":"/icons/hook.svg"},"level":["Beginner"]}]')}},function(e){e.O(0,[1966,2888,9774,179],function(){return e(e.s=5054)}),_N_E=e.O()}]);