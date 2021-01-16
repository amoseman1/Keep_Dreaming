// module.exports = (sequelize, DataTypes) => {
//     const Todo = sequelize.define('Todo', {
//         text: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN,
//     });
//     return Todo;
// };

//const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define("Destination", {
    location: DataTypes.STRING,
    cost_pp: DataTypes.STRING,
    activity_genre: DataTypes.STRING,
    activity_type: DataTypes.STRING,
    activity_title: DataTypes.STRING,
    number_people: DataTypes.INTEGER,
    kid_friendly: DataTypes.BOOLEAN,
  });
  return Destination;
};
