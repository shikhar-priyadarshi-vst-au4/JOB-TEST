import { survey } from "./survey.types";
import { surveylink } from "./survey.links";

// to get all survey data initially
export const getsurvey = () => {
  return async (dispatch) => {
    try {
      let response = await (
        await fetch(surveylink, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        })
      ).json();
      if (!!response.length) {
        return dispatch({
          type: survey.GET_SURVEY_DATA,
          payload: response,
        });
      }
    } catch (error) {
      return dispatch({
        type: survey.SURVEY_ERROR,
      });
    }
  };
};
