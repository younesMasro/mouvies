import { useDispatch } from 'react-redux';
import { addToFavorites } from '../Redux/Actions';
import { removeFromFavorites } from '../Redux/Actions';
import { seenMovie } from '../Redux/Actions';
import { removeFromSeen } from '../Redux/Actions';


export default function Card(props) {
 
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(props));
  };
 
  const handleMovieSeen = () => {
    dispatch(seenMovie(props));
    
  };

  const handleRemoveFromFavorites = (props) => {
    dispatch(removeFromFavorites(props));
  };
  const handleRemoveFromSeen = (props) => {
    dispatch(removeFromSeen(props));
  };
  
    return (
      <>
      <div className="Liste">
      <div class="card-container">
         <div className="card" >
              <b></b>
              <div className="content" >
                  <div className="card-img" style={{ background: `url(${props.Poster})` }}></div> {/* Add a div for the image */}
                  <div className="card-info" key={props.id}>
                      <p className="title">{props.Title}</p>
{ props.btns===true ? 
                      <div className='myBtns'>
  <button class="Btn" onClick={() => handleAddToFavorites()}>
 <svg width="25px" height="25px" stroke-width="1.3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>     <span class="tooltip">Download</span>
  </button>
  <button class="Btn" onClick={() => handleMovieSeen()}>
<svg width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.3" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M3 13c3.6-8 14.4-8 18 0M12 17a3 3 0 110-6 3 3 0 010 6z" stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </button>
  </div>
:
<button class="Btn" style={{position:'relative',left:'90px'}} onClick={() => {props.remov==="Fav" ? handleRemoveFromFavorites(props.id) :handleRemoveFromSeen(props.id) } }>
<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="none" stroke-width="1.3" viewBox="0 0 24 24" color="#ffffff"><path stroke="#ffffff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" d="M9.879 14.121 12 12m2.121-2.121L12 12m0 0L9.879 9.879M12 12l2.121 2.121M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6Z"></path></svg>
  </button>
}

                  </div>
              </div>
              </div>
          </div>
          
          </div>
      </>
    )
  }