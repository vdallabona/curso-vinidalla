export default class Produto {
    #id                 // o # significa que é uma propriedade privada
    #nome
    #preco

    constructor (id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get preco() {
        return this.#preco
    }
}