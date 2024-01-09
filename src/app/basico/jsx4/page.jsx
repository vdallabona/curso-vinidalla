// JSX

export default function jsx4() {
  const subtitulo = "Estou no JavaScript!"

  return (
    <div>
      <h1>integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(10, 37)}</h4>
      <h5>{entre(9, 1, 10)}</h5>
    </div>
  )
}

function entre(valor, min, max){
  if(valor >= min && valor <= max){
    return "yes"
  } else {
    return "no "
  }
}