import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card'


export default function Watched() {
  const favoriteMovies = useSelector((state) => state.favorite.favoriteMovies);
  const dispatch = useDispatch();
console.log(favoriteMovies)

 
  return (
    <>
    <div className='Lise'>
         {favoriteMovies.length > 0 ? (
           favoriteMovies.map((item) => {
             return (
         <>
         <div>
         <div>   <br></br><br></br>
              <Card id={item.id} Title={item.Title} Poster={item.Poster} btns={false}></Card>
            
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
