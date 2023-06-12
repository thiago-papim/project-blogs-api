'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('blogs_posts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        published: {
          type: Sequelize.DATE,
        },
        updated: {
          type: Sequelize.DATE,
        }
      })
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('blogs_posts');
    }
  };