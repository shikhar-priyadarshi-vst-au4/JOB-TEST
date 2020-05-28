var express = require("express");
var router = express.Router();

const surveys = require("../public/survey.json");
const employees = require("../public/employees.json");

router.get("/survey-data", (req, res) => {
  let survey = JSON.parse(JSON.stringify(surveys));
  if (!!survey.length) {
    res.status(200).json(survey);
  } else {
    res.status(400).json({
      status: "failure",
      message: "failed to fetch",
    });
  }
});

router.get("/employee-data", (req, res) => {
  let employee = JSON.parse(JSON.stringify(employees));
  if (!!employee.length) {
    res.status(200).json(employee);
  } else {
    res.status(400).json({
      status: "failure",
      message: "failed to fetch",
    });
  }
});
module.exports = router;
