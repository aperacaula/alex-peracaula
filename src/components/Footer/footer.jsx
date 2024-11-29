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
                <div className={styles.imdb}>
                    <a href="https://www.imdb.com/name/nm12064554/?ref_=fn_al_nm_1" target="blank"><img src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Alt_Rectangle_Black._CB443386324_.png" alt="imdb" /></a>
                </div>
            </div>
        </div>
    </footer>
    )
}


export default Footer;