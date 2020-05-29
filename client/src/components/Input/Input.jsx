import React, { Fragment, useState } from "react";
import { List } from "../List/List";
import { connect } from "react-redux";
import { selectemployee } from "../../Redux/employee/employee.actions";
import { searchsurvery } from "../../Redux/survey/survey.actions";

const styled = {
  input: {
    margin: " 0em 0.5em",
  },
};

const Input = (props) => {
  let [data, setData] = useState({ name: "", value: "" });

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setData({ ...data, name, value });
  };
  const clickHandler = () => {
    props.dispatch(searchsurvery(data));
  };
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
            <input
              type={"text"}
              className={"input"}
              placeholder={"Search"}
              name={`${props.name}`}
              onChange={(e) => changeHandler(e)}
            />
            <span
              className={"icon is-small is-right"}
              style={{ pointerEvents: "initial", cursor: "pointer" }}
              onClick={() => clickHandler()}
            >
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default connect()(Input);
