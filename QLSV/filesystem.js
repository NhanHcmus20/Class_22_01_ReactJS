var fs = require("fs");
let student = fs.readFileSync("./data.txt", "utf8");
fs.writeFileSync("./data.txt", "đay là dữ liệu được truyền vào", "utf8");
console.log(student);
