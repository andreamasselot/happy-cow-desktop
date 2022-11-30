import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = async (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleUsernameChange = async (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlePasswordChange = async (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="modal-body">
        <section className="modal">
          <div className="login-left">
            <h2>HappyCow</h2>
            <p>
              Join the largest vegan and vegetarian community in the world !
            </p>
          </div>
          <div className="login-right">
            <div className="connexion-choice">
              <Link to={"/login"}>Login</Link>
              <p>Or</p>
              <Link to={"/signup"}>Sign Up</Link>
            </div>

            <form onSubmit={handleSubmit}>
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <label for="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <label for="password">Password</label>
              <input
                type="password"
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
    </>
  );
};

export default SignUp;
