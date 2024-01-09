import Lista from "../../../../components/Lista"
import Item from "../../../../components/Item"

export default function componenteComFilhos(){
    return (
        <>
            <Lista>
                <Item conteudo="Item"/>
                <Item conteudo="Item 2"/>
                <Item conteudo="Item 5473"/>
                <Item conteudo="Item 5473"/>
            </Lista>
        </>
    )
}