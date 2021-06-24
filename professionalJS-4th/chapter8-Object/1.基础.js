/**
 * 1.对象的一些api
 *
 *
 */
// -----1------
// Object.is 判断两个值是否完全相等
console.log(1, Object.is(NaN, NaN)); // true
console.log(2, Object.is(+0, 0)); // true
console.log(3, Object.is(-0, 0)); // true
console.log(4, Object.is(-0, +0)); // true
