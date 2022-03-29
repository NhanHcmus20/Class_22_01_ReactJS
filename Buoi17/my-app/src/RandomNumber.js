import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Welcome } from "./component/Welcome";
import NewHeader from "./component/Header";
import Lifecycle from "./component/Lifecycle";
function RandomNumber() {
  // Khai báo state data
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [numberOfGuesing, setnumberOfGuesing] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [message, setmessage] = useState("");
  // lifecycle mouting
  const mouting = () => {
    randomFunction();
  };
  useEffect(mouting, [correct]);

  // mouting, updating
  // nêu [] => mouting gọi duy nhất 1 lần khi khởi tạo
  //  nếu [numberOfGuesing] => mouting sẽ gọi mỗi khi numberOfGuesing thay đổi
  const randomFunction = () => {
    console.log(Math.random());
    let random = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(random);
    setCorrect(false);
  };

  const onChangeValue = (event) => {
    setInputValue(parseInt(event.target.value));
    console.log(event);
  };
  const guess = () => {
    setnumberOfGuesing(numberOfGuesing + 1);
    if (inputValue === randomNumber) {
      setCorrect(true);
      alert("đoán đúng rồi");
    } else {
      if (inputValue > randomNumber) {
        setmessage("Số bạn đoán lớn quá");
      }
      if (inputValue < randomNumber) {
        setmessage("Số bạn đoán nhỏ quá");
      }
      setCorrect(false);
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
        <p>{message}</p>
      </div>
    </div>
  );
}
// import và export
// lifecycle
export default RandomNumber;
