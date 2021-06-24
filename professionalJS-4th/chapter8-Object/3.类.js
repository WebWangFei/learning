/**
 *类：为es6引入的语法糖，本质的继承还是基于原型链
 *
 *
 */

/**
 * 1定义
 *  (1)声明，(2)表达式
 * 类的表达式与函数类似在被求值前不能引用
 * 函数可以进行声明提升，但是类不可以
 *
 * 2.作用域
 * 函数受函数作用域限制，类受块作用域限制
 *
 * 3.实例化-new的过程
 * (1)现在内存中创建一个新的对象
 * (2)将构造函数的prototype属性赋值给新对象的__proto__指针
 * (3)将构造函数的this赋值为新对象(指向新对象)
 * (4)执行构造函数里面的代码(给新对象添加属性)
 * (5)若构造函数有返回非空对象，则返回，否则返回新创建的对象
 *
 * 4.类构造函数与构造函数区别
 * (1)类构造函数调用必须要有new关键字，而构造函数不需要，构造函数没有使用new，则this指向全局(window)
 * (2)类构造函数实例化之后，该实例仍然需要通过new调用
 *
 * 5.类其实是一种特殊函数，typeof返回function
 *
 * 6.类是 JavaScript 的一等公民,与立即调用函数表达式相似，类也可以立即实例化:
 *
 * 7.实例，原型，类成员
 * (1)为了在实例间共享方法，类定义语法把在类块中定义的方法作为原型方法
 */
class A {} //1.声明
const B = class {}; //2.表达式

//----1----
// console.log("---FunctionExpression---", FunctionExpression); //undefined
// var FunctionExpression = function () {};
// console.log("---🚀-FunctionExpression---🚀-", FunctionExpression); //[Function: FunctionExpression]

// console.log("---FunctionExpression1---", FunctionExpression1); //[Function: FunctionExpression1]
// function FunctionExpression1() {}
// console.log("--🚀-FunctionExpression1---", FunctionExpression1); //[Function: FunctionExpression1]

// console.log("---ClassExpression---", ClassExpression); //undefined
// var ClassExpression = class {};
// console.log("--🚀-ClassExpression---", ClassExpression); //[class ClassExpression]

// // console.log("---ClassDeclaration---", ClassDeclaration); //Cannot access 'ClassDeclaration' before initialization
// class ClassDeclaration {}
// console.log("--🚀-- ~ ClassDeclaration", ClassDeclaration);

//----2----
// {
//   function FunctionDeclaration2() {}
//   class ClassDeclaration1 {}
// }
// console.log(FunctionDeclaration2); // FunctionDeclaration2() {}
// console.log(ClassDeclaration1); // ReferenceError: ClassDeclaration is not defined

//----3----
class Animal {}
class Person {
  constructor() {
    console.log("--person--");
  }
}
class Vagetable {
  constructor() {
    this.color = "orange";
  }
}
// 若没有参数，则类的括号可以省略
// let a = new Animal
let a = new Animal();
let p = new Person();
let v = new Vagetable();    
console.log("---v---", v.color);

//----4----
class Person1 {}
// 使用类创建一个新实例
let p11 = new Person1();
// p11.constructor();
// TypeError: Class constructor Person cannot be invoked without 'new'
// 使用对类构造函数的引用创建一个新实例
let p2 = new p11.constructor();

//----6----
let p3 = new (class Foo {
  constructor(x) {
    console.log("---Foo---", x);
  }
})("bar");
// bar
console.log(p3); // Foo {}

// ----7----
class Person4 {
  constructor() {
    // 存在于不同实例对象上的方法
    this.locate = () => console.log("instance");
  }
  // 存在于原型上的方法
  locate() {
    console.log("---prototype--");
  }
}
let p4 = new Person4();
p4.locate();
console.log("---Person4---", Person4.prototype.locate);
