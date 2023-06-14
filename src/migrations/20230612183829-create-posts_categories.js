'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('posts_categories', {
        postId: {
          type: Sequelize.INTEGER,
          field: 'post_id',
          primaryKey: true,
          references: {
            model: 'blog_posts',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'category_id',
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      })
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('posts_categories');
    }
  };
