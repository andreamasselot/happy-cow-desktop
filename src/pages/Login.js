import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = async (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = async (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://site--happycow--fhdp7f7ffy5p.code.run/user/login`,
      {
        email: email,
        password: password,
      }
    );
    props.handleToken(response.data.token);
    navigate("/");
  };

  return (
    <div className="modal-body">
      <section className="modal">
        <div className="login-left">
          <h2>HappyCow</h2>
          <p>Welcome to HappyCow !</p>
        </div>
        <div className="login-right">
          <div className="connexion-choice">
            <button
              onClick={() => {
                props.closeModal2();
                props.openModal();
              }}
            >
              Login
            </button>
            <p>Or</p>
            <button
              onClick={() => {
                props.closeModal();
                props.openModal2();
              }}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <div className="connexion-button">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
