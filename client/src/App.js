import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.css";
import Input from "./components/Input";
import { List } from "./components/List";
import { getemployee } from "./Redux/employee/employee.actions";
// import {getsurvey} from './Redux/survey/survey.actions';
function App(props) {
  useEffect(() => {
    props.dispatch(getemployee());
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
    </div>
  );
}

export default connect()(App);
