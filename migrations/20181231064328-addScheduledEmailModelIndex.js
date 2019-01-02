'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('scheduledEmails', {
      fields: ['sent', 'sentDateTime'],
      name: 'SentAndScheduledDateTime'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('scheduledEmails', 'SentAndScheduledDateTime');
  }
};
