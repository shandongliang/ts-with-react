// type aliases 类型别名
type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}
const sum1: PlusType = sum;

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName (n: NameOrResolver): string {
  if(typeof n === "string"){
    return n;
  } else {
    n();
  }
}

// type assertion 类型断言
function getLength(input: string | number): number {
  // const str = input as String;
  // if(str.length){
  //   return str.length;
  // } else {
  //   const num = input as Number;
  //   return num.toString().length;
  // }
  if((<string>input).length){
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}