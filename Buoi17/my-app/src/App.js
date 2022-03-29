import React from "react";
import Body from "./component/Body";
import Button from "./component/Button";
import LearnStyle from "./component/LearnStyle";
import RandomNumber from "./RandomNumber";

export default function App() {
  return (
    <div className="wrap">
      <LearnStyle />
      <Body />
      <Button />
    </div>
  );
}
