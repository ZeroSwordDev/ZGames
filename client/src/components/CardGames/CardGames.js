import React from "react";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const CardGames = ({ game }) => {
  return (
    <>
      {!game ? (
        <div className="loading">
          <PuffLoader color="#cf4784" size={100} />
        </div>
      ) : (
        <div className="card">
          <img
            src={
              game?.background_image ||
              "https://m.media-amazon.com/images/M/MV5BMjI2NzQ0MTI1Ml5BMl5BanBnXkFtZTgwNzMyMDE2MDE@._V1_FMjpg_UX1000_.jpg"
            }
            alt=""
          />
          {
            <div className="titleygenres">
              <Link to={`/games/${game.id}`}>
                <h1>{game?.name}</h1>
              </Link>
              {game.genres?.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}

              {game.generos?.map((genre, i) => (
                <p key={i}>{genre}</p>
              ))}
            </div>
          }
        </div>
      )}
    </>
  );
};

export default CardGames;
