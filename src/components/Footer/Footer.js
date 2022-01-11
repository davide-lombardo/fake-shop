import styles from '../Footer/Footer.module.scss'
import logo from '../../images/logoSmall.png';

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/'>
                <img 
                    src={logo} 
                    alt='logo'
                    className={styles.footerLogo}
                />
            </Link>

            <div className="text-light text-center p-3">
                © 2022 Copyright: Davide Lombardo
                <a className={styles.linkText} href="https://github.com/davide-lombardo">Github Profile</a>
            </div>
        </footer>
    )
}

export default Footer
