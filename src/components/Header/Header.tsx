import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import person from '../../assets/images/person_FILL0_wght400_GRAD0_opsz48.svg';

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(!isPopupOpen);
        document.body.style.overflow = "hidden"
    }

    useEffect(() => {
        if (!isPopupOpen) {
            document.body.style.overflow = "auto"
        }
    }, [isPopupOpen])

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                S
            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}><div className={styles.hamburgerLines} onClick={openPopup}>
                    <span className={`${styles.line} ${styles.line1} ${isPopupOpen ? styles.line1Opened : null}`}/>
                    <span className={`${styles.line} ${styles.line2} ${isPopupOpen ? styles.line2Opened : null}`}/>
                    <span className={`${styles.line} ${styles.line3} ${isPopupOpen ? styles.line3Opened : null}`}/>
                </div></li>
                <li className={styles.listItem}><a href='#' className={styles.listLink}>Фильмы</a></li>
                <li className={styles.listItem}><a href='#' className={styles.listLink}>Сохраненные фильмы</a></li>
                <li className={styles.listItem}><a href='#' className={styles.listLink}>
                    Аккаунт
                    <img src={person} alt="person" className={styles.person}/>
                </a></li>
            </ul>
            {isPopupOpen && (<div className={styles.popup}>
                <ul className={styles.listPopup}>
                    <li className={styles.listItemPopup}><a href='#' className={styles.listLink}>Фильмы</a></li>
                    <li className={styles.listItemPopup}><a href='#' className={styles.listLink}>Сохраненные фильмы</a></li>
                </ul>
                <div>
                    <a href='#' className={styles.accountPopup}>
                        Аккаунт
                        <img src={person} alt="person" className={styles.person}/>
                    </a>
                </div>
            </div>)}
            {isPopupOpen && (<div className={styles.overlay}/>)}
        </header>
    );
};

export default Header;