import axios from "axios";
// const key = process.env.API_KEY
const key = "435cd0abcba689087ebf87066efb867f"; //TODO TMDB api_key need to be moved to the .env

const baseURL = "https://api.themoviedb.org/3/movie/popular";

const getPopular = async () => {
  const response = await axios.get(`${baseURL}/?api_key=${key}`);
  console.log("response", response);
  return response.data.results;
};

export default getPopular;
