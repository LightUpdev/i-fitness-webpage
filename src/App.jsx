import "./App.css";
import Navbar from "./components/homePage_components/Navbar";
import HeroCard from "./components/homePage_components/HeroCard";
import Experiences from "./components/homePage_components/Experiences";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage toggleMenu={toggleMenu} showMenu={showMenu} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
