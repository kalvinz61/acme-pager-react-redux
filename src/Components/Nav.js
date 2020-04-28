import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmployeesThunk } from '../Redux/employees';
const Nav = (props) => {
  const { count, load } = props;
  let numOfPages;
  let arr = [];
  if (count) {
    numOfPages = Math.ceil(count / 50);
    for (let i = 0; i < numOfPages; i++) {
      arr.push(i);
    }
    return (
      <nav>
        {arr.map((pageNum) => {
          return (
            <Link onClick={() => load(pageNum)} key={pageNum} to={`/${pageNum}`}>
              {pageNum + 1}
            </Link>
          );
        })}
      </nav>
    );
  } else {
    return null;
  }
};

const mapState = ({ count }) => ({
  count,
});

const mapDispatch = (dispatch) => ({
  load: (pageNum) => dispatch(setEmployeesThunk(pageNum)),
});
export default connect(mapState, mapDispatch)(Nav);
