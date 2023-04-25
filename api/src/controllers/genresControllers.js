const axios = require("axios");
const Genres = require("../models/genres");

exports.getGenres = async () => {
  try {
    const res = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.APY_KEY}`
    );

    // Crear un array con los nombres de los géneros a partir del objeto reducido
    const genreNames = Object.values(
      res.data.results.reduce((acc, { id, name }) => {
        const key = `name ${name}`;
        if (!acc[key]) {
          acc[key] = name;
        }
        return acc;
      }, {})
    );

    // Crear un array de objetos para pasar a bulkCreate()
    const genreObjects = genreNames.map((name) => ({ name }));

    // Insertar los nuevos registros en la tabla genres
    const createdGenres = await Genres.bulkCreate(genreObjects, {
      ignoreDuplicates: true,
    });

    return createdGenres;
  } catch (error) {
    throw new Error(error.message);
  }
};
