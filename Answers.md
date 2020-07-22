1. What problem does the context API help solve?
    Context is a way for child component to access value in a parent component. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are events. Can send data from your app to the redux store.  
Reducers are functions that take current state, perform the action, and return new state
Store holds the app state. There is only one store object. The store holds all the app state in one object tree.  This helps simplify debugging and profiling of the app. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state is global and component state is local. In app state, any component can access the store from anywhere. Component state only lives within a specific component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
We use redux-thunk to make API calls from our action creators. (asynchronous API calls). We can make a call before actions make it to the reducer. The action-creator has access to the dispatch function.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
So far i feel the most confidnet with Provider/Consumer. It seems a bit easier to understand the flow. 
