import {Link} from 'react-router-dom';

function Miperfil(){

    return(
       <> 
     
     <nav className="breadcrumb is-family-sans-serif has-text-weight-bold ml-3 is-size-5 mb-0" aria-label="breadcrumbs">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li className="is-active">
                    <Link to="/miperfil">Mi perfil</Link>
                </li>
            </ul>
            </nav>
            <section className="has-background-primary hero is-fullheight is-flex is-justify-content-center">
        <h2 className="has-text-centered is-family-sans-serif is-size-3 is-desktop">Mi nombre es Andrea. Y quiero sumarme al mundo de la tecnología. Éste es el espacio destinado a mi descripción
            Luego ampliaré
        </h2>
     
     </section></>     
    )
    }
    export default Miperfil;