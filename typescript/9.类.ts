class Student123 {
  content = "my name is draven";
  sayName() {
    return this.content;
  }
}
const student2 = new Student123();
console.log(student2.sayName());

// 继承
class Xiaoxuesheng extends Student123 {
  sayName() {
    return super.sayName() + ",but i am also a xiaoxuesheng";
  }
  like() {
    return "i like play 王者荣耀";
  }
}
const xiaoxuesheng = new Xiaoxuesheng();
console.log("xiaoxuesheng", xiaoxuesheng.sayName(), xiaoxuesheng.like());
