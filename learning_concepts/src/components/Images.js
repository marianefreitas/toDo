import todo from "../assets/todo2.jpg";

const Images = () => {
    return(
        <div>
            {/* quando uso /nomeImagem esta linkando com a pasta public do projeto */}
            <img src="/todo1.jpg" alt="Caderno com blocos de letra e uma caneta vermelha"/>

            {/* quando a imagem esta em outro local precisa importar ela */}
            <img src={todo} alt="prancheta com to do list escrito"/>

        </div>
    )
}

export default Images;