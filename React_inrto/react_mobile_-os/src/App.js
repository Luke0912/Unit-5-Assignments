// import logo from "./logo.svg";
import "./App.css";

function App() {
  const list1 = ["Android", "Blackberry", "iphone", "Windows Phone"];
  const list2 = ["Samsung", "htc", "micromax", "apple"];
  return (
    <div className="App">
      <div>
        {/* <h1>Mobile Operating System</h1>
        <ul>
          {list1.map((e) => {
            return <li>{e}</li>;
          })}
        </ul> */}
        <Mos title="Mobile Operating System" items={list1}></Mos>
        <Mos title="Mobile Manufactures" items={list2}></Mos>
        {/* <h1>Mobile Manufactures</h1>
        <ul>
          {list2.map((e) => {
            return <li>{e}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
}

function Mos({ title, items }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

// const {_id} = req.body
