interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const soma = myParam + this.myNumber;
    console.log(`O total é ${soma}`);
    return `O total é ${soma}`;
  }
}

const obj = new MyClass(4);

obj.myFunc(2);