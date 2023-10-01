import styles from './Banner.module.css';

const Banner = () => {
    return (
    <>
        <section className={styles.banner}>
            <div className={styles.fundo}>
                <div className={styles.texto}>
                    <h2>Front End</h2>
                    <h3>SEO com React</h3>
                    <p>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.</p>
                </div>
                <div className={styles.imagem}>
                <img src='../../asserts/player.png'  alt='Player'/>
                </div>
            </div>
        </section>

        {/* <section className={styles.banner}>
            <div></div>
            <div>
                <h2>Front End</h2>
                <h3>SEO com React</h3>
                <p>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.</p>
            </div>
            <div>
            <img src='../../asserts/player.png' />
            </div>
        </section> */}
    </>
    )
}

export default Banner