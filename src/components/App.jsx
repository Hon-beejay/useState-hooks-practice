import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [count, getTime] = useState(time)

  function increase(){
    const newCount = new Date().toLocaleTimeString();
    getTime(newCount)
  }

  setInterval(increase, 1000);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>Get Time</button>
    </div>
  );
}

export default App;
