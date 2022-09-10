import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../assets/images/loader.svg'

const Preloader = () => {

    return (
        <div className={styles.preloaderContainer}>
            <img src={preloader} alt="Загрузка"/>
        </div>
    );
};

export default Preloader;