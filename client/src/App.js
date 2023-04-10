import "./App.css";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import Games from "./pages/Games/Games";
import GameDetails from "./pages/GameDetails/GameDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  
  const [user, setUser] = useState(false);
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="flex">
            {user && <Nav  setUser={setUser}/>}

            <Routes>
              {user ? (
                <>
                  <Route path="/" element={<Games />} />
                  <Route path="/games/:id" element={<GameDetails />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Home setUser={setUser}/>} />
                </>
              )}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
