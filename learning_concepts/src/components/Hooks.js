import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 30; 
    const [novaIdade, setNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 31;
        console.log(idade)
    }

    const changeNewAge = () => {
        setNovaIdade(45);
        console.log(novaIdade)
    }

    {/*executa algo baseado em algumas condições, sempre que o estado é alterado ele é executado */}

    useEffect(() => {console.log("Use effect!") })

    return(
        <div>
            {/*Muda idade , mas não atualiza na tela */}
            <p>Idade : {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>

            {/* Com useState podemos gerenciar valores e re-renderizar o componente  */}
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
        </div>
    )
}

export default Hooks;