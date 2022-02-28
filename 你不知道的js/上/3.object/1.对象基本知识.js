// 1.对象的声明  字面量声明/构造函数声明
// 2.对象的值的读取，其实是触发get操作，属性的存储方式为调用toString()来进行保存
// 3.for in 取的是数据结构的属性,数组为下标，对象为属性名
// for of, 取的是数据结构的属性值且内部拥有iterator迭代器对象，数组为下标对应的值，对象因为某种原因内部没有iterator迭代对象所以无法通过for of来迭代

let obj = {
  name: "draven",
  age: 29,
};
let objAttr = {
  name: "miya",
};
//toString(objAttr)->[object Object]
obj[objAttr] = "aa";
console.log("--objAttr--", obj[objAttr]);
let obj2 = new Object({ name: "miya" });
// console.log("-log- ~ c111", Object.getOwnPropertyDescriptor(obj, "name"));
let s = ["a", "b"];
//for of只能迭代有iterable的数据类型
// for in 迭代数据的属性，对象为属性，数组为下标值
for (const key of Object.entries(obj)) {
  //   console.log(`${key}`);
}

var it = s[Symbol.iterator]();
// console.log("-log- ~ it", it); //返回的迭代器对象的函数

// console.log("--has-done--", it.next());
// console.log("--has-done--", it.next());
// console.log("--has-done--", it.next());

// 对象没有迭代器对象，手动实现一个

Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var _this = this;
    var idx = 0;
    var ks = Object.keys(_this);
    return {
      next: function () {
        return {
          value: _this[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});
var objIterator = obj[Symbol.iterator]();
console.log("--obj-iterator--", objIterator.next());
console.log("--obj-iterator--", objIterator.next());
console.log("--obj-iterator--", objIterator.next());
for (const iterator of Object.entries(obj)) {
  console.log("-log- ~ iterator", iterator);
}
