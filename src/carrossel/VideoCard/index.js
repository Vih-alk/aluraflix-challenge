import styles from './VideoCard.module.css';

const VideoCard = ({capa, alt}) =>{
    return (
        <div className={styles.card}>
            <img src={capa} alt={alt} />
        </div>
    )
}

export default VideoCard