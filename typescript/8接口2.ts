interface Student {
  name: string;
  age: number;
  score: number;
  //   非必选参数
  height?: number;
  //   传入任意值
  [propname: string]: any;
  //   函数
  say(): string;
}
const student1 = {
  name: "小红",
  age: 12,
  score: 89,
  height: 130,
  like: "apple",
  say() {
    return "good good study, day day up!";
  },
};
function getStudentInfo1(student: Teacher) {
  let info = `姓名:${student.name},年龄:${student.age},分数;${
    student.score
  }，身高:${student.height}，喜爱:${
    student.like
  },say:${student.say()},老师say:${student.teach()}`;
  return info;
}
// console.log("🚀getStudentInfo ~ getStudentInfo", getStudentInfo1(student1));

// 接口和class的约束

// 1.类继承i接口
// 必须写上接口的属性和值
// class goodStudent1 implements Student {
//   name = "小百";
//   age: 23;
//   score: 100;
//   say() {
//     return "implements student ";
//   }
// }

// 2.接口继承接口
interface Teacher extends Student {
  teach(): string;
}

const teacher11 = {
  name: "王老师",
  age: 42,
  score: 99,
  height: 170,
  like: "women",
  say() {
    return "this is teacher say!";
  },
  teach() {
    return "i`am  teacher english";
  },
};
console.log(111, getStudentInfo1(teacher11));
