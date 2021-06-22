// 定义时不指定，使用时指定

function echo<T>(arg: T): T {
  return arg;
}

const res = echo(true);

function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]];
}

const res2 = swap(["string", 123]);


//约束泛型

function echoWithArr<T>(arg: T[]): T[]{
  console.log(arg.length);
  return arg;
}

const arr = echoWithArr([1,2,3]);

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log(arg.length);
  return arg;
}

const str3 = echoWithLength("string");
const arr2 = echoWithLength([1,2,3]);
const obj = echoWithLength({length: 10, width: 10});

//类和接口
class Queue<T>{
  private data = [];
  push(item: T){
    this.data.push(item);
  }
  pop():T{
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(123);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("string");
console.log(queue2.pop().length);


interface KeyPair<T, U>{
  key: T,
  value: U
}

let kp1: KeyPair<number, string> = {key: 1, value: "shan"};
let kp2: KeyPair<string, number> = {key: "shan", value: 123};

let arr3: number[] = [12,3];
let arr4: Array<number> = [1,2,3];

interface IPlus<T>{
  (a: T, b: T) : T;
}

function plus (a: number, b: number):number{
  return a + b;
}
const a: IPlus<number> = plus;

function plusWithStr (a: string, b: string): string {
  return a + b;
}
const b: IPlus<string> = plusWithStr;