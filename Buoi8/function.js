// Hàm function (method)
// Khai báo function.

function name() {
  console.log("hello");
}
name();

function functionWithParam(params) {
  console.log("giá trị của params là", params);
}

function sum(a, b) {
  console.log("Tổng của 2 số là ", a + b);
}

function sum3rd(a, b, c) {
  return a + b + c; // trong function return tương đương với break
  console.log();
  let d = 30;
  console.log(d + 10);
}
functionWithParam(20);
sum(80, 8);

let result = sum3rd(9, 10, 1);
console.log(result);

function checkPrime(n) {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (let i = 3; i < Math.sqrt(n); i += 2) {
      console.log("index count", i);
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
// btvn gom những bài tập đã làm 1 -> 5 về function
