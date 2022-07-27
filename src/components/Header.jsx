import styles from '../styles/Header.module.css'
import Logo from '../public/to-do-logo.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo}/>
        </header>
    )
}