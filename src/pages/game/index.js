import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard"
import "./index.css";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game () {
    const [ loading, setLoading ] = useState(true)
    const [questions, setQuestions ] = useState([])

    useEffect(()=> {
        fetch(API_URL)
        .then(response => response.json())
        .then(
            data => {
                console.log(data)
                setQuestions(data)
            }
            )
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    },[])
    return(
    <div>
            <nav className="breadcrumb is-family-sans-serif has-text-weight-bold ml-3 is-size-5 mb-0" aria-label="breadcrumbs">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li className="is-active">
                    <Link to="/game">El juego</Link>
                </li>
    
            </ul>
            </nav>
            <section className="has-background-primary is-fullheight">  
            {
                loading && (
                
                    <h1 className="has-text-centered">Cargando...</h1>
                   
                )
            }
            {
               !loading && (
                     <form>
                    {
                        questions.map((pregunta) => {
                            return <div key={pregunta.id}>
                    <QuestionCard preguntaActual={pregunta}/>

                            </div>
                        })
                    }
                    </form>
                )
            }
    
            </section>
        
            <h1 className ="has-text-centered">     </h1>

    </div>

)
}

export default Game;