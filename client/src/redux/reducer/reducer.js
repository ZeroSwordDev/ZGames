//Types
import { GET_GAMES,SEARCH_GAME ,GAME_DETAILS, CREATE_GAME, FILTERED_ALL, SEARCH_GAME_NOT, SEARCH_GAME_LOADING, GET_ALL_GENRES} from "../actions/actions";

const initialState = {
  Games: [],
  GameDetails: {},
  searchInput: [],
  loading: false, 
  genres: [],
  filteredOptions: {
    genresFilter: '',
    ratingFilter: '',
    typeFilter: '',
  }
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        Games: action.payload,
        loading: false
      };
      case  SEARCH_GAME:
      return {
        ...state,
        searchInput: [  action.payload],
        loading: false,
      }
      case GAME_DETAILS:
        return {
          ...state,
          GameDetails : action.payload
        }
        case  CREATE_GAME: 
        return {
          ...state,
          Games: [ action.payload , ...state.Games ]
        }
        case SEARCH_GAME_NOT:
          return {
            ...state,
            searchInput: [],
            loading: false
          }
          case SEARCH_GAME_LOADING : 
          return {
            ...state,
            loading: action.payload
          }
          case GET_ALL_GENRES: 
          return{
            ...state,
            genres: action.payload
          }
          case FILTERED_ALL:
            const { genre, rating ,type} = action.payload;
            return{
              ...state,
              filteredOptions: {
                genresFilter: genre,
                ratingFilter: rating,
                typeFilter: type
              }
            }
    default:
      return state;
  }
};

export default RootReducer;
