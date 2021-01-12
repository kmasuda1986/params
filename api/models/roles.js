'use strict'

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  roles.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER,
      comment: 'PK'
    },
    name: {
      type: sequelize.STRING(255),
      allowNull: false,
      comment: 'ロール名称'
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
    modelName: 'roles'
  })
  return roles
}
