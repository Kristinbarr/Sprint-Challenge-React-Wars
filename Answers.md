# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a library that helps developers create full featured web apps. It can manage a lot of state and data on one page. It utilizes a modular component structure so that parts are scalable and reusable. It also creates a hybrid form of HTML and javascript that is set

2. What does it mean to think in react?

A developer can think about separating elements of a page into components and what state it might have.

3. Describe state.

The current status or display of an app or app’s components. It cannot be altered directly.

4. Describe props.

Props can be state, functions or other data that might be passed down to a component to utilize.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are external dependencies that a function or component can have. To use sideEffects, you can use the React hook `setEffect` in replacement of other lifecycle methods. Inside of `setEffect`, you can alter the state by calling the setter property of the `setState` hook with the value you want to set the state to. This allows react to manage the state in a consistent mannor.
