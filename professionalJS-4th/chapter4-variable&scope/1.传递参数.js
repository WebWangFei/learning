// 原始值传递给函数参数，与其赋值一样，不会相互影响
function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count, result); //20，30

// 引用值传递给函数参数

function setName(obj) {
  // 参数obj与person指向同一个内存地址，
  obj.name = "draven";

  // 此时obj与person不再指向同一个对象，此时指向本地对象的指针
  obj = new Object();
  obj.name = "test";
  // 在函数执行结束后，将被销毁
}
let person = new Object();
setName(person);
console.log(222, person);
