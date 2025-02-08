import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "822d8a61d4msh4997cdfff36d33ep1cc304jsnfc9845df3879",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
