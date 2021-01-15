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
        number_people: DataTypes.INTEGER,
    });
    return Destination;
};

module.exports = (sequelize, DataTypes) => {
    const ActivityGenre = sequelize.define('ActivityGenre', {
        active: DataTypes.BOOLEAN,
        adrenaline: DataTypes.BOOLEAN,
        volunteering: DataTypes.BOOLEAN,
        partying: DataTypes.BOOLEAN,
        spiritual: DataTypes.BOOLEAN,
        cultural: DataTypes.BOOLEAN,
        //add family friendly genre
    });
    return ActivityGenre;
};


