// function arguments && return type
// 函数的返回值加上类型注解
function addNumber(one: number, two: number): number {
  return one + two;
}
const addNumberDemo = addNumber(1, 2);
console.log("🚀 ~ file: demo5.ts ~ line 7 ~ addNumberDemo", addNumberDemo);

// 函数没有返回值时，void声明
function helloWorld(): void {
  console.log("test void function");
}
helloWorld();

// 捕获错误，永远执行不完的
function catchError(): never {
  throw new Error();
  console.log(1111);
}
// catchError();

// 参数为对象时
// 两个属性值
function addNumberDemo1({
  num1,
  num2,
}: {
  num1: number;
  num2: number;
}): number {
  return num1 + num2;
}
console.log(
  "🚀 ~ file: demo5.ts ~ line 24 ~ addNumberDemo1",
  addNumberDemo1({ num1: 2, num2: 6 })
);

function addNumber2({ one }: { one: number }): number {
  return one;
}
console.log(
  "🚀 ~ file: demo5.ts ~ line 39 ~ addNumber2 ~ addNumber2",
  addNumber2({ one: 6 })
);
