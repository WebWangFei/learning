/**
 * Promise
 * promise有三种状态
 *
 *
 */

// let p1 = new Promise((resolve, reject) => {
//   console.log("---p1--excutor");
//   setTimeout(reject, 1000);
// }).catch((error) => console.log("--error--"));
// // let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 1100, "---p1---" + JSON.stringify(p1));
// // setTimeout(console.log, 0, p2);
// let p1 = new Promise((resolve, reject) => {
//   console.log("p1 executor");
//   setTimeout(resolve, 1000, "first");
// });
// p1.then((data) => {
//   console.log("-111-", data);
//   return new Promise((resolve, reject) => {
//     console.log("p2 executor");
//     setTimeout(resolve, 1000, "second");
//   });
// })
//   .then((data) => {
//     console.log("-22-", data);
//     return new Promise((resolve, reject) => {
//       console.log("p3 executor");
//       setTimeout(resolve, 1000, "third");
//     });
//   })
//   .then((data) => {
//     console.log("-333-", data);
//     return new Promise((resolve, reject) => {
//       console.log("p4 executor");
//       setTimeout(resolve, 1000, "forth");
//     });
//   })
//   .then((data) => {
//     console.log("-444-", data);
//   });

function addTwo(x) {
  return x + 2;
}
function addThree(x) {
  return x + 3;
}
function addFive(x) {
  return x + 5;
}
function addTen(x) {
  return [addTwo, addThree, addFive].reduce(
    (promise, fn) => promise.then(fn),
    Promise.resolve(x)
  );
}
addTen(8).then(console.log); // 18

async function foo() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}
async function bar() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);
