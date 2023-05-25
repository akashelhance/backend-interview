module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Users', 'phone', {
        type: Sequelize.BIGINT,
        allowNull: false
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn('Users', 'phone')]);
  },
};