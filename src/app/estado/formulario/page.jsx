'use client'

import { useState } from "react"

export default function formulario() {
    const[valor, setValor] = useState('inicial')

    function alterarInput(){
        setValor(valor + "!")
    }
    return(

        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} //aplicar em tempo real as alterações do usuário
                onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>!</button>
        </div>
    )
}