import styles from '../styles/Formulario.module.css';
import Cartao from "../components/Cartao";
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';
import Link from 'next/link';

const Formulario = () => {
    const [qtdePortas, setQtdePortas] = useState(3);
    const [comPresente, setComPresente] = useState(1);
    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica 
                        entrada={qtdePortas} 
                        texto="Quantidades de Portas?" 
                        onChange={novaQtde => setQtdePortas(novaQtde)}
                    />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica 
                        entrada={comPresente} 
                        texto="Porta com presente?" 
                        onChange={novaQtde => setComPresente(novaQtde)}
                    />
                </Cartao>
                <Cartao bgcolor="#28a085">
                    <Link className={styles.link} href={`/jogo/${qtdePortas}/${comPresente}`}>
                        <h2>
                            Iniciar
                        </h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}

export default Formulario;