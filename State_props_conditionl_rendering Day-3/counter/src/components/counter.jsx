import "./counter.css";

function Counter({ counter, onClick }) {
  return (
    <div>
      <h1 className={counter % 2 === 0 ? "even" : "odd"}>Counter:{counter}</h1>
      <button
        onClick={() => {
          onClick(1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          onClick(-1);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          onClick(2);
        }}
      >
        double
      </button>
    </div>
  );
}

export default Counter;
