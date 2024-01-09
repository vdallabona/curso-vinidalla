'use client'
import { useState } from "react"

export default function mouse(){
    // react Hooks
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}