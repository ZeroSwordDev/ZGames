import "./Sidebar.css";
import image from '../../assest/zgamer.png';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebarcontainer">
      <div className="top">
        <div className="logo">
          <Link to={'/'}>
          <img src={image} alt="" />
          </Link>
        </div>
      </div>
      <div className="center">
        <div className="containersidebarcenter">
          <ul className="ulsidebarmenu">
            <div className="active">
              <li>
                <ion-icon size="large" name="game-controller-outline" />
                Games
              </li>
            </div>
            <div className="">
              <li>
                <ion-icon size="large" name="bookmarks-outline" />
                Favorites
              </li>
            </div>
            <div className="">
              <li>
                <ion-icon size="large" name="add-circle-outline" />
                My Games
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
