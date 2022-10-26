import { useEffect, useState, UseState } from "react";
import api from "../../services/api";

//http://api.themoviedb.org/3/movie/now_playing?api_key=c3435cfe40aeb079689227d82bf921d3

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movies/now_playing", {
                params:{
                    api_key: "fb4ec63f1e40e69b15d5d57853feb7ac",
                    language: "pt-BR",
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            //console.log(response.data.results.slice(0,10));
        }

        loadFilmes();

    }, [])
    
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;