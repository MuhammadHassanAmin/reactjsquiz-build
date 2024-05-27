"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{904:function(e){e.exports=JSON.parse('[{"id":"20","question":"Which of the following activities do we perform while declaring useState in React?","options":["Object destructuring","Unpacking object","Array destructuring","Unpacking array"],"correctAnswer":"3","explanation":"The useState() hook returns an array containing two elements: the current state value and a function to update that state. We use array destructuring to directly assign these elements to variables. For example: const [count, setCount] = useState(0);."},{"id":"21","question":"Which type of variable can we define in the useState hook?","options":["Integer","String","List","All of the above"],"correctAnswer":"4","explanation":"The useState hook allows us to define state variables of any data type, including integers, strings, lists, objects, etc."},{"id":"22","question":"Can we use the useState hook inside conditional statements such as if or while?","options":["Yes","No"],"correctAnswer":"2","explanation":"React hooks, including useState, should not be called conditionally. Hooks rely on the order in which they are called, so placing them inside a conditional statement could lead to unpredictable behavior. This is why hooks must be called at the top level of the component."},{"id":"23","question":"How does React remember which state variable belongs to which useState call?","options":["It makes a lookup table","It remembers the calling order","It traverses the calls again, whenever needed","None of the above"],"correctAnswer":"2","explanation":"React relies on the order in which the useState (and other hooks) are called. It keeps track of the hooks based on the order they are called within the component during each render."},{"id":"24","question":"How many calls can we make to useState or useEffect in a single component?","options":["Unlimited, but equal calls for both hooks","Unlimited","Limited","Limited, but equal calls for both hooks"],"correctAnswer":"2","explanation":"React does not impose any restrictions on the number of times you can call useState or useEffect in a single component. You can use as many hooks as you need."},{"id":"25","question":"Can we use useState and useEffect hooks simultaneously in a component?","options":["Yes","No","Depends on the condition"],"correctAnswer":"1","explanation":"Yes, you can use useState and useEffect hooks simultaneously in a component. They serve different purposes: useState is for managing state, while useEffect is for performing side effects."},{"id":"26","question":"What does useState() return in React?","options":["Object","Json","Array","Integer"],"correctAnswer":"3","explanation":"The useState() hook returns an array containing two elements: the current state value and a function to update that state. For example: const [count, setCount] = useState(0);."},{"id":"27","question":"What is passed as an argument in useState() in React?","options":["Initial value","State variable","Function to set state","All can be passed"],"correctAnswer":"1","explanation":"The argument passed to useState() is the initial value of the state. For example: useState(0) initializes the state variable with the value 0."},{"id":"28","question":"Which datatype can be passed as an argument in useState() in React?","options":["String","Json","Integer","All of these"],"correctAnswer":"4","explanation":"The useState() hook can accept any data type as its initial state, including strings, numbers, arrays, objects, etc."},{"id":"29","question":"How many possible arguments can useState() take?","options":["More than 2","Only 1","Exactly 2","No limit"],"correctAnswer":"2","explanation":"The useState() hook can take only one argument, which is the initial state value. For example: useState(\'Hello\') sets the initial state to \'Hello\'."}]')}}]);