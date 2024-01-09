'use client'
import { useState } from "react"





export default function contador(){
    
    let [valor, setValor] = useState(0)

    return (
        <>
            <h1>contador</h1>
            <div>Valor: {valor}</div>
            <button onClick={() => setValor(valor - 1)}>-</button>
            <button onClick={() => setValor(valor + 1)}>+</button>
        </>
    )
}