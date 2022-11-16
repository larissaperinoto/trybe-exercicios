"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const soma = myParam + this.myNumber;
        console.log(`O total é ${soma}`);
        return `O total é ${soma}`;
    }
}
const obj = new MyClass(4);
obj.myFunc(2);
