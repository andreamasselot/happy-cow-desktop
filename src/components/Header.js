import { Link } from "react-router-dom";
import logo from "../assets/img/happycow-logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <img src={logo} alt="happycow logo" />
        </div>
        <Link to={"/"}>Explore</Link>
        <Link to={"/"}>More</Link>
      </nav>
      <div className="connexion">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
