// Promise
// const promisel = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve("thanh cong roi");
//     reject("that bai roi");
//   }, 300);
// });

// promisel
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log("that bai roi");
//   });

//   Tính diện tích hình thang. (a + b) *h /2
const tong = (a, b) => {
  console.log("start Cong");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Bạn phải nhập số");
      }
      return resolve(a + b);
    }, 1000);
  });
};

const nhan = (a, b) => {
  console.log("Start nhan");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Bạn phải nhập số");
      }
      return resolve(a * b);
    }, 300);
  });
};

const chia = (a, b) => {
  console.log("Start chia");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Bạn phải nhập số");
      } else if (b == 0) {
        return reject(new Error("Không thể chia cho 0"));
      } else {
        return resolve(a / b);
      }
    }, 400);
  });
};

// const kq = (a, b, h) => {
//   return tong(a, b)
//     .then((resolve) => nhan(resolve, h))
//     .then((resolveNhan) => chia(resolveNhan, 3))
//     .then((result) => tong(result, 9))
//     .catch((error) => {
//       console.log(error);
//     });
// };

// kq(2, "Tung", 4)
//   .then((result) => console.log("data cuoi", result))
//   .finally((data) => {
//     console.log("data finale", data);
//   });

//   async await
// - chỉ await được function return ra 1 promise
// - async await không handle được lỗi nên phải sử dụng try catch để handle lỗi

function thuchienphepChia(params) {
  return 5;
}

const ketqua = async (a, b, h) => {
  try {
    let ketquaTong = await tong(a, b);
    let ketquaNhan = await nhan(ketquaTong, h);
    let ketquaChia = await chia(ketquaNhan, 2);
    console.log(ketquaChia);
  } catch (error) {
    console.log("err", error);
  }
};

ketqua("test", 2, 5);
// promise.all và promise.race