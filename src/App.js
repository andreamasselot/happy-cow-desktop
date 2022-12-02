import "./App.css";
import "./assets/fonts/stylesheet.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Place from "./pages/Place";
import Restaurant from "./pages/Restaurants";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(
  faStar,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faUser,
  faLocationDot,
  faPhone,
  faGlobe
);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:offerId" element={<Place />} />
        <Route path="/offers/restaurant" element={<Restaurant />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
