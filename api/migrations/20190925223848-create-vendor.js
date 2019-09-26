'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      contact_name: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      url_slug: {
        type: Sequelize.STRING
      },
      hourly_rate: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      working_hours: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vendors');
  }
};