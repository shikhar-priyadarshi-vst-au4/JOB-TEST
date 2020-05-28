import { survey } from "./survey.types";

const initState = {
  surveydata: [],
  addedsurvey: [],
};

export const surveyReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case survey.GET_SURVEY_DATA:
      return { ...state, surveydata: payload };
    default:
      return state;
  }
};
