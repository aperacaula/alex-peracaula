import React from 'react';
import styles from './footer.module.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
    <footer>
        <div className={styles.first_container}>
            © {new Date().getFullYear()}, by
            {` `}
            Àlex Peracaula Ruiz
            <div className={styles.logos_container}>
                <div className={styles.mail}>
                    <a href="mailto:aperacaularuiz@gmail.com" target="blank"><MailOutlineIcon /></a>
                </div>
                <div className={styles.instagram}>
                    <a href="https://www.instagram.com/aperacaula" target="blank"><InstagramIcon /></a>
                </div>
                <div className={styles.linkedin}>
                    <a href="https://www.linkedin.com/in/alex-peracaula-9b4b1b11a/" target="blank"><LinkedInIcon /></a>
                </div>
            </div>
        </div>
    </footer>
    )
}


export default Footer;