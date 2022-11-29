import "./App.css";
import "./assets/fonts/stylesheet.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Offer from "./pages/Offer";
import Restaurants from "./pages/Restaurants";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faStar,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faSeedling
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:offerId" element={<Offer />} />
        <Route path="/offers/restaurant" element={<Restaurants />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
