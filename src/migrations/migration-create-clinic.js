'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // address: DataTypes.STRING,
    // description: DataTypes.TEXT,
    // image: DataTypes.STRING,

   
    await queryInterface.createTable('clinics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address : {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clinics');
  }
};