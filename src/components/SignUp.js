import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState({});

  const navigate = useNavigate();
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
  const handleFileChange = async (event) => {
    const value = event.target.files[0];
    setFile(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !username || !password) {
        console.log("missing fields");
        return;
      }
      const response = await axios.post(
        `https://site--happycow--fhdp7f7ffy5p.code.run/user/signup`,
        {
          email: email,
          username: username,
          password: password,
        }
      );
      props.handleToken(response.data.token);
      const formData = new FormData();
      formData.append("picture", file);
      await axios.post(
        `https://site--happycow--fhdp7f7ffy5p.code.run/user/upload`,
        formData,
        {
          headers: {
            authorization: "Bearer " + response.data.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Error");
    }
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
              <label for="profile">Profile Picture</label>
              <input type="file" name="profile" onChange={handleFileChange} />
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
