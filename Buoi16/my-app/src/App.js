import "./App.css";
import { useState } from "react";
function App() {
  const [c, setc] = useState(10);
  return (
    <div className="App">
      <h1>{c}</h1>
      <button
        onClick={() => {
          setc(c + 13);
        }}
      >
        tăng c
      </button>
      
    </div>
  );
}

export default App;
