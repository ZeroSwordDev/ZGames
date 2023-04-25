import "./Sidebar.css";
import image from "../../assest/zgamer.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import Form from "../Form/Form";

const Sidebar = () => {


  

  const customStyles = {
    overlay: {
      backgroundColor: "#181a2694",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: " rgb(77, 72, 72)",
      width: "1400px",
      display: "flex",
      border: "none",
      backgroundImage:
        "url('https://static.13.cl/7/sites/default/files/images/ocupload/serie-the-last-of-us-hbo.jpg')",
      backgroundSize: "cover",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);

  }

  return (
    <div className="sidebarcontainer">
      <div className="top">
        <div className="logo">
          <Link to={"/"}>
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
              <li onClick={() => setIsOpen(true)}>
                <ion-icon size="large" name="add-circle-outline" />
                Add Games
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Ejemplo Modal"
        >
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
          
           <Form setIsOpen={setIsOpen} closeModal={closeModal}/>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
