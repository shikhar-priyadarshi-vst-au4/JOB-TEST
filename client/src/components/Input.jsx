import React, { Fragment } from "react";
import { List } from "./List";
import { connect } from "react-redux";
import { selectemployee } from "../Redux/employee/employee.actions";
const Input = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && (
        <div className="field">
          <div className="control">
            <div className="select is-large">
              <select
                onChange={(e) => props.dispatch(selectemployee(e.target.value))}
              >
                <List comp="dropdown" />
              </select>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default connect()(Input);
