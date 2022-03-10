var readlineSync = require("readline-sync");
var shortid = require("shortid");
var fs = require("fs");

var sexGlobal = ["male", "female"];
var showMenu = function () {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
};

showMenu();
var choise = readlineSync.question("Your choise? ");
let studentFile = fs.readFileSync("./data.txt", "utf8");
let student = JSON.parse(studentFile);

const createStudent = () => {
  let name = readlineSync.question("name? ");
  let age = readlineSync.question("age? ");
  let sex = readlineSync.keyInSelect(sexGlobal, "sex? male/female");
  student.push({
    id: shortid.generate(),
    name: name,
    age: parseInt(age),
    sex: sexGlobal[sex],
  });

  saveFile();
  choise = 0;
};
const saveFile = () => {
  fs.writeFileSync(
    "./data.txt",
    JSON.stringify(student.length > 0 ? student : []),
    "utf8"
  );
};
const deleteStudent = () => {
  // delete name
  let nameDel = readlineSync.question("What name do you want delete? ");
  let indexDel = student.findIndex((item) => {
    return item.name.toLowerCase() === nameDel.toLowerCase();
  });
  if (indexDel >= 0) {
    student.splice(indexDel, 1);
    saveFile();
  }
  choise = 0;
};
const editStudent = () => {
  let nameEdit = readlineSync.question("What name do you want edit? ");
  let indexEdit = student.findIndex((item) => {
    return item.name.toLowerCase() === nameEdit.toLowerCase();
  });
  if (indexEdit >= 0) {
    let oldName = student[indexEdit].name;
    let oldid = student[indexEdit].id;
    let newAge = parseInt(readlineSync.question("age? "));
    let sex = readlineSync.keyInSelect(sexGlobal, "sex? male/female");
    let newStudent = {
      id: oldid,
      name: oldName,
      age: newAge,
      sex: sexGlobal[sex],
    };
    student.splice(indexEdit, 1, newStudent);
    saveFile();
    choise = 0;
  }
};

const filterStudent = () => {
  let nameFilter = readlineSync
    .question("What name do you want find?")
    .toLowerCase();
  let listFilter = student.filter((item) => {
    return item.name.toLowerCase() === nameFilter;
  });
  console.log(listFilter);
  choise = 0;
};
const sortByName = () => {
  // sort không dấu
  student.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  //   sort có dấu ( test cho tiếng việt )
  //   student.sort((a, b) => {
  //     return a.name.localeCompare(b.name);
  //   });
  console.log(student);
  choise = 0;
};
const sortByAge = () => {
  // sort không dấu
  student.sort((a, b) => a.age - b.age);
  console.log(student);
  choise = 0;
};

const deleAllStudent = () => {
  student = [];
  saveFile();
  choise = 0;
};

const sumAgeStudent = () => {
  let sum = student.reduce((a, b) => {
    return (a += b.age);
  }, 0);
  console.log("Sum student", sum);
  choise = 0;
};

while (true) {
  switch (parseInt(choise)) {
    case 0:
      showMenu();
      choise = readlineSync.question("Your choise? ");
      break;
    case 1:
      console.log(student);
      choise = 0;
      break;
    case 2:
      createStudent();
      break;
    case 3:
      deleteStudent();
      break;
    case 4:
      editStudent();
      break;
    case 5:
      filterStudent();
      break;
    case 6:
      sortByName();
      break;
    case 7:
      sortByAge();
      break;
    case 8:
      deleAllStudent();
      break;
    case 9:
      sumAgeStudent();
      break;
    case 10:
      process.exit();
    default:
      console.log("Bạn phải chọn 1 số trong menu");
      choise = 0;
      break;
  }
}
