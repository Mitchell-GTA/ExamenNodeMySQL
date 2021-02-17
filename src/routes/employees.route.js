const express = require("express");
const router = express.Router();
const controller = require("../controllers/employees.controller");

router.post("/employee", controller.saveEmpoyee);
router.post("/employee/worked/hours", controller.saveWorkedHours);
router.post("/employees/job", controller.employeesByJob);
router.post("/employee/worked/hours/between", controller.computedWorkedHours);
router.post("/employee/worked/payment/between", controller.computedPayment);


module.exports = router;
