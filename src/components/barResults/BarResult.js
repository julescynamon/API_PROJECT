import React, { useContext, useEffect } from 'react';
import IpContext from '../../context/IpContext';
import styles from './barResult.module.scss';
import Spinner from '../spinner/Spinner';

export default function BarResult() {

    const ipContext = useContext(IpContext);

    const { ipAddress, city, timeZone, isp, searchIP, isLoading } = ipContext;

    useEffect(() => {
        searchIP();
    }, [searchIP]);



    return (
        <section className={styles.container}> 
            <div className={styles.content}>
                <h2 className={styles.header}>IP Adress</h2>
                <p className={styles.data}>{isLoading ? ipAddress : <Spinner/>}</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>Location</h2>
                <p className={styles.data}>{isLoading ? city : <Spinner/>}</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>Timezone</h2>
                <p className={styles.data}>{isLoading ? timeZone : <Spinner/>}</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.header}>ISP</h2>
                <p className={styles.data}>{isLoading ? isp : <Spinner/>}</p>
            </div>
        </section>
    )
}
