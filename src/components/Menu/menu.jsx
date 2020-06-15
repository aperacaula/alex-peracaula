import React from 'react';
import styles from './menu.module.scss'
import { Link, navigate } from "gatsby"
import Slide from "react-reveal/Slide"


const Menu = ({ lan = 'es', slide, page }) => {
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
    let videos = 'Vídeos';
    let videosUrl = '/videos';

    switch (lan) {
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
            videos = 'Videos';
            videosUrl = '/en/videos';
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
                <Link to={videosUrl}>
                    <div className={styles.menu_box}>
                        {page === 'videos'
                            ? <span><strong>{videos}</strong></span>
                            : <span>{videos}</span>
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
                <div className={styles.menu_box}>
                    <select
                        value={lan !== 'es' ? `/${lan}` : '/'}
                        onChange={(e) => navigate(e.target.value)}
                    >
                        <option value="/">
                            ES
                        </option>
                        <option value="/en">
                            EN
                        </option>
                    </select>
                </div>
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
                <Link to={videosUrl}>
                    <div className={styles.menu_box}>
                        <span>{videos}</span>
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
                <div className={styles.menu_box}>
                    <select
                            value={lan !== 'es' ? `/${lan}` : '/'}
                            onChange={(e) => navigate(e.target.value)}
                    >
                        <option value="/">
                            ES
                        </option>
                        <option value="/en">
                            EN
                        </option>
                    </select>
                </div>
            </Slide>
        </div>
    )
}

export default Menu