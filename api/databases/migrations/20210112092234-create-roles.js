'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        comment: 'PK'
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'ロール名称'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: '作成日時'
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        comment: '更新日時'
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '削除日時'
      }
    }, {
      tableName: 'ロール情報テーブル'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles')
  }
}
