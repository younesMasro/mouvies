export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SEE_MOVIE= 'SEE_MOVIE';
export const REMOVE_FROM_SEEN = 'REMOVE_FROM_SEEN';

export const addToFavorites = (movie) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie,
  };
};


export const removeFromFavorites = (movieId) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movieId,
  };
};

export const seenMovie = (movie) => {
  return {
    type: SEE_MOVIE,
    payload: movie,
  };
};
export const removeFromSeen = (movieId) => ({
  type: REMOVE_FROM_SEEN,
  payload: movieId,
});