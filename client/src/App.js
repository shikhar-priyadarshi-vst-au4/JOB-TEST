import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Input from "./components/Input";
import { List } from "./components/List";
import { getemployee } from "./Redux/employee/employee.actions";
import { getsurvey } from "./Redux/survey/survey.actions";
import { Button } from "./components/Button";
import { submitresponse } from "./Redux/response";
function App(props) {
  useEffect(() => {
    props.dispatch(getemployee());
    props.dispatch(getsurvey());
  }, []);
  const submit = (selected, addedsurvey) => {
    if (!!selected && !!addedsurvey.length) {
      props.dispatch(submitresponse(selected, addedsurvey));
    }
  };
  return (
    <div className="container">
      <div className="level">
        <div className="level-item subtitle is-4">Select Employee</div>
      </div>
      <div className="level">
        <div className="level-item">
          <Input comp="dropdown" />
        </div>
      </div>
      <List comp="panel" />
      <div className="level">
        <div className="level-item">
          <Button
            comp="submit-button"
            submit={() => submit(props.selected, props.addedsurvey)}
          >
            Done
          </Button>
        </div>
      </div>
      <div className="level">
        <div className="level-item has-text-centered">{props.message}</div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  let {
    employee: { selected },
    survey: { addedsurvey },
    submit: { message },
  } = state;
  return { selected, addedsurvey, message };
};
export default connect(mapStateToProps)(App);
