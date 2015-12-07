# class
## new `class` keyword
we now have a new syntax to declare constructor functions. This syntaz is just sugar on top of the Prototypal inheritance JS has underneath and is not a `true` class implmentation like you would see in something like Java. For better or for worse.
```javascript
class Car {
    constructor(make, year) {// called when we new Car();
        this.make = make;
        this.year = year;
        this.smogTest = function() { // static method
            return true;
        };
    }
    // prototype methods uses new method syntax keeps the `this` binding
    startup() { 
        if (this.year < 1960) {
            console.log('make sure this old thing works')
        }
        console.log('starting');
    }
}

var coupe = new Car('ford', 'blue');
```

