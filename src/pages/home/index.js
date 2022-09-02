import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import background from "../../assets/dibujo.jpg"

function Home () {
    const navigate = useNavigate();

    const onClickButton = (URL) => {
        navigate (URL);
    }
return(
    <section className="hero is-medium is-fullheight" style={{backgroundImage: `url(${background})`}}>
        <div className="hero-body">
            <div className="container has-text-centered">
    <><Button onClick={() => onClickButton('/game')} text='MetCamp Quiz' />
    <Button onClick={() => onClickButton('/miperfil')} text='Mi Perfil' /></>
    </div>
    </div>
    </section>
)
}

export default Home;