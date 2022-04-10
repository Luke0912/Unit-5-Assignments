// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [counter, setCounter] = useState(0);
  const counterHandler = (value) => {
    if (value === 2) {
      setCounter(counter * value);
      return;
    }
    setCounter(counter + value);
  };
  // const doubleHandler = () => {
  //   setCounter(counter * 2);
  // };
  return (
    <div className="App">
      <Counter  counter={counter} onClick={counterHandler} />
    </div>
  );
}

export default App;
