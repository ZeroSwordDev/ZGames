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
  const typeFilter = useSelector((state) => state.filteredOptions.typeFilter);

  const games = useSelector((state) => state.Games);

  const [sort, setsort] = useState("");

  useEffect(() => {}, [genresfilter, ratingFilter]);

  const handleClick = (e) => {
    e.preventDefault();

    setsort(e.target.value);
  };

  const filteredGamesApi = games
    ?.filter((games) => typeFilter === "API" && typeof games.id === "number")
    ?.filter(
      (game) =>
        (!genresfilter ||
          !game.genres ||
          game.genres?.some((genre) => genre.name === genresfilter)) &&
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

  const filteredGamesDB = games
    ?.filter((games) =>  typeof games.id === "string")
    ?.filter(
      (game) =>
        game.generos.includes(genresfilter)
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
        <h1 > Resultados </h1>
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
      {typeFilter === "API" ? (
        <div className="cardcontainerViewfiltered">
          {filteredGamesApi.length > 0 ? (
            <div className="cardcontainerViewfiltered">
              {filteredGamesApi.map((game, i) => (
                <CardGames key={i} game={game} />
              ))}
            </div>
          ) : (
            <div className="not-found">No se encontraron resultados.</div>
          )}
        </div>
      ) : (
        <div className="cardcontainerViewfiltered">
          {filteredGamesDB.length > 0 ? (
            <div className="cardcontainerViewfiltered">
              {filteredGamesDB.map((game, i) => (
                <CardGames key={i} game={game} />
              ))}
            </div>
          ) : (
            <div className="not-found">No se encontraron resultados.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filtered;
