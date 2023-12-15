import styles from "../styles/Porta.module.css";
import PortaModelo from '../model/porta';
import Presente from '../components/Presente';

interface PortaProps {
    entrada: PortaModelo,
    onChange: (novaPorta: PortaModelo) => void
}

const Porta = (props: PortaProps) => {
    const porta = props.entrada;
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';
    
    const alternarSelecao = () => props.onChange(porta.alternarSelecao());

    const abrir = (e:any) => {
        e.stopPropagation();

        props.onChange(porta.abrir());
    }

    const renderizarPorta = () => {
        return (     
            <div className={styles.porta}>
                <div className={styles.numero}>
                    {porta.numero}
                </div>
                <div className={styles.macaneta} onClick={abrir}>                
                </div>
            </div>
        )
    }
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {
                    porta.fechada ? 
                    renderizarPorta() : 
                    porta.presente ? <Presente/> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}

export default Porta;