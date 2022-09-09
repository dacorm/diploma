import React from 'react';
import styles from './Search.module.css';
import search from '../../assets/images/searchIcon.svg'

const Search = () => {
    return (
        <div className={styles.inputContainer}>
            <input type="text" placeholder={'Фильм'} className={styles.searchInput}/>
            <div className={styles.buttonContainer}>
                <button type='submit' className={styles.button}><img src={search} alt="Поиск" className={styles.searchIcon}/></button>
            </div>
            <div className={styles.checkboxContainer}>
                <label className={styles.checkboxIos}>
                    <input type="checkbox" />
                    <span className={styles.checkboxIosSwitch} />
                </label>
                <p className={styles.checkboxText}>Короткометражки</p>
            </div>
        </div>
    );
};

export default Search;