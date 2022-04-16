// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const pdata = "hello first";
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState("I am going to be rendered");
//   const cb = (data) => {
//     console.log("I got data from my child", data);
//     setData(data);
//   };
//   const bromsg = (bro) => {
//     console.log("I got data from child one ", bro);
//     setMessage(bro);
//   };
//   return (
//     <div className="App">
//       <div>{data}</div>
//       <First pdata={pdata} message={message} />
//       <Second dataFn={cb} broData={bromsg} />
//     </div>
//   );
// }

// function First({ pdata, message }) {
//   console.log("recived from parent", pdata);
//   console.log("Recived data from sibling", message);
//   return <div>First Child {message} </div>;
// }

// function Second({ dataFn, broData }) {
//   const data = "hello papa";
//   const bro = "hello bro";
//   // const [x, setX] = useState(30);
//   return (
//     <div>
//       Second Child{" "}
//       <button
//         onClick={() => {
//           dataFn(data);
//         }}
//       >
//         Send Data to parent
//       </button>{" "}
//       <button
//         onClick={() => {
//           broData(bro);
//         }}
//       >
//         Send Data to First
//       </button>
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////To Do Application///////////////////////////////////////////

import "./App.css";
import TodoHandler from "./components/TodoHandler/TodoHandler";

function App() {
  return (
    <div className="App">
      <TodoHandler />
    </div>
  );
}

export default App;
