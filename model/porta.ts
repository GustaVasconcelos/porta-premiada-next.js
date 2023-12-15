class PortaModelo {
    #numero: number
    #presente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(
        numero: number, 
        presente = false, 
        selecionada = false, 
        aberta = false
    ) {
        this.#numero = numero
        this.#presente = presente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero;  
    }

    get presente() {
        return this.#presente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    get fechada() {
        return !this.#aberta;
    }

    desselecionar() {
        const selecionada = false;

        return new PortaModelo(
            this.numero, 
            this.presente, 
            selecionada, 
            this.aberta
        );
    }

    alternarSelecao() {
        const selecionada = !this.selecionada;

        return new PortaModelo(
            this.numero, 
            this.presente, 
            selecionada, 
            this.aberta
        );
    }

    abrir() {
        const aberta = true;

        return new PortaModelo(
            this.numero, 
            this.presente, 
            this.selecionada, 
            aberta
        );
    }
}

export default PortaModelo;