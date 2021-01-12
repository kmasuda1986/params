'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        comment: 'PK'
      },
      user_type_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'user_types',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        comment: 'ユーザータイプID'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'メールアドレス'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        comment: 'パスワード'
      },
      date_of_withdrawal: {
        allowNull: true,
        type: Sequelize.DATEONLY,
        defaultValue: null,
        comment: '退会年月日'
      },
      is_active: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
        comment: '有効区分'
      },
      is_delete: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
        comment: '削除区分'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '作成日時'
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '更新日時'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}
