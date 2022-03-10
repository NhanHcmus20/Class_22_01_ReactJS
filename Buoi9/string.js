let str2 = 'day "la" Hung';
let str3 = `day "la" ${str2} Khoa`;
let str4 = `Nostrud dolor sint culpa aliquip. 
  \nEsse non fugiat veniam duis exercitation eiusmod voluptate Lorem ut aliqua consectetur ad veniam do. 
  \nAdipisicing in elit officia ipsum reprehenderit. 
  \nElit velit deserunt ad duis ex elit fugiat. Sit dolor sint ad incididunt aute occaecat et aliquip amet laborum incididunt. \nCulpa labore pariatur consequat pariatur commodo Lorem aliquip do et tempor sunt. Ullamco ipsum laborum consequat cillum.`;
// console.log(str4);
let str = "day la vTung";
console.log("Viết hoa tất cả", str.toUpperCase());
console.log("viết thường tât cả", str.toLowerCase());
console.log(str.charAt(1));
console.log("indexOf", str.indexOf("v")); // search trả về vị trí nếu có, hoặc -1 nếu không có
console.log("slice", str.slice(2, 9)); // cắt chuỗi ( lấy cả số 2 và không lấy số 9)
console.log("slice3", str.slice(3));
console.log("subString", str.substring(2, 9));
console.log("replace", str.replace("a", "u"));
// console.log("replaceAll", str.replaceAll("a", "monkey"));
console.log("include", str.includes("0"));
console.log("số lượng kí tự", str.length);
console.log("kí tự cuối cùng", str[str.length - 1]);

// Chuẩn hoá string.
// input "trAn tUan anH"
// output "Tran Tuan Anh"
function chuanHoa(s) {
  s = s.replace(/\s/g, " "); // regular \s là khoảng trắng
  s = s.trim().toLowerCase();
  let arr = s.split(" ");
  let kq = "";
  for (i = 0; i < arr.length; i++) {
    kq += arr[i].slice(0, 1).toUpperCase() + arr[i].substring(1) + " ";
  }
  return kq;
}

// const toNomalName = (name) => {
//   let name1 = name.toLowerCase();
//   let name2 = name1.split(" ");
//   let name3 = name2.map((el) => {
//     return "test";
//   });
//   console.log(name3);
// };
const toNomalName = (name) => {
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (i == 0 || name.charAt(i - 1) == " ") {
      console.log(
        "1",
        name.slice(0, i),
        "2",
        name.charAt(i).toUpperCase(),
        "3",
        name.slice(i + 1)
      );
      name =
        name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
    }
  }
  return name;
};

toNomalName("trAn tUan anH");
// Bài tập về nhà từ 11 -> 17
