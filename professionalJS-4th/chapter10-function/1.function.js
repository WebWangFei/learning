/**
 *  函数
 * 1.定义函数方式三种
 *  声明式，表达式，箭头函数
 *
 * 1.1箭头函数
 * 与函数表达式差不多，但是有不能使用的场景，如：arguments，super,new target(因为自身没有this导致)
 *
 * 1.2函数名
 * 函数名就是指向函数的指针，
 * 函数对象会暴露一个name属性
 * 通过Function生成的函数，name为anonymouns(匿名),
 *
 * 1.3理解参数
 * 参数其实是一个类数组，所以多传或者少传都没有问题，通过argumenrs访问
 *
 * 1.4没有重载
 * js中的函数没有签名，所以也不存在重载，当重复定义函数时，第一个函数会被第二个覆盖
 *
 * 1.5参数默认值
 *  es6支持参数默认值
 * arguments 对象的值不反映参数的默认值，只反映传给函数的参数
 * 参数的默认值类似于使用let定义，存在暂时性死区，前面的参数不能引用后面定义的参数
 *
 * 1.6参数扩展与收集
 * 扩展运算符
 *
 * 1.7函数内部
 *
 *  有arguments和this两个对象
 * (1)this在非箭头函数内部时，指向的是当前函数被调用时的上下文对象
 * (2)new target
 *  检测函数是否通过new进行实例化，没有返回undefined，有的话则引用被调用的对象
 *
 *  1.8属性和方法
 *  length,prototype
 *  (1)length:函数参数的长度
 *  (2)prototype:保存引用类型所用实例方法，如toString,ValueOf
 *  (3)apply,call,设置调用函数时函数体内this对象的值
 *  apply(this,argunment),apply:类数组，
 *  call(this,arg1,arg2):参数列表
 *  调用apply/call时，可以通过传入的对象，改变当前调用的上下文
 *  (4)bind(object)
 *  bind会创建一个新的函数实例，其this的值会被绑定到传给bind()的对象
 *
 *  1.9闭包
 *  引用了另一个函数作用域中变量的函数
 *  (1)this对象
 *  闭包中，如果内部函数不是箭头函数，则会在运行时绑定到执行函数的上下文，
 *  如果是全局调用，非严格模式下指向window，严格模式下指向undefined
 *  如果作为某个对象的方法调用，则指向这个对象
 *  匿名函数在这种情况下不会绑定到某个对象，这就意味着 this 会指向 window
 *
 */

//----1.2----
function foo() {}
console.log(foo.bind(null).name); //bound foo

//----1.5----
function makeKing(name = "Henry") {
  return `King ${name} VIII`;
}

function makeKing1(name = "Henry") {
  // 修改参数值，但是不会影响arguments对象的值
  name = "Louis";
  return `King ${arguments[0]}`;
}
console.log(111, makeKing1()); // King undefained
console.log(22, makeKing1("draven")); // King draven

//----1.6----
let values = [1, 2, 3, 4];
function countArguments() {
  console.log(arguments.length);
}
countArguments(-1, ...values);
countArguments(...values, 5);
countArguments(-1, ...values, 5);
countArguments(...values, ...[5, 6, 7]);

//----1.8----
var window = globalThis;
window.color = "red";
let o = {
  color: "blue",
};
function sayColor() {
  console.log(this.color);
}
sayColor();
// sayColor属于window，所以this指向全局的window
sayColor.call(this); // red
// this指向window，所以this指向全局的window
sayColor.call(window); // red
// this指向o对象，所以调用方法取o.color
sayColor.call(o); // blue

//----1.8-(4)---
window.color1 = "red";
var o1 = {
  color1: "blue",
};
function sayColor1() {
  console.log(this.color1);
}
// this指向传递给bind重的对象o1，虽然objectSayColor函数是在全局调用，this仍然指向o1
let objectSayColor = sayColor1.bind(o1);
objectSayColor(); // blue

//----1.9----
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    //   引用了createComparisonFunction中的propertyName变量
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

//----1.9----(1)--匿名函数不会绑定到运行时的对象--
window.identity = "The Window";
let object = {
  identity: "My Object",
  getIdentityFunc() {
    return function () {
      return this.identity;
    };
  },
};
// 此时this指向window，匿名函数无法访问外层的this和arguments，除非把this保存到闭包
console.log(object.getIdentityFunc()());
let object1 = {
  identity: "My Object",
  getIdentityFunc() {
    let that = this;
    console.log("---that---", that);
    return function () {
      return that.identity;
    };
  },
};
console.log(object1.getIdentityFunc()());
