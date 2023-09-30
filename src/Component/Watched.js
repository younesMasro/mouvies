import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card'
export default function Watched() {

  const favoriteMovies = useSelector((state) => state.favorite.favoriteMovies.filter((movie) => movie.favorite));
  

  return (
    <>
    <h3 style={{"color":"#EA7FFB"}}>{favoriteMovies.length}<span> Movies</span></h3>
    <div className='Lise'>
         {favoriteMovies.length > 0 ? (
           favoriteMovies.map((item) => {
             return (
         <>
         <div>
         <div>   <br></br><br></br>
              <Card id={item.id} Title={item.Title} Poster={item.Poster} btns={false} remov="Fav"></Card>
              </div>
              </div>
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
