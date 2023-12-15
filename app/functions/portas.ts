import PortaModelo from "../model/porta";

const criarPortas = (qtde: number, portaComPresente: number): PortaModelo[] => {
    return Array.from({ length: qtde}, (_, i) => {
        const numero = i + 1;

        const presente = numero === portaComPresente;

        return new PortaModelo(numero, presente);
    });
}

const atualizarPortas = (portas: PortaModelo[], portaModificada: PortaModelo) => {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero;

        if (igualAModificada) return portaModificada;

        return portaModificada.aberta ? portaAtual: portaAtual.desselecionar();
    });
}

export {
    criarPortas,
    atualizarPortas
}