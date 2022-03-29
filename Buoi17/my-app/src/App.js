import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Welcome } from "./component/Welcome";
import NewHeader from "./component/Header";
import Lifecycle from "./component/Lifecycle";
function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [numberOfGuesing, setnumberOfGuesing] = useState(0);
  useEffect(() => {
    randomFunction();
  }, []);
  // nếu là mảng rỗng thì chỉ gọi duy nhất 1 lần đầu tiên khi mouting (khởi tạo) component
  // nếu có giá tri (depen) thi nó sẽ gọi mỗi khi giá trị đó thay đổi
  const randomFunction = () => {
    console.log(Math.random());
    let random = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(random);
  };

  const onChangeValue = (event) => {
    setInputValue(parseInt(event.target.value));
    console.log(event);
  };
  const guess = () => {
    setnumberOfGuesing(numberOfGuesing + 1);
    if (inputValue === randomNumber) {
      alert("đoán đúng rồi");
    } else {
      alert("đoán sai rôi");
    }
  };

  const newGame = () => {
    randomFunction();
    setInputValue(0);
  };
  return (
    <div>
      {/* Header */}
      <div className="jumbotron text-center">
        <h1>Getting random number</h1>
        <p>
          Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán
          được?
        </p>
        <p>{randomNumber}</p>
      </div>
      {/* Body */}
      <div className="body">
        <button onClick={newGame}>New game</button>
        <hr />
        <p className="font-weight-bold">
          Số lần bạn đã đoán là: {numberOfGuesing}
        </p>
        <p className="font-weight-bold">Số bạn đoán là</p>
        <input value={inputValue} type="number" onChange={onChangeValue} />
        <button onClick={guess} className="btn-success">
          Đoán
        </button>
      </div>
    </div>
  );
}
// import và export
// lifecycle
export default App;
