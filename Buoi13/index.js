// Xử lý bất đồng bộ trong Js / event loop
// đồng bộ sync và bất đồng bộ async.
// console.log("start");
// setTimeout(() => {
//   console.log("ben trong setimout");
// }, 7000);
// console.log("end");

// Xử lý bất đồng bộ. => biến bất đồng bộ về đồng bộ.

// console.log("user ấn click để down load dữ liệu từ server");
// setTimeout(() => {
//   console.log("downloading");
// }, 7000);
// console.log("hiển thị dữ liệu download ");

// Cách xử lý bất đồng bộ: callback, promise, async-await

// callback: function truyền vào function khác đóng như 1 params

// function hello(cb) {
//   cb("du lieu truyen vao cb");
// }

// function logHello(data) {
//   console.log("data", data);
// }
// hello(logHello);

// pha cafe
// function makingCoffe(cb) {
//   console.log("start ");
//   console.log("making...");
//   setTimeout(() => {
//     cb("done");
//   }, 5000);
// }
// makingCoffe((data) => {
//   console.log("data", data);
// });

// tính diện tích hình thang. (a + b ) * h /2
// phép tính cộng: mất 3s
// phép tinh nhân: mất 2s
// phép tính chia: mất 4s

function cong(a, b, cb) {
  console.log("bat dau cong");
  setTimeout(() => {
    let tong = a + b;
    console.log("kết quả của phép công", tong);
    cb(tong);
  }, 3000);
}
function nhan(a, b, cb) {
  console.log("bat dau nhân");
  setTimeout(() => {
    let tich = a * b;
    console.log("kết quả của phép nhân", tich);
    cb(tich);
  }, 2000);
}
function chia(a, b, cb) {
  console.log("bat dau chia");
  setTimeout(() => {
    let chia = a / b;
    console.log("kết quả của phép chia", chia);
    cb(chia);
  }, 4000);
}

function ketqua(a, b, h) {
  cong(a, b, (dataTong) => {
    nhan(dataTong, h, (dataNhan) => {
      chia(dataNhan, 2, (final) => {
        console.log("final result", final);
      });
    });
  });
}

ketqua(10, 5, 7);

// (((a +b) /m *n )+ 8 ) *k
// phép tính cộng: mất 3s
// phép tinh nhân: mất 2s
// phép tính chia: mất 4s
