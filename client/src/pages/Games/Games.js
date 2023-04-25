import { useDispatch, useSelector} from "react-redux";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import { useEffect, useState } from "react";
import { getGames, getGenresall} from "../../redux/actions/actions";
import { PuffLoader } from "react-spinners";

import "./Games.css";

const Games = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const games = useSelector(state => state.Games)
 
  

  useEffect(() => {
    dispatch(getGames()).then(() => setisLoading(false));
    dispatch(getGenresall())
    // eslint-disable-next-line
  }, [games.length]);
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <PuffLoader color="#cf4784" size={100} />
        </div>
      ) : (
        <div className="GamesContainer">
          <ContainerCard />
        </div>
      )}
    </>
  );
};

export default Games;
