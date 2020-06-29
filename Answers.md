1. What problem does the context API help solve?
Context API reduces the need for prop-drilling, allowing us to share values from componenets without needing to pass a prop.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are what our app does.
Reducers are pure functions that dont have any side effects. They manage state.
Store is our contained stAte for the application.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, while component state is local to the conponent. When state needs to be used through various children, its best to use application state. If state is needed by a single component, then component state is prefferable.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that allows us to return function instead of actions. This allows us to delay the use of dispatch.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Definately Conext API. Its simpler, and less aeavy handed vs Redux.
