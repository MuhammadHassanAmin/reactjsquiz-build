(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54272],{94799:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/understanding-the-virtual-dom-in-react",function(){return s(45615)}])},23862:function(e,t,s){"use strict";var a=s(85893);t.Z=e=>{let{title:t,categories:s,level:n,date:i,children:r}=e;return(0,a.jsxs)("article",{className:"p-6 px-6 md:px-10 dark:text-white rounded-lg overflow-hidden",children:[(0,a.jsxs)("header",{className:"mb-4",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-8 break-words",children:t}),(0,a.jsxs)("div",{className:"border-y border-stone-500 py-2 my-4 text-center text-xs md:text-sm break-words",children:[(0,a.jsxs)("span",{className:"block",children:["Category: ",s.join(", ")]}),(0,a.jsxs)("span",{className:"block mx-5",children:["Difficulty: ",n]}),(0,a.jsxs)("span",{className:"block",children:["Published on: ",i]})]})]}),(0,a.jsx)("div",{className:"break-words",children:r})]})}},96828:function(e,t,s){"use strict";var a=s(85893);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"w-full overflow-x-auto max-w-[350px] md:max-w-none ",children:(0,a.jsx)("pre",{className:"bg-slate-100 dark:bg-gray-700 p-4 rounded mb-4 dark:text-slate-300",children:(0,a.jsx)("code",{className:"whitespace-pre-wrap break-words",children:t})})})}},41354:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var a=s(85893),n=s(67294),i=s(94184),r=s.n(i),l=s(41664),c=s.n(l);let o=e=>{let{link:t,title:s,className:n}=e;return(0,a.jsx)(c(),{passHref:!0,href:t,className:"flex mb-1",children:(0,a.jsx)("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:s})})};var d=e=>{let{siteName:t}=e,[s,i]=(0,n.useState)(!1);return(0,a.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,a.jsx)(c(),{href:"/",passHref:!0,children:(0,a.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:t})}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("button",{type:"button",onClick:()=>{i(!s)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,a.jsx)("div",{className:r()("w-full md:flex md:items-center md:justify-end",{block:s,hidden:!s}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[(0,a.jsx)(o,{link:"/",title:"Home",className:"w-full bg-black"}),(0,a.jsx)(o,{link:"/blog",title:"Blog"}),(0,a.jsx)(o,{link:"/privacy-policy",title:"Privacy Policy"}),(0,a.jsx)(o,{link:"/contact-us",title:"Contact Us"})]})})]})})};function h(e){return class extends n.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"border-b",children:(0,a.jsx)(d,{siteName:this.props.siteName})}),(0,a.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center "})]})}constructor(e){super(e)}}}},45615:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return l}});var a=s(85893),n=s(41354),i=s(96828),r=s(23862),l=!0;t.default=(0,n.Z)(e=>{let{title:t,date:s,categories:n,level:l}=e;return(0,a.jsxs)(r.Z,{title:t,categories:n,level:l,date:s,children:[(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"What is the Virtual DOM?"}),(0,a.jsx)("p",{className:"mb-4",children:"The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, with each node representing an element or piece of content. Manipulating the DOM directly can be slow and inefficient, especially for complex applications with frequent updates."}),(0,a.jsx)("p",{children:'The Virtual DOM (VDOM) is an abstraction of the real DOM. It is a lightweight copy of the DOM that React keeps in memory. Instead of directly manipulating the real DOM, React manipulates the Virtual DOM first. When changes are made, React compares the updated Virtual DOM with the previous version (a process called "diffing"). It then calculates the most efficient way to apply these changes to the real DOM.'})]}),(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"How Does the Virtual DOM Work?"}),(0,a.jsxs)("ol",{className:"list-decimal pl-6 mb-4",children:[(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Render:"})," When a React component's state or props change, React re-renders the component to create a new Virtual DOM tree."]}),(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Diffing:"})," React compares the new Virtual DOM tree with the previous one to identify the changes (diffing)."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Reconciliation:"})," React updates the real DOM to reflect the changes found during the diffing process."]})]}),(0,a.jsx)("p",{children:"This process ensures that only the parts of the DOM that have changed are updated, rather than re-rendering the entire DOM. This makes updates much faster and more efficient."})]}),(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Benefits of the Virtual DOM"}),(0,a.jsxs)("ul",{className:"list-disc pl-6 mb-4",children:[(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Performance:"})," By minimizing direct DOM manipulation, the Virtual DOM significantly improves performance, especially in applications with frequent updates."]}),(0,a.jsxs)("li",{className:"mb-2",children:[(0,a.jsx)("strong",{children:"Efficiency:"})," The diffing algorithm ensures that only the necessary updates are made, reducing the computational cost."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Simplicity:"})," Developers can write code as if the entire UI is re-rendered on every update, while React handles the optimization under the hood."]})]})]}),(0,a.jsxs)("section",{className:"mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Virtual DOM in Action"}),(0,a.jsx)("p",{className:"mb-4",children:"Let's consider a simple example to illustrate how the Virtual DOM works. Imagine we have a list of items that can be updated dynamically. Here's how React and the Virtual DOM handle this scenario:"}),(0,a.jsx)(i.Z,{children:'import React, { useState } from \'react\';\n\nfunction ItemList() {\n  const [items, setItems] = useState([\'Item 1\', \'Item 2\', \'Item 3\']);\n\n  const addItem = () => {\n    setItems([...items, `Item ${items.length + 1}`]);\n  };\n\n  return (\n    <div className="p-4">\n      <h2 className="text-2xl font-bold mb-4">Item List</h2>\n      <ul className="list-disc pl-5">\n        {items.map((item, index) => (\n          <li key={index} className="mb-2">{item}</li>\n        ))}\n      </ul>\n      <button\n        onClick={addItem}\n        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"\n      >\n        Add Item\n      </button>\n    </div>\n  );\n}\n\nexport default ItemList;'}),(0,a.jsx)("p",{children:'In this example, clicking the "Add Item" button updates the state, causing React to re-render the `ItemList` component. React creates a new Virtual DOM tree, compares it with the previous tree, and updates only the parts of the real DOM that have changed (in this case, adding a new list item).'})]}),(0,a.jsxs)("footer",{children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Conclusion"}),(0,a.jsx)("p",{children:"The Virtual DOM is a powerful feature of React that helps maintain high performance and efficient updates. By understanding how it works, you can better appreciate the advantages of using React for building dynamic and interactive web applications."}),(0,a.jsx)("p",{children:"Whether you'`re preparing for a technical interview or looking to deepen your understanding of React, grasping the concept of the Virtual DOM is essential. Happy coding!"})]})]})})}},function(e){e.O(0,[41966,92888,49774,40179],function(){return e(e.s=94799)}),_N_E=e.O()}]);