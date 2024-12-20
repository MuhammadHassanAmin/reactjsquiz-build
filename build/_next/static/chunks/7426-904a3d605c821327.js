(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7426],{55989:function(e,r,t){"use strict";t.d(r,{Gg:function(){return y},Ez:function(){return i},Y3:function(){return f}});var a=t(85893),s=t(67294),l=t(94184),n=t.n(l),d=t(41664),o=t.n(d),i=e=>{let{title:r,path:t="#",description:s,icon:l,className:d}=e;return(0,a.jsx)(o(),{href:t,passHref:!0,children:(0,a.jsxs)("span",{className:n()("flex flex-col items-center p-3 max-w-sm bg-white text-center  rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",d),children:[l,(0,a.jsx)("h5",{className:"mt-2 text-2xl tracking-tight text-gray-900 dark:text-white",children:r}),(0,a.jsx)("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:s})]})})},c=t(27840),x=t(11163),m=t(25675),u=t.n(m),h=e=>(0,a.jsxs)("button",{className:"flex items-center dark:text-white cursor-pointer",...e,type:"button",children:[(0,a.jsx)(u(),{alt:"Report this question",src:"/icons/report.svg",width:20,height:20}),(0,a.jsx)("span",{className:"text-sm pl-2",children:"Report this question"})]}),g=e=>{let{showModal:r,setShowModal:t,questionId:s}=e;return r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,a.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl md:w-1/3",children:(0,a.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-600 text-white outline-none focus:outline-none",children:[(0,a.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t",children:[(0,a.jsx)("h3",{className:"text-3xl font-semibold",children:"Submit your report!"}),(0,a.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>t(!1),children:(0,a.jsx)("span",{className:"text-white h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),(0,a.jsx)("div",{className:"relative p-6 flex-auto",children:(0,a.jsxs)("form",{action:"https://formspree.io/f/xaykqbga",method:"POST",className:"space-y-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Your email"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"name@gmail.com",required:!0})]}),(0,a.jsxs)("div",{className:"hidden",children:[(0,a.jsx)("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Subject"}),(0,a.jsx)("input",{type:"text",id:"subject",name:"subject",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Let us know how we can help you",required:!0,value:"Reporting question with id: ".concat(s)})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",children:"Your message"}),(0,a.jsx)("textarea",{id:"message",name:"message",rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a comment..."})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end  pt-5 border-t border-solid border-blueGray-200 rounded-b",children:[(0,a.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>t(!1),children:"Close"}),(0,a.jsx)("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"submit",children:"Submit"})]})]})})]})})}),(0,a.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null};let b=e=>{let{options:r,questionIndex:t,setIsAnswerSelected:l,correctAnswer:d,explanation:o,questionId:i,onOptionSelect:c,userAnswer:x}=e,[m,u]=(0,s.useState)(x),[h,g]=(0,s.useState)(!1),b=()=>{!h&&window.gtag&&window.gtag("event","explanationsViewed",{event_category:"User Interactions",event_label:"Explanation viewed for question ".concat(i)}),g(!h)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"grid w-full md:grid-cols-1 gap-5",children:r.map((e,r)=>(0,a.jsxs)("li",{className:"relative",children:[(0,a.jsx)("input",{onChange:e=>{x||(c(e.currentTarget.value),u(e.currentTarget.value),l(!0))},type:"radio",id:"".concat(t).concat(r),name:"option-".concat(t),value:r+1,className:"hidden peer",checked:m==r+1,readOnly:!!x,required:""}),(0,a.jsxs)("label",{htmlFor:"".concat(t).concat(r),className:n()(" inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg cursor-pointer dark:hover:text-gray-300 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700",{"dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 ":m==d,"border border-green-600 dark:text-green-500 text-green-600 ":m&&r+1==d,"border border-red-600 dark:border-red-600 dark:text-red-500 text-red-600":m==r+1&&m!=d,"border border-green-600 dark:text-green-500 text-green-600":m&&r+1==d,"rounded-b-none border-b-0":h&&m&&r+1==d,"border border-gray-200 dark:border-gray-700 ":!m||r+1!=d}),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,a.jsx)("div",{className:"text-lg font-semibold",children:e}),o&&r+1==d&&(0,a.jsx)("button",{onClick:b,className:n()("",{hidden:!m}),children:(0,a.jsx)("small",{className:"text-gray-400",children:h?"Hide Explanation":"Show Explanation"})})]}),x&&m==r+1&&(0,a.jsx)("span",{className:n()("absolute -top-3 right-2 text-white text-xs font-bold px-2 py-1 rounded-full",{"bg-green-500":m==d,"bg-red-500":m!=d}),children:"Your Answer"})]}),r+1==d&&(0,a.jsx)("div",{className:n()("border border-green-600 dark:text-green-500 border-t-0 rounded rounded-t-none",{hidden:!m,hidden:!h,flex:r+1==d}),children:(0,a.jsx)("div",{className:"p-5 font-light border rounded rounded-t-none border-b-0 w-full border-gray-200 dark:border-gray-700 dark:bg-gray-900",children:(0,a.jsx)("p",{className:"mb-2 text-gray-500 dark:text-gray-200",children:o})})})]},r))})})};var f=e=>{let{question:r,totalQuestions:t,activeQuestionIndex:l,options:d,correctAnswer:o,index:i,explanation:m,id:u,nextQuestionPath:f,quizId:p,resultMode:y,userAnswer:j}=e,k=(0,x.useRouter)(),[w,v]=(0,s.useState)(!1),[N,C]=(0,s.useState)(!1),[S,H]=(0,s.useState)(!1),[q,z]=(0,s.useState)(),{quizId:R,setQuizId:E,userAnswers:F,setUserAnswers:I}=(0,s.useContext)(c.C);return(0,s.useEffect)(()=>{t===i+1&&v(!0)},[t,i]),(0,s.useEffect)(()=>{p&&p!==R&&(I({}),E(p))},[p,R]),(0,s.useEffect)(()=>{q&&R&&u&&I({...F,[u]:parseInt(q)})},[q,R,u]),(0,a.jsxs)("div",{className:n()("p-6 md:px-10   w-full bg-white dark:bg-gray-800 ",{hidden:i!==l,"w-full":j,"md:w-11/12":!j}),children:[(0,a.jsx)("div",{className:"flex items-start justify-between ",children:(0,a.jsx)("h5",{className:"text-2xl  font-bold tracking-tight text-gray-900 dark:text-white ",children:r})}),(0,a.jsx)("div",{className:"flex justify-end my-3",children:(0,a.jsx)(h,{onClick:()=>H(!0)})}),(0,a.jsx)(b,{userAnswer:j,setIsAnswerSelected:C,questionIndex:i,options:d,explanation:m,correctAnswer:o,questionId:u,onOptionSelect:e=>!q&&z(e)}),(0,a.jsxs)("button",{disabled:!N,onClick:()=>{w?k.push("/quiz-result/"):k.push(f)},className:'"disabled:opacity-50 mt-8 inline-flex justify-center items-center py-2 px-3 text-lg w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" '.concat(y?"hidden":"block"),children:["".concat(w?"View Results":"Next Question (".concat(i+1,"/").concat(t,")")),(0,a.jsx)("svg",{"aria-hidden":"true",className:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,a.jsx)(g,{questionId:u,showModal:S,setShowModal:H})]})},p=e=>{let{type:r,text:t,className:s}=e,l={danger:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",success:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",info:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",default:"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",warning:"  bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"},d=l[r]||l.default;return(0,a.jsx)("span",{className:n()("p-1 rounded-lg px-2",d,s),children:t})},y=e=>{let{title:r,description:t,level:s,categories:l,path:d,imageProps:i,date:c}=e;return(0,a.jsx)(o(),{href:d,passHref:!0,children:(0,a.jsxs)("div",{className:n()(" flex flex-row cursor-pointer mb-3 border-stone-500 pb-3 border-b"),children:[(0,a.jsx)("div",{className:n()(" overflow-hidden hidden md:block rounded-md  w-60   transition-all hover:scale-105   dark:bg-gray-800 "),children:(0,a.jsx)(o(),{className:n()("relative block aspect-video"),href:d,passHref:!0,children:i?(0,a.jsx)(u(),{src:i.src,alt:i.alt||r,className:"object-cover transition-all fill-white",fill:!0,objectFit:"contain",sizes:"(max-width: 768px) 30vw, 33vw"}):(0,a.jsx)("span",{className:"absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200",children:(0,a.jsx)("h3",{children:"default image"})})})}),(0,a.jsx)("div",{className:n()("flex items-center"),children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:n()("line-clamp-2 font-medium  tracking-normal text-black mt-2    dark:text-white md:text-xl"),children:[(0,a.jsx)(o(),{href:d,className:"break-words",passHref:!0,children:r})," "]}),(0,a.jsxs)("div",{className:"row mt-2",children:[(0,a.jsx)(o(),{href:"#",passHref:!0,children:(0,a.jsx)(p,{type:"Beginner"===s?"success":"warning",text:s})}),(0,a.jsx)("div",{className:"flex mt-5",children:l.map(e=>(0,a.jsx)(o(),{href:"#",className:"break-words",passHref:!0,children:(0,a.jsx)(p,{type:"info",className:"mr-2 break-words",text:e})},e))})]}),(0,a.jsx)("div",{className:"mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400",children:(0,a.jsx)("time",{className:"truncate text-sm",dateTime:c,children:c})})]})})]})})}},41354:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var a=t(85893),s=t(67294),l=t(94184),n=t.n(l),d=t(41664),o=t.n(d);let i=e=>{let{link:r,title:t,className:s}=e;return(0,a.jsx)(o(),{passHref:!0,href:r,className:"flex mb-1",children:(0,a.jsx)("span",{className:"px-2 py-1 w-full  text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:t})})};var c=()=>{let[e,r]=(0,s.useState)(!1);return(0,a.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:(0,a.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full  ",children:[(0,a.jsx)(o(),{href:"/",passHref:!0,children:(0,a.jsx)("span",{className:"whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:"React Js Quiz"})}),(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)("button",{type:"button",onClick:()=>{r(!e)},className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),(0,a.jsx)("div",{className:n()("w-full md:flex md:items-center md:justify-end",{block:e,hidden:!e}),children:(0,a.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 text-2xl",children:[(0,a.jsx)(i,{link:"/",title:"Home",className:"w-full bg-black"}),(0,a.jsx)(i,{link:"/blog",title:"Blog"}),(0,a.jsx)(i,{link:"/privacy-policy",title:"Privacy Policy"}),(0,a.jsx)(i,{link:"/contact-us",title:"Contact Us"})]})})]})})};function x(e){return class extends s.Component{componentDidMount(){console.log("Wrapped Component")}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"border-b",children:(0,a.jsx)(c,{})}),(0,a.jsx)("main",{className:" flex flex-col justify-center items-center py-5 h-full",children:(0,a.jsx)(e,{...this.props})}),(0,a.jsx)("footer",{className:"bg-white dark:bg-gray-800 dark:text-white p-5 border-t-2  flex flex-col justify-center items-center ",children:(0,a.jsx)(o(),{href:"/",rel:"noopener noreferrer",children:"Powered by React JS Quiz"})})]})}constructor(e){super(e)}}}},11163:function(e,r,t){e.exports=t(9090)}}]);