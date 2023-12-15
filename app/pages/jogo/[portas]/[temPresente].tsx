import Porta from "../../../components/Porta";
import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import { criarPortas, atualizarPortas } from '../../../functions/portas'
import Link from "next/link";
import { useRouter } from "next/router";

const Jogo = () => {
    const router = useRouter();

    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState([]);

    useEffect(() => {
        const portas = +router.query.portas;

        const temPresente = +router.query.temPresente;

        setPortas(criarPortas(portas, temPresente));
    }, [router?.query]);

    useEffect(() => {
        const portas = +router.query.portas;

        const temPresente = +router.query.temPresente;

        const qtdePortasValidas =  portas >= 3 && portas <= 50;

        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdePortasValidas && temPresenteValido);
    },[portas])

    const renderizarPortas = () => {
        return valido && portas.map(porta => (
            <Porta 
                key={porta.numero} 
                entrada={porta} 
                onChange={novaPorta => {
                    setPortas(atualizarPortas(portas, novaPorta));
                }}
            />
        ));
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>
                        Reiniciar o jogo
                    </button>
                </Link>
            </div>
            <div className={styles.portas}>
                {valido?
                    renderizarPortas() : <h1>Valores inválido</h1>
                }
            </div>
        </div>
    )
}

export default Jogo;