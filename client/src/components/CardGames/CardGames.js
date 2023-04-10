import React from "react";
import { Link } from 'react-router-dom'

const CardGames = ({ game }) => {
  return (
    <div className="card">
      <img src={game.background_image} alt="" />
      <div className="titleygenres">
      <Link to={`/games/${game.id}`}>
        <h1>{game.name}</h1>
      </Link>
        {game.genres.map(genre => <p key={genre.id}>
         { genre.name}
        </p>)}
      </div>
    </div>
  );
};

export default CardGames;
