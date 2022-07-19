import styles from './top250List.module.css';

function Top250List(props) {
    const data = props.data
    const renderItems = data.map((item) =>
        <div key={item.id} className={styles.inner}>
            <div className={styles.image}>
                <img src={item.image} alt="Poster" />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <span className={styles.rank}>{item.rank}</span>
                    {` - ${item.title}`}
                </div>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.rating}>{item.imDbRating}</div>
            </div>
            
        </div> 
    )

    return (
        <div className={styles.outer}>{renderItems}</div>
    )
}

export default Top250List