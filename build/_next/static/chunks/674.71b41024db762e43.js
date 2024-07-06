"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[674],{8674:function(e){e.exports=JSON.parse('[{"id":"110","question":"The code inside the return block of useEffect runs at which of the following action?","options":["After component rendring","Before component unmounting","Before execution of next useEffect","Both B and C"],"correctAnswer":"4","explanation":"If code is inside return block of useEffect then It is intended to run before component unmounting or before execution of next scheduled useEffect."},{"id":"111","question":"How many calls we can make for useEffect or useState in a single component?","options":["Unlimited, but equal calls for both hooks","Unlimited","Limited","Limited, but equal calls for both hooks"],"correctAnswer":"2","explanation":"React does not restrict the number of calls."},{"id":"112","question":"Which of the following is associated with the execution of useEffect in react?","options":["Synchronous","Asynchronous","Dual nature","User decides"],"correctAnswer":"2","explanation":"useEffect runs asynchronously, ensuring it does not block the browser from rendering during its scheduled effects."},{"id":"113","question":"Return function inside useEffect is called?","options":["CleanUp function","Return function ","Final function","None of the above"],"correctAnswer":"1","explanation":"It\'s a name for the function."},{"id":"114","question":"Which of the following could be an application of return function in useEffect?","options":["To avoid memory leak","To remove unwanted things","To reallocate resources","All of these"],"correctAnswer":"4","explanation":"Return function also called cleanup function is used to clear all unwanted things after useEffect ends. So it can be applied for all these options."},{"id":"115","question":"Which of the following can be the possible arguments of useEffect()?","options":["Callback function","Dependency array","None","Both"],"correctAnswer":"4","explanation":"UseEffect() can take two possible arguments which are Callback function and dependency array."},{"id":"116","question":"What is the primary purpose of the useEffect hook in React?","options":["To manage component state","To memoize expensive function results","To handle side effects","To expose specific methods to parent components"],"correctAnswer":"3","explanation":"The useEffect hook in React is primarily used to handle side effects, such as data fetching, subscriptions, or manually changing the DOM."},{"id":"117","question":"When should you use the useEffect hook?","options":["When you need to manage component state","When you want to trigger a side effect","When you need to memoize expensive function results","When you need to optimize rendering performance"],"correctAnswer":"2","explanation":"Use useEffect when you want to perform side effects in your functional components, such as data fetching, subscriptions, or DOM manipulation."},{"id":"118","question":"What problem does the useEffect hook solve?","options":["Improving component performance","Managing asynchronous operations","Preventing memory leaks","Handling side effects in functional components"],"correctAnswer":"4","explanation":"The useEffect hook solves the problem of handling side effects in functional components, allowing developers to perform tasks like data fetching, subscriptions, or DOM manipulation."},{"id":"119","question":"How does the useEffect hook improve performance?","options":["By reducing the number of component re-renders","By handling asynchronous operations more efficiently","By optimizing the component\'s memory usage","By providing a clean way to handle side effects"],"correctAnswer":"1","explanation":"UseEffect improves performance by allowing developers to handle side effects in a declarative way, reducing the need for manual cleanup and preventing unnecessary re-renders."},{"id":"120","question":"What is the syntax for using the useEffect hook?","options":["useEffect(() => {}, [])","useEffect(() => {}, {})","useEffect(() => {})","useEffect(() => {}, [dependencies])"],"correctAnswer":"4","explanation":"The correct syntax for useEffect is useEffect(callbackFunction, [dependencies]), where callbackFunction is the function containing the side effect, and dependencies are optional values that, when changed, will trigger the effect to re-run."},{"id":"121","question":"When should you avoid using the useEffect hook?","options":["When you need to manage component state","When you want to trigger a side effect","When you need to memoize expensive function results","When you need to optimize rendering performance"],"correctAnswer":"1","explanation":"Avoid using useEffect for managing component state. Instead, use useState for managing state within functional components."},{"id":"122","question":"Can the useEffect hook be used to perform data fetching?","options":["Yes, it\'s a recommended approach for data fetching","No, useEffect is only for managing component state","It depends on the specific use case","Data fetching should be done outside of useEffect"],"correctAnswer":"1","explanation":"Yes, useEffect is commonly used for data fetching in React functional components. It allows developers to perform asynchronous operations and handle side effects in a clean and declarative way."},{"id":"123","question":"What is the purpose of the dependency array in the useEffect hook?","options":["To specify which components should be rendered","To define the dependencies for the effect","To control the order of effect execution","To handle side effects within the component"],"correctAnswer":"2","explanation":"The dependency array in useEffect is used to specify the dependencies for the effect. When any of the dependencies change, the effect will re-run."},{"id":"124","question":"What happens if you omit the dependency array in the useEffect hook?","options":["The effect will run once after the initial render","The effect will run on every render","The effect will not run at all","The behavior is undefined"],"correctAnswer":"2","explanation":"If you omit the dependency array in useEffect, the effect will run on every render, leading to potential performance issues and infinite loops if not handled properly."},{"id":"125","question":"Can you call useEffect inside a conditional statement?","options":["Yes, but it\'s not recommended","No, useEffect should always be called at the top level of the component","It depends on the specific use case","Conditional statements should be avoided in functional components"],"correctAnswer":"1","explanation":"Yes, you can call useEffect inside a conditional statement, but it\'s generally not recommended. This can lead to unexpected behavior and bugs, as the effect may not run when expected."},{"id":"126","question":"What is the purpose of returning a cleanup function in useEffect?","options":["To clean up after the effect has been applied","To cancel the effect before it\'s finished","To prevent memory leaks caused by the effect","To control the order of effect execution"],"correctAnswer":"1","explanation":"The cleanup function returned by useEffect is used to clean up after the effect has been applied. This is useful for tasks like unsubscribing from subscriptions or cancelling asynchronous operations."},{"id":"127","question":"When does the cleanup function in useEffect run?","options":["After every render","Before the component unmounts","After the effect has been applied","When the dependency array changes"],"correctAnswer":"2","explanation":"The cleanup function in useEffect runs before the component unmounts. This allows for proper cleanup of resources and prevents memory leaks."},{"id":"128","question":"What is the effect of having an empty dependency array in useEffect?","options":["The effect will run once after the initial render","The effect will run on every render","The effect will not run at all","The behavior is undefined"],"correctAnswer":"1","explanation":"If you provide an empty dependency array in useEffect, the effect will run once after the initial render and will not run again for subsequent renders"},{"id":"129","question":"Can you use async/await inside the callback function of useEffect?","options":["Yes, it\'s a recommended approach","No, async/await should not be used inside useEffect","It depends on the specific use case","Async/await is not supported in useEffect"],"correctAnswer":"1","explanation":"Yes, you can use async/await inside the callback function of useEffect to perform asynchronous operations such as data fetching or API calls."},{"id":"130","question":"How do you handle cleanup for a subscription in useEffect?","options":["Call the cleanup function returned by useEffect","Use the return statement in the useEffect callback","Manually unsubscribe in the component\'s componentWillUnmount","There\'s no need to handle cleanup for subscriptions in useEffect"],"correctAnswer":"1","explanation":"To handle cleanup for a subscription in useEffect, you should call the cleanup function returned by useEffect. This ensures that resources associated with the subscription are properly released."},{"id":"131","question":"Is it safe to perform DOM manipulation inside the useEffect hook?","options":["Yes, it\'s safe and recommended","No, DOM manipulation should be avoided in useEffect","It depends on the specific use case","DOM manipulation is not supported in useEffect"],"correctAnswer":"3","explanation":"Performing DOM manipulation inside the useEffect hook is generally safe, but it depends on the specific use case and whether you\'re working with virtual DOM or real DOM elements."}]')}}]);