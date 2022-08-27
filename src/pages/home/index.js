import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    const onClickButton = (URL) => {
        navigate (URL);
    }
return(
    <><Button onClick={() => onClickButton('/game')} text='MetCamp Quiz' />
    <Button onClick={() => onClickButton('/miperfil')} text='Mi Perfil' /></>
)
}

export default Home;