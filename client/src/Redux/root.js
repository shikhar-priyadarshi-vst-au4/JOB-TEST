import { combineReducers } from "redux";

import { employeeReducer as employee } from "./employee";
import { surveyReducer as survey } from "./survey";
import { submitReducer as submit } from "./response";

export const rootReducer = combineReducers({
  employee,
  survey,
  submit,
});
