module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        email: DataTypes.STRING
    });
    return User;
};
