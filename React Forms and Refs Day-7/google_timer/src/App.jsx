import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [milisecond, setMilisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const miliRef = useRef(null);

  useEffect(() => {
    console.log("one");
    handleTime();
  }, [minute, second]);

  const handleTime = () => {
    miliRef.current = setInterval(() => {
      setMilisecond((p) => {
        if (p >= 100) {
          clearInterval(miliRef.current);
          if (p >= 100) {
            clearInterval(miliRef.current);
            setSecond(second + 1);
          }
          if (second >= 60) {
            clearInterval(miliRef.current);
            setSecond(0);
            setMinute(minute + 1);
          }
          return 0;
        }
        return p + 1;
      });
    }, 10);
  };
  const startTimer = () => {
    handleTime();
  };
  return (
    <div className="App">
      <div className="maint">
        <div className="m">{minute}</div>
        <div className="s">{second}</div>
        <div className="ms">{milisecond}</div>
      </div>
      <button
        onClick={() => {
          clearInterval(miliRef.current);
        }}
      >
        Pause
      </button>
      <button onClick={startTimer}>start</button>
      <button
        onClick={() => {
          clearInterval(miliRef.current);
          setMilisecond(0);
          setSecond(0);
          setMinute(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default App;
