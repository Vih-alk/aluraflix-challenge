import Botao from '../Button';
import styles from './Header.module.css';

const Cabecalho = () => {
    return(
       <header className={styles.cabecalho}>
            <a href='http://localhost:3000/'><img src='..\..\asserts\image 1.png' alt='Logo Aluraflix' /></a>
            <Botao title={"Novo Vídeo"} />
        </header>
    )
}

export default Cabecalho