//函数声明
function add(x: number, y: number, z: number = 10): number{
  if(typeof z === "number"){
    return x + y + z;
  }else{
    return x + y;
  }
}

let result = add(2,3,5)

const add1 = function(x: number, y: number, z: number = 10): number{
  if(typeof z === "number"){
    return x + y + z;
  }else{
    return x + y;
  }
}

const add2 = add1

const str1: string = "123";
const str2 = str1;