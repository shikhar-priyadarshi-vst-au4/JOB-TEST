import React, { Fragment } from "react";
import { List } from "../List/List";
import { connect } from "react-redux";
import { selectemployee } from "../../Redux/employee/employee.actions";

const styled = {
  input: {
    margin: " 0em 0.5em",
  },
};

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
      {props.comp === "panel" && (
        <div className="panel-block">
          <div className={"control has-icons-right"} style={styled.input}>
            <input type={"text"} className={"input"} placeholder={"Search"} />
            <span className={"icon is-small is-right"}>
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default connect()(Input);
