//Packages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { getMovieDetails } from "./apiRequests/getMovieDetails";

//Components
import {
  Movie,
  Movies,
  MyList,
  TVShows,
  Home,
  Header,
  Footer,
  Downloads,
  More,
} from "./components";

import "./App.css";

function App() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const response = async () => {
      const data = await getMovieDetails({
        title: "Mandalorian",
        year: "2019",
      });
      setDetails(data);
    };

    response();
  }, []);

  console.log("movieDetails", details);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
