import React from 'react';
import styles from './barResult.module.scss';

export default function BarResult() {
    return (
        <section className={styles.container}> 
            <div className={styles.content}>
                <h2 className={styles.header}>IP Adress</h2>
                <p className={styles.data}>192.234.456</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>Location</h2>
                <p className={styles.data}>BROOKLYN, NY 10001</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>Timezone</h2>
                <p className={styles.data}>UTC - 05:00</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>ISP</h2>
                <p className={styles.data}>SPACE X STARLINK</p>
            </div>
        </section>
    )
}
