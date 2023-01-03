const AnotherComponent = () => {

    const handleClick = () => {
    console.log("clicou no botão!")
    };

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de click</button>
        </div>
    );
};

export default AnotherComponent;