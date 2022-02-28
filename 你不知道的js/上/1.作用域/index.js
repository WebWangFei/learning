for (var index = 0; index < 5; index++) {
  //1.自执行函数通过闭包解决
    (function (j) {
      setTimeout(() => {
        console.log("===number1===", j);
      }, j * 1000);
    })(index);
}
for (let j = 0; j < 5; j++) {
    // 2.let作用域
    setTimeout(() => {
      console.log("===number2===", j);
    }, j * 1000);
}
