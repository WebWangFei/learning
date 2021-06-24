function changeColor(color) {
  /**
   * 1.函数的作用域链包含两个部分
   * (1).函数本身的变量对象(定义arguments对象的一个)
   * (2).全局上下文变量对象
   * 之所以能够访问color属性，是因为可以在这个函数的作用域链中找到
   */
  if (color === "red") {
    color = "blue";
  } else {
    color = "red";
  }
}

var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // 这里可以访问color、anotherColor和tempColor
  }
  // 这里可以访问color和anotherColor，但访问不到tempColor
  swapColors();
}
// 这里只能访问color changeColor();
