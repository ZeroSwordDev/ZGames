import axios from "axios"



/* Types */

export const GET_GAMES = "GET_GAMES";
export const SEARCH_GAME = "SEARCH_GAME";
export const SEARCH_GAME_GENRES = "SEARCH_GAME_GENRES";
export const GAME_DETAILS= "GAME_DETAILS";

/* Types */




// Functions 
/* Get all Games */

export const getGames = () => {
    return async function(dispatch) {
        const res = await axios.get('https://api.rawg.io/api/games?key=bd095dbc2abb41798013b17928e5dc17&page_size=50&page=1');

        return dispatch( {
            type:GET_GAMES,
            payload: res.data.results
        })
    }
}

/* Get all Games */

/* SearchGame */
export const searchGame = (searchInput) => {
    return async function(dispatch) {
        
        return dispatch( {
            type:SEARCH_GAME,
            payload: searchInput
              
        })
    }
}

/* SearchGame */


/* DETAILS GAME */

export const gameDetail = (id) => {
    return async function(dispatch) {
        const res = await axios.get(`https://api.rawg.io/api/games/${id}?key=bd095dbc2abb41798013b17928e5dc17&`)

        return dispatch( {
            type:GAME_DETAILS,
            payload: res.data
              
        })
    }
}
/* DETAILS GAME */
