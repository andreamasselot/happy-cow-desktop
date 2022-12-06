import axios from "axios";
import { useState, useEffect } from "react";

const Community = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://site--happycow--fhdp7f7ffy5p.code.run/users`
          `http://localhost:3200/users`
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
      <div>
        <p>{}</p>
      </div>
    </>
  );
};
export default Community;
