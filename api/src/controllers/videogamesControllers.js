const axios = require("axios");
const Videogames = require("../models/Videogames");
const { Op } = require("sequelize");
const moment = require("moment");
require("dotenv").config();

exports.getvideogames = async () => {
  const videogames = await Videogames.findAll();

  const res = await axios.get(
    `https://api.rawg.io/api/games?key=${process.env.APY_KEY}&page=1&page_size=40`
  );

  const gamesapi = res.data.results;
  return [...videogames, ...gamesapi];
};

exports.getvideogameid = async (idvideogame) => {
  try {

  if( idvideogame.length > 8 ) {
    const gamesDb = await Videogames.findByPk(idvideogame)
    console.log('gamesDb', gamesDb)

     return gamesDb
  }

    const res = await axios.get(
      `https://api.rawg.io/api/games/${idvideogame}?key=${process.env.APY_KEY}`
    );
    return  res.data;
  } catch (error) {
    console.error(error);
    throw new Error("ID Game not found");
  }
};

exports.getvideogamequery = async (name) => {
  try {
    const gamesFromApi = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.APY_KEY}&search=${name}&page_size=15`
    );
    const gamefiltered = await Videogames.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 15,
    });

    const games = gamefiltered.concat(gamesFromApi.data.results);
    if (games.length === 0) {
      throw new Error("No se encontraron videojuegos con ese nombre");
    }

    return games;
  } catch (error) {
    console.error(error);
    throw new Error("Ocurrió un error al buscar los videojuegos");
  }
};

exports.postvideogames = async (game) => {
  const {
    name,
    description_raw,
    platforms,
    generos,
    background_image,
    released,
    rating,
  } = game;

  const releaseDate = moment(released).toDate();

  try {
    const videogame = await Videogames.findOrCreate({
      where: { name },
      defaults: {
        name,
        description_raw,
        platforms,
        generos,
        background_image,
        released: releaseDate,
        rating,
      },
    });

    return videogame;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
