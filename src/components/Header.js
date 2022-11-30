import { Link } from "react-router-dom";
import logo from "../assets/img/happycow-logo.svg";

const Header = (props) => {
  return (
    <header>
      <nav className="menu">
        <Link to={"/"} className="logo">
          <img src={logo} alt="happycow logo" />
        </Link>
        <Link to={"/explore"}>Explore</Link>
        <Link to={"/"}>More</Link>
      </nav>
      {props.token ? (
        <div className="log-out">
          <button>Log Out</button>
        </div>
      ) : (
        <div className="connexion">
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
