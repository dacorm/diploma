import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.date}>
                © {new Date().getFullYear()}
            </div>
            <a href="https://github.com/dacorm" target='_blank' className={styles.link}>Github</a>
        </footer>
    );
};

export default Footer;