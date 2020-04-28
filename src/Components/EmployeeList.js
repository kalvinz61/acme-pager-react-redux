import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setEmployeesThunk } from '../Redux/employees';

const EmployeeList = ({ rows }) => {
  return rows ? (
    <div id="employeeList">
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
          {rows.map((employee, idx) => {
            return (
              <tr key={employee.id} className={idx % 2 === 0 ? 'grey' : ''}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};
const mapState = ({ rows }) => ({
  rows,
});

const mapDispatch = (dispatch) => ({
  fetchEmployees: () => dispatch(setEmployeesThunk()),
});

export default connect(mapState, mapDispatch)(EmployeeList);
