import React from 'react';
import styles from './menu.module.scss'
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"


const Menu = ({ lang = 'es', slide, page }) => {
    let galeria = 'Galería';
    let galeriaUrl = '/galeria';
    let sobreMi = 'Sobre mí';
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

    if (!slide) {
        return (
            <div className={styles.menu_container}>
                <Link to={galeriaUrl}>
                    <div className={styles.menu_box}>
                        {page === 'galeria'
                            ? <span><strong>{galeria}</strong></span>
                            : <span>{galeria}</span>
                        }
                    </div>
                </Link>
                <Link to={sobreMiUrl}>
                    <div className={styles.menu_box}>
                        {page === 'sobremi'
                            ? <span><strong>{sobreMi}</strong></span>
                            : <span>{sobreMi}</span>
                        }
                    </div>
                </Link>
                <Link to={poesiaUrl}>
                    <div className={styles.menu_box}>
                        {page === 'poesia'
                            ? <span><strong>{poesia}</strong></span>
                            : <span>{poesia}</span>
                        }
                    </div>
                </Link>
                <Link to={cvUrl}>
                    <div className={styles.menu_box}>
                        {page === 'cv'
                            ? <span><strong>{cv}</strong></span>
                            : <span>{cv}</span>
                        }
                    </div>
                </Link>
                <Link to={contactoUrl}>
                    <div className={styles.menu_box}>
                        {page === 'contacto'
                            ? <span><strong>{contacto}</strong></span>
                            : <span>{contacto}</span>
                        }
                    </div>
                </Link>
            </div>
        )
    }
    return (
        <div className={styles.menu_container}>
            <Slide right>
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
            </Slide>
        </div>
    )
}

export default Menu