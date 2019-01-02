'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.addColumn('scheduledEmails', 'scheduledDateTime', {type: Sequelize.DATE, allowNull: false}),
        queryInterface.addColumn('scheduledEmails', 'toEmailAddress', {type: Sequelize.STRING, allowNull: false}),
        queryInterface.addColumn('scheduledEmails', 'subject', {type: Sequelize.STRING, allowNull: false}),
        queryInterface.addColumn('scheduledEmails', 'text', {type: Sequelize.TEXT, allowNull: false}),
        queryInterface.addColumn('scheduledEmails', 'sentDateTime', {type: Sequelize.DATE, allowNull: true}),
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.removeColumn('scheduledEmails', 'scheduledDateTime'),
        queryInterface.removeColumn('scheduledEmails', 'toEmailAddress'),
        queryInterface.removeColumn('scheduledEmails', 'subject'),
        queryInterface.removeColumn('scheduledEmails', 'text'),
        queryInterface.removeColumn('scheduledEmails', 'sentDateTime'),
      ]
    );
  }
};
