export default function repeticao1(){
  const listaAprovados = [
    'joão',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura',
  ]

  function renderLista() {
   return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>) // faz o mesmo que a função comentada a baixo
  }

  return (
    <>
      <ul>
        {renderLista()}
      </ul>
    </>
  )
}


//function renderLista() {
//  const itens = []
//
//  for (let i = 0; i < listaAprovados.length; i++) {
//    itens.push(<li key={i}>{listaAprovados[i]}</li>) //o elemento chave foi mencionado para evitar uma mensagem de aviso, porém ela nunca apareceu para mim. Pode ser por conta da minha versão ser mais atual. Pesquisar mais depois
//  }
// return itens
//}



//a baixo terá outra maneira de fazer a função =>

// function renderizarLista(){
//   return listaAprovados.map(function(nome, i){
//      return <li key={i}> {nome}</li>
//    })
// }
