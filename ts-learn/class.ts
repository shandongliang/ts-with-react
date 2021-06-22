class Animal {
  name: string;
  static categoies: string[] = ["mammal", "bird"];
  static isAnimal(a){
    return a instanceof Animal
  }
  constructor(name: string){
    this.name = name
  }
  run(){
    return `${this.name} is running!`;
  }
}

// pubilc
// private 类私有，只能类内部访问
// protected 类和子类可以访问
// readonly 可以访问，但是不能更改

const snake = new Animal("Lily");
console.log(snake.name);
// snake.name = "lucy";
console.log(snake.name);

class Dog extends Animal {
  bark(){
    return `${this.name}is barking`
  }
}

const xiaobao = new Dog("xiaobao");

class Cat extends Animal {
  constructor(name){
    super(name);
    console.log(this.name);
  };
  run(){
    return "Meow, " + super.run();
  }
}
const eryue = new Cat("eryue")
console.log(eryue.run())



interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio(){

  }
}

class Cellphone implements Radio, Battery {
  switchRadio(){

  };
  checkBatteryStatus(){

  }

}