import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "../Button";

const styled = {
  panel: {
    margin: "0 1em",
  },
};
const ListItem = (props) => {
  return (
    <Fragment>
      {props.comp === "dropdown" && (
        <Fragment>
          <option>Select from option</option>
          {props.employeedata?.map((value, index) => (
            <option key={index}>{value.name}</option>
          ))}
        </Fragment>
      )}

      {props.comp === "panel" && (
        <Fragment>
          {props.surveydata?.map((value, index) => (
            <div className="panel-block columns" style={styled.panel}>
              <p className={"column is-four-fifth"}>{value.name}</p>
              <div className={"column is-one-fifth"}>
                <Button comp="panel-add-button">Add</Button>
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  let {
    employee: { employeedata, selected },
    survey: { surveydata },
  } = state;
  return {
    employeedata,
    selected,
    surveydata,
  };
};

export default connect(mapStateToProps)(ListItem);
