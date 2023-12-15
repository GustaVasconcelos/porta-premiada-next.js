import styles from '../styles/EntradaNumerica.module.css';

interface EntradaNumericaProps {
    texto: string,
    entrada: number,
    onChange: (novaEntrada: number) => void
}

const EntradaNumerica = (props: EntradaNumericaProps) => {
    const dec = () => props.onChange(props.entrada - 1);
    const inc = () => props.onChange(props.entrada + 1);

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.texto}>
                {props.texto}
            </span>
            <span className={styles.entrada}>
                {props.entrada}
            </span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}

export default EntradaNumerica;