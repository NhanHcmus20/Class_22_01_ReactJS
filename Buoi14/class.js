// let SinhVien = {
//   hoten: "Nguyễn Thạc Tung",
//   gioiTinh: "Nam",
//   hocBai: function () {
//     console.log("Đang học bài");
//   },
//   diNgu: function () {
//     console.log("Đang đi ngủ");
//   },
// };

// console.log(SinhVien.hocBai());

// class TenClas {
//     constructor(){}
//     method(){...}
//     method(){...}
//     method(){...}
// }

class SinhVien {
  constructor(hoten, gioitinh) {
    this.hoten = hoten;
    this.gioitinh = gioitinh;
  }
  hocbai() {
    console.log(this.hoten + "Dang hoc bai" + this.gioitinh);
  }
  dingu() {
    console.log("Dang di ngu" + this.hocbai());
  }
  get getHoTen() {
    return this.hoten;
  }
  set setGioiTinh(newGioiTinh) {
    this.gioitinh = newGioiTinh;
  }
}

let sinhVien1 = new SinhVien("Tung", "Nam");
// getter, setter
sinhVien1.setGioiTinh = "Nữ";

console.log(sinhVien1.gioitinh);

// Kế thừa. extend

class ConNguoi {
  constructor(hoten, gioitinh) {
    this.hoten = hoten;
    this.gioitinh = gioitinh;
  }
  getHoTen() {
    return ` Tên ${this.hoten}, giới tính ${this.gioitinh}`;
  }
}
ConNguoi.prototype.getData = function () {
  return `Đây là dữ liệu data của ${this.hoten}`;
};

class HocSinh extends ConNguoi {
  constructor(maSV, hoten, gioitinh) {
    super(hoten, gioitinh);
    this.maSV = maSV || "unknow";
  }
  getThongTin() {
    return `${this.getHoTen()} và mã Sinh viên là ${this.maSV}`;
  }
}

let hocsinh = new HocSinh(123123123, "Tung", "Nam");
// console.log(hocsinh.getThongTin());
// kiểm tra loại đối tượng. instanceof
let hocsinh2 = new ConNguoi("Khoa", "NAm");
console.log(hocsinh2 instanceof HocSinh);

// Class và prototypes
let hocsinh3 = new ConNguoi("Duong", "nam");
let hocsinh4 = new ConNguoi("Test", "nữ");
console.log(hocsinh3.getHoTen());
console.log(hocsinh4.getData());
console.log(hocsinh.getData());

// DOM. : Tương tác giữ JS và HTML
