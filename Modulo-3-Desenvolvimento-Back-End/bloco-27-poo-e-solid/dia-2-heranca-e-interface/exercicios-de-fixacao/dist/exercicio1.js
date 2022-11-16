"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!!');
    }
}
class Subclass extends Superclass {
}
const myFunc = (object) => {
    object.sayHello();
};
const sup = new Superclass();
const sub = new Subclass();
myFunc(sup);
myFunc(sub);
