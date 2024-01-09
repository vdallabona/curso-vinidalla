export default function Lista(props) {
    return (
        <div style={{
            textAlign: "center",
        }}>
            <h1 style={{
            color: "#740505",
        }}>Lista de algo</h1>
            <ul style={{
            listStyle: "none",
            padding: "0%",
            borderColor: "#000",
            border: "1px",
            borderBottomStyle: "solid",
        }}>
                {props.children}
            </ul>
        </div>
    )
}