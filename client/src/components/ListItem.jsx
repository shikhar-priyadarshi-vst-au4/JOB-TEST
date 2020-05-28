import React, { Fragment } from "react";
import { connect } from "react-redux";

const ListItem = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && (
        <Fragment>
          <option>{props.selected}</option>
          {props.employeedata?.map((value, index) => (
            <option key={index}>{value.name}</option>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  let {
    employee: { employeedata, selected },
  } = state;
  return {
    employeedata,
    selected,
  };
};

export default connect(mapStateToProps)(ListItem);
