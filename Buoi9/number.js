// convert, checknumber, math, random

// Convert number
let a = "123456";
let b = 123456;
// console.log(typeof b.toString(), b.toString());
// Kiểm tra nó có phải số không.
// console.log(Number("tung"));
// Kiểm tra số đó không phải là số. Number.isNaN()/ isNaN()
// console.log(Number.isNaN(undefined));
// các hàm toán học
let c = 3.5;
// console.log(Math.round(c));
// console.log(Math.random());
// đổ xúc sắc. trả về mặt ngẫu nhiên từ 6->10
function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 0.1 => 0.99
// 0.6 => 5.99
// 0 => 5
// 1 => 6
// console.log(getRandom(6, 1));

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
// 0.1 => 0.99
// 0.6 => 5.99
// 0 => 5

console.log(getRandomInt(6));
