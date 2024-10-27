import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h5>Information</h5>
          <ul className={styles.linkList}>
            <li><a href="#home" className={styles.link}>Home</a></li>
            <li><a href="#services" className={styles.link}>Services</a></li>
            <li><a href="#about" className={styles.link}>About</a></li>
            <li><a href="#contact" className={styles.link}>Contact</a></li>
            <li><a href="#contact" className={styles.link}>Help</a></li>

          </ul>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><a href="#home" className={styles.link}>F.A.Q</a></li>
            <li><a href="#services" className={styles.link}>Testemonal</a></li>
            <li><a href="#about" className={styles.link}>Acount</a></li>
            <li><a href="#contact" className={styles.link}>Security</a></li>
            <li><a href="#" className={styles.link}>Settings</a></li>

          </ul>
        </div>
        <div className={styles.section}>
          <h4>Follow Us</h4>
          <ul className={styles.socialList}>
            <li><a href="https://facebook.com" className={styles.link}>Facebook</a></li>
            <li><a href="https://twitter.com" className={styles.link}>Twitter</a></li>
            <li><a href="https://instagram.com" className={styles.link}>Instagram</a></li>
            <li><a href="https://linkdin.com" className={styles.link}>Linkdin</a></li>

          </ul>
        </div>
      </div>
      <p className={styles.copyright}>© 2024  All rights reserved.</p>
    </footer>
  );
};

export default Footer;
