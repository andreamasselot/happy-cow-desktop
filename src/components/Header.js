import logo from "../assets/img/happycow-logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <img src={logo} alt="happycow logo" />
        </div>
        <button>Explore</button>
        <button>More</button>
      </nav>
      <div className="connexion">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
