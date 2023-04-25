import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Validation } from "../../helpers/Validation/Validation";
import { createvideoGames } from "../../redux/actions/actions";
import GenresViews from "../../components/GenresViews/GenresViews";

import "./Form.css";

const Form = ({ setIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [validation, setValidation] = useState("");

  const [newGame, setNewGame] = useState({
    name: "",
    description_raw: "",
    platforms: [],
    genres: [],
    background_image: "",
    released: "",
    rating: 0,
  });
  
  const handleChange = (e) => {
    setNewGame({
      ...newGame,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value.split(" ");
    const isCheked = e.target.checked;

    if (isCheked) {
      setNewGame({ ...newGame, platforms: [...newGame.platforms, ...value] });
    } else {
      setNewGame({
        ...newGame,
        platforms: newGame.platforms.filter((p) => !p.includes(value)),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Validation(newGame);
    setValidation(isValid);

    if (isValid) {
      dispatch(createvideoGames(newGame))
        .then((game) => setIsOpen(false))
        .catch((e) => console.log(e));

      setNewGame({
        name: "",
        description_raw: "",
        platforms: [],
        genres: [],
        background_image: "",
        released: "",
        rating: 0,
      });
    } else {
      return;
    }
  };

  const isClickgenres = (e) => {

    e.preventDefault();
    const value = e.target.value;

    if (!newGame.genres.includes(value)) {
      setNewGame({
        ...newGame,
        genres: [...newGame.genres, value],
      });
    }
  };

const deleteGenres = (genre) => {
 

  if(newGame.genres.includes(genre)){
    setNewGame({
      ...newGame,
      genres: newGame.genres.filter(p => !p.includes(genre)),
    });
  }

}

  return (
    <div>
      <h2
        onClick={() => {
          closeModal();
        }}
      >
        X
      </h2>

      <form onSubmit={handleSubmit}>
        <h1 className="titleplataforms">Create Game</h1>
        <div className="nameGame">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        {validation === "Name is required" && (
          <p className=" isDanger">{validation}</p>
        )}
        <div className="descGame">
          <label htmlFor="description_raw">Desciption:</label>
          <textarea
            type="text"
            id="description_raw"
            name="description_raw"
            onChange={handleChange}
          />
        </div>
        {validation === "Description is required" && (
          <p className=" isDanger">{validation}</p>
        )}
        <div className="platformsGame">
          <div className="plataformaflex">
            <label htmlFor="platforms">Plataformas</label>
            <div className="plataformaflexCheks">
              <label>
                <input
                  type="checkbox"
                  name="platforms"
                  value="ps4"
                  onChange={handleCheckboxChange}
                />
                PS4
              </label>
              <label>
                <input
                  type="checkbox"
                  name="platforms"
                  value="xbox"
                  onChange={handleCheckboxChange}
                />
                Xbox
              </label>
              <label>
                <input
                  type="checkbox"
                  name="platforms"
                  value="pc"
                  onChange={handleCheckboxChange}
                />
                PC
              </label>
            </div>
            {validation === "one Platform is required" && (
              <p className=" isDanger">{validation}</p>
            )}
          </div>
          <div className="plataformGenresall">
            <div className="plataformaflexCheksGenres">
              <div className="genreviews">
                <label htmlFor="genreviews">
                  <select id="genreviews" onChange={isClickgenres}>
                    <option value=""> Selecciona..</option>
                    {genres?.map((genre) => (
                      <GenresViews key={genre.id} genre={genre} />
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="plataformaSelectedflex">
            <div className="rowgenres">
              <h4>Genres</h4>
              {newGame.genres?.map((genre, i) => (
                <p
                  className="plataformaSelected"
                  key={i}
                  onClick={() => deleteGenres(genre)}
                >
                  {genre}
                </p>
              ))}
            </div>
            <div className="rowplataforma">
              <h4>PLataformas</h4>
              {newGame.platforms?.map((p, i) => (
                <p className="plataformaSelected" key={i}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="imageGame">
          <label htmlFor="background_image">Image:</label>
          <input
            type="text"
            id="background_image"
            name="background_image"
            onChange={handleChange}
          />
        </div>
        {validation === "background image is required" && (
          <p className=" isDanger">{validation}</p>
        )}
        <div className="releaseGame">
          <label htmlFor="released">Release:</label>
          <input
            type="date"
            id="released"
            name="released"
            onChange={handleChange}
          />
        </div>
        {validation === "Release is required" && (
          <p className=" isDanger">{validation}</p>
        )}
        <div className="ratingGame">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            onChange={handleChange}
          />
        </div>
        {validation === "Rating is required" && (
          <p className=" isDanger">{validation}</p>
        )}
        <button type="submit">Agregar Juego</button>
        {validation === "Game successfully created" && (
          <p className=" isSucces">{validation}</p>
        )}
      </form>
    </div>
  );
};

export default Form;
