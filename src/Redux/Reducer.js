import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './Actions';

const initialState = {
  favoriteMovies: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
        
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;