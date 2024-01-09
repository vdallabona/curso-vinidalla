'use client'             //informar o react que essa página estana operando no lado do cliente e fazendo requisições para o servidor. Necessário para páginas interativas

export default function Filho(props) {

    console.log(props.funcao)
    return (
        <>
            <h1>filho</h1>
            <button onClick={props.funcao}>Falar com o pai 1</button>
            <button onClick={
                () => props.funcao("passei no enem", "uhuuul", 10)
            }>
                Falar com o pai 2
            </button>
        </>
    )
}