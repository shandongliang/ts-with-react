let isDone: boolean = true;

let age: number = 20;
let binNumber: number = 0b1111;

let firstName: string = "shan";
let message: string = `hello, ${firstName}`;

let u: undefined = undefined;
let n: null = null;

let num: number = undefined;
let str: string = null;

//any
let notSure: any = 1;
notSure = "shan";
notSure = true;
//尽量避免使用any

let numOrStr: number | string = 234;//联合类型
numOrStr = "dongliang";


//数组
let arrOfNumbers: number[] = [1,2,3,4];

//类数组
function test(){
  console.log(arguments);
}

//元组
let user: [number, string] = [10, 'shan'];

//interface 接口

