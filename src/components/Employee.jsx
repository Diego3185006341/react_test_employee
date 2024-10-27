import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employee = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employees, setEmployees] = useState([]);
  
    const handleSearch = async () => {
        try {
          let response;
          if (employeeId) {
            response = await axios.get(`http://localhost:8080/api/employee/${employeeId}`);
            if (!response.data) {
              response = await axios.get('http://localhost:8080/api/employees');
            } else {
              response = { data: [response.data] }; // Wrap single employee in an array
            }
          } else {
            response = await axios.get('http://localhost:8080/api/employees');
          }
          setEmployees(response.data);
        } catch (error) {
          console.error('There was an error!', error);
        }
      };
      
  
    return (
      <div className="container">
        <h1>Employee Information</h1>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Annual Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.annual_salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Employee;