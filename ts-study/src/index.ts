function greeter(person: string) {
  return "Hello, " + person
}

const user = "shandongliang"

interface User {
  name: string
  age?: number
  readonly isMale: boolean
  say: (word: string) => string
}

const getUserName = (user: User) => user.isMale 

abstract class Animal {
  abstract makeSound(): void;
  move(): void{
    console.log("move the earch...");
  }
}

class Cat extends Animal {
  makeSound(){
    console.log("miao miao");
  }
}

const cat = new Cat();

const add: (a: number, b: number) => number = (a: number, b?: number) => a + (b ? b : 0);