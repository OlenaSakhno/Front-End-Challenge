import getPopular from "../apiRequests/getPopular";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import PageTitle from "./PageTitle";

const Home = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const response = async () => {
      const data = await getPopular();
      setPopular(data);
    };

    response();
  }, []);

  return (
    <>
      <PageTitle title="Home Page" />
      {popular.map((m) => (
        <Movie
          title={m.title}
          imgUrl={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
          description={m.overview}
        />
      ))}
    </>
  );
};

export default Home;
