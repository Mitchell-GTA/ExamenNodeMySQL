

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define(
    "employee",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      gender_id: {
        type: Sequelize.INTEGER,
      },
      job_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  const Job = require("./job.js")(sequelize,Sequelize)
  Employee.belongsTo(Job,{
    foreignKey: {
      name: 'job_id'
    }
  });
  const Gender = require("./gender.js")(sequelize,Sequelize)
  Employee.belongsTo(Gender,{
    foreignKey: {
      name: 'gender_id'
    }
  })
  return Employee;
};
