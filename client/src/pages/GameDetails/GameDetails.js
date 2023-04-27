import { Link, useParams } from "react-router-dom";
import "./GameDetails.css";
import { useEffect, useState } from "react";
import { gameDetail } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

const GameDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.GameDetails);
  const [isloading, setIsLoading] = useState(true);



  useEffect(() => {
    dispatch(gameDetail(id)).then((dispatch) => setIsLoading(false));
    // eslint-disable-next-line
  }, [id]);
  return (
    <>
      {isloading ? (
        <div className="loading">
          <PuffLoader color="#cf4784" size={100} />
        </div>
      ) : (
        <div className="containerDetails">
          <div className="topdetail">
            <div className="leftdetails">
              <div className="backfilter">
                <Link to={"/"} className="backfilterflex">
                  <ion-icon
                    size="large"
                    name="return-up-back-outline"
                  ></ion-icon>
                  Back
                </Link>
              </div>
              <h1>{game.name}</h1>
              <p>{game?.description_raw}</p>
              <div className="incosrsssdetails">
                {
                   game.platforms[0]?.platform  ?
                     game.platforms?.map((platform) => {
                        if (platform.platform.name === "PC") {
                          return (
                            <div key={platform.platform.id}>
                              <ion-icon
                                size="large"
                                name="desktop-outline"
                              ></ion-icon>
                            </div>
                          );
                        } else if (platform.platform.name === "PlayStation 4") {
                          return (
                            <div key={platform.platform.id}>
                              <ion-icon
                                size="large"
                                name="logo-playstation"
                              ></ion-icon>
                            </div>
                          );
                        } else if (platform.platform.name === "Xbox One") {
                          return (
                            <div key={platform.platform.id}>
                              <ion-icon
                                size="large"
                                name="logo-xbox"
                              ></ion-icon>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })
                      : (game.platforms?.map((p,i)=> {
                        if (p=== "pc") {
                          return (
                            <div key={i}>
                              <ion-icon
                                size="large"
                                name="desktop-outline"
                              ></ion-icon>
                            </div>
                          );
                        } else if (p === "ps4") {
                          return (
                            <div key={i}>
                              <ion-icon
                                size="large"
                                name="logo-playstation"
                              ></ion-icon>
                            </div>
                          );
                        } else if (p === "xbox") {
                          return (
                            <div key={i}>
                              <ion-icon
                                size="large"
                                name="logo-xbox"
                              ></ion-icon>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      }))
                    }
               
              </div>

              <p>Fecha de Lanzamiento: {game.released}</p>
              <p>Rating: {game.rating}</p>
              {game.genres ? (
                <div className="parrafosrow">
                  <h1>Generos:</h1>

                  {game.genres?.map((p) => (
                    <div className="genresRow" key={p.id}>
                      {p.name}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="parrafosrow">
                  <h1>Generos:</h1>
                  {game.generos?.map((p) => (
                    <div className="genresRow" key={p}>
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rightdetails">
              <img
                src={
                  game.background_image ||
                  "https://cdn.windowsreport.com/wp-content/uploads/2018/11/steam-1200x675.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="bottomdetails"></div>
        </div>
      )}
    </>
  );
};

export default GameDetails;
