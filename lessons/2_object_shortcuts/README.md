# object shorcuts

## same key names
```javascript
const body = {id: 123, amount: 20};
const type = 'POST';
const url = 'http://api.com';
fetch(url, { type, body })
```

if there exist a variable in the same scope as the object literal that shares its name with a property or method name on the object literal, then you dont have to write it twice.


## method shortcuts
```javascript
const table = {
    set() {
        //...
    },
    unset() {
        //...
    }
};
```

the new method syntax is just a shorcut that we can use on objects and `classes`. When using them on objects, you must tull seperate them by commas.


## computed dynamic keys for object literals
```javascript
const getKey = (name) => {
    return `name__${name};`
};

const methodName = 'add';

const obj = {
    [getKey('prop')]: true,
    id: 123,
    [add]() {
        //....
    }
};
```
