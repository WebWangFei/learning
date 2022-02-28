// 自动判断变量类型为number
let countInterface = 12;

function getTotal(one: number, two: number) {
  return one + two;
}
const totoalNum = getTotal(2, 4);
console.log('🚀 ~ file: demo4.ts ~ line 8 ~ totoalNum', totoalNum)

// 自动推断出对象属性值的类型
const person6 = {
  name:'draven',
  age:12
}