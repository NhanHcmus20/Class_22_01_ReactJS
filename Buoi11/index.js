// const shortid = require("shortid");
var readlineSync = require("readline-sync");
// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");
// Object
let people = {
  name: "Tung",
  age: 27,
  data: {
    salary: "3000$",
    isTeacher: false,
    otherData: {
      clothes: "adfafdasdf",
    },
  },
};

// let name = people.name;
let checkTeacher = people?.otherData?.isTeacher;

// people.color = "blue";
// people.otherData.newData = 25;
// check object có property hay không?
// console.log(people.hasOwnProperty("colors"));
// let newAge = "age";
// console.log(people[newAge]);
// let arrKey = Object.keys(people);
// let arrValue = Object.values(people);
// console.log(arrValue);

if (people) {
  if (people.otherData) {
    if (people.otherData.age) {
      let ageOfOtherData = people.otherData.age;
      //   console.log(ageOfOtherData + 10);
    }
  } else {
    // console.log("people không có other data");
  }
}
// console.log(people?.otherData?.age);
// validate object

// Clone object
let people2 = { ...people }; //shallow copy => copy bề nổi. hay còn gọi là copy 1 level
// console.log(people2);
people2.name = "Khoa";
people2.data.salary = "5000$";
// console.log(people2);
// console.log(people);

// deep copy
let people3 = JSON.parse(JSON.stringify(people));
people3.data.otherData.clothes = "test";
// console.log("people3", people3, people);

const a = {
  name: "Tung",
  color: "blue",
};

a.name = "Khoa";
// console.log(a);

// vận dụng vào bài toán thực tế.
const data = [
  { name: "Hương", age: 27, isSchool: false },
  { name: "Hà", age: 20, isSchool: true },
  { name: "Đức", age: 18, isSchool: false },
  { name: "Thoa", age: 15, isSchool: false },
];
// Tìm tất cả những người có tuổi lớn hơn 18
// Tìm tất cả những người còn đang đi học
// Tính độ tuổi trung bình của tât cả mọi người.
const peopleOver18 = data.filter((item, index) => item.age > 18);
const peopleIsSchool = data.filter((item) => {
  return item.isSchool;
});
console.log(peopleIsSchool);
let sumAgeAvg = data.reduce((accumulator, item) => {
  return (accumulator = accumulator + item.age);
});
console.log(sumAgeAvg / data.length);
// let arrSum = [1, 5, 6, 0, 18, 60];
// let newSum = arrSum.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 90);
// console.log(newSum);
console.log("test", NaN + 29);
// sort: => chuyển về string rồi mới sắp xếp
let arrSort = [1, 2, 8, 4, 5, 10, 6];
arrSort.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
// console.log({ arrSort });
// sắp xếp tên theo độ tuổi tăng dần
// sắp xếp theo tên AB
data.sort((sv1, sv2) => {
  return sv1.name.localeCompare(sv2.name);
});
console.log(data);
console.log("shortid", shortid.generate());
// npm và yarn.
// cách cài đặt.
