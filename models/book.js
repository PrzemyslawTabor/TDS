const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Book = db.define('Book', {
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicationDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Book;
