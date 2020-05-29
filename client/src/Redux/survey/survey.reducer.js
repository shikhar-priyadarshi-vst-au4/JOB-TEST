import { survey } from "./survey.types";
import { getFilter } from "./survey.utils";
const initState = {
  surveydata: [],
  addedsurvey: [],
  filtersurvey: [],
  surveylist: "",
};

export const surveyReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case survey.GET_SURVEY_DATA:
      return { ...state, surveydata: payload };
    case survey.SEARCH_SURVEY:
      return {
        ...state,
        filtersurvey: getFilter(state, payload),
        surveylist: payload.name,
      };
    default:
      return state;
  }
};
