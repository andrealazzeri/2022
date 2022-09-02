import './styles.css';
function Button({text,onClick}) {

    return (
        <button onClick={onClick} className='button is-info is-large'> {text} </button>
    )
}

export default Button;