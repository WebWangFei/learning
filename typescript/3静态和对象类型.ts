//基础静态类型
const name1: string = "draven";

// 对象类型
// 1.Object
const person1: { name: string; age: number } = {
  name: "draven",
  age: 27,
};
console.log(111, person1.name);

// 2 .Array
const person2: String[] = ["draven", "miya"];

// 3. class
class Person {}
const person3: Person = new Person();

// 4. Function
const person4: () => string = () => "draven";
console.log("person4", person4());
