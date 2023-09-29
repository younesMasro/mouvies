import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'


export default function Home() {

    const seenMovies = useSelector((state) => state.favorite.favoriteMovies.filter((movie) => movie.seen));


  return (
    <>
    <h3 style={{"color":"#EA7FFB"}}>{seenMovies.length}<span> Movies</span></h3>
    <div className='Lise'>
   
         {seenMovies.length > 0 ? (
           seenMovies.map((item) => {
             return (
         <>
         <div>
         <div>   <br></br><br></br>
              <Card id={item.id} Title={item.Title} Poster={item.Poster} btns={false} remov="X"></Card>
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
