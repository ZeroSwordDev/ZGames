const { getvideogames, getvideogameid,getvideogamequery, postvideogames } = require('../controllers/videogamesControllers');

const router = require('express').Router();

router.get('/', async (req,res) => {


    
    try {

        const games = await getvideogames()
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/:idVideogame', async (req,res) => {

    const {idVideogame } = req.params
    try {

        const games = await getvideogameid(idVideogame)
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/videogames/name', async (req,res) => {

    const {name}  = req.query
    try {

        const games = await getvideogamequery(name)
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.post('/new', async (req,res) => {

    const { name, description_raw , platforms, generos,  background_image, released, rating} = req.body;

    const game = { name, description_raw, platforms, generos, background_image, released, rating}
    try {

        const games = await postvideogames(game)
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;