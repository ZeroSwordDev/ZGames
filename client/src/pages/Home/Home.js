import './Home.css';
import image from '../../assest/zgamer.png';
import logoResident from '../../assest/Resident.svg.png';
import lyonsvg from '../../assest/lyonkennedy.png';
import xbox from '../../assest/xbox.png';
import ps5 from '../../assest/ps5.png';

import {Link} from 'react-router-dom'

const Home = ({setUser}) => {

  return (

    <>
    <div className='ContainerHomeBg'>
      <div className="opacity"></div>
      <div className="top">
        <div className="imglogohome">
        <img src={image} alt="" />
        </div>
        <div className="iconsrrss">
        <ion-icon size='large' name="logo-facebook"></ion-icon>
        <ion-icon size='large' name="logo-instagram"></ion-icon>
        <ion-icon size='large' name="logo-github"></ion-icon>
        </div>
      </div>
      <div className="center">
        <div className="containerlogocenter">
          <img src={logoResident} alt="" />
          <h1 className='titlelogo'>Juego mas esperado del año.</h1>
          <div className="buttongames">
          <Link to={'/games/795632'} >
          <button className='btndetails' onClick={()=> setUser(true)}>Details</button>
          </Link>
          <button className='btngames'  onClick={()=> setUser(true)}>Tier list Games</button>
          </div>
        </div>
        <div className="svgandLyon">
          <img  src={lyonsvg} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="icondipositivos">
          <div className="imgxbox">
            <img  src={xbox} alt="" />
          </div>
            <hr />
            <div className='ps5' >
            <img   src={ps5} alt="" />
          </div>
            <hr />
            <div>
            <h1>PC</h1>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home
