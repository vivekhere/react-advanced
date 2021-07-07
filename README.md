# Advanced React

## Higher Order Components

We use higher order components to reuse logic across components.

### Example:

Imagine we have 3 components and in all these components we want to have some kind of a tooltip behaviour. So, when we hover our mouse over these components we want to see the tooltip and when we move away from it the tooltip should disappear.

#### How are we going to implement this ?

##### Without higher order component

Well, in the first component we need some kind of a state like a boolean flag called showToolTip. Next we should handle the mouse events like mouseOver and mouseOut. In our event handlers we need to change state. So, we need to reset the value of our boolean field i.e. showToolTip. Also in the component, we need to conditionally render the tooltip depending on the show tooltip flag. Now, we need to repeat the same logic in the second and third component as well. But here's the problem, if we want to change how our tooltips work, we have to do it in 3 different places. We use higher order components to solve this problem.

##### With higher order component

Let's imagine we have a component and in this component we want to add the tooltip functionality. We create a new function and pass the component as an argument to this function. In this function we will return a new component that wraps our original component. In this new component we will implement all the common functionality such as showing a tooltip.

As another example consider we have multiple components that are fetching data from the backend. Whenever it is fetching data, we want to show a loader icon. We can implement that logic inside the wrapper component and with this we no longer have to repeat the logic across different components.

## Hooks

Since React@16.8, we got a new feature called Hooks that allow us to build functional components with all the features we have in the class components. So, we can use state and life-cycle features of class component.

A Hook is a function that allows us to hook into react features like working with state or life-cycle methods.

## Context

Context was introduced to solve a problem in react called 'Prop Drilling'. Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.

Before context, Redux came to solve this problem. In Redux, we have a concept called store which is an object that stores the global state of the application. It stores the data that we want to share across different components. Any component can get data from the store.

With context, we can pass data down the component tree without Prop drilling. We will provide some context or shared data in one component and consume this context in another component. So, we will be dealing with providers and consumers.
