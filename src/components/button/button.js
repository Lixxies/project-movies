import styles from './button.module.css';

function Button(props) {
    return (
        <div className={styles.inner}>
            <button type="button" className={styles.button} onClick={() => props.onClick()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.txt}
            </button>
        </div>
    )
}

export default Button