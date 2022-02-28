interface Student1 {
  name: string;
  age: number;
  score: number;
  height?: number;
}
const student45 = {
  name: "小明",
  age: 14,
  score: 88,
  height: 159,
};
const getStudentInfo12 = (student: Student1) => {
  console.log(
    student.name + "的年龄:" + student.age,
    ",分数:" + student.score + "身高为:" + student.height
  );
};
getStudentInfo12(student45);
