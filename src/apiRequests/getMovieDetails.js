import axios from "axios";
// const key = process.env.API_KEY
const key = "f66c5c75";
const baseUrl = process.env.BASE_URL;
const baseURL = "http://www.omdbapi.com";
const title = "Mandalorian";
const year = "2019";

const getMovieDetails = async (searchParams) => {
  const response = await axios.get(
    `${baseURL}/?t=${searchParams.title}&y=${searchParams.year}&apiKey=${key}`
  );
  console.log("response", response);
  return response.data;
};

export { getMovieDetails };
