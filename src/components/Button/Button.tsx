import React from 'react';
import styles from './Button.module.css';

const Button = () => {
    return (
        <button className={styles.button}>
            <p className={styles.buttonText}>Ещё</p>
        </button>
    );
};

export default Button;