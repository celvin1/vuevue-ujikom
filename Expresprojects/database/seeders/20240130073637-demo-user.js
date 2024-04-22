'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [];
    let salt = bcrypt.genSaltSync(10);
    users.push({
      name: 'celvin',
      role: 'admin',
      email: 'vin@gmail.com',
      password: bcrypt.hashSync("123", salt),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    users.push({
      name: 'vin2',
      role: 'admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync("123", salt),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};