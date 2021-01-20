module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define(
    "Destination",
    {
      location: DataTypes.STRING,
      cost_pp: DataTypes.STRING,
      activity_genre: DataTypes.STRING,
      activity_type: DataTypes.STRING,
      number_people: DataTypes.INTEGER,
      kid_friendly: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );
  return Destination;
};
