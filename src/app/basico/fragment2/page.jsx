import Titulo from '../../../../components/Titulo'
export function fragment() {
  return (                           //nesse caso não precisa importar o fragmento por connta da maneira que usamos o fragment ( <> </> )
    <>
      <h1>Título</h1>
      <h2>Subtítulo</h2>
    </>
  )
}

export default function usandoTitulo() {
  return (                           //Aqui eu estou usando um componente criado em outra página. Como não pode declarar Default duas vezes só um dos exemplos nessa página funciona
    <div>
      <Titulo principal="Página de cadastro" secundario="incluir e excluir"/>
      <Titulo principal="pagina de login" secundario="informe a senha" pequeno/>
    </div>
  )
}