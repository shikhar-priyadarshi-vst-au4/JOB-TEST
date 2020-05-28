import { employee } from "./employee.types";
import { emplink } from "./employee.links";

export const getemployee = () => {
  return async (dispatch) => {
    try {
      let response = await (
        await fetch(emplink, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        })
      ).json();
      if (!!response.length) {
        return dispatch({
          type: employee.GET_EMPLOYEE_DATA,
          payload: response,
        });
      }
    } catch (error) {
      return dispatch({
        type: employee.EMPLOYEE_ERROR,
      });
    }
  };
};

export const selectemployee = (value) => {
  if (!!employee && employee !== "Select from option") {
    return {
      type: employee.SELECT_EMPLOYEE,
      payload: value,
    };
  }
};
