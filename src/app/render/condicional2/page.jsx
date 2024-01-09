import If from "../../../../components/if";

export default function condicional1() {
    const numero = 97
    return(
        <>
            <If teste={numero % 2 === 0}>
                <h1>O número {numero} é par</h1>
            </If>
            <If teste={numero % 2 === 1}>
                <h1>O número {numero} é ímpar</h1>
            </If>
        </>
    )
}