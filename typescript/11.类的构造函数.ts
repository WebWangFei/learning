class Animal1 {
  constructor(public name: string) {
    this.name = name;
    console.log("--constructor--", this.name);
  }
}
const animal1 = new Animal1("dog");
console.log(animal1);
