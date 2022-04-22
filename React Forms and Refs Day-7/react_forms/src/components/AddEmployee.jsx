import { useState } from "react";

export const AddEmployee = ({ getData }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
    marital_state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/employee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      getData();
    });
  };

  return (
    <form className="addDetails">
      <div>
        <input
          type="text"
          name="Name"
          className="Name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        Address:{" "}
        <input
          type="text"
          name="Address"
          className="Address"
          placeholder="Enter Address"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          name="Department"
          className="Department"
          onChange={handleChange}
        >
          <option value="elec">elec</option>
          <option value="auto">auto</option>
          <option value="mech">mech</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter salary"
          name="Salary"
          className="Salary"
          onChange={handleChange}
        />
      </div>
      <div>
        Marital Status:<input
          placeholder="Marital status"
          type="checkbox"
          defaultValue="unmarried"
          className="MaritalStatus"
          name="MaritalStatus"
          onChange={handleChange}
        />
      </div>
      <input
        className="submit"
        type="submit"
        value="Submit"
        onClick={handleFormSubmit}
      />
    </form>
  );
};
