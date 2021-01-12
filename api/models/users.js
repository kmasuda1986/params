'use strict'

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER.UNSIGNED(11),
      comment: 'PK'
    },
    role_id: {
      allowNull: false,
      type: sequelize.INTEGER.UNSIGNED(11),
      references: {
        model: 'roles',
        key: 'id'
      },
      comment: 'ロールID'
    },
    email: {
      allowNull: false,
      type: sequelize.STRING(255),
      comment: 'メールアドレス'
    },
    password: {
      allowNull: false,
      type: sequelize.STRING(255),
      comment: 'パスワード'
    },
    is_active: {
      allowNull: true,
      defaultValue: false,
      type: sequelize.BOOLEAN,
      comment: '有効区分'
    },
    created_at: {
      allowNull: false,
      type: sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '作成日時'
    },
    updated_at: {
      allowNull: false,
      type: sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      comment: '更新日時'
    },
    deleted_at: {
      allowNull: true,
      type: sequelize.DATE,
      comment: '削除日時'
    }
  }, {
    sequelize,
    modelName: 'users'
  })
  return users
};
