const { getGenres} = require('../controllers/genresControllers')

const router = require('express').Router();

router.get('/all', async(req, res)=> {
    try {
        const genres = await getGenres()
        res.status(200).json(genres)
    } catch (error) {
        res.status(500).json('Error Server')
    }
})



module.exports = router;