import axios from 'axios';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';

const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees,
});

export const setEmployeesThunk = (pageNum) => {
  return async (dispatch) => {
    const employees = (await axios.get(`api/employees/${pageNum}`)).data;
    dispatch(setEmployees(employees));
  };
};
