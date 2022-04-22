import { useState, useEffect } from "react";
import { AddEmployee } from "./components/AddEmployee";
import { ShowEmployee } from "./components/ShowEmployee";

function App() {
  const [employee, setEmployee] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://localhost:5000/employee").then((d) =>
      d.json()
    );
    console.log(data);
    setEmployee(data);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setAdd(!add);
  };

  return (
    <div className="App">
      <button className="togglebtn" onClick={handleAdd}>
        {add ? "Go to Employee list" : "Add a new Employee"}
      </button>
      {!add && <ShowEmployee employee={employee}/>}
      {add && <AddEmployee getData={getData} />}
    </div>
  );
}

export default App;
