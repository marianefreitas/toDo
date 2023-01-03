const Container = ({children}) => {

    {/*Para trazermos o que esta dentro da tag do component usamos o children */}
    return (
        <div className="container">{children}</div>
    )
}

export default Container;