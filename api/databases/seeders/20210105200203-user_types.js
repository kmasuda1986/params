'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date()
    await queryInterface.bulkInsert('user_types', [
      {
        name: '管理者',
        created_at: now,
        updated_at: now
      },
      {
        name: 'ユーザー',
        created_at: now,
        updated_at: now
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_types', null, {})
  }
}
