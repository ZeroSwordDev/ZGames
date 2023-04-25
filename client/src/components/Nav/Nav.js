import "./Nav.css";
import image from "../../assest/rostro-rectangular.jpg";
import { searchGame,  } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ setUser }) => {
  const [searchGames, setSearchGames] = useState('');

  const dispatch = useDispatch();
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchGames(e.target.value);
    dispatch(searchGame(searchGames))
    

  };
  const handleclick = (e) => {
    e.preventDefault();
    setUser(false);
    navigate("/");
  };

  return (
    <div className="containernav">
      <div className="containerizqnav">
        <input
          type="text"
          placeholder="Search"
          className="navinput"
          onChange={handleChange}
          onBlur={handleChange}
          value={searchGames}
        />
        <hr />
        <ion-icon size="large" name="search-outline"></ion-icon>
      </div>
      <div className="containerdernav">
        <div className="avatar">
          <img src={image} alt="" />
        </div>
        <div className="logout">
          <button type="button" className="navLogout" onClick={handleclick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
