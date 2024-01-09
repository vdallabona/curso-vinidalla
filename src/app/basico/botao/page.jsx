'use client'             //informar o react que essa página estana operando no lado do cliente e fazendo requisições para o servidor. Necessário para páginas interativas

function acao1() {
    console.log("acao1")
}

export default function botao() {
    
    function acao2() {
        console.log("acao2")
    }

    function acao5(e){
        console.log(e)              //recebe informaçãoes do click, se estava seguranto alguma tecla quando clicou etc...
    }

    return(
        <>
            <button onClick={acao1}>click</button>
            <button onClick={acao2}>click 2</button>
            <button onClick={function (){
                console.log("acao3")
            }}>click 3</button>
            <button onClick={() => console.log("acao4")}>
                Click 4
            </button>
            <button onClick={acao5}>
                Click 5
            </button>
            <button onClick={e => acao5(e.altKey) /*Retorna True se clicou segurando o Alt esquerdo*/}>
                Click 5 v2
            </button>
            <input type="text" onChange={e => console.log(e.target.value)} />
        </>
    )
}