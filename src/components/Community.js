import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Community = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/users`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="users-container container">
        {data.map((elem) => {
          return (
            <div className="users">
              <p>{elem.account.username}</p>
              <img
                src={elem.account.avatar.secure_url}
                alt="users avatars"
                className="users-avatar"
              />
            </div>
          );
        })}
      </div>
      <div className="users-link">
        {!props.token && <Link to={"/signup"}> Create your account ! </Link>}
      </div>
    </>
  );
};
export default Community;
