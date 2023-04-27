const { DataTypes } = require('sequelize');
const  {conn} = require('../db')
const Genres = require('./genres');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const videogames = conn.define('videogames', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_raw: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    generos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    background_image : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released : {
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    rating : {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  videogames.belongsToMany(Genres, { through: 'VideogameGenres' });

module.exports = videogames;