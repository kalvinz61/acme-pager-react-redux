import React, { useEffect } from 'react';
import Nav from './Components/Nav';
import { HashRouter } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import { setEmployeesThunk } from './Redux/employees';
import { connect } from 'react-redux';
const App = (props) => {
  useEffect(() => {
    const pageNum = window.location.hash.slice(2);
    props.load(pageNum);
  });
  return (
    <div>
      <HashRouter>
        <h1>Acme Pager</h1>
        <Nav />
        <EmployeeList />
      </HashRouter>
    </div>
  );
};
const mapDispatch = (dispatch) => ({
  load: (pageNum) => dispatch(setEmployeesThunk(pageNum)),
});
export default connect(null, mapDispatch)(App);
