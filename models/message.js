"use strict";
module.exports = (sequelize, DataTypes) => {
  //sequelize makes Message constructor function
  const Message = sequelize.define(
    "Message",
    {
      username: DataTypes.STRING,
      message: DataTypes.TEXT,
      category: DataTypes.STRING
    },
    {}
  );
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
