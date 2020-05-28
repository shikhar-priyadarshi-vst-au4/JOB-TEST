import { employee } from "./employee.types";

const initState = {
  employeedata: [],
  selected: "",
};

export const employeeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case employee.GET_EMPLOYEE_DATA:
      return { ...state, employeedata: payload };
    case employee.SELECT_EMPLOYEE:
      return { ...state, selected: payload };
    case employee.EMPLOYEE_UNSELECT:
      return { ...state, selected: "" };
    case employee.EMPLOYEE_ERROR:
      return initState;
    default:
      return state;
  }
};
