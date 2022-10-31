import axios from "axios";

// Base da Url: https://api.themoviedb.org/3/
// movie/now_playing?api_key=fb4ec63f1e40e69b15d5d57853feb7ac

const api =axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;