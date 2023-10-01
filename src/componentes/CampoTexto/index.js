import styles from './CampoTexto.module.css';

const CampoTexto = ( texto ) => {
    return (
        <form className={styles.texto}>
             {texto.title}
        </form>
    )
}

export default CampoTexto