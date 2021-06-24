// var声明的变量会自动添加到最近的上下文
// 函数中var声明的变量会提升到函数作用域最前端

// 相当于
// name='draven
// var name
// 此处为window
var name = "draven";
function setName() {
  // name='draven
  // var name
  var name = "draven1";
}

// let/const 声明的变量有块级作用域，由最近的一对花括号{}来界定，if,while,function快都有

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

// const 

// 1.需要初始化
// 2.声明的变量之后不能再被复制其他的引用值

