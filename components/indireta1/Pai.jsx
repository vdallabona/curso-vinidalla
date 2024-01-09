'use client'             //informar o react que essa página estana operando no lado do cliente e fazendo requisições para o servidor. Necessário para páginas interativas


import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo(param1, param2, param3){
        console.log(param1, param2, param3)
    }

    return (
        <>
            <Filho funcao={falarComigo} /> {/*Envia a funcão falarComigo para o filho*/}
        </>
    )
}