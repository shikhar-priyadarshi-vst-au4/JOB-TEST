import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "../Button";
import { addsurvey, removesurvey } from "../../Redux/survey/survey.actions";

const styled = {
  panel: {
    margin: "0 1em",
  },
};
const ListItem = ({
  surveydata,
  addedsurvey,
  filtersurveydata,
  filteraddedsurvey,
  surveylist,
  ...props
}) => {
  const appendsurvey = (value) => {
    props.dispatch(addsurvey(value));
  };
  const deletesurvey = (value) => {
    props.dispatch(removesurvey(value));
  };
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
          {(!!filtersurveydata.length && surveylist === "Survey List"
            ? filtersurveydata
            : surveydata
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
                <Button
                  comp="panel-add-button"
                  appendsurvey={() => appendsurvey(value)}
                >
                  Add
                </Button>
              </div>
            </div>
          ))}
        </Fragment>
      )}

      {props.comp === "panel-for-Assigned Surveys" && (
        <Fragment>
          {(!!filteraddedsurvey.length && surveylist === "Assigned Surveys"
            ? filteraddedsurvey
            : addedsurvey
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
                <Button
                  comp="panel-remove-button"
                  deletesurvey={() => deletesurvey(value)}
                >
                  Remove
                </Button>
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
    survey: {
      surveydata,
      addedsurvey,
      filtersurveydata,
      filteraddedsurvey,
      surveylist,
    },
  } = state;
  return {
    employeedata,
    selected,
    surveydata,
    addedsurvey,
    filtersurveydata,
    filteraddedsurvey,
    surveylist,
  };
};

export default connect(mapStateToProps)(ListItem);
