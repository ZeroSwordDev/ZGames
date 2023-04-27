import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardGames from "../../components/CardGames/CardGames";
import { Link } from "react-router-dom";

const Filtered = () => {
  const genresfilter = useSelector(
    (state) => state.filteredOptions.genresFilter
  );
  const ratingFilter = useSelector(
    (state) => state.filteredOptions.ratingFilter
  );
  const games = useSelector((state) => state.Games);

  const [sort, setsort] = useState("");

  useEffect(() => {}, [genresfilter, ratingFilter]);

  const handleClick = (e) => {
    e.preventDefault();

    setsort(e.target.value);
  };


  

  const filteredGames = games
    ?.filter(
      (game) =>
      (!genresfilter ||
        !game.genres ||
        game.genres.some((genre) => genre.name === genresfilter)) &&
      // eslint-disable-next-line
      (!ratingFilter || Math.round(game.rating) == ratingFilter)
    )

    .sort((a, b) => {
      if (sort === "ACS") {
        return a.name.localeCompare(b.name);
      } else if (sort === "DESC") {
        return b.name.localeCompare(a.name);
      } else {
        return a.id - b.id;
      }
    });

  return (
    <div className="GamesContainerfiltered">
      <div className="backfilter">
        <Link to={"/"} className="backfilterflex">
          <ion-icon size="large" name="return-up-back-outline"></ion-icon>
          Back
        </Link>
        <h1> Resultados </h1>
        <div className="sort">
          <p>Ordenamiento:</p>
          <div className="ascanddesc">
            <select name="sort" id="sort" onClick={handleClick}>
              <option value="">Selecione</option>
              <option value="ACS">A a Z</option>
              <option value="DESC">Z a A</option>
            </select>
          </div>
        </div>
      </div>
      {
        <div className="cardcontainerViewfiltered">
          {filteredGames.length > 0 ? (
            <div className="cardcontainerViewfiltered">
              {filteredGames.map((game, i) => (
                <CardGames key={i} game={game} />
              ))}
            </div>
          ) : (
            <div className="not-found">No se encontraron resultados.</div>
          )}
        </div>
      }
    </div>
  );
};

export default Filtered;
