import styles from "./integracao2.module.css" //esse é melhor para quando um css for não global, o módulo evita congflito de classes alterando o nomes deles no fim do processo

export default function integracao2 (){
    return (
        <div id={styles.integracao2}>
            <div className={styles.vermelha}>texto 1</div>
            <div className={styles.azul}>texto 2</div>
            <div className={styles.branca}>texto 3</div>
        </div>
    )
}