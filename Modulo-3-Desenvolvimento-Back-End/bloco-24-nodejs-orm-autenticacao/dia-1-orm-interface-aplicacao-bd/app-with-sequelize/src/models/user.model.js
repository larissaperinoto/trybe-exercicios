const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },  {
    tableName: 'Usuarios'
  });

  return User;
};

module.exports = UserModel;