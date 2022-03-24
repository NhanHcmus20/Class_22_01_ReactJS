import { useState } from "react";
let a = "Tung";
let c = 10;
let d = 20;
let text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat corrupti modi consequuntur sit veniam laboriosam minus laborum perspiciatis architecto animi cum ex eveniet dolorem provident delectus blanditiis assumenda, nihil est.";
// code jsx ( js + xml ): html + logic trong cùng file
function changeName(name) {
  return name.toUpperCase();
}

function formData(params) {
  return <input type="text" name="" id="" />;
}

const increeC = (incree) => {
  console.log("test c");
  c + incree;
};
console.log(c);

function Welcome() {
  return (
    <div className="content">
      <p> Giá trí của biến c là: {c}</p>
      <a>link to google </a>
      <p>{text}</p>
      <p>Hi {changeName(a)}</p>
      {formData()}
      <button onClick={increeC(3)}>Change c var</button>
    </div>
  );
}

// dynamic data được sử dụng trong cặp dấu {}
// get data tư function, biến {}
// thay đổi data => sử dụng event và state
// State là data trong component
// state có thể thay đổi được. 
ReactDOM.render(<Welcome />, document.getElementById("root"));
