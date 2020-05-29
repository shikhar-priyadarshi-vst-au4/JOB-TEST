export const getFilter = ({ surveydata, addedsurvey }, { name, value }) => {
  let data = name === "Survey List" ? surveydata : addedsurvey;
  value = value.trim();
  let len = value.length;
  data = data.filter((val) => val.name.slice(0, len) === value);
  return data;
};
