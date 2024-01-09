function gerarLista(final = 10) {
  const lista = []
  for(let i = 1; i <= final; i++){
    lista.push(<span>{i},</span>)
  }
  return lista
}

export default function lista() {
  return (
    // posso declarar um valor na função para definir até onde a lista vai
    <div>
      {gerarLista(20)}
    </div>
  )
}
