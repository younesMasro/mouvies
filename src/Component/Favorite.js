import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../Redux/Actions';

export default function Favorite() {
    const favoriteMovies = useSelector((state) => state.favorite.favoriteMovies);
    const dispatch = useDispatch();
  
    const handleRemoveFromFavorites = (movieId) => {
      dispatch(removeFromFavorites(movieId));
    };
  return (
   <>
   <div className='Lise'>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((item) => {
            return (
                <>
                <Card title={item.Title} img={item.Poster}></Card>
                <button onClick={() => handleRemoveFromFavorites(item.id)}>
                  Remove from Favorites
                </button>
                </>
            
            
            );
          })
          
        ) : (
          null
        )}
       </div>
   </>
  )
}
