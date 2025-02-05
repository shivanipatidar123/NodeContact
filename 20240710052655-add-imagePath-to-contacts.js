// //const { Sequelize, DataTypes } = require('sequelize');
// //const sequelize = require('../config/database'); // Adjust this path as needed

// //const Contact = sequelize.define('Contact', {
// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Contact', {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true
//     }
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       is: /^[0-9]+$/  // Only allow numbers
//     }
//   },
//   image: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   imagePath: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   createdAt: {
//     allowNull: false,
//     type: DataTypes.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: DataTypes.DATE
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Contacts');
//   }
// });

// module.exports = Contact;
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contactname', {
      id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              is: /^[0-9]+$/  // Only allow numbers
            }
          },
          image: {
            type: DataTypes.STRING,
            allowNull: true
          },
          imagePath: {
            type: DataTypes.STRING,
            allowNull: true
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contactname');
  }
};

module.exports = Contact;


