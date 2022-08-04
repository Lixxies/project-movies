import './nav.css';

function Nav(props) {
    return (
        <header>
            <nav className={props.class}>
                <a href="/#">HOME</a>
                <span tabIndex="0">FAQ</span>
            </nav>
        </header>
    )
}

export default Nav