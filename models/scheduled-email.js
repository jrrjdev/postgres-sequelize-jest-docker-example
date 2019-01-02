'use strict';
module.exports = (sequelize, DataTypes) => {
  const scheduledEmail = sequelize.define('scheduledEmail', {
    sent: { type: DataTypes.BOOLEAN, allowNull: false },
    scheduledDateTime: { type: DataTypes.DATE, allowNull: false },
    toEmailAddress: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    subject: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    sentDateTime: { type: DataTypes.DATE, allowNull: true },
  }, {
    indexes: [
      {
        fields: ['sent', 'sentDateTime'],
        name: 'SentAndScheduledDateTime'
      }
    ]
  });
  scheduledEmail.associate = function(models) {
    // associations can be defined here
  };
  return scheduledEmail;
};