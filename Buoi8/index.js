console.log("Start Buỏi 8");
// for: vòng lặp (loop): for, while, do while
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// for (;;) {
//   console.log("hello");
// }
for (let index = 0; index <= 20; index += 2) {
  // biến khởi tạo, điều kiện, bước nhảy
  // index ++  => index = index + 1
  // index +=2 => index = index + 2
  if (index == 10) {
    // break thoát khỏi vòng lặp.
    // continue: thoát khỏi lần lặp
    continue;
  }
  console.log("hello" + index);
}

// index = 0; index có nhỏ hơn 9 không? => đúng =>  console.log("hello" + index); => index = index + 1
// index = 1; index có nhỏ hơn 9 không? => đúng =>  console.log("hello" + index); => index = index + 1
// ....
// index = 8; index có nhỏ hơn 9 không? => đúng =>  console.log("hello" + index); => index = index + 1
// index = 9; index có nhỏ hơn 9 không? => sai => thoát khỏi vòng lặp
// let n = 11;
// do {
//   console.log("tôi là Tung");
//   n++;
// } while (n < 10);
// kiếm tra xem n có phải số nguyên tố hay không?
// Số nguyên tố là số chia hết 1 và chính nó.
// 2, 3, 5, 7, 9, 11....
// input là n: 39,
// n < 2: không phải số nguyên tố
// tạo vòng lặp từ 2 -> n-1; kiểm tra xem n có chia hết cho số nào không

// let n = 13;
// let flag = true;
// if (n < 2) {
//   flag = false;
// } else {
//   for (let index = 2; index < n - 1; index++) {
//     console.log("index count", index);
//     if (n % index == 0) {
//       flag = false;
//       break;
//     }
//   }
// }
// if (flag) {
//   console.log("n là số nguyên tố");
// } else {
//   console.log("n không phải là số nguyên tố");
// }

// break và continue => thoát.
// - Nếu n < 2=> không phải số nguyên tố
// - Nếu n = 2 => là số nguyên tố
// - nếu n %2 == 0 => không phải số nguyên tố
// - vòng lặp 3 -> n -1  nhảy 2 bước
// - n % index === 0

// let n = 13;
// let flag = true;
// if (n < 2) {
//   flag = false;
// } else if (n == 2) {
//   flag = true;
// } else if (n % 2 == 0) {
//   flag = false;
// } else {
//   for (let i = 3; i < n - 1; i += 2) {
//     console.log("index count", i);
//     if (n % i == 0) {
//       flag = false;
//       break;
//     }
//   }
// }
// if (flag == true) {
//   console.log("n là số nguyên tố");
// } else {
//   console.log("n không phải số nguyên tố");
// }

// C3: n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết

// let n = 503;
// let flag = true;
// if (n < 2) {
//   flag = false;
// } else if (n == 2) {
//   flag = true;
// } else if (n % 2 == 0) {
//   flag = false;
// } else {
//   for (let i = 3; i < Math.sqrt(n); i += 2) {
//     console.log("index count", i);
//     if (n % i == 0) {
//       flag = false;
//       break;
//     }
//   }
// }
// if (flag == true) {
//   console.log("n là số nguyên tố");
// } else {
//   console.log("n không phải số nguyên tố");
// }

let sum = 0;
let n = 5;
for (let index = 1; index <= n; index += 2) {
  for (let i = 0; i < 10; i++) {
    console.log("lồng nhau", index, i);
  }
}

