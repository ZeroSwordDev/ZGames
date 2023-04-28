import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createvideoGames } from "../../redux/actions/actions";
import GenresViews from "../../components/GenresViews/GenresViews";

import "./Form.css";
import { Validation } from "../../helpers/Validation/Validation";

const Form = ({ setIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const [error, seterror] = useState({});

  const [newGame, setNewGame] = useState({
    name: "",
    description_raw: "",
    platforms: [],
    generos: [],
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

  const isClickgenres = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (!newGame.generos.includes(value)) {
      setNewGame({
        ...newGame,
        generos: [...newGame.generos, value],
      });
    }
  };

  const deleteGenres = (genre) => {
    if (newGame.generos.includes(genre)) {
      setNewGame({
        ...newGame,
        generos: newGame.generos.filter((p) => !p.includes(genre)),
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Validation(newGame);
    seterror(isValid);

    if (Object.values(isValid).length > 0) return;

    /* if (!isValid) return; */
    dispatch(createvideoGames(newGame))
      .then((game) => setIsOpen(false))
      .catch((e) => console.log(e));

    setNewGame({
      name: "",
      description_raw: "",
      platforms: [],
      generos: [],
      background_image: "",
      released: "",
      rating: 0,
    });
  };

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
        {error?.name && <p className="isDanger">{error.name}</p>}
        <div className="descGame">
          <label htmlFor="description_raw">Desciption:</label>
          <textarea
            type="text"
            id="description_raw"
            name="description_raw"
            onChange={handleChange}
          />
        </div>
        {error?.desc && <p className="isDanger">{error.desc}</p>}
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
          </div>
          {error?.platforms && <p className="isDanger">{error.platforms}</p>}
          <div className="plataformGenresall">
            <div className="plataformaflexCheksGenres"></div>
          </div>
          <div className="plataformaSelectedflex">
            <div className="rowplataforma">
              <h4>PLataformas</h4>
              {newGame.platforms?.map((p, i) => (
                <p className="plataformaSelected" key={i}>
                  {p}
                </p>
              ))}
            </div>
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

            <div className="rowgenres">
              {newGame.generos?.map((genre, i) => (
                <p
                  className="plataformaSelected"
                  key={i}
                  onClick={() => deleteGenres(genre)}
                >
                  {genre}
                </p>
              ))}
            </div>
          </div>
        </div>
        {error?.generos && <p className="isDanger">{error.generos}</p>}
        <div className="imageGame">
          <label htmlFor="background_image">Image:</label>
          <input
            type="text"
            id="background_image"
            name="background_image"
            onChange={handleChange}
          />
        </div>

        <div className="releaseGame">
          <label htmlFor="released">Release:</label>
          <input
            type="date"
            id="released"
            name="released"
            onChange={handleChange}
          />
        </div>
        {error?.released && <p className="isDanger">{error.released}</p>}
        <div className="ratingGame">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            onChange={handleChange}
          />
        </div>
        {error?.rating && <p className="isDanger">{error.rating}</p>}
        <button type="submit">Agregar Juego</button>
      </form>
    </div>
  );
};

export default Form;
