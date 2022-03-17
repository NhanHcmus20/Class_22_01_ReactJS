// selector
let h1 = document.getElementsByClassName("h1");

let h2 = document.getElementById("valueh2");
let theP = document.getElementsByTagName("p");
let newH2 = document.querySelector("#valueh2");
let button = document.querySelector("#button");
let input = document.querySelector("#input");
let newH2All = document.querySelectorAll("div .example");

// newH2All[0].innerText =
//   "đây là <span style='color: red'>hello</span> giá trị mới mà tôi truyền vào";
newH2All[0].innerHTML =
  "đây là <span style='color: red'>hello</span> giá trị mới mà tôi truyền vào";
// newH2All[0].innerHTML = "đây là giá trị mới mà tôi truyền vào2";
console.log(newH2All[0]);
newH2All[0].style.color = "blue";
newH2All[0].style.fontWeight = "bold";
// newH2All[0].style.fontSize = "100px";
function callClick() {
  console.log("test data");
}

button.ondblclick = () => {
  //   alert("test");
};
input.onfocus = () => {
  console.log("focus");
};
input.onblur = () => {
  console.log("focus");
};
input.onkeyup = () => {
  console.log(input.value);
};

input.addEventListener("select", () => {
  console.log("click function");
});

// Thực hành