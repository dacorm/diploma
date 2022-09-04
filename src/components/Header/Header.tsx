import React from 'react';
import styles from './Header.module.css';
import person from '../../assets/images/person_FILL0_wght400_GRAD0_opsz48.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>

            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}><a href='#'>Фильмы</a></li>
                <li className={styles.listItem}><a href='#'>Сохраненные фильмы</a></li>
                <li className={styles.listItem}><a href='#'>
                    Аккаунт
                    <img src={person} alt="person" className={styles.person}/>
                </a></li>
            </ul>
        </header>
    );
};

export default Header;