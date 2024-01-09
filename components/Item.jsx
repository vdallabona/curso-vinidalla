export default function Lista(props) {
    return (
        <li style={{
            borderColor: "#000",
            border: "1px",
            borderTopStyle: "solid",
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
        }}>{props.conteudo}</li>
    )
}