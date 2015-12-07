# strings and variables

## Variables
### const
`const` is the same as `var` with two changes.
* once you set a value, you cannot change it
* it does not hoist to the top of the scope, it is block scoped.
```javascript
cosnt name = 'Ash';
// ...later
name = 'Seirra'; // ummm, nope. transpiler may throw error, ignored during runtime

const items = [];
items.push(1); // this is fine, we are not changing the value
```

The namespace is shared between `var` and `let`.

### let
`let` is the same thing as `var` except one change.
* it does not hoist to the top of the scope, it is block scoped.
```javascript
if (true) {
    var check = true;
    let _check = true;
}

console.log(check) // true
console.log(_check) // undefined
```

The namespace is shared between `var` and `const`.


## String enhancements
### new string methods
#### `.includes()`
```javascript
'Batman is the only one to stop superman'.includes('only one') === true
```

#### `.endsWith()`
```javascript
'Batman is the only one to stop superman'.endsWith('superman') === true
```

#### `.startsWith()`
```javascript
'Batman is the only one to stop superman'.startsWith('Batman is') === true
```

### string interpolation
```javascript
var emailData = {toName: 'Jess',  orderNumber: 1234};

var email = `Hello ${emailData.toName}, here is your orderNumber number: ${emailData.orderNumber}`
```

using `${}` inside of a string with ````, we can substitute variables and sync function calls, object lookups, pretty much anything sync.

### multiline
```javascript
var template = `<div>
    <button>buy now!</button>
    <button>cancel</button>
</div>
`
```

spacing is preserved because they are replaced with `\n`


### tagging
we can tag a string with a function which gives us control on what the output of the string will be.
```javascript
var name = 'Joy';
var tag = function(strings) {
    var values = [].slice.call(arguments, 1);
    console.log(strings[0]); // 'waddup'
    console.log(strings[1]); // ', have a nice day!'
    console.log(values[0]); // 'Joy'
    return 'Yooooo!';
}

tag`waddup ${name}, have a nice day!`; // 'Yooooo!'
```
