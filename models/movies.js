'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    name: DataTypes.STRING,
    seen: DataTypes.BOOLEAN,
    bio: DataTypes.STRING,
    picture: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};