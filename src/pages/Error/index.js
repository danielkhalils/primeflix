import { Link } from 'react-router-dom'
import './error.css';

function Error(){
    return(
        <div className="not-found">
             <h1>401</h1>
             <h2>Página não encontrada!</h2>
             <Link to="/">Vejá todos os filmes</Link>
        </div>
    )
}

export default Error