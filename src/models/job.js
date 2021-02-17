module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define(
    "job",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      salary: {
        type: Sequelize.DOUBLE,
      },
    },
    {
      timestamps: false,
    }
  );

  return Job;
};
