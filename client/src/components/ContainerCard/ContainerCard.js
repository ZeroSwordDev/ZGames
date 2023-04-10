import "./ContainerCard.css";
import CardGames from "../CardGames/CardGames";
import { useSelector } from "react-redux";

const ContainerCard = () => {
  const games = useSelector((state) => state.Games);
  const search = useSelector((state) => state.searchInput);

  return (
    <div className="ContainerCard">
      <div className="containerfilters">
        <div className="iconfilter">
          <ion-icon size="large" name="filter-outline"></ion-icon>
        </div>
        <div className="gender">
          <select name="gender" id="gender">
            <option value="">Seleciona</option>
            <option value="shooter">Shooter</option>
            <option value="action">Action</option>
          </select>
        </div>
        <button className="apllyfilters">Aplicar Fitlros</button>
        <div className="ascanddesc">
          <select name="sort" id="sort">
            <option value="ACS">ACS</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
        <h1 className="TitlleGame">
          Popular<span> Games</span>
        </h1>
      </div>
      <div className="cardcontainerView">
        {search.trim() === ''
          ? games.map((game) => <CardGames key={game.id} game={game} />)
          : games
              .filter((game) =>
                game.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((game) => <CardGames key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default ContainerCard;
