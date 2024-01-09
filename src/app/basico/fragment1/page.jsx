import React from "react"
export default function fragment() {
  return (  //Não pode colocar dois elementos HTML adjacentes sem o fragment. Tbm pode colocar os dois elementos dentro de uma DIv que atinge o mesmo proposito de considerar como um unico elemento
    <React.Fragment>
      <h1>Título</h1>
      <h2>Subtítulo</h2>
    </React.Fragment>
  )
}

