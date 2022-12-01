import { Link } from "react-router-dom";
import logo from "../assets/img/happycow-logo.svg";
import Modal from "react-modal";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const customStyles = {
  overlay: {
    zIndex: 1001,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal2 = () => {
    setModal2IsOpen(true);
  };
  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

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
          <button
            onClick={() => {
              props.handleToken();
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="connexion">
          <button
            onClick={() => {
              openModal();
            }}
          >
            Login
          </button>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
          >
            <Login
              handleToken={props.handleToken}
              openModal2={openModal2}
              closeModal={closeModal}
            />
          </Modal>

          <button
            onClick={() => {
              openModal2();
            }}
          >
            Sign Up
          </button>

          <Modal
            isOpen={modal2IsOpen}
            style={customStyles}
            onRequestClose={closeModal2}
          >
            <SignUp
              handleToken={props.handleToken}
              openModal={openModal}
              closeModal2={closeModal2}
            />
          </Modal>
        </div>
      )}
    </header>
  );
};

export default Header;
