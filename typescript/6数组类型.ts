// 基本类型的数组定义
const arr1: string[] = ["1", "2"];
const arr2: number[] = [1, 2, 3];
const arr3: undefined[] = [undefined, undefined];
const arr4: (number | string)[] = [1, "2"];

// 数组对象，

// 1.通过type关键字定义
type Lady = { name: string; age: number };
const ladyArr: Lady[] = [{ name: "draven", age: 2 }];

// 2.通过类来进行定义
class Lady1 {
  name: string;
  age: number;
}
const ladyArr1: Lady1[] = [
  {
    name: "draven",
    age: 12,
  },
];
