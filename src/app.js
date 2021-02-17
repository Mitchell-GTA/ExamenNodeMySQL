const express = require("express");
const morganM = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(morganM("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
const api_version = "v1";

db.sequelize.sync();
const jobs = require("./routes/jobs.route");
app.use(`/${api_version}`, jobs);

const genders = require("./routes/genders.route");
app.use(`/${api_version}`, genders);

const employees = require("./routes/employees.route");
app.use(`/${api_version}`, employees);

app.listen(app.get("port"), () => {
  console.log("server on port 3000");
});
