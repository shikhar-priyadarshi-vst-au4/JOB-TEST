import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Input from "./components/Input";
import { List } from "./components/List";
import { getemployee } from "./Redux/employee/employee.actions";
import { getsurvey } from "./Redux/survey/survey.actions";
import { Button } from "./components/Button";
function App(props) {
  useEffect(() => {
    props.dispatch(getemployee());
    props.dispatch(getsurvey());
  }, []);
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
          <Button comp="submit-button">Done</Button>
        </div>
      </div>
    </div>
  );
}

export default connect()(App);
