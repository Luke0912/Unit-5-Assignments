import { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [counter, setCounter] = useState(0);

  console.log("Counter is initally:", counter)
  console.log(time)
  // let x = 1
  // console.log("X is initally:", x)
  // let interval = useRef(null);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      console.log(interval);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleCounter = () => {
    setCounter(counter+1)
    // console.log("Counter is changed to:", counter);
  };

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
        <h3>Counter:{counter}</h3>
        <button onClick={handleCounter}>Activate</button>
      </div>
    </div>
  );
};

export default App;
