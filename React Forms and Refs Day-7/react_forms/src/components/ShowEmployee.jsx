

export const ShowEmployee = ({ employee }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Marital Status</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {/* populate all rows like below: */}
        {employee.map((e) => (
          <tr className="row" key={e.id}>
            <td className="first_name">{e.Name}</td>
            <td className="last_name">{e.Address}</td>
            <td className="email">{e.Department}</td>
            <td className="gender">{e.Salary}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.marital_state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
