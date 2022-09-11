import React from 'react';
import Arrow from './icon-arrow.svg';
import styles from './searchBar.module.scss';

export default function SearchBar() {
    return (
        <section className={styles.searchWrapper}>
            <div className={styles.searchBar}>
                <form action="">
                    <input type="text" placeholder="Search for any IP adress or domain"/>
                </form>
                <button className={styles.btnSearch}>
                    <img src={Arrow} alt="arrow" />
                </button>
            </div>

        </section>
    )
}
