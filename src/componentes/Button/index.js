import styles from './Button.module.css';

const Botao = (botao) => {
    return (
        <button 
            className={styles.botao} 
            // onClick= {botao.onClick}
            >
             {botao.title}
        </button>
    )
}

export default Botao