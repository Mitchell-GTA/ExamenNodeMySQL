module.exports = (sequelize, Sequelize) => {
  const WorkedHours = sequelize.define(
    "employee_worked_hours",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id: {
        type: Sequelize.INTEGER,
      },
      worked_hours: {
        type: Sequelize.INTEGER,
      },
      worked_date: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
    }
  );

  return WorkedHours;
};
