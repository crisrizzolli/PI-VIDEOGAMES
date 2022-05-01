import { GET_VIDEOGAMES, CLEAN_VIDEOGAMES } from "../actions";

const initialState = {
  videogames: [], //se pueden usar para muchas cosas ej los que se ven por pagina
  allVideogames: [],
  videogameRetail: [],
  genres: [],
  platforms: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state, // spread operator trae una copia del state, para comparar y si hay un cambio realizarlo
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case CLEAN_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;

// reducer debe hacer lo que le pide Action
