import React from "react";
import Body from "./component/Body";
import Button from "./component/Button";
import LearnStyle from "./component/LearnStyle";
import RandomNumber from "./randomGame/RandomNumber";

export default function App() {
  return (
    <div className="wrap">
      <RandomNumber data={"Tung"} />
    </div>
  );
}
