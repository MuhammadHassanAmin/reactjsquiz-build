(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4272],{94799:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/understanding-the-virtual-dom-in-react",function(){return a(45615)}])},23862:function(e,t,a){"use strict";var n=a(85893);t.Z=e=>{let{title:t,categories:a,level:i,date:s,children:r}=e;return(0,n.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,n.jsxs)("header",{className:"mb-4",children:[(0,n.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:t}),(0,n.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,n.jsxs)("span",{className:"block",children:["Category: ",a.join(", ")]}),(0,n.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",i]}),(0,n.jsxs)("span",{className:"block",children:["Published on: ",s]})]})]}),(0,n.jsx)("div",{className:"break-words",children:r})]})}},96828:function(e,t,a){"use strict";var n=a(85893);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none",children:(0,n.jsx)("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 text-slate-300",children:(0,n.jsx)("code",{className:"whitespace-pre-wrap break-words",children:t})})})}},41354:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(85893),i=a(67294),s=a(94184),r=a.n(s),o=a(41664),l=a.n(o);let c=e=>{let{link:t,title:a,className:i}=e;return(0,n.jsx)(l(),{passHref:!0,href:t,className:"flex mb-1",children:(0,n.jsx)("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:a})})};var d=()=>{let[e,t]=(0,i.useState)(!1);return(0,n.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,n.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,n.jsx)(l(),{href:"/",passHref:!0,children:(0,n.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:"React Js Quiz"})}),(0,n.jsx)("div",{className:"flex md:hidden",children:(0,n.jsx)("button",{type:"button",onClick:()=>{t(!e)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,n.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,n.jsx)("div",{className:r()("w-full md:flex md:items-center md:justify-end",{block:e,hidden:!e}),children:(0,n.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[(0,n.jsx)(c,{link:"/",title:"Home",className:"w-full bg-black"}),(0,n.jsx)(c,{link:"/blog",title:"Blog"}),(0,n.jsx)(c,{link:"/privacy-policy",title:"Privacy Policy"}),(0,n.jsx)(c,{link:"/contact-us",title:"Contact Us"})]})})]})})};function h(e){return class extends i.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:"border-b",children:(0,n.jsx)(d,{})}),(0,n.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,n.jsx)(e,{...this.props})}),(0,n.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center ",children:(0,n.jsx)(l(),{href:"/",rel:"noopener noreferrer",children:"Powered by React JS Quiz"})})]})}constructor(e){super(e)}}}},45615:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m}});var n=a(85893),i=a(41354),s=a(96828),r=a(28974),o=a(23862);let{title:l,date:c,categories:d,level:h}=r.find(e=>2===e.id);var m=!0;t.default=(0,i.Z)(e=>{let{}=e;return(0,n.jsxs)(o.Z,{title:l,categories:d,level:h,date:c,children:[(0,n.jsxs)("section",{className:"mb-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"What is the Virtual DOM?"}),(0,n.jsx)("p",{className:"mb-4",children:"The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, with each node representing an element or piece of content. Manipulating the DOM directly can be slow and inefficient, especially for complex applications with frequent updates."}),(0,n.jsx)("p",{children:'The Virtual DOM (VDOM) is an abstraction of the real DOM. It is a lightweight copy of the DOM that React keeps in memory. Instead of directly manipulating the real DOM, React manipulates the Virtual DOM first. When changes are made, React compares the updated Virtual DOM with the previous version (a process called "diffing"). It then calculates the most efficient way to apply these changes to the real DOM.'})]}),(0,n.jsxs)("section",{className:"mb-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"How Does the Virtual DOM Work?"}),(0,n.jsxs)("ol",{className:"list-decimal pl-6 mb-4",children:[(0,n.jsxs)("li",{className:"mb-2",children:[(0,n.jsx)("strong",{children:"Render:"})," When a React component's state or props change, React re-renders the component to create a new Virtual DOM tree."]}),(0,n.jsxs)("li",{className:"mb-2",children:[(0,n.jsx)("strong",{children:"Diffing:"})," React compares the new Virtual DOM tree with the previous one to identify the changes (diffing)."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Reconciliation:"})," React updates the real DOM to reflect the changes found during the diffing process."]})]}),(0,n.jsx)("p",{children:"This process ensures that only the parts of the DOM that have changed are updated, rather than re-rendering the entire DOM. This makes updates much faster and more efficient."})]}),(0,n.jsxs)("section",{className:"mb-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Benefits of the Virtual DOM"}),(0,n.jsxs)("ul",{className:"list-disc pl-6 mb-4",children:[(0,n.jsxs)("li",{className:"mb-2",children:[(0,n.jsx)("strong",{children:"Performance:"})," By minimizing direct DOM manipulation, the Virtual DOM significantly improves performance, especially in applications with frequent updates."]}),(0,n.jsxs)("li",{className:"mb-2",children:[(0,n.jsx)("strong",{children:"Efficiency:"})," The diffing algorithm ensures that only the necessary updates are made, reducing the computational cost."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Simplicity:"})," Developers can write code as if the entire UI is re-rendered on every update, while React handles the optimization under the hood."]})]})]}),(0,n.jsxs)("section",{className:"mb-6",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Virtual DOM in Action"}),(0,n.jsx)("p",{className:"mb-4",children:"Let's consider a simple example to illustrate how the Virtual DOM works. Imagine we have a list of items that can be updated dynamically. Here's how React and the Virtual DOM handle this scenario:"}),(0,n.jsx)(s.Z,{children:'import React, { useState } from \'react\';\n\nfunction ItemList() {\n  const [items, setItems] = useState([\'Item 1\', \'Item 2\', \'Item 3\']);\n\n  const addItem = () => {\n    setItems([...items, `Item ${items.length + 1}`]);\n  };\n\n  return (\n    <div className="p-4">\n      <h2 className="text-2xl font-bold mb-4">Item List</h2>\n      <ul className="list-disc pl-5">\n        {items.map((item, index) => (\n          <li key={index} className="mb-2">{item}</li>\n        ))}\n      </ul>\n      <button\n        onClick={addItem}\n        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"\n      >\n        Add Item\n      </button>\n    </div>\n  );\n}\n\nexport default ItemList;'}),(0,n.jsx)("p",{children:'In this example, clicking the "Add Item" button updates the state, causing React to re-render the `ItemList` component. React creates a new Virtual DOM tree, compares it with the previous tree, and updates only the parts of the real DOM that have changed (in this case, adding a new list item).'})]}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Conclusion"}),(0,n.jsx)("p",{children:"The Virtual DOM is a powerful feature of React that helps maintain high performance and efficient updates. By understanding how it works, you can better appreciate the advantages of using React for building dynamic and interactive web applications."}),(0,n.jsx)("p",{children:"Whether you'`re preparing for a technical interview or looking to deepen your understanding of React, grasping the concept of the Virtual DOM is essential. Happy coding!"})]})]})})},28974:function(e){"use strict";e.exports=JSON.parse('[{"id":10,"title":"React DevTools: A Guide for Debugging Your React Apps","description":"Debugging is an essential part of developing React applications. React DevTools is a powerful browser extension that provides a set of tools to help you inspect and debug your React components. In this article, we\'ll explore the features of React DevTools and how you can use them to enhance your development workflow.","categories":["Interview","Concept","Debugging"],"date":"8 September 2024","path":"/blog/react-devtools-a-guide-for-debugging-your-react-apps","imageProps":{"alt":"laptop.svg","src":"/icons/laptop.svg"},"level":"Intermediate"},{"id":9,"title":"How to Manage Side Effects with useEffect in React","description":"Managing side effects is a crucial aspect of developing React applications. Side effects can include operations like data fetching, subscriptions, or manually changing the DOM.","categories":["Interview","Concept"],"date":"5 September 2024","path":"/blog/how-to-manage-side-effects-with-useeffect-in-react","imageProps":{"alt":"refresh.svg","src":"/icons/refresh.svg"},"level":"Beginner"},{"id":8,"title":"React Memoization Techniques: useMemo vs useCallback","description":"Memoization is a performance optimization technique used to avoid redundant calculations by storing the results of expensive function calls and reusing them when the same inputs occur again.","categories":["Interview","Concept"],"date":"1 September 2024","path":"/blog/react-memoization-techniques-usememo-vs-usecallback","imageProps":{"alt":"post-it.svg","src":"/icons/post-it.svg"},"level":"Intermediate"},{"id":7,"title":"Integrating Third-Party Libraries in React","description":" When building React applications, you’ll often need to integrate third-party libraries to enhance functionality. React’s flexibility allows seamless integration with various libraries, whether for UI, state management, or utility functions.","categories":["Interview","Concept"],"date":"25 August 2024","path":"/blog/integrating-third-party-libraries-in-react","imageProps":{"alt":"software-dvd.svg","src":"/icons/software-dvd.svg"},"level":"Beginner"},{"id":6,"title":"Understanding Refs in React and When to Use Them","description":"React is all about components and managing the state, but sometimes, you need direct access to DOM elements or a specific React component instance.","categories":["Interview","Concept"],"date":"20 August 2024","path":"/blog/understanding-refs-in-react-and-when-to-use-them","imageProps":{"alt":"model-builder-reference","src":"/icons/network.svg"},"level":"Intermediate"},{"id":5,"title":"Understanding Prop Drilling in React and How to Avoid It","description":"","categories":["Interview","Concept","Performance"],"date":"18 August 2024","path":"/blog/understanding-prop-drilling-in-react-and-how-to-avoid-it","imageProps":{"alt":"drilling-machine","src":"/icons/water-well-drilling.svg"},"level":"Intermediate"},{"id":4,"title":"React Performance Optimization Techniques","description":"Building efficient React applications is crucial for providing a smooth user experience. In this article, we’ll explore various techniques to optimize performance in React apps, ensuring that they run smoothly even as they scale.","categories":["Interview","Concept"],"date":"12 August 2024","path":"/blog/react-performance-optimization-techniques","imageProps":{"alt":"performance-svgrepo-com","src":"/icons/web-optimization.svg"},"level":"Advanced"},{"id":3,"title":"State Management in React: A Guide to useState, useReducer, and Context API","description":"State management is a crucial aspect of building dynamic React applications. Whether you\'re handling a simple counter or managing complex app-wide data, React provides a set of hooks and tools that make state management easier. In this guide, we\'ll explore three essential tools for managing state in React: useState, useReducer, and the Context API.","categories":["Interview","Concept"],"date":"11 August 2024","path":"/blog/state-management-in-react-a-guide-to-usestate-usereducer-and-context-api","imageProps":{"alt":"redux-svgrepo-com","src":"/icons/task-management.svg"},"level":"Beginner"},{"id":2,"title":"Understanding the Virtual DOM in React","description":"The Virtual DOM is one of the core concepts that sets React apart from other JavaScript libraries and frameworks. It plays a crucial role in how React updates the UI efficiently and ensures high performance.","categories":["Interview","Concept"],"date":"26 June 2024","path":"/blog/understanding-the-virtual-dom-in-react","imageProps":{"alt":"hierarchy","src":"/icons/obj.svg"},"level":"Beginner"},{"id":1,"title":"5 Fundamental React Hooks Every Developer Should Know","description":"React Hooks are an essential part of modern React development. If you\'re preparing for a job interview, it\'s crucial to understand at least the basic hooks. Here are five fundamental React Hooks you should know","categories":["Interview"],"date":"24 June 2024","path":"/blog/5-fundamental-react-hooks-every-developer-should-know","imageProps":{"alt":"Hook","src":"/icons/fishing-hook.svg"},"level":["Beginner"]}]')}},function(e){e.O(0,[1966,2888,9774,179],function(){return e(e.s=94799)}),_N_E=e.O()}]);