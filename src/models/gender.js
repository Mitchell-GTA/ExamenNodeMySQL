module.exports = (sequelize, Sequelize) => {
  const Gender = sequelize.define(
    "gender",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      }
    },
    {
      timestamps: false,
    }
  );

  return Gender;
};
