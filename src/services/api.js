// Base da Url: http://api.themoviedb.org/3/
// http://api.themoviedb.org/3/movie/now_playing?api_key=c3435cfe40aeb079689227d82bf921d3

import axios from "axios";

const api =axios.create({
    baseURL: 'http://api.themoviedb.org/3/'
});

export default api;