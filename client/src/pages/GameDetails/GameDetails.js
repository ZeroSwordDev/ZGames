import { useParams } from 'react-router-dom';
import './GameDetails.css';
import { useEffect } from 'react';
import { gameDetail } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

const GameDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(state=> state.GameDetails);
  console.log('game', game)

  useEffect(() => {
    dispatch(gameDetail(id));
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className='containerDetails'>
      <div className="topdetail">
      <div className="leftdetails">
        <h1>{game.name}</h1>
        <p> 
        {game.description_raw}
          </p>
          <div className="incosrsssdetails">
          <ion-icon size='large' name="logo-xbox"></ion-icon>
          <ion-icon size='large' name="desktop-outline"></ion-icon>
          <ion-icon size='large' name="logo-playstation"></ion-icon>
          </div>
          <p>Fecha de Lanzamiento: {game.released}</p>
          <p>Rating: {game.rating}</p>
          {/* {
            game.genres.map(p=> ( <p key={p.id}>{p.name}</p>))
          } */}
      </div>
      <div className="rightdetails">
      <img src={game.background_image} alt="" />
      </div>
      </div>
      <div className="bottomdetails">
    
      </div>
    </div>
  )
}

export default GameDetails
