import { useDispatch, useSelector } from "react-redux";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import "./Games.css";
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";

const Games = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchInput);
  useEffect(() => {
    dispatch(getGames())
    // eslint-disable-next-line
  }, [search]);
  return (
    <div className="GamesContainer">
      <ContainerCard />
    </div>
  );
};

export default Games;
