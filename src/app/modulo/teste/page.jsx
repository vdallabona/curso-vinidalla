import Padrao, {Comp1, Comp2, Comp4, Comp5, Comp6} from "../../../../components/modulo/funcionais"

// Caso seja exportado por padrão não precisa seguir a convensão de nome da função, pode chamá-la do que quiser quando for importá-la. Só pode ter uma função exportada por padrão.

export default function teste() {
    return (
        <div>
            <Comp1 />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 />
        </div>
    )
}