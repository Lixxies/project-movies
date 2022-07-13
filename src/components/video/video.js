import styles from './video.module.css'

function Video(props) {
    if (props.showTrailer) {
        return (
            <div className={styles.inner}>
                <iframe title="Trailer" src={`${props.trailer}?autoplay=false`} allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe>
            </div>
        )
    }
    return
}

export default Video