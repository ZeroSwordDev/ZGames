import "./ContainerCard.css";
import CardGames from "../CardGames/CardGames";
import { useSelector } from "react-redux";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import Filtered from "../Filtered/Filtered";

const ContainerCard = () => {
  const games = useSelector((state) => state.Games);
  const loading = useSelector((state) => state.loading);
  const search = useSelector((state) => state.searchInput);

  const [sort, setSort] = useState("");
  // eslint-disable-next-line
  const [numPage, setnumPage] = useState(15);
  const [indexpage, setIndexpage] = useState(1);
  const [isOpenFiltered, setisOpenFiltered] = useState(false);

  const indiceInicio = (indexpage - 1) * numPage;
  const indiceFin = indiceInicio + numPage;
  const dataGame = games.slice(indiceInicio, indiceFin);




  const handleClick = (e) => {
    e.preventDefault();

    setSort(e.target.value);
  };

  const handlePage = (page) => {
    if (page === "next") return setIndexpage(indexpage + 1);
    if (page === "prev") return setIndexpage(indexpage - 1);
  };


  

  return (
    <div className="ContainerCard">
      <div className="containerfilters">
        <div className="containerfilterall">
          <div className="iconfilter" >
            <ion-icon size="large" name="filter-outline" onClick={() => setisOpenFiltered(!isOpenFiltered)}></ion-icon>
             {isOpenFiltered && <Filtered setisOpenFiltered={setisOpenFiltered} />}
          </div>
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

          <h1 className="TitlleGame">
            Popular<span> Games</span>
          </h1>
        </div>

        <div className="pageNext">
          <button
            className={
              indexpage === 1 || search.length > 0
                ? `flechaspages is-disable `
                : `flechaspages `
            }
            onClick={() => handlePage("prev")}
          >{`<`}</button>
          <span> {search.length === 0 && indexpage}</span>
          <button
            className={
              indexpage === 3 || search.length > 0
                ? `flechaspages is-disable `
                : `flechaspages `
            }
            onClick={() => handlePage("next")}
          >{`>`}</button>
        </div>
      </div>

      {loading ? (
        <div className="loading">
          <PuffLoader color="#cf4784" size={100} />
        </div>
      ) : search && search.length > 0 ? (
        <div className="cardcontainerView">
          {search[0]
            ?.sort((a, b) => {
              if (sort === "ACS") {
                return a.name.localeCompare(b.name);
              } else if (sort === "DESC") {
                return b.name.localeCompare(a.name);
              } else {
                return a.id - b.id;
              }
            })
            .map((game, i) => (
              <CardGames key={i} game={game} />
            ))}
        </div>
      ) : (
        <div className="cardcontainerView">
          {dataGame
            .sort((a, b) => {
              if (sort === "ACS") {
                return a.name.localeCompare(b.name);
              } else if (sort === "DESC") {
                return b.name.localeCompare(a.name);
              } else {
                return a.id - b.id;
              }
            })
            .map((game, i) => (
              <CardGames key={i} game={game} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCard;
