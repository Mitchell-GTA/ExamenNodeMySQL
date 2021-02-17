const db = require("../models");
const Job = db.jobs;
const Gender = db.genders;
const Employee = db.employees;
const WorkedHours = db.worked_hours;
const Op = db.Sequelize.Op;

module.exports.saveEmpoyee = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await Employee.create(data);

    res.json({
      id: result.id,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      id: null,
      success: false,
    });
  }
};

module.exports.saveWorkedHours = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    if (data.worked_hours <= 20 && new Date(data.worked_date) <= new Date()) {
      const result = await WorkedHours.create(data);
      res.json({
        id: result.id,
        success: true,
      });
    } else {
      throw "Invalid request";
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      id: null,
      success: false,
    });
  }
};

module.exports.employeesByJob = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await Employee.findAll({
      where: { job_id: data.job_id },
      include: [Job, Gender],
    });
    res.json({
      employees: result,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      id: null,
      success: false,
    });
  }
};

module.exports.computedWorkedHours = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    if (new Date(data.end_date) > new Date(data.start_date)) {
      const result = await WorkedHours.sum("worked_hours", {
        where: {
          employee_id: data.employee_id,
          worked_date: {
            [Op.between]: [data.start_date, data.end_date],
          },
        },
      });
      res.json({
        total_worked_hours: result,
        success: true,
      });
    } else {
      throw "Invalid request";
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      id: null,
      success: false,
    });
  }
};

module.exports.computedPayment = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    if (new Date(data.end_date) > new Date(data.start_date)) {
      const hours = await WorkedHours.sum("worked_hours", {
        where: {
          employee_id: data.employee_id,
          worked_date: {
            [Op.between]: [data.start_date, data.end_date],
          },
        },
      });

      const employee = await Employee.findByPk(data.employee_id, {
        include: [Job],
      });
      res.json({
        payment: Math.round(parseInt(hours) * parseFloat(employee.job.salary)),
        success: true,
      });
    } else {
      throw "Invalid request";
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      id: null,
      success: false,
    });
  }
};
