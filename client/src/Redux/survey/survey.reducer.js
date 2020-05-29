import { survey } from "./survey.types";
import { getFilter, add, remove } from "./survey.utils";
const initState = {
  surveydata: [],
  addedsurvey: [],
  filtersurveydata: [],
  filteraddedsurvey: [],
  surveylist: "",
};

export const surveyReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case survey.GET_SURVEY_DATA:
      return { ...state, surveydata: payload };
    case survey.SEARCH_SURVEY:
      return {
        ...state,
        [payload.name === "Survey List"
          ? "filtersurveydata"
          : "filteraddedsurvey"]: getFilter(state, payload),
        surveylist: payload.name,
      };
    case survey.ADD_SURVEY:
      return {
        ...state,
        surveydata: remove(state.surveydata, payload),
        addedsurvey: add(payload, state.surveydata, state.addedsurvey),
        surveylist: "",
      };
    case survey.REMOVE_SURVEY:
      return {
        ...state,
        surveydata: add(payload, state.addedsurvey, state.surveydata),
        addedsurvey: remove(state.addedsurvey, payload),
        surveylist: "",
      };
    default:
      return state;
  }
};

// [payload.name === "Survey List"
//   ? "filtersurveydata"
//   : "filteraddedsurvey"]: getFilter(state, payload),
