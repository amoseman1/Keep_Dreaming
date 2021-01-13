// module.exports = (sequelize, DataTypes) => {
//     const Todo = sequelize.define('Todo', {
//         text: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN,
//     });
//     return Todo;
// };

//const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        email: DataTypes.STRING
    });
    return User;
};

module.exports = (sequelize, DataTypes) => {
    const ActivityGenre = sequelize.define('ActivityGenre', {
        active: DataTypes.BOOLEAN,
        adrenaline: DataTypes.BOOLEAN,
        volunteering: DataTypes.BOOLEAN,
        partying: DataTypes.BOOLEAN,
        spiritual: DataTypes.BOOLEAN,
        cultural: DataTypes.BOOLEAN,
    });
    return ActivityGenre;
};

module.exports = (sequelize, DataTypes) => {
    const Destination = sequelize.define('Destination', {
        location: DataTypes.STRING,
        cost: DataTypes.STRING,
        // hotel: DataTypes.STRING,
        // flight: DataTypes.STRING,
        // carRental: DataTypes.STRING
    });
    return Destination;
};



