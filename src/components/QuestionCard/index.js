import "./index.css";

function QuestionCard({ preguntaActual }) {

    return (
        <section className="section is-flex is-justify-content-center">
        <div className="box">

                <span><strong className="tag is-rounded is-info">{preguntaActual.id}</strong></span>
                <span><strong>{" "+preguntaActual.question}</strong></span>

            {
                preguntaActual.answers.map((opcion) => (
                    <div key={opcion.id}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                        <label htmlFor={`${opcion.id}`}>  {opcion.answer}</label>
                
                    </div>
                ))
            }
         </div>
                    <button className='button is-info is-outlined is-normal is-light'> Submit </button>  
       
        </section>
    )
}
export default QuestionCard;