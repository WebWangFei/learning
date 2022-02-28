class Animal {
  //   private name: string;
  protected name: string;
  public sayName() {
    return `this animal call ${this.name}`;
  }
}
class Pig extends Animal {
  public sayName1() {
    return "name:" + this.name;
  }
}
const animal = new Animal();
// 外部无法防伪private属性
// animal.name = "pig";
console.log(animal.sayName());

const pig = new Pig();

console.log(pig.sayName1());
