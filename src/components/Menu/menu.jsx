import React from 'react';
import styles from './menu.module.scss'
import { Link } from "gatsby"


const Menu = ({ lang = 'es' }) => {
    let galeria = 'Galería';
    let galeriaUrl = '/galeria';
    let sobreMi = 'Sobre mi';
    let sobreMiUrl = '/sobre-mi';
    let poesia = 'Poesía';
    let poesiaUrl = '/poesia';
    let cv = 'CV';
    let cvUrl = '/cv';
    let contacto = 'Contacto';
    let contactoUrl = '/contacto';

    switch (lang) {
        case 'en':
            galeria = 'Photos';
            galeriaUrl = '/en/photos';
            sobreMi = 'About me';
            sobreMiUrl = '/en/about-me';
            poesia = 'Poetry';
            poesiaUrl = '/en/poetry';
            cv = 'CV';
            cvUrl = '/en/cv';
            contacto = 'Contact';
            contactoUrl = '/en/contact';
            break
        default:
            break
    }

    return (
        <div className={styles.menu_container}>
            <Link to={galeriaUrl}>
                <div className={styles.menu_box}>
                    <span>{galeria}</span>
                </div>
            </Link>
            <Link to={sobreMiUrl}>
            <div className={styles.menu_box}>
                <span>{sobreMi}</span>
            </div>
            </Link>
            <Link to={poesiaUrl}>
            <div className={styles.menu_box}>
                <span>{poesia}</span>
            </div>
            </Link>
            <Link to={cvUrl}>
            <div className={styles.menu_box}>
               <span>{cv}</span>
            </div>
            </Link>
            <Link to={contactoUrl}>
            <div className={styles.menu_box}>
                <span>{contacto}</span>
            </div>
            </Link>
        </div>
    )
}

export default Menu