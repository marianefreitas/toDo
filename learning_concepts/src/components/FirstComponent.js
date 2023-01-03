import AnotherComponent from "./AnotherComponent";

function FirstComponent() {

    // comentario

    const name = "Mariane";

    return (
        <div className= "firstcomponent">
            { /* comentário em JSX */}
            <p>Primeiro Componente!</p>
            {2+2}
            <p>Nome: {name}</p>
            <AnotherComponent/>
        </div>
    );
}

export default FirstComponent;