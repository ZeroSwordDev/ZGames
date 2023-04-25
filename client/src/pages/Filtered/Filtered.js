import React, { useEffect } from "react";
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

  useEffect(() => {}, [genresfilter, ratingFilter ]);

  return (
    <div className="GamesContainerfiltered">
      <div className="backfilter">
        <Link to={"/"} className="backfilterflex">
          <ion-icon size="large" name="return-up-back-outline"></ion-icon>
          Back
        </Link>
        <h1> Resultados </h1>
      </div>
      {
        <div className="cardcontainerViewfiltered">
          {games
            ?.filter(
              (game) =>
                (!genresfilter ||
                  !game.genres ||
                  game.genres.some((genre) => genre.name === genresfilter)) &&
                // eslint-disable-next-line
                (!ratingFilter || Math.round(game.rating) == ratingFilter)
            )
            .map((game, i) => (
              <CardGames key={i} game={game} />
            ))}
        </div>
      }
    </div>
  );
};

export default Filtered;
