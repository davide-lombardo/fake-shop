import React from 'react'
import styles from '../style/Error.module.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className={styles.banner}>
        <div className={styles.sectionTitle}>
            <h1>404</h1>
            <h4>not found</h4>
            <Link to='/' className={styles.btnPrimary}>
              back home
            </Link>
        </div>
    </div>
    )
}

export default Error
