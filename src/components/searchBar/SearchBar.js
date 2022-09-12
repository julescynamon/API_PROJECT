import React, { useState, useContext } from 'react';
import Arrow from './icon-arrow.svg';
import styles from './searchBar.module.scss';
import IpContext from '../../context/IpContext';

export default function SearchBar() {

    const [inputText, setInputText] = useState('');
    const ipCtx = useContext(IpContext);

    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        ipCtx.searchIP(inputText);
    };

    return (
        <section className={styles.searchWrapper}>
            <div className={styles.searchBar}>
                <form onSubmit={submitHandler}>
                    <input 
                        type="text" 
                        placeholder="Search for any IP adress or domain"
                        onChange={inputHandler}
                        value={inputText}
                        />
                </form>
                <button 
                    className={styles.btnSearch}
                    onClick={submitHandler}
                    aria-label="Search"
                    >
                    <img src={Arrow} alt="arrow" />
                </button>
            </div>

        </section>
    )
}
