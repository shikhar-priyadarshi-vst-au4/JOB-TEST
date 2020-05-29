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

      {props.comp === "panel-for-Survey List" && (
        <Fragment>
          {(!!props.filtersurvey.length && props.surveylist === "Survey List"
            ? props.filtersurvey
            : props.surveydata
          ).map((value) => (
            <div
              className="panel-block columns"
              style={styled.panel}
              key={value.name}
            >
              <p className={"column is-four-fifth is-four-fifth-mobile"}>
                {value.name}
              </p>
              <div className={"column is-one-fifth is-one-fifth-mobile"}>
                <Button comp="panel-add-button">Add</Button>
              </div>
            </div>
          ))}
        </Fragment>
      )}

      {props.comp === "panel-for-Assigned Surveys" && (
        <Fragment>
          {(!!props.filtersurvey.length &&
          props.surveylist === "Assigned Surveys"
            ? props.filtersurvey
            : props.addedsurvey
          ).map((value, index) => (
            <div
              className="panel-block columns"
              style={styled.panel}
              key={value.name}
            >
              <p className={"column is-four-fifth is-four-fifth-mobile"}>
                {value.name}
              </p>
              <div className={"column is-one-fifth is-one-fifth-mobile"}>
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
    survey: { surveydata, addedsurvey, filtersurvey, surveylist },
  } = state;
  return {
    employeedata,
    selected,
    surveydata,
    addedsurvey,
    filtersurvey,
    surveylist,
  };
};

export default connect(mapStateToProps)(ListItem);
