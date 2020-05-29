//response action constant
const submit = {
  SUBMIT_RESPONSE: "SUBMIT_RESPONSE",
  ERROR_RESPONSE: "ERROR_RESPONSE",
};

//initial state for response reducer
const initState = {
  message: "",
};

//response reducer
export const submitReducer = (state = initState, { type, payload }) => {
  return type === submit.SUBMIT_RESPONSE
    ? { ...state, message: payload }
    : type === submit.ERROR_RESPONSE
    ? { ...state, message: "Submission failed" }
    : { ...state };
};

//response action creator
export const submitresponse = (employee, surveyAssigned) => {
  return async (dispatch) => {
    try {
      let response = await (
        await fetch("http://localhost:5000/response-submit", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ employee, surveyAssigned }),
        })
      ).json();
      if (response.status) {
        return dispatch({
          type: submit.SUBMIT_RESPONSE,
          payload: response.message,
        });
      } else {
        dispatch({
          type: submit.ERROR_RESPONSE,
        });
      }
    } catch (error) {
      return dispatch({
        type: submit.ERROR_RESPONSE,
      });
    }
  };
};
