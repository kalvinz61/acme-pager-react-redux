import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { SET_EMPLOYEES } from './employees';
const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return action.employees;
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(thunks, createLogger({ collapsed: true })));
export default store;
