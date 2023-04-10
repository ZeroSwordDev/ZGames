//Types
import { GET_GAMES, SEARCH_GAME ,GAME_DETAILS} from "../actions/actions";

const initialState = {
  Games: [],
  GameDetails: {},
  Favorites: [],
  genres: [],
  searchInput: '',
  genre: "",
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        Games: action.payload,
      };
    case SEARCH_GAME:
      return {
        ...state,
        searchInput: action.payload,
      }
      case GAME_DETAILS:
        return {
          ...state,
          GameDetails : action.payload
        }
    default:
      return state;
  }
};

export default RootReducer;
