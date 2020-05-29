export const getFilter = ({ surveydata, addedsurvey }, { name, value }) => {
  let data = name === "Survey List" ? surveydata : addedsurvey;
  value = value.trim();
  let len = value.length;
  data = data.filter((val) => val.name.slice(0, len) === value);
  return data;
};

/* @params add(item, from, into)*/
export const add = (item, from, into) => {
  return [...into, from.find((val) => val.name === item.name)];
};

/* @params remove(newData, remove)*/
export const remove = (newData, remove) => {
  return [...newData.filter((val) => val.name !== remove.name)];
};
