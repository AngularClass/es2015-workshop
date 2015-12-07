# arrow functions
arrow functions supply a new syntax to functions that also change how they behave. Using `() => {}` we can replace the `function` keyword in some cases. 

If there is only one argument to the arrow function , we can exclude the `()` and the `{}`, which makes the `return` implicent as well.
```javascript
const ItemsMulitpliedBy2 = [1,2,3].map(item => item * 2); // [2,4,6]
```


If there is more than one argument, or no arguments, we must use the `()` and `{}`
```javascript
readFile('./file.txt', (err, file) => {

});
```

Because arrow functions keep the outer scope, equivelant to called `.bind(this)`, we can't use them every where as unexpected side effects may happen. But this also means they are great in other places.
```javascript
setTimeout(() => {
    // same this!
})

function Person = (name) => {
    this.name = name; // this is the outer this, not what we wanted.
}

const Lu = new Person('Lu'); // ummm, no, 
```
