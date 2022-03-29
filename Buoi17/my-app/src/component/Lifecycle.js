import React, { useEffect, useState } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState(null);
  const [randomValue, setrandomValue] = useState();
  useEffect(() => {
    console.log("mouting");
    return () => {
      console.log("unmouting");
    };
    // call api hoặc làm tất cả những tác vụ gì khi mới bắt đầu vào component
  }, [count, data, randomValue]);
  //   khi 1 state thay đổi sẽ làm gì đó.

  const increeCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Lifecycle
      <button onClick={increeCount}>incree</button>
    </div>
  );
}
