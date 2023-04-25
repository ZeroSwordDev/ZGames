const { DataTypes } = require('sequelize');
const { conn } = require('../db');


const Genres = conn.define('genres', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  });
  
module.exports = Genres;