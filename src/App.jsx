import React, { useState } from "react";

function App() {
  const [a, setA] = useState("Asd");
  return (
    <>
      {a}
      <button onClick={() => setA("Asdasdasds")}>click</button>
      <h1>ádasd</h1>
    </>
  );
}

export default App;
