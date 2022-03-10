// Array: mảng/list/danh sách
// Khai báo
let arr = [];
let arr2 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  "Trinh",
  true,
  1.23,
  {
    name: "Tung",
    sex: "male",
  },
  [12, 3, 5, ["tung", "hoa", "xoa"]],
];
// console.log(arr2);
// key của của array chính là index của nó
// truy xuất phần tử trong array => xử dụng index
// console.log(arr2[11]);
// console.log(arr2.length);
// Duyệt qua các phần tử của array. for, forEach
for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  //   console.log(element);
}

arr2.forEach((item, index) => {
  //   console.log("test foreach", item, index);
});
// function truyền vào function khác như 1 params => callback
// Kiểm tra 1 variable có phải là array hay không
// console.log(Array.isArray("test")); // prototype
// một số method của array:
let newArray = ["hong", "tung", "xoan", "truong", "xoan", "test"];
// let value = newArray.push("Trinh");
// console.log(newArray, value);
// thêm phần tử vào cuối cùng của mảng
// thay đổi mảng gốc
// trả về độ dài của mảng sau khi thêm
// function push(arr, value) {
//   arr[arr.length] = value;
//   return arr.length;
// }

// let value = push(newArray, "Trinh");
// console.log(value);
// let valuePop = newArray.pop();
// console.log(newArray, valuePop);

// push: thêm vào cuối, trả về độ dài mảng, mảng ban đầu thay đổi
// pop: xoá phần tử cuối, trả về độ phần tử đã xoá, mảng ban đầu thay đổi
// shift: xoá phần tử đầu tiên , trả về phần tử đã xoá, mảng ban đầu thay đổi
// unshift: thêm phần tử đầu tiên, trả về độ dài mảng, mảng ban đầu thay đổi

// newArray.splice(newArray.length, 0, "Duong", "Honh");
// newArray.reverse();
let valueSlice = newArray.slice(1);
// slice: cắt mảng, trả về mảng mới đã cắt, mảng ban đầu ko thay đổi
// console.log(newArray, valueSlice);

// concat => ghép mảng
let arr0 = [3, 1, 2];
let valueConcat = newArray.concat(arr0);
// console.log(newArray, valueConcat);

// let newArray2 = [...arr0, ...newArray];
// console.log(newArray2);
// chuyển tử mảng thành string theo dk nối
let string = newArray.join("test");
// chuyển từ string thành mảng
let newArray3 = string.split("t");
let valueIndexOf = newArray.indexOf("xoan");
let valueLastIndexOf = newArray.lastIndexOf("xoan");
// console.log(valueLastIndexOf);
//  sắp xếp array đơn giản.
arr0.sort((a, b) => b - a);
// console.log(arr0);

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 9
// 1,1,1,1,2,2,3,3,3,4,5,6,7,7,7,7,7,8,8
// - sắp xếp tăng dần
// -
let input = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function FindNumberInArray(arr) {
  let a = [];
  let b = [];
  let prev;
  arr.sort();
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  //   console.log({ a, b });
  let maxCount = Math.max(...b);
  let index = b.indexOf(maxCount);

  return { number: a[index], count: maxCount };
}
// console.log(FindNumberInArray(input));

// map, filter, reduce

// map => biến đổi tất cả phần tử của array theo 1 điều kiện nào đó trong return.
let learnMap = [1, 2, 3, 4, 5, 6];
let newLearnMap = learnMap.map((item, index, array) => {
  //   console.log({ item, index, array });
  return item * index;
});
// react js rất nhiều.
let dataShope = [
  { title: "thời trang nam", img: "link anh1" },
  { title: "điện thoại", img: "link anh1" },
  { title: "Thiết bị điện tử", img: "link anh1" },
  { title: "thời trang nam", img: "link anh1" },
  { title: "thời trang nam", img: "link anh1" },
];
// let newDataShoppe = dataShope.map((item) => {
//   return (
//     <div>
//       <img src={item.img} alt="" />
//       <p>{item.title}</p>
//     </div>
//   );
// });
// console.log(newLearnMap);

// filter : return ra điều kiện lọc. return ra điều kiện so sánh ( giống như trong if)
let newFilter = learnMap.filter((item, index, array) => {
  return item > 5;
});

// console.log(newFilter);

// reduce [1, 2, 3, 4, 5, 6];
let sum = learnMap.reduce((a, b) => {
  return a + b;
}, 0);
console.log({ sum });

// a = 0; b = 1 => a + b = 1
// a = 1; b = 2  => a + b = 3;
// a= 3; b = 3 =>...
