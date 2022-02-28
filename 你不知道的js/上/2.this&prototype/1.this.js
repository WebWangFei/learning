function foo(num) {
  console.log("--foo:", num, this);
  this.count++;
}
foo.count = 0;
for (let index = 0; index < 10; index++) {
  if (index > 5) {
    //   全局调用，内部的this指向全局，NaN
    foo(index);
  }
}
console.log("--foo.count--", foo.count);
