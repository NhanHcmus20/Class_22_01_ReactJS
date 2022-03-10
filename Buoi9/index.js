// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

let str = "123676321";
// console.log(str[2] vs str[str.length - 1 -2]);

function isDrome(number) {
  let str = number + "";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

// console.log(isDrome(1242343));
// Khai báo function
// function sayHello() {
//   console.log("hello");
// }

const sayHello = function (param1 = 2, param2 = 8) {
  // set default param
  return param1 + param2;
};

// console.log(sayHello());
// tính tổng tất cả các giác trị truyền vào function rest
const sum = function (...argument) {
  let tong = 0;
  for (let index = 0; index < argument.length; index++) {
    tong += argument[index];
  }
  return tong;
};

// console.log(sum(4, 5, 6, 7, 9, 0));

// arrow function => cú pháp ngắn gọn hơn

const sayGoodBye = (x) => x * 2;
// console.log(sayGoodBye(50) + 10);

var num5 = 20;
var num6 = 3;
var name = "Khoa";
const scopeFunction = function () {
  return num1 * num2;
};
function getScore() {
  var num1 = 50;
  var num2 = 50;
  function add() {
    var txt1 = "Tung";
    return txt1;
  }
  function test() {
    return txt1;
  }
  console.log("data tesst", test());
  return add();
}

console.log(getScore());


