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
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'roles',
          key: 'id'
        },
        comment: 'ロールID'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        comment: 'メールアドレス'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
        comment: 'パスワード'
      },
      last_logined_at: {
        allowNull: false,
        type: Sequelize.DATE,
        comment: '最終ログイン日時'
      },
      is_active: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
        comment: '有効区分'
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
      tableName: 'ユーザー情報テーブル'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}
