import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SEE_MOVIE,REMOVE_FROM_SEEN } from './Actions';

const initialState = {
  favoriteMovies: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [
          ...state.favoriteMovies,
          { ...action.payload, favorite: true, seen: false }, // Mark as favorite
        ],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.map((movie) =>
          movie.id === action.payload ? { ...movie, favorite: false } : movie
        ),
      };
      
    case SEE_MOVIE:
      return {
        ...state,
        favoriteMovies: [
          ...state.favoriteMovies,
          { ...action.payload, favorite: false, seen: true }, // Mark as favorite
        ],
      };
      case REMOVE_FROM_SEEN:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.map((movie) => {
          if (movie.id === action.payload) {
            return { ...movie, seen: false };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
