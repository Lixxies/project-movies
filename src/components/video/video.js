import './video.css'

function Video(props) {
    if (props.showTrailer) {
        return (
            <div className="innerVid">
                <iframe title="Trailer" src={`${props.trailer}?autoplay=false&width=${props.size}`} allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no" scrolling="no"></iframe>
            </div>
        )
    }
    return
}

export default Video