import axios from "axios";

/* Types */

export const GET_GAMES = "GET_GAMES";
export const SEARCH_GAME = "SEARCH_GAME";
export const SEARCH_GAME_GENRES = "SEARCH_GAME_GENRES";
export const GAME_DETAILS = "GAME_DETAILS";
export const INDEX_PAGE = "INDEX_PAGE";
export const CREATE_GAME = "CREATE_GAME";
export const SEARCH_GAME_NOT = "SEARCH_GAME_NOT"
export const SEARCH_GAME_LOADING = "SEARCH_GAME_LOADING";
export const SEARCH_INPUT = "SEARCH_INPUT";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const FILTERED_ALL = "FILTERED_ALL";
/* Types */

// Functions
/* Get all Games */

export const getGames = () => {
  return async function (dispatch) {

    dispatch({
      type: SEARCH_GAME_LOADING,
      payload: true,
    });

    const res = await axios.get("http://localhost:3001/games");
    return dispatch({
      type: GET_GAMES,
      payload: res.data,
    });
  };
};

/* Get all Games */

/* SearchGame */
export const searchGame = (searchInput) => {
  return async function (dispatch) {

    dispatch({
      type: SEARCH_GAME_LOADING,
      payload: true,
    });


    if(searchInput.length === 0) 
    return dispatch({
      type: SEARCH_GAME_NOT,
      payload: false
    });

    const res = await axios.get(
      `http://localhost:3001/games/videogames/name?name=${searchInput}`
      );
      


    return dispatch({
      type: SEARCH_GAME,
      payload: res.data,
    });
  };
};

/* SearchGame */



/* DETAILS GAME */

export const gameDetail = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/games/${id}`);

    return dispatch({
      type: GAME_DETAILS,
      payload: res.data,
    });
  };
};
/* DETAILS GAME */




export const createvideoGames = (game) => {
  return async function (dispatch) {

    
    const res = await axios.post(`http://localhost:3001/games/new`, game)
   
    return dispatch({
      type: CREATE_GAME,
      payload: res.data
    });
  };
};

export const getGenresall = () => {
  return async function (dispatch) {
   
   
      const res = await axios.get(`http://localhost:3001/genres/all`)
   
    return dispatch({
      type: GET_ALL_GENRES,
      payload: res.data
    });
    
    
  };
}


export const getFilteredGenresAndRating = (genre , rating) => {
  
  return async function (dispatch) {
    return dispatch({
      type: FILTERED_ALL,
      payload: {
        genre,
        rating
      }
    });
    
    
  };
}


