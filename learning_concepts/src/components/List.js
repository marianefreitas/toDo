const List = () => {

    const items = [
        {
            id: 1,
            nome:"Mariane"
        },
        {
            id: 2,
            nome:"Gabriela"
        },
        {
            id: 3,
            nome:"Christian"
        }
    ]
    return (
        <div>

            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.nome}
                </p>
                ))}
        </div>
    )
}

export default List;