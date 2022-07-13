import './nav.css';

function Nav(props) {
    return (
        <header>
            <nav className={props.class}>
                <a href="/#">HOME</a>
                <span>FAQ</span>
            </nav>
        </header>
    )
}

export default Nav