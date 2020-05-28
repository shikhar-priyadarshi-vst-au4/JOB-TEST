import { combineReducers } from "redux";

import { employeeReducer as employee } from "./employee";
import { surveyReducer as survey } from "./survey";

export const rootReducer = combineReducers({
  employee,
  survey,
});
