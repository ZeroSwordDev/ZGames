import React, { useState } from "react";
import "./Filtered.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredGenresAndRating } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Filtered = ({ setisOpenFiltered }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((state) => state.genres);


  
  const [genresfiltered, setGenresfiltered] = useState('');
  const [ratingfiltered, setRatingfiltered] = useState('');
  
  

  const handleClickFitlered = async (e) => {
    e.preventDefault();

   dispatch(getFilteredGenresAndRating(genresfiltered, ratingfiltered))

    navigate(`/filtered`)
  }
  return (
    <div className="FilteredGames">
      <div className="filteredGenresall">
        <label htmlFor="selectfilteredGenres"> Genres</label>
        <select name="selectfilteredGenres" id="selectfilteredGenres" onChange={(e) =>  setGenresfiltered(e.target.value)}>
          <option value="">Seleccionar</option>
          {
            genres?.map((genre, i) => (
              <option key={i} value={genre.name}> {genre.name} </option>
            ))
          }
        </select>
      </div>

      <div className="filteredRatingall">
      <label htmlFor="selectfilteredRating"> Rating</label>
      <select name="selectfilteredRating" id="selectfilteredRating" onChange={(e) => setRatingfiltered(e.target.value)}>
      <option value="">Seleccionar</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      </div>

      <div className="buttonfilteredall isDisable">
        <button onClick={handleClickFitlered}>Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default Filtered;
