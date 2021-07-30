# Performance in react

By default, whenever a parent component updates, the whole tree below that component will update too. This can lead to some heavy performance issues.

### shouldComponentUpdate

This is why the method shouldComponentUpdate was created. However, this method becomes very cumbersome to implement, especially due to the fact that props and state are objects and deep comparison can be tricky to perform as well as imperative, which we want to avoid.

### Pure Component

In order to avoid that, Pure Component was created. Unfortunately, it just works with classes.

### React.memo()

Pretty much the same as Pure Component but for functional components.
